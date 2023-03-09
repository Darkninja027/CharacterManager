import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form"

type ButtonProps<T extends FieldValues> = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    label: string
    className?: string

}

export default function Button<T extends FieldValues>({ onSubmit, label, className, onClick }: ButtonProps<T>) {
    return (
        <button type="submit" className="px-2 py-1 rounded-lg border border-black">
            {label}
        </button>
    )

}