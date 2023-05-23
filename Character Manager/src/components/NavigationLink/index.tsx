import { Link, useResolvePath } from "@tanstack/react-location"
import { ReactNode, useState } from "react"
import { ArmorIcon } from "../../common/icons/SvgList"


interface NavigationProps {
    to: string,
    label: string
    classNames?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
    menu?: MenuDefinition
    navIcon?: ReactNode
}

type MenuDefinition = {
    [key: string]: string
}
export default function NavigationLink({ to, onClick, label, menu, navIcon }: NavigationProps) {
    const resolvePath = useResolvePath();
    const path = resolvePath(to)

    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <section className="w-[204px] z-50 h-12 relative font-bold text-dnd-secondary-200  inline-block text-end leading-[48px]" onMouseLeave={() => setShowMenu(false)}>
            <Link to={path} onClick={onClick} className="pl-1.5 pr-2 inline-block w-full h-full leading-0  hover:shadow-lg hover:shadow-black/25 hover:bg-dnd-primary-200 hover:cursor-pointer" getActiveProps={() => ({ className: "border-r-8 border-dnd-accent-300" })} onMouseEnter={() => setShowMenu(true)}>
                <p className="pr-3">{label}</p>
            </Link>
            <span className="w-6 h-6 absolute top-3 -left-[78px] ">{navIcon}</span>
            {menu && showMenu && (
                <div className="absolute -top-4 bg-dnd-accent-300  left-[204px]">
                    <div className="w-[204px] absolute  bg-dnd-accent-100 flex z-20 py-4 border-l-8 border-l-dnd-accent-300">
                        <div className="flex flex-col items-end gap-1 w-full">
                            {Object.keys(menu).map(subRoute => (
                                <Link key={subRoute} to={resolvePath(`${to}/${menu[subRoute]}`)} className="text-end w-[188px] h-12 pr-4 text-dnd-secondary-200 hover:bg-dnd-accent-200 hover:shadow-lg hover:shadow-black/25" getActiveProps={() => ({ className: "border-r-8 border-dnd-primary-100 " })}>{subRoute}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}