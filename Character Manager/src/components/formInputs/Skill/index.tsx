import { PlayerCharacterInput } from "@types"
import { FieldValues, Path, PathValue, UseFormGetValues, UseFormReturn, UseFormSetValue } from "react-hook-form"
import { Tooltip } from "react-tooltip"
import { formatString, pascalCamelSplit } from "../../../common/util/stringFormatting"
import Checkbox from "../Checkbox"
import Input from "../Input"

type SkillProps<T extends FieldValues> = {
    methods: UseFormReturn<T>
    index: number
}

export default function Skills({ methods, index }: SkillProps<PlayerCharacterInput>) {
    var skillName = methods.getValues(`skills.${index}.name`)
    const { getValues, setValue } = methods
    const prof = 2
    return (
        <label className="flex items-center">
            <div className="flex items-center w-48">
                <Checkbox id={`proficient${index}`} methods={methods} name={`skills.${index}.proficient`} onChange={(e) => {
                    if (e.target.checked) {
                        setSkillModifier(setValue, getValues, `skills.${index}.modifier`, e.target.checked, prof, false)
                    }
                    else {
                        setSkillModifier(setValue, getValues, `skills.${index}.modifier`, e.target.checked, prof, getValues(`skills.${index}.expertise`))
                        setValue(`skills.${index}.expertise`, false)
                    }
                }} />
                <Checkbox id={`expertise${index}`} methods={methods} name={`skills.${index}.expertise`} onChange={(e) => {
                    if (e.target.checked) {
                        setValue(`skills.${index}.proficient`, true)
                        setSkillModifier(setValue, getValues, `skills.${index}.modifier`, e.target.checked, prof, true)
                    }
                    else {
                        setSkillModifier(setValue, getValues, `skills.${index}.modifier`, e.target.checked, prof, false)
                    }
                }} />
                <p>{formatString(pascalCamelSplit(skillName))}</p>
            </div>
            <Input className="w-10" methods={methods} name={`skills.${index}.modifier`} label="" />
            <Tooltip anchorSelect={`#expertise${index}`} content="Expertise" />
            <Tooltip anchorSelect={`#proficient${index}`} content="Proficiency" />
        </label>
    )
}

function setSkillModifier<T extends FieldValues>(setValue: UseFormSetValue<T>, getValues: UseFormGetValues<T>, name: Path<T>, checked: boolean, bonus: PathValue<T, Path<T>>, expertise: boolean) {
    bonus = (expertise ? bonus as number * 2 : bonus) as PathValue<T, Path<T>>
    if (checked) {
        setValue(name, bonus)
    }
    else {
        bonus = getValues(name) as number - (bonus as number) as PathValue<T, Path<T>>
        setValue(name, bonus)
    }
}