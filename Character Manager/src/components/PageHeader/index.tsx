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
            <div className="w-full flex items-center  leading-none gap-3 bg-dnd-brown-300 px-5 h-24">
                <div className="flex items-center gap-3">
                    {backButton && (
                        <>

                            <span id="backButton" className="bg-dnd-lime-500 hover:cursor-pointer w-8 h-8 rounded-full p-2 text-dnd-lime-100 shadow-md" onClick={() => { navigate({ to: backButton }) }}><BackButtonIcon /></span>
                            <Tooltip anchorSelect="#backButton" content="Back" noArrow />
                        </>
                    )}
                    <p className="text-2xl font-bold text-dnd-brown-900">{title}</p>
                </div>
                {action && (
                    <span onClick={onClick} className="bg-dnd-lime-500 hover:cursor-pointer w-8 h-8 text-xs whitespace-nowrap rounded-full p-2 text-dnd-lime-100 shadow-md">{icon}</span>
                )}
            </div>
            <div className="h-1.5 w-full bg-dnd-brown-500" />
        </div >
    )
}