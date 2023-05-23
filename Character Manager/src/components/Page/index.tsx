import { MouseEventHandler, ReactNode } from "react"
import PageHeader from "../PageHeader"

type PageProps = {
    children: ReactNode
    title: string
    backButton?: string
} & ({
    onClick: MouseEventHandler<HTMLButtonElement>
    buttonText?: string
    icon: ReactNode | string
} | {
    onClick?: never
    icon?: never
    buttonText?: never
})

export function Page({ children, title, backButton, onClick, buttonText, icon }: PageProps) {
    return (
        <>
            <PageHeader title={title} backButton={backButton} onClick={onClick as MouseEventHandler<HTMLButtonElement>} icon={icon} buttonText={buttonText} />
            <div className="pt-[72px] m-8">
                {children}
            </div>
        </>
    )
}