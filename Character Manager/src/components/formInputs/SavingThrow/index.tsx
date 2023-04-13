import { PlayerCharacterInput } from "@types"
import { ChangeEvent, useEffect } from "react"
import { FieldValues, Path, PathValue, UseFormGetValues, UseFormReturn, UseFormSetValue, useWatch } from "react-hook-form"
import { Tooltip } from "react-tooltip"
import { setSkillModifier, updateModifiers } from "../../../common/util/characterUtil"
import { formatString, pascalCamelSplit } from "../../../common/util/stringFormatting"
import Checkbox from "../Checkbox"
import Input from "../Input"

type SavingProps<T extends FieldValues> = {
    methods: UseFormReturn<T>
    index: number
}

export default function SavingThrows({ methods, index }: SavingProps<PlayerCharacterInput>) {
    var skillName = methods.getValues(`savingThrows.${index}.name`)
    return (
        <label className="flex items-center">
            <div className="flex items-center w-48">
                <Checkbox id={`save${index}`} methods={methods} name={`savingThrows.${index}.proficient`} />
                <p>{formatString(pascalCamelSplit(skillName).replace("Saving Throw", ""))}</p>
            </div>
            <Input className="w-10" methods={methods} name={`savingThrows.${index}.modifier`} label="" />
            <Tooltip anchorSelect={`#save${index}`} content="Proficiency" />
        </label>
    )
}

