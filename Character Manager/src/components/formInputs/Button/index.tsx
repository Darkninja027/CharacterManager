import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProps<T> = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    label: string
    className?: string

}

export default function Button<T>({ label, className }: ButtonProps<T>) {
    const classes = classNames(className, "px-2 py-1 rounded-lg border border-black")
    return (
        <button type="submit" className={classes}>
            {label}
        </button>
    )

}