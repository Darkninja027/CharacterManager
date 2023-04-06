import { AlignmentEnum, Languages, LanguagesEnum, PlayerCharacterInput, SizeEnum } from "@types";
import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { AddIcon, DeleteIcon } from "../../../common/icons/SvgList";
import { enumStringConversion } from "../../../common/util/stringFormatting";
import Accordian from "../../../components/Accordian";
import Form from "../../../components/Form";
import Button from "../../../components/formInputs/Button";
import Input from "../../../components/formInputs/Input";
import Radio from "../../../components/formInputs/Radio";
import Select from "../../../components/formInputs/Select";
import TextArea from "../../../components/formInputs/TextArea";
import PageHeader from "../../../components/PageHeader";
import { useGetAllLanguagesQuery } from "../../Languages/languages.generated";
import { useCreateCharacterMutation } from "../characters.generated";




export default function AddCharacter() {

    const methods = useForm<PlayerCharacterInput>({
        defaultValues: {
            level: 1,
            experience: getLevelExperience(1),
            milestone: false,
            languages: [
                { id: 1 }
            ],
            alignment: AlignmentEnum.TrueNeutral
        }
    })
    const alignments = Object.values(AlignmentEnum).map((align, index) => {
        return { id: align, name: enumStringConversion(align) }
    })

    const sizes = Object.values(SizeEnum).reverse().map((size, index) => {
        return { id: size, name: enumStringConversion(size) }
    })

    const createCharacterMutation = useCreateCharacterMutation()
    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()

    const { control, watch, setValue } = methods
    const [milestone, level, experience] = watch(['milestone', 'level', 'experience'])

    useEffect(() => {
        setValue("milestone", 'false' as any)
    }, [])

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
        data.age = Number(data.age)
        data.weight = Number(data.weight)
        data.milestone = isTruthy(data.milestone)
        data.languages.forEach(lang => {
            lang.id = +lang.id
        })
        console.log(data)
        createCharacterMutation.mutate({ character: data })
    }

    const genders = [
        { id: "male", name: "Male" },
        { id: "female", name: "Female" },
        { id: "other", name: "Other" },
    ]
    return (
        <>
            <PageHeader title="Add Character" backButton />
            <div>
                <Form methods={methods} onSubmit={OnSubmit}>
                    <Input methods={methods} name="name" label="Name" />
                    <Input methods={methods} name="level" label="Level" type="number" max={20} min={1} onChange={(e) => {
                        console.log(e.target.value)
                        setValue("experience", getLevelExperience(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="experience" label="Experience" type="number" disabled={isTruthy(milestone)} />
                    <div>
                        <label>Milestone</label>
                        <Radio methods={methods} name="milestone" value={'true'} />
                        <Radio methods={methods} name="milestone" value={'false'} />
                    </div>
                    <Input methods={methods} name="age" label="Age" type="number" />
                    <Select methods={methods} name="gender" options={genders} label="Gender" />
                    <Select methods={methods} name="alignment" options={alignments} label="Alignment" />
                    <Select methods={methods} name="size" options={sizes} label="Size" />
                    <Accordian heading={<section className="flex items-center gap-3">
                        <header>Languages</header>
                        <span onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            append({ id: 0 })
                        }} className="w-6 h-6 rounded-full border border-black"><AddIcon /></span>
                    </section>}>
                        <section className="flex flex-col gap-5">
                            {fields.map((field, index) => (
                                <label className="flex items-center gap-3">
                                    <Select key={field.id} methods={methods} name={`languages.${index}.id`} options={lanaguageList} />
                                    <span className="hover:cursor-pointer" onClick={() => {
                                        remove(index)
                                    }}><DeleteIcon /></span>
                                </label>
                            ))}
                        </section>
                    </Accordian>
                    <TextArea methods={methods} name="personalityTraits" label="Personality Traits" />
                    <TextArea methods={methods} name="ideals" label="Ideals" />
                    <TextArea methods={methods} name="bonds" label="Bonds" />
                    <TextArea methods={methods} name="flaws" label="Flaws" />
                    <Input methods={methods} name="weight" label="Weight" type="number" />
                    <Input methods={methods} name="height" label="Height" />
                    <Input methods={methods} name="hair" label="Hair" />
                    <Input methods={methods} name="eyes" label="Eyes" />
                    <Input methods={methods} name="skin" label="skin" />

                    <Button label="Submit" />

                </Form>
            </div>
        </>
    )
}

enum LevelExp {
    Level1 = 0,
    Level2 = 300,
    Level3 = 900,
    Level4 = 2700,
    Level5 = 6500,
    Level6 = 14000,
    Level7 = 23000,
    Level8 = 34000,
    Level9 = 48000,
    Level10 = 64000,
    Level11 = 85000,
    Level12 = 100000,
    Level13 = 120000,
    Level14 = 140000,
    Level15 = 165000,
    Level16 = 195000,
    Level17 = 225000,
    Level18 = 265000,
    Level19 = 305000,
    Level20 = 355000
}

function getLevelExperience(level: number) {
    if (level == 1)
        return LevelExp.Level1
    if (level == 2)
        return LevelExp.Level2
    if (level == 3)
        return LevelExp.Level3
    if (level == 4)
        return LevelExp.Level4
    if (level == 5)
        return LevelExp.Level5
    if (level == 6)
        return LevelExp.Level6
    if (level == 7)
        return LevelExp.Level7
    if (level == 8)
        return LevelExp.Level8
    if (level == 9)
        return LevelExp.Level9
    if (level == 10)
        return LevelExp.Level10
    if (level == 11)
        return LevelExp.Level11
    if (level == 12)
        return LevelExp.Level12
    if (level == 13)
        return LevelExp.Level13
    if (level == 14)
        return LevelExp.Level14
    if (level == 15)
        return LevelExp.Level15
    if (level == 16)
        return LevelExp.Level16
    if (level == 17)
        return LevelExp.Level17
    if (level == 18)
        return LevelExp.Level18
    if (level == 19)
        return LevelExp.Level19
    if (level == 20)
        return LevelExp.Level20
}

function isTruthy(value: unknown) {
    return value === 'true'

}