import { Link, useResolvePath } from "@tanstack/react-location"
import { useState } from "react"


interface NavigationProps {
    to: string,
    label: string
    classNames?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
    menu?: MenuDefinition
}

type MenuDefinition = {
    [key: string]: string
}
export default function NavigationLink({ to, classNames, onClick, label, menu }: NavigationProps) {
    const resolvePath = useResolvePath();
    const path = resolvePath(to)

    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <section className="w-full  h-12 relative hover:cursor-pointer font-bold text-dnd-brown-100 hover:bg-dnd-red-800 hover:text-flash-300 inline-block text-end leading-[48px] hover:drop-shadow-md" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <Link to={path} onClick={onClick} className="pl-1.5 pr-2 inline-block w-full h-full leading-0" getActiveProps={() => ({ className: "border-r-[5px] border-dnd-lime-500/[.75]" })}>
                <p className="pr-3">{label}</p>
            </Link>
            {menu && showMenu && (
                <div className="absolute top-0 z-10 -right-5 w-5 h-full">
                    <div className="absolute left-3 bg-black top-2.5 rotate-45 w-5 h-5 rounded" />
                    <div className="bg-black absolute left-5 min-h-[44px] min-w-[100px] text-white p-2 whitespace-nowrap text-start">
                        <div className="flex flex-col text-sm leading-none gap-1">
                            {Object.keys(menu).map(subRoute => (
                                <Link key={subRoute} to={resolvePath(`${to}/${menu[subRoute]}`)} getActiveProps={() => ({ className: "underline" })}>{subRoute}</Link>
                            ))}

                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}