import { LanguageInput, Languages, LanguagesEnum } from "@types"
import { isLeafType } from "graphql"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { DeleteIcon } from "../../common/icons/SvgList"
import { useAlert } from "../../common/util/Alerts"
import { pascalCamelSplit } from "../../common/util/stringFormatting"
import Form from "../../components/Form"
import Button from "../../components/formInputs/Button"
import Input from "../../components/formInputs/Input"
import PageHeader from "../../components/PageHeader"
import { useCreateLanguageMutation, useDeleteLanguageMutation, useGetAllLanguagesQuery } from "./languages.generated"



export default function LanguagesPage() {
    const alert = useAlert()

    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()
    const addLanguage = useCreateLanguageMutation({
        onSuccess: () => {
            alert.show("success", "Language created")
        }
    })
    const [form, setForm] = useState<boolean>(false)
    const methods = useForm<LanguageInput>();

    const onSubmit: SubmitHandler<LanguageInput> = (language) => {
        addLanguage.mutate({ language })
    }
    allLanguages?.sort((a: Languages, b: Languages) => a.name < b.name ? -1 : 1)

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <>
            <PageHeader title="Languages" label={form ? "Cancel" : "Add Language"} onClick={(e) => {
                e.preventDefault()
                setForm(!form)
            }} />
            {form && (
                <Form methods={methods} onSubmit={onSubmit} className="mb-3">
                    <div className="flex gap-1 items-end">
                        <Input methods={methods} label="Language name" name="name" />
                        <Button label="Add" />
                    </div>
                </Form>
            )}
            <div className="grid grid-cols-12 grid-flow-row justify-items-center gap-2">
                {allLanguages && allLanguages.map(lang => {

                    return (
                        <LanguageCard language={lang} />
                    )
                })}

            </div>

        </>


    )
}

function LanguageCard(props: { language: Languages }) {
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

    var isInEnum = inEnum(props.language.name) && showElemaent

    return (
        <p
            onMouseLeave={() => setShowElement(false)}
            onMouseOver={() => { setShowElement(true) }}
            key={`Language_${props.language.id}`}
            className="w-full flex col-span-2 bg-slate-200 font-bold justify-center items-centerpx-2 py-1 border rounded-full"
        >
            {showElemaent ? <span className="hover:cursor-pointer" onClick={(e) => {
                e.preventDefault();
                if (isInEnum) {
                    alert.show('error', `Cannot delete default language ${props.language.name}`)
                    return;
                }
                deleteLanguageMutation.mutate({ id: props.language.id })
            }}><DeleteIcon /></span> : `${pascalCamelSplit(props.language.name)}`}
        </p>
    )
}

