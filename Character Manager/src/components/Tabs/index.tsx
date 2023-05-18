import classNames from "classnames"
import { ReactElement, isValidElement, useState } from "react"
import Button from "../formInputs/Button"

type TabsProps = {
    tabs: TabDefinition
    tabStyles?: string
    containerStyles?: string
}

export type TabDefinition = {
    [key: string]: ReactElement | TabDefinition | undefined
}

export function Tabs({ tabs }: TabsProps) {

    let tabPath = (Object.keys(tabs)[0]);
    if (!Object.keys(tabs).includes(tabPath)) {
        tabPath = Object.keys(tabs)[0];
    }

    const [focusedTab, setFocusecdTab] = useState<keyof typeof tabs>(tabPath)

    const Tab = ({ title }: { title: string }) => {
        const className = classNames(
            "px-8 rounded-t-lg",
            {
                "hover:cursor-pointer bg-dnd-secondary-100 ": focusedTab !== title,
                "bg-dnd-accent-100 text-dnd-secondary-100 font-bold": focusedTab === title
            }
        )
        return (
            <div className={className} onClick={() => setFocusecdTab(title)} >{title}</div>
        )
    }

    const tab = isValidElement(tabs[focusedTab]) && tabs[focusedTab] as ReactElement
    return (
        <div className="bg-dnd-primary-100 pt-5 h-full rounded-lg shadow-lg shadow-black/25">
            <div className="flex gap-2 px-2">
                {Object.keys(tabs).map(title => (
                    <Tab title={title} />
                ))}
            </div>
            <div className="bg-dnd-accent-100 rounded-b-lg h-[97.5%] p-2 text-dnd-text rounded-lg">
                <div className="bg-dnd-secondary-100 p-2 h-full rounded shadow shadow-black/50">
                    {tab}
                </div>
            </div>
        </div>
    )
}