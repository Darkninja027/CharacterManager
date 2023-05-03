import { Link, useResolvePath } from "@tanstack/react-location"
import { ReactNode, useState } from "react"


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
    console.log(menu)
    const path = resolvePath(to)

    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <section className="w-full relative hover:cursor-pointer font-bold text-eerie-100 hover:bg-eerie-100 hover:text-flash-300 inline-block" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <Link to={path} onClick={onClick} className="pl-1.5 block w-full" getActiveProps={() => ({ className: "border-r-4 border-eerie-100 hover:border-eerie-400 pr-0" })}>
                {label}
            </Link>
            {menu && showMenu && (
                <div className="absolute top-0.5 z-10 left-[250px] w-5 h-full">
                    <div className="absolute left-2.5 bg-black rotate-45 w-6 h-6 rounded" />
                    <div className="bg-black absolute left-5 min-h-[44px] min-w-[100px] -top-2.5 rounded text-white p-2 whitespace-nowrap">
                        <div className="flex flex-col text-sm leading-none gap-1">
                            {Object.keys(menu).map(x => (
                                <Link to={resolvePath(`${to}/${menu[x]}`)} getActiveProps={() => ({ className: "underline" })}>{x}</Link>
                            ))}

                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}