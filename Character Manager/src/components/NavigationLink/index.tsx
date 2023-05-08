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
        <section className="w-full  h-12 relative hover:cursor-pointer font-bold text-dnd-brown-100 hover:bg-dnd-red-800 hover:text-flash-300 inline-block text-end leading-[48px] " onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <Link to={path} onClick={onClick} className="pl-1.5 pr-2 inline-block w-full h-full leading-0 hover:drop-shadow-md" getActiveProps={() => ({ className: "border-r-[5px] border-dnd-lime-600" })}>
                <p className="pr-3">{label}</p>
            </Link>
            {menu && showMenu && (
                <div className="absolute top-0 z-20 bg-dnd-lime-600 -right-[5px] w-[5px] h-full drop-shadow-md">
                    <div className="w-[185px] absolute left-[5px] bg-dnd-lime-500 flex z-20">
                        <div className="w-5 z-10 bg-dnd-lime-600" />
                        <div className="flex flex-col w-full">
                            {Object.keys(menu).map(subRoute => (
                                <Link key={subRoute} to={resolvePath(`${to}/${menu[subRoute]}`)} className="text-start pl-5 text-dnd-lime-100 hover:bg-dnd-lime-400 hover:text-dnd-green-500 hover:drop-shadow-md" getActiveProps={() => ({ className: "border-r-[5px] border-dnd-red-700 " })}>{subRoute}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}