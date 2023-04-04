import { Languages, LanguagesEnum, PlayerCharacterInput } from "@types";
import { useFieldArray, useForm } from "react-hook-form";
import Form from "../../../components/Form";
import Button from "../../../components/formInputs/Button";
import Input from "../../../components/formInputs/Input";
import Select from "../../../components/formInputs/Select";
import PageHeader from "../../../components/PageHeader";
import { useGetAllLanguagesQuery } from "../../Languages/languages.generated";




export default function AddCharacter() {

    const methods = useForm<PlayerCharacterInput>()
    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()
    allLanguages?.sort((a: Languages, b: Languages) => a.name < b.name ? -1 : 1)
    const { control } = methods
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "languages"
    })

    const lanaguageList = allLanguages?.map((lang) => {
        return { id: lang.id, name: lang.name }
    })
    return (
        <>
            <PageHeader title="Add Character" backButton />
            <div>
                <Form methods={methods}>
                    <Input methods={methods} name="name" label="Name" />
                    <label>Languages</label>
                    <Button label="+" type="button" onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        append({ id: 0, name: LanguagesEnum.Common })
                    }} />
                    <div className="flex flex-col gap-5">
                        {fields.map(field => (
                            <Select methods={methods} name="languages" label="Language" options={lanaguageList} />
                        ))}
                    </div>

                </Form>
            </div>
        </>
    )
}