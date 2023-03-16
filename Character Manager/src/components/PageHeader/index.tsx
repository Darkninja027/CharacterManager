import { MouseEventHandler } from "react"

type HeaderProps = {
    title: string
} & ({
    onClick: MouseEventHandler<HTMLButtonElement>
    label: string
} | {
    onClick?: never
    label?: never
})


export default function PageHeader({ title, onClick, label }: HeaderProps) {
    return (
        <div className="w-full flex flex-col leading-none gap-1 mb-3">
            <p className="text-2xl font-bold ">{title}</p>
            {label && (
                <button className="w-min border-2 rounded-full px-3 py-1 text-sm bg-white border-black hover:bg-black hover:text-white whitespace-nowrap" onClick={onClick}>{label}</button>
            )}
        </div>
    )
}