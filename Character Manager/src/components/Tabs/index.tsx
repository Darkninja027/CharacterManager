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
            "hover:cursor-pointer text-flash-300 px-2 rounded-t-lg",
            {
                "bg-payne-500 text-flash-300 underline font-semibold": focusedTab === title
            }
        )
        return (
            <Button className={className} content={title} onClick={() => setFocusecdTab(title)} />
        )
    }

    const tab = isValidElement(tabs[focusedTab]) && tabs[focusedTab] as ReactElement
    return (
        <div className="bg-eerie-300 pt-2">
            <div className="flex gap-2 px-1">
                {Object.keys(tabs).map(title => (
                    <Tab title={title} />
                ))}
            </div>
            <div className="bg-payne-500 px-2 py-1 text-flash-300">
                {tab}
            </div>
        </div>
    )
}