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
        <Link to={path} className={classNames ? classNames : "border-2 border-solid border-black rounded-lg px-5 py-2 hover:bg-black hover:text-white"} onClick={onClick} >
            {label}
        </Link>
    )
}