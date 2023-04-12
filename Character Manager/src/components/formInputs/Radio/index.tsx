import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { FieldValues, Path, UseFormGetValues, UseFormReturn } from "react-hook-form"
import { formatString } from "../../../common/util/stringFormatting"

type RadioProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: Path<T>,
    methods: UseFormReturn<T>,
}

export default function Radio<T extends FieldValues>({ name, value, methods, required, checked, onChange }: RadioProps<T>): JSX.Element {
    const formState = methods ? methods.getFieldState(name) : null
    const formValue = methods ? methods.watch(name) : value
    return (
        <div className="flex items-center gap-2">

            <input className="" {...methods.register(name, { onChange, required })} type="radio" value={value} />
            <label>{formatString(value as string)}</label>

        </div>
    )
}