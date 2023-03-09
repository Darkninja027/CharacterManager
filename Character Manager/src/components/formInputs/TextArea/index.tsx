import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type TextAreaProps<T extends FieldValues> = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label: string
    name: Path<T>
    methods: UseFormReturn<T>
}


export default function TextArea<T extends FieldValues>({ label, methods, name, cols = 30, rows = 10, required }: TextAreaProps<T>) {
    return (
        <label className="flex flex-col">
            {label ?? <span>{label} {required ?? <span>*</span>}</span>}
            <textarea {...methods.register(name, { required })} className="resize-none" cols={cols} rows={rows}></textarea>
        </label>
    )
}