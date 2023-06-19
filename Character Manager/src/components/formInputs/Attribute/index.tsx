import { PcSkillsInput, PlayerCharacterInput } from "@types"
import { Path, UseFormReturn } from "react-hook-form"
import { Tooltip } from "react-tooltip"
import { displayAttribute, getSkillModifier } from "../../../common/util/characterUtil"
import { DiceType, RollDice } from "../../../common/util/Rolling"
import { pascalCamelSplit } from "../../../common/util/stringFormatting"
import Checkbox from "../Checkbox"
import Input from "../Input"

type AttributeProps = {
    methods: UseFormReturn<PlayerCharacterInput>
    attributes: "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma"
}
type Entry = {
    index: number
    data: PcSkillsInput
}
export default function Attribute({ methods, attributes }: AttributeProps) {
    const skillsList = methods.getValues("skills")
    const savesList = methods.getValues("savingThrows")
    const skills = getSkillsForAttribute(skillsList, attributes)
    const save = getSavingThrowForAttribute(savesList, attributes)
    const modifierPath = attributes + "Modifier"

    return (
        <div className="flex w-full">
            <div className="flex flex-col items-center">
                <div className="bg-gray-400 w-24 h-24  border-y-4 border-l-4 p-1  border-black border-double rounded-l-lg gap-1">

                    <label className="h-full flex flex-col">
                        <p className="w-full text-center text-sm">{displayAttribute(attributes).toUpperCase()}</p>
                        <Input methods={methods} name={attributes as Path<PlayerCharacterInput>} styling={"ATTRIBUTE"} type="number" min={1} max={30} onChange={(e) => {
                            methods.setValue(modifierPath as Path<PlayerCharacterInput>, getSkillModifier(parseInt(e.target.value)))
                        }} />
                    </label>

                </div>
                <Input methods={methods} name={modifierPath as Path<PlayerCharacterInput>} styling="MODIFIER" type="number" defaultValue={0} />
            </div>

            <div className="border-4 border-black border-double p-2 rounded-r-lg rounded-bl-lg w-full bg-gray-400 min-h-[150px] min-w-52">
                <label className="flex items-center justify-between gap-3 w-full">
                    <div className="flex items-center gap-2">
                        <Input methods={methods} name={`savingThrows.${save?.index}.modifier`} styling="SKILL" type="number" />
                        <p className="text-sm hover:text-dnd-primary-100 hover:underline hover:cursor-pointer" onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            let savingRoll = RollDice(DiceType.D20, 2)
                            console.log(attributes, savingRoll.rolls)
                        }}>{formatSavingThrow(save?.data.name, attributes)}</p>
                    </div>
                    <div className="flex">
                        <Checkbox id={`save${save?.index}`} methods={methods} name={`savingThrows.${save?.index}.proficient`} />
                        <Tooltip anchorSelect={`#save${save?.index}`} content="Proficiency" />
                    </div>
                </label>
                {skills.map((skill, index) => {
                    return (
                        <label key={`${skill.data.name}.${index}`} className="flex items-center justify-between gap-3 w-full">
                            <div className="flex items-center gap-2">
                                <Input methods={methods as UseFormReturn<PlayerCharacterInput>} name={`skills.${skill?.index}.modifier`} styling="SKILL" type="number" />
                                <p className="text-sm  hover:text-dnd-primary-100 hover:underline hover:cursor-pointer" onClick={(e) => {
                                    let modifier = methods.getValues(`skills.${skill?.index}.modifier`)
                                    e.preventDefault()
                                    e.stopPropagation()
                                    let SkillCheck = RollDice(DiceType.D20, 2, modifier)
                                    console.log(pascalCamelSplit(skill.data.name), SkillCheck.rolls, "modifier: " + modifier)
                                }}>{pascalCamelSplit(skill.data.name)}</p>
                            </div>
                            <div className="flex">
                                <Checkbox id={`proficient${skill?.index}`} methods={methods as UseFormReturn<PlayerCharacterInput>} name={`skills.${skill?.index}.proficient`} />
                                <Checkbox id={`expertise${skill?.index}`} methods={methods as UseFormReturn<PlayerCharacterInput>} name={`skills.${skill?.index}.expertise`} />
                                <Tooltip anchorSelect={`#expertise${skill?.index}`} content="Expertise" />
                                <Tooltip anchorSelect={`#proficient${skill?.index}`} content="Proficiency" />
                            </div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

function getSkillsForAttribute(skills: PcSkillsInput[], attribute: string) {
    let listToReturn: Entry[] = []
    skills.forEach((skill, index) => {
        if (skill.attribute == attribute) {
            listToReturn.push({ index: index, data: skill })
        }
    })
    return listToReturn
}
function getSavingThrowForAttribute(saves: PcSkillsInput[], attribute: string) {
    let listToReturn: Entry[] = []
    saves.forEach((save, index) => {
        if (save.attribute == attribute) {
            listToReturn.push({ index: index, data: save })
        }
    })
    return listToReturn[0]
}

function formatSavingThrow(value: string, attribute: string) {
    return pascalCamelSplit(value.replace(attribute, ''))
}