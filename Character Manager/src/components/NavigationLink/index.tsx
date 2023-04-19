import { Link, useResolvePath } from "@tanstack/react-location"


interface NavigationProps {
    to: string,
    label: string
    classNames?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export default function NavigationLink({ to, classNames, onClick, label }: NavigationProps) {
    const resolvePath = useResolvePath();
    const path = resolvePath(to)
    return (
        <Link to={path} className="w-full p-1 pl-5 hover: cursor-pointer font-bold text-eerie-100 hover:bg-eerie-100 hover:text-flash-300" onClick={onClick} >
            {label}
        </Link>
    )
}