import { useNavigate } from "@tanstack/react-location"
import { MouseEventHandler, ReactNode } from "react"
import { Tooltip } from "react-tooltip"
import { AddIcon, BackButtonIcon } from "../../common/icons/SvgList"
import Button from "../formInputs/Button"

type HeaderProps = {
    title: string
    backButton?: string
} & ({
    onClick: MouseEventHandler<HTMLButtonElement>
    action: boolean
    icon: ReactNode
} | {
    onClick?: never
    action?: never
    icon?: never
})


export default function PageHeader({ title, onClick, action, backButton, icon }: HeaderProps) {
    const navigate = useNavigate()
    return (
        <div className="mb-5 fixed top-0 w-full z-20">
            <div className="w-full flex items-center  leading-none bg-dnd-background-500 shadow-sm gap-3 px-5 h-16">
                <div className="flex items-center gap-3">
                    {backButton && (
                        <>

                            <span id="backButton" className="bg-dnd-accent-100 hover:cursor-pointer w-8 h-8 rounded-full p-2 text-dnd-secondary-100 shadow-md" onClick={() => { navigate({ to: backButton }) }}><BackButtonIcon /></span>
                            <Tooltip anchorSelect="#backButton" content="Back" noArrow />
                        </>
                    )}
                    <p className="text-2xl font-bold text-dnd-secondary-200">{title}</p>
                </div>
                {action && (
                    <span onClick={onClick} className="bg-dnd-accent-100 hover:cursor-pointer w-8 h-8 text-xs whitespace-nowrap rounded-full p-2 text-dnd-background-100 shadow-md">{icon}</span>
                )}
            </div>
        </div >
    )
}