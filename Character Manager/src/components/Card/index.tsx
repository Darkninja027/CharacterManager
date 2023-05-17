import classNames from "classnames"
import { ReactNode } from "react"

type CardProps = {
    heading?: string
    className?: string
    children: ReactNode
}

export default function Card({ heading, className, children }: CardProps) {
    const classes = classNames("shadow shadow-black/50 bg-dnd-background-200 rounded-lg p-5", {
        "w-max": !className
    }, className)
    return (
        <div className={classes}>
            {heading && <header className="font-black text-2xl mb-5">{heading}</header>}
            {children}
        </div>
    )
}