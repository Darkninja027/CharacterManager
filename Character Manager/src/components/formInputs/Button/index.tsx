import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { FieldValues } from "react-hook-form"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    label: string
    className?: string

}

export default function Button({ label, className, type, onClick }: ButtonProps) {
    const classes = classNames(className, "px-2 py-1 rounded-lg border border-black")
    return (
        <button onClick={onClick} type={type ?? 'submit'} className={classes}>
            {label}
        </button>
    )

}