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
        <div className="w-full flex flex-col leading-none gap-1 mb-3">
            <div className="flex items-center gap-3">
                {backButton && (
                    <>

                        <span id="backButton" className="hover:cursor-pointer h-4 w-4" onClick={() => { navigate({ to: ".." }) }}><BackButtonIcon /></span>
                        <Tooltip anchorSelect="#backButton" content="Back" noArrow />
                    </>
                )}
                <p className="text-2xl font-bold ">{title}</p>
            </div>
            {label && (
                <button className="w-min border-2 rounded-full px-3 py-1 text-sm bg-white border-black hover:bg-black hover:text-white whitespace-nowrap" onClick={onClick}>{label}</button>
            )}
        </div>
    )
}