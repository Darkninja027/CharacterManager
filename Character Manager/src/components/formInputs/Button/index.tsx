import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import { FieldValues } from "react-hook-form"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    content: string | ReactNode
    className?: string
    styling?: keyof typeof BUTTON_STYLE_MAP
    buttonType?: keyof typeof BUTTON_TYPE_MAP
    size?: keyof typeof BUTTON_SIZE_MAP
}

const BUTTON_SIZE_MAP = {
    SMALL: 'px-1 py-2 text-sm',
    MEDIUM: 'px-1.5 py-2.5',
    LARGE: ''
}
const BUTTON_TYPE_MAP = {
    PRIMARY: '',
    SECONDARY: '',
    TERTIARY: ''
}
const BUTTON_STYLE_MAP = {
    NONE: "",
    DEFAULT: "px-2 py-1 rounded-lg border border-black",
}

export default function Button({ content, className, type, onClick, styling, size }: ButtonProps) {
    const classes = classNames(className, BUTTON_STYLE_MAP[styling ?? "NONE"], BUTTON_SIZE_MAP[size ?? "SMALL"])
    return (
        <button onClick={onClick} type={type ?? 'submit'} className={classes}>
            {content}
        </button>
    )

}