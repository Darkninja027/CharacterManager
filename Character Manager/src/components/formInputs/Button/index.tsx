import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import { FieldValues } from "react-hook-form"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    content: string | ReactNode
    className?: string

}

export default function Button({ content, className, type, onClick }: ButtonProps) {
    const classes = classNames(className, "px-2 py-1 rounded-lg border border-black")
    return (
        <button onClick={onClick} type={type ?? 'submit'} className={classes}>
            {content}
        </button>
    )

}