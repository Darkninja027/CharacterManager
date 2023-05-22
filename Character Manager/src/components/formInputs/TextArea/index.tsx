import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type TextAreaProps<T extends FieldValues> = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    name: string
    label?: string
    className?: string

} & (
        {
            methods: UseFormReturn<T>,
            name: Path<T>;
            unattached?: never;
        } | {
            methods?: never;
            name?: string;
            unattached: true;
        }
    );



export default function TextArea<T extends FieldValues>({ label, methods, name, cols = 30, rows = 5, required, onChange, value }: TextAreaProps<T>) {
    const fieldState = methods ? methods.getFieldState(name) : null
    const fieldValue = methods ? methods.watch(name) : value
    return (
        <label className="flex flex-col">
            {label && <span className="font-bold">{label} {required && <span className="text-dnd-primary-100">*</span>}</span>}
            <textarea {...(methods ? methods.register(name, { onChange, required }) : { value: fieldValue, onChange })} className="resize-none px-2 py-2 rounded-lg outline-none border-2 border-dnd-accent-100 bg-dnd-secondary-200 font-semibold" cols={cols} rows={rows}></textarea>
        </label>
    )
}