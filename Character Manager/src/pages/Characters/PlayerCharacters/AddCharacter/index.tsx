import { AlignmentEnum, PlayerCharacterInput, SizeEnum } from "@types";
import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { characterDefaultValues, updateModifiers, getLevelExperience } from "../../../../common/util/characterUtil";
import { formatString } from "../../../../common/util/stringFormatting";
import { ArmorClass } from "../../../../components/ArmorClass";
import Card from "../../../../components/Card";
import Form from "../../../../components/Form";
import Attribute from "../../../../components/formInputs/Attribute";
import Button from "../../../../components/formInputs/Button";
import CharactersTab from "../../../../components/formInputs/FormTabs/CharactersTab";
import Input from "../../../../components/formInputs/Input";
import TextArea from "../../../../components/formInputs/TextArea";
import { Page } from "../../../../components/Page";
import SquareInput from "../../../../components/SquareInput";
import { Tabs } from "../../../../components/Tabs";
import { useGetAllLanguagesQuery } from "../../../Languages/languages.generated";
import { useCreateCharacterMutation } from "../../characters.generated";




export default function AddCharacter() {

    const methods = useForm<PlayerCharacterInput>({
        defaultValues: characterDefaultValues
    })

    const createCharacterMutation = useCreateCharacterMutation()
    const { data: { allLanguages } = {} } = useGetAllLanguagesQuery()

    const { control, watch, setValue } = methods
    const [milestone] = watch(['milestone'])

    useEffect(() => {
        setValue("milestone", 'false' as any)
    }, [])

    useEffect(() => {
        const subscription = watch(() => {
            updateModifiers(methods)
        });
        return () => subscription.unsubscribe();
    }, []);

    const { fields: languages, append: addLanguage, remove: removeLanguage } = useFieldArray({
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



    const tabs = {
        "Actions": <p>Actions</p>,
        "Character": <CharactersTab />,
        "Notes": <p>notes</p>,
    }
    return (
        <Page title="Add Character" backButton="..">
            <Form methods={methods} onSubmit={OnSubmit}>
                <div className="flex w-full grow items-center gap-3">

                    {/* <Input className="h-12 grow" methods={methods} name="name" label="Character Name" /> */}
                    {/* <div className="w-9/12 bg-gray-300 p-2 rounded-lg">
                            {showInfo && <div className="grid grid-cols-3 grid-rows-2 gap-3">
                                <Input methods={methods} name="level" label="Level" type="number" max={20} min={1} onChange={(e) => {
                                    setValue("experience", getLevelExperience(parseInt(e.target.value)))
                                }} />
                                <section>

                                    <label>Milestone</label>
                                    <div className="flex gap-5 items-center bg-white h-min p-1 border-black border rounded-lg">
                                        <Radio methods={methods} name="milestone" value={'true'} />
                                        <Radio methods={methods} name="milestone" value={'false'} />
                                    </div>
                                </section>
                                <p><Input methods={methods} name="experience" label="Experience" type="number" disabled={isTruthy(milestone)} /></p>
                                <p>Race</p>
                                <p>Subrace</p>
                                <p>Background</p>
                            </div>}
                            {showBio && <div className="grid grid-cols-5 grid-rows-2 gap-3">
                                <Input methods={methods} name="weight" label="Weight" type="number" />
                                <Input methods={methods} name="height" label="Height" />
                                <Input methods={methods} name="hair" label="Hair" />
                                <Input methods={methods} name="eyes" label="Eyes" />
                                <Input methods={methods} name="skin" label="Skin" />
                                <Input methods={methods} name="age" label="Age" type="number" />
                                <Select methods={methods} name="gender" options={genders} label="Gender" />
                                <Select methods={methods} name="alignment" options={alignments} label="Alignment" />
                                <Select methods={methods} name="size" options={sizes} label="Size" />
                            </div>}
                            <div className="flex gap-10">
                                <span onClick={() => {
                                    setInfo(!showInfo)
                                    setBio(!showBio)
                                }}>Info</span>
                                <span onClick={() => {
                                    setInfo(!showInfo)
                                    setBio(!showBio)
                                }}>Bio</span>
                            </div>
                        </div> */}
                </div>
                <div className="flex mt-2 gap-2">

                    <div className="flex w-2.5/12">
                        <div className="flex flex-col w-full justify-between gap-5">

                            <div className="flex flex-col gap-5">
                                <Attribute attributes="strength" methods={methods} />
                                <Attribute attributes="dexterity" methods={methods} />
                                <Attribute attributes="constitution" methods={methods} />
                                <Attribute attributes="intelligence" methods={methods} />
                                <Attribute attributes="wisdom" methods={methods} />
                                <Attribute attributes="charisma" methods={methods} />
                            </div>
                            <Button content="Submit" />

                        </div>
                    </div>
                    <Card className="w-2/12 p-2 flex flex-col gap-2">
                        <div className="flex w-full gap-2 justify-evenly">
                            <SquareInput methods={methods} name="maxHealth" title="Max HP" />
                            <SquareInput methods={methods} name="health" title="HP" />
                            <SquareInput methods={methods} name="temporaryHealth" title="Temp HP" />

                        </div>
                        <div className="flex w-full gap-2 justify-evenly">
                            <ArmorClass methods={methods} />
                            <SquareInput methods={methods} name="initiative" title="Initiative" />
                        </div>
                        <Input methods={methods} name="proficiencyBonus" label="Proficiency Bonus" type="number" />
                        <Input methods={methods} name="initiative" label="init" type="number" />
                        <div className="flex justify-between">
                            <p>Walk Speed</p>
                            <p>Fly Speed</p>
                            <p>Swim Speed</p>
                        </div>
                        <TextArea methods={methods} name="personalityTraits" label="Personality Traits" />
                        <TextArea methods={methods} name="ideals" label="Ideals" />
                        <TextArea methods={methods} name="bonds" label="Bonds" />
                        <TextArea methods={methods} name="flaws" label="Flaws" />
                        {/* <Accordian heading={<section className="flex items-center gap-3 w-full">
                            <header>Languages</header>
                            <span onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addLanguage({ id: 1 })
                            }} className="w-6 h-6 rounded-full border border-black"><AddIcon /></span>
                        </section>}>
                            <section className="flex flex-wrap w-full justify-between">
                                {languages.map((field, index) => (
                                    <label key={`languages-${field.languagesId}`} className="flex items-center gap-3">
                                        <Select key={field.id} methods={methods} name={`languages.${index}.id`} options={lanaguageList} />
                                        <span className="hover:cursor-pointer" onClick={() => {
                                            removeLanguage(index)
                                        }}><DeleteIcon /></span>
                                    </label>
                                ))}
                            </section>
                        </Accordian> */}
                    </Card>
                    <Card className="w-5/12 p-2 grow-0 flex flex-col gap-2">
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-10">
                            <Input methods={methods} name="name" label="Character Name" />
                            <Input methods={methods} name="level" label="Level" type="number" max={20} min={1} onChange={(e) => {
                                setValue("experience", getLevelExperience(parseInt(e.target.value)))
                            }} />
                            <Input methods={methods} name="experience" label="Experience" type="number" disabled={isTruthy(milestone)} />
                            <Input unattached name="" label="Race" />
                            <Input unattached name="" label="Class" />
                            <Input unattached name="" label="Subclass" />
                        </div>
                        <Tabs tabs={tabs} />
                    </Card>
                </div>
            </Form>
        </Page>
    )
}

function isTruthy(value: unknown) {
    return value === 'true'
}



