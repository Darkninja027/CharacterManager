import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type TextAreaProps<T extends FieldValues> = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label: string
    name: Path<T>
    methods: UseFormReturn<T>
}


export default function TextArea<T extends FieldValues>({ label, methods, name, cols = 30, rows = 5, required }: TextAreaProps<T>) {
    return (
        <label className="flex flex-col">
            {label && <span className="font-bold">{label} {required && <span className="text-dnd-primary-100">*</span>}</span>}
            <textarea {...methods.register(name, { required })} className="resize-none px-2 py-2 rounded-lg outline-none border-2 border-dnd-accent-100 bg-dnd-secondary-200 font-semibold" cols={cols} rows={rows}></textarea>
        </label>
    )
}