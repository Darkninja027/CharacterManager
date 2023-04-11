import { AlignmentEnum, Languages, LanguagesEnum, PlayerCharacterInput, SizeEnum } from "@types";
import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { AddIcon, ArmorIcon, DeleteIcon } from "../../../common/icons/SvgList";
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
            maxHealth: 10,
            health: 10,
            armorClass: 10,
            experience: getLevelExperience(1),
            milestone: false,
            languages: [
                { id: 1 }
            ],
            alignment: AlignmentEnum.TrueNeutral,
            strength: 10,
            strengthModifier: 0,
            dexterity: 10,
            dexterityModifier: 0,
            constitution: 10,
            constitutionModifier: 0,
            intelligence: 10,
            intelligenceModifier: 0,
            wisdom: 10,
            wisdomModifier: 0,
            charisma: 10,
            charismaModifier: 0,
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
    const [milestone, level, experience, maxHealth] = watch(['milestone', 'level', 'experience', 'maxHealth'])

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
            lang.id = Number(lang.id)
        })

        data.strength = Number(data.strength)
        data.dexterity = Number(data.dexterity)
        data.constitution = Number(data.constitution)
        data.intelligence = Number(data.intelligence)
        data.wisdom = Number(data.wisdom)
        data.charisma = Number(data.charisma)

        data.strengthModifier = Number(data.strengthModifier)
        data.dexterityModifier = Number(data.dexterityModifier)
        data.constitutionModifier = Number(data.constitutionModifier)
        data.intelligenceModifier = Number(data.intelligenceModifier)
        data.wisdomModifier = Number(data.wisdomModifier)
        data.charismaModifier = Number(data.charismaModifier)

        data.health = Number(data.health)
        data.maxHealth = Number(data.maxHealth)
        data.armorClass = Number(data.armorClass)
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
                        setValue("experience", getLevelExperience(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="armorClass" label="Armor Class" type="number" min={0} />
                    <Input methods={methods} name="maxHealth" label="Max Health" type="number" min={0} />
                    <Input methods={methods} name="health" label="Health" type="number" min={0} max={maxHealth} />
                    <Input methods={methods} name="experience" label="Experience" type="number" disabled={isTruthy(milestone)} />

                    <Input methods={methods} name="strength" label="Strength" type="number" min={1} max={30} onChange={(e) => {
                        setValue("strengthModifier", getSkillModifier(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="strengthModifier" label="" type="number" min={-5} max={10} />
                    <Input methods={methods} name="dexterity" label="Dexterity" type="number" min={1} max={30} onChange={(e) => {
                        setValue("dexterityModifier", getSkillModifier(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="dexterityModifier" label="" type="number" min={-5} max={10} />
                    <Input methods={methods} name="constitution" label="Consitution" type="number" min={1} max={30} onChange={(e) => {
                        setValue("constitutionModifier", getSkillModifier(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="constitutionModifier" label="" type="number" min={-5} max={10} />
                    <Input methods={methods} name="intelligence" label="Intelligence" type="number" min={1} max={30} onChange={(e) => {
                        setValue("intelligenceModifier", getSkillModifier(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="intelligenceModifier" label="" type="number" min={-5} max={10} />
                    <Input methods={methods} name="wisdom" label="Wisdom" type="number" min={1} max={30} onChange={(e) => {
                        setValue("wisdomModifier", getSkillModifier(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="wisdomModifier" label="" type="number" min={-5} max={10} />
                    <Input methods={methods} name="charisma" label="Charisma" type="number" min={1} max={30} onChange={(e) => {
                        setValue("charismaModifier", getSkillModifier(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="charismaModifier" label="" type="number" min={-5} max={10} />
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

function getSkillModifier(skillValue: number) {
    switch (skillValue) {
        case 1:
            return -5;
        case 2:
        case 3:
            return -4;
        case 4:
        case 5:
            return -3;
        case 6:
        case 7:
            return -2;
        case 8:
        case 9:
            return -1;
        case 10:
        case 11:
            return 0;
        case 12:
        case 13:
            return 1;
        case 14:
        case 15:
            return 2;
        case 16:
        case 17:
            return 3;
        case 18:
        case 19:
            return 4;
        case 20:
        case 21:
            return 5;
        case 22:
        case 23:
            return 6;
        case 24:
        case 25:
            return 7;
        case 26:
        case 27:
            return 8;
        case 28:
        case 29:
            return 9;
        case 30:
            return 10;
        default:
            return 0

    }
}