import { AlignmentEnum, PlayerCharacterInput, SizeEnum } from "@types";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { characterDefaultValues, getSkillModifier, updateModifiers } from "../../../common/util/characterUtil";
import { formatString } from "../../../common/util/stringFormatting";
import Accordian from "../../../components/Accordian";
import Form from "../../../components/Form";
import Button from "../../../components/formInputs/Button";
import Input from "../../../components/formInputs/Input";
import SavingThrows from "../../../components/formInputs/SavingThrow";
import Skills from "../../../components/formInputs/Skill";
import PageHeader from "../../../components/PageHeader";
import { useGetAllLanguagesQuery } from "../../Languages/languages.generated";
import { useCreateCharacterMutation } from "../characters.generated";




export default function AddCharacter() {

    const methods = useForm<PlayerCharacterInput>({
        defaultValues: characterDefaultValues
    })
    const alignments = Object.values(AlignmentEnum).map((align, index) => {
        return { id: align, name: formatString(align) }
    })

    const sizes = Object.values(SizeEnum).reverse().map((size, index) => {
        return { id: size, name: formatString(size) }
    })

    const createCharacterMutation = useCreateCharacterMutation()
    const { isLoading, data: { allLanguages } = {} } = useGetAllLanguagesQuery()

    const { control, watch, setValue, getValues } = methods
    const [milestone, level, experience, maxHealth] = watch(['milestone', 'level', 'experience', 'maxHealth'])
    const modifierWatch = watch(["strength"])

    useEffect(() => {
        setValue("milestone", 'false' as any)
    }, [])

    useEffect(() => {
        const subscription = watch(() => {
            updateModifiers(methods)
        });
        return () => subscription.unsubscribe();
    }, [modifierWatch]);

    useFieldArray({
        control,
        keyName: "languagesId",
        name: "languages"

    })
    const { fields: skills } = useFieldArray({
        control,
        keyName: "skillId",
        name: "skills"
    })
    const { fields: savingThrows } = useFieldArray({
        control,
        keyName: "savingThrowId",
        name: "savingThrows"
    })
    const lanaguageList = allLanguages?.map((lang) => {
        return { id: lang.id, name: lang.name }
    })

    const OnSubmit: SubmitHandler<PlayerCharacterInput> = data => {
        data.level = Number(data.level)
        data.age = Number(data.age)
        data.proficiencyBonus = Number(data.proficiencyBonus)
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
                    {/* <Input methods={methods} name="level" label="Level" type="number" max={20} min={1} onChange={(e) => {
                        setValue("experience", getLevelExperience(parseInt(e.target.value)))
                    }} />
                    <Input methods={methods} name="armorClass" label="Armor Class" type="number" min={0} />
                    <Input methods={methods} name="maxHealth" label="Max Health" type="number" min={0} />
                    <Input methods={methods} name="health" label="Health" type="number" min={0} max={maxHealth} />
                    <Input methods={methods} name="experience" label="Experience" type="number" disabled={isTruthy(milestone)} /> */}

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
                    {/* <div>
                        <label>Milestone</label>
                        <Radio methods={methods} name="milestone" value={'true'} />
                        <Radio methods={methods} name="milestone" value={'false'} />
                    </div> */}
                    {/* <Input methods={methods} name="age" label="Age" type="number" />
                    <Select methods={methods} name="gender" options={genders} label="Gender" />
                    <Select methods={methods} name="alignment" options={alignments} label="Alignment" />
                    <Select methods={methods} name="size" options={sizes} label="Size" /> */}
                    <Input methods={methods} name="proficiencyBonus" label="Proficiency Bonus" type="number" />
                    <Accordian heading={
                        <section>
                            <header>Skills</header>
                        </section>
                    }>
                        <div className="flex gap-3">
                            <section>
                                {skills.map((skill, index) => {
                                    return (
                                        <Skills methods={methods} index={index} />
                                    )
                                })}
                            </section>
                            <section>
                                {savingThrows.map((skill, index) => {
                                    return (
                                        <SavingThrows methods={methods} index={index} />
                                    )
                                })}
                            </section>
                        </div>
                    </Accordian>
                    {/* <Accordian heading={<section className="flex items-center gap-3">
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
                    <Input methods={methods} name="skin" label="skin" /> */}

                    <Button label="Submit" />

                </Form>
            </div>
        </>
    )
}

function isTruthy(value: unknown) {
    return value === 'true'
}



