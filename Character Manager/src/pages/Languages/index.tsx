import { LanguageInput, Languages } from "@types"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAlert } from "../../common/util/Alerts"
import { pascalCamelSplit } from "../../common/util/stringFormatting"
import Form from "../../components/Form"
import Button from "../../components/formInputs/Button"
import Input from "../../components/formInputs/Input"
import PageHeader from "../../components/PageHeader"
import { useAddLanguageMutation, useGetAllLanguagesQuery } from "./languages.generated"

export default function LanguagesPage() {
    const alert = useAlert()
    // const [showElemaent, setShowElement] = useState<boolean>(false)
    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()
    const addLanguage = useAddLanguageMutation({
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

    return (
        <p
            onMouseLeave={() => setShowElement(false)}
            onMouseOver={() => { setShowElement(true) }}
            key={`Language_${props.language.id}`}
            className="w-full flex col-span-2 bg-slate-200 font-bold justify-center items-centerpx-2 py-1 border rounded-full"
        >
            {showElemaent ? "num" : `${pascalCamelSplit(props.language.name)}`}
        </p>
    )
}