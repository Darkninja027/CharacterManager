import { PlayerCharacterInput } from "@types"
import { ChangeEvent, useEffect } from "react"
import { FieldValues, Path, PathValue, UseFormGetValues, UseFormReturn, UseFormSetValue, useWatch } from "react-hook-form"
import { Tooltip } from "react-tooltip"
import { displayAttribute, setSkillModifier, updateModifiers } from "../../../common/util/characterUtil"
import { formatString, pascalCamelSplit } from "../../../common/util/stringFormatting"
import Checkbox from "../Checkbox"
import Input from "../Input"

type SkillProps<T extends FieldValues> = {
    methods: UseFormReturn<T>
    index: number
}

export default function Skills({ methods, index }: SkillProps<PlayerCharacterInput>) {
    var skillName = methods.getValues(`skills.${index}.name`)
    var skillAttribute = methods.getValues(`skills.${index}.attribute`)
    return (
        <label className="flex items-center">
            <div className="flex items-center w-60">
                <Checkbox id={`proficient${index}`} methods={methods} name={`skills.${index}.proficient`} onClick={(e: any) => {
                    if (!e.target.checked) {
                        methods.setValue(`skills.${index}.expertise`, false)
                    }
                }} />
                <Checkbox id={`expertise${index}`} methods={methods} name={`skills.${index}.expertise`} onClick={(e: any) => {
                    if (e.target.checked) {
                        methods.setValue(`skills.${index}.proficient`, true)
                    }
                }} />
                <p>{formatString(pascalCamelSplit(skillName))} ({displayAttribute(skillAttribute)})</p>
            </div>
            <Input className="w-10" methods={methods} name={`skills.${index}.modifier`} label="" />
            <Tooltip anchorSelect={`#expertise${index}`} content="Expertise" />
            <Tooltip anchorSelect={`#proficient${index}`} content="Proficiency" />
        </label>
    )
}

