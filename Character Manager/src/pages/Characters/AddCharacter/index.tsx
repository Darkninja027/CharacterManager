import { Languages, LanguagesEnum, PlayerCharacterInput } from "@types";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Form from "../../../components/Form";
import Button from "../../../components/formInputs/Button";
import Input from "../../../components/formInputs/Input";
import Select from "../../../components/formInputs/Select";
import PageHeader from "../../../components/PageHeader";
import { useGetAllLanguagesQuery } from "../../Languages/languages.generated";
import { useCreateCharacterMutation } from "../characters.generated";




export default function AddCharacter() {

    const methods = useForm<PlayerCharacterInput>()

    const createCharacterMutation = useCreateCharacterMutation()
    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()
    // allLanguages?.sort((a: Languages, b: Languages) => a.name < b.name ? -1 : 1)
    const { control } = methods
    //id not being set properly
    const { fields, append, remove, update } = useFieldArray({
        control,
        keyName: "languagesId",
        name: "languages"

    })
    const lanaguageList = allLanguages?.map((lang) => {
        return { id: lang.id, name: lang.name }
    })

    const OnSubmit: SubmitHandler<PlayerCharacterInput> = data => {
        data.level = Number(data.level)
        data.languages.forEach(lang => {
            lang.id = +lang.id
        })
        console.log(data)
        createCharacterMutation.mutate({ character: data })
    }
    return (
        <>
            <PageHeader title="Add Character" backButton />
            <div>
                <Form methods={methods} onSubmit={OnSubmit}>
                    <Input methods={methods} name="name" label="Name" />
                    <Input methods={methods} name="level" label="Level" type="number" max={20} min={1} />
                    <label>Languages</label>
                    <Button label="+" type="button" onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        append({ id: 0 })
                    }} />
                    <div className="flex flex-col gap-5">
                        {fields.map((field, index) => (
                            <>
                                <Select key={field.id} methods={methods} name={`languages.${index}.id`} label="Language" options={lanaguageList} />
                            </>
                        ))}
                    </div>

                    <Button label="Submit" />

                </Form>
            </div>
        </>
    )
}