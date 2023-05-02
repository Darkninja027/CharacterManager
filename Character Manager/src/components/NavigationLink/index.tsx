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
        <section className="w-full p-1 pl-5 hover:cursor-pointer font-bold text-eerie-100 hover:bg-eerie-100 hover:text-flash-300 relative inline-block" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <Link to={path} onClick={onClick} >
                {label}
            </Link>
            {menu && showMenu && (
                <div className="block absolute left-[250px] top-0 p-1 w-1/2 bg-eerie-200 text-flash-200 ">
                    {Object.keys(menu).map(x => (
                        <Link to={resolvePath(to + menu[x])}>{x}</Link>
                    ))}
                </div>
            )}
        </section>
    )
}