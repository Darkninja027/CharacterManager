import { Languages, LanguagesEnum } from "@types";
import { useState } from "react";
import { DeleteIcon } from "../../common/icons/SvgList";
import { useAlert } from "../../common/util/Alerts";
import { pascalCamelSplit } from "../../common/util/stringFormatting";
import { useDeleteLanguageMutation } from "../../pages/Languages/languages.generated";

type CardProps = {
    language: Languages
}

export default function LanguageCard({ language }: CardProps) {
    const [showElemaent, setShowElement] = useState<boolean>(false)
    const deleteLanguageMutation = useDeleteLanguageMutation({
        onSuccess: () => {
            alert.show('success', "Language deleted")
        }
    })
    const alert = useAlert();
    function inEnum(language: string) {
        language = pascalCamelSplit(language).replace(" ", "_").toUpperCase()
        return Object.values(LanguagesEnum).includes(language as LanguagesEnum)

    }

    var isInEnum = inEnum(language.name) && showElemaent

    return (
        <p
            onMouseLeave={() => setShowElement(false)}
            onMouseOver={() => { setShowElement(true) }}
            key={`Language_${language.id}`}
            className="w-full flex col-span-2 bg-slate-200 font-bold justify-center items-centerpx-2 py-1 border rounded-full"
        >
            {showElemaent ? <span className="hover:cursor-pointer" onClick={(e) => {
                e.preventDefault();
                if (isInEnum) {
                    alert.show('error', `Cannot delete default language ${language.name}`)
                    return;
                }
                deleteLanguageMutation.mutate({ id: language.id })
            }}><DeleteIcon /></span> : `${pascalCamelSplit(language.name)}`}
        </p>
    )
}