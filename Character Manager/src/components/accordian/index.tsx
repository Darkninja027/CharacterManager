import { ReactNode, useState } from "react"
interface AccordianProps {
    heading: ReactNode | string
    children: ReactNode
}


export default function Accordian({ heading, children }: AccordianProps) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <details className="bg-slate-200 shadow-md rounded-lg overflow-hidden m-2" open={open ? true : undefined}>
            <summary className="list-none leading-none mx-2 my-3" onClick={(e) => {
                e.preventDefault();
                setOpen(!open)
            }}>
                <div className="flex justify-between hover:cursor-pointer">
                    <h1>{heading}</h1>
                    <p>{!open ? "^" : "v"}</p>
                </div>
            </summary>
            <div className="mx-2 my-3">
                {children}
            </div>

        </details>
    )
}