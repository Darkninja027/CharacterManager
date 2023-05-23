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
    icon: ReactNode
    buttonText?: string;
} | {
    onClick?: never
    icon?: never
    buttonText?: never
})


export default function PageHeader({ title, onClick, buttonText, backButton, icon }: HeaderProps) {
    const navigate = useNavigate()
    return (
        <div className="fixed w-full z-20">
            <div className="flex items-center bg-dnd-background-500 shadow-sm gap-4 px-8 h-[80px] mr-[300px]">
                <div className="flex items-center gap-4 w-full">
                    {backButton && (
                        <>
                            <span id="backButton" className="bg-dnd-accent-100 text-dnd-secondary-200 shadow shadow-black/50 rounded-full font-bold hover:bg-dnd-accent-200 whitespace-nowrap w-12 h-12 p-3 hover:cursor-pointer" onClick={() => { navigate({ to: backButton }) }}><BackButtonIcon /></span>
                            <Tooltip anchorSelect="#backButton" content="Back" noArrow />
                        </>
                    )}
                    <p className="text-2xl font-semibold text-dnd-secondary-200 leading-none">{title}</p>
                </div>
                {icon && (
                    // 
                    <Button className="h-12" buttonType="HEADER" size="SMALL" onClick={onClick} content={<div className="flex items-center gap-2">
                        <span onClick={onClick} className="hover:cursor-pointer w-6 h-6 text-xs whitespace-nowrap rounded-full text-dnd-background-100">{icon}</span>
                        {buttonText && <p>{buttonText}</p>}
                    </div>} />
                )}
            </div>
        </div >
    )
}