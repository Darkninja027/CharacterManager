import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type InputProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string
    label: string
    styles?: string

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

export default function Input<T extends FieldValues>({ name, label, className, type, methods, value, onChange, required, disabled, defaultValue, min, max, ...props }: InputProps<T>) {
    const fieldState = methods ? methods.getFieldState(name) : null
    const fieldValue = methods ? methods.watch(name) : value
    return (
        <label className="flex flex-col">
            {label && <span>{label} {required && <span>*</span>}</span>}
            <input type={type} className="px-2 py-1 rounded-lg border border-black" {...(methods ? methods.register(name, { onChange, required }) : { value: fieldValue, onChange })} disabled={disabled} defaultValue={defaultValue} min={min} max={max} />
            {fieldState?.error && (
                <p>Field is required</p>
            )}
        </label>
    )
}