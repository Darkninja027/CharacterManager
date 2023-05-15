import { MouseEventHandler, ReactNode } from "react"
import PageHeader from "../PageHeader"

type PageProps = {
    children: ReactNode
    title: string
    backButton?: string
} & ({
    onClick: MouseEventHandler<HTMLButtonElement>
    action: boolean
    icon: ReactNode | string
} | {
    onClick?: never
    action?: never
    icon?: never
})

export function Page({ children, title, backButton, onClick, action, icon }: PageProps) {
    return (
        <>
            <PageHeader title={title} backButton={backButton} onClick={onClick as MouseEventHandler<HTMLButtonElement>} action={action as boolean} icon={icon} />
            <div className="pt-24 mx-5">
                {children}
            </div>
        </>
    )
}