


import { createContext, ReactNode, useContext, useState } from "react";
type AlertTypes = 'error' | 'warn' | 'success' | 'info' | 'none'

type AlertProps = {
    type: AlertTypes
    text?: string,
    show: (type: AlertTypes, text: string, timeout?: number) => void,
    clear: () => void
}
//we need to initialise the context
const AlertContext = createContext<AlertProps>({
    type: "none",
    text: '',
    show: () => { },
    clear: () => { }

})

export function useAlert() {
    return useContext(AlertContext)
}

export function AlertProvider({ children }: { children: ReactNode }) {
    const [type, setType] = useState<AlertTypes>('none')
    const [text, setText] = useState<string>('')
    return (
        <AlertContext.Provider value={{
            type: type,
            text: text,
            show: (type, text, timeout = 1) => {
                setText(text)
                setType(type)
                if (type != 'error') {
                    setTimeout(() => setType('none'), timeout * 2000)
                }
            },
            clear: () => (setType('none'))
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default function Alert({ }) {
    const alert = useAlert();
    return (
        <div>
            {
                alert.type !== "none" && (
                    <div>
                        this is an alert
                    </div>
                )
            }
        </div>
    )
}