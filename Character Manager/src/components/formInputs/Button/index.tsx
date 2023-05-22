import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import { FieldValues } from "react-hook-form"

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    content: string | ReactNode
    className?: string
    buttonType?: keyof typeof BUTTON_TYPE_MAP
    size?: keyof typeof BUTTON_SIZE_MAP
}

const BUTTON_SIZE_MAP = {
    SMALL: 'px-5 py-2 text-sm ',
    MEDIUM: 'px-6 py-2 text-normal',
    LARGE: 'px-8 py-3 text-lg'
}
const BUTTON_TYPE_MAP = {
    PRIMARY: 'bg-dnd-primary-100 text-dnd-secondary-100 h-min shadow shadow-black/50 rounded-full font-bold hover:bg-dnd-primary-200 hover:shadow-lg hover:shadow-dnd-accent-100/25 whitespace-nowrap',
    SECONDARY: 'bg-dnd-secondary-100 text-dnd-text h-min shadow shadow-black/50 rounded-full font-bold hover:bg-dnd-secondary-200 hover:shadow-lg hover:shadow-dnd-accent-100/25 whitespace-nowrap',
    TERTIARY: 'text-dnd-accent-100 h-min font-bold hover:drop-shadow-xl hover:text-dnd-text',
    DISABLED: "bg-dnd-accent-100 text-dnd-text h-min rounded-full font-bold whitespace-nowrap"
}

export default function Button({ content, className, type, onClick, size, buttonType, disabled }: ButtonProps) {
    const classes = classNames(
        className,
        BUTTON_SIZE_MAP[size ?? "SMALL"],
        BUTTON_TYPE_MAP[disabled ? "DISABLED" : (buttonType ?? "PRIMARY")],

    )
    return (
        <button onClick={onClick} type={type ?? 'submit'} className={classes} disabled={disabled}>
            {content}
        </button>
    )

}