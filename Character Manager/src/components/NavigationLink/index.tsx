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
        <Link to={path} className={classNames} onClick={onClick} >
            {label}
        </Link>
    )
}