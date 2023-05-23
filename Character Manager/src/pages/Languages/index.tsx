import { LanguageInput, Languages } from "@types"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AddIcon } from "../../common/icons/SvgList"
import { useAlert } from "../../common/util/Alerts"
import Form from "../../components/Form"
import Button from "../../components/formInputs/Button"
import Input from "../../components/formInputs/Input"
import LanguageCard from "../../components/LanguageCard"
import PageHeader from "../../components/PageHeader"
import { useCreateLanguageMutation, useGetAllLanguagesQuery } from "./languages.generated"
import { Page } from "../../components/Page"



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

    return (
        <Page title="Languages" buttonText="Add Language" icon={<AddIcon />} onClick={(e) => {
            e.preventDefault()
            setForm(!form)
        }}>
            {isLoading && (
                <p>Loading...</p>
            )}

            {form && (
                <Form methods={methods} onSubmit={onSubmit} className="mb-3">
                    <div className="flex gap-1 items-end">
                        <Input methods={methods} label="Language name" name="name" />
                        <Button content="Add" />
                    </div>
                </Form>
            )}

            {allLanguages && <div className="grid grid-cols-12 grid-flow-row justify-items-center gap-2">
                {allLanguages && allLanguages.map(lang => {

                    return (
                        <LanguageCard language={lang} />
                    )
                })}

            </div>}

        </Page>


    )
}



