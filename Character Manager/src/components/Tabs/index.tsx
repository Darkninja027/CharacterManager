import classNames from "classnames"
import { ReactElement, isValidElement, useState } from "react"
import Button from "../formInputs/Button"

type TabsProps = {
    tabs: TabDefinition
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
        const className = classNames("hover:cursor-pointer")
        return (
            <Button content={title} onClick={() => setFocusecdTab(title)} />
        )
    }

    const tab = isValidElement(tabs[focusedTab]) && tabs[focusedTab] as ReactElement
    return (
        <div>
            <div className="flex gap-2">
                {Object.keys(tabs).map(title => (
                    <p>{<Tab title={title} />}</p>
                ))}
            </div>
            <div>
                {tab}
            </div>
        </div>
    )
}