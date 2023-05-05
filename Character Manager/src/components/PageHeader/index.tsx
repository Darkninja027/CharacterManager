import { useNavigate } from "@tanstack/react-location"
import { MouseEventHandler } from "react"
import { Tooltip } from "react-tooltip"
import { BackButtonIcon } from "../../common/icons/SvgList"

type HeaderProps = {
    title: string
    backButton?: boolean
} & ({
    onClick: MouseEventHandler<HTMLButtonElement>
    label: string
} | {
    onClick?: never
    label?: never
})


export default function PageHeader({ title, onClick, label, backButton }: HeaderProps) {
    const navigate = useNavigate()
    return (
        <div className="mb-5 fixed top-0 w-full z-20">
            <div className="w-full flex flex-col leading-none gap-1 bg-dnd-brown-300 px-5 h-24 justify-center">
                <div className="flex items-center gap-3">
                    {backButton && (
                        <>

                            <span id="backButton" className="bg-dnd-lime-500 hover:cursor-pointer w-8 h-8 rounded-full p-2 text-dnd-lime-100 shadow-md" onClick={() => { navigate({ to: ".." }) }}><BackButtonIcon /></span>
                            <Tooltip anchorSelect="#backButton" content="Back" noArrow />
                        </>
                    )}
                    <p className="text-2xl font-bold text-dnd-brown-900">{title}</p>
                </div>
                {label && (
                    <button className="w-min border-2 rounded-full px-3 py-1 text-sm bg-white border-black hover:bg-black hover:text-white whitespace-nowrap" onClick={onClick}>{label}</button>
                )}
            </div>
            <div className="h-1.5 w-full bg-dnd-brown-500" />
        </div >
    )
}