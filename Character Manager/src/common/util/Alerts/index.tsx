


import classNames from "classnames";
import { createContext, ReactNode, useContext, useState } from "react";
type AlertTypes = 'error' | 'warn' | 'success' | 'info' | 'none' | 'loading'

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
                    setTimeout(() => { setType('none'); }, timeout * 2000);
                }
            },
            clear: () => (setType('none'))
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export function Alert({ }) {
    const alert = useAlert();
    const classes = classNames("w-full mx-4 rounded-full px-5 py-3 leading-normal shadow-xl flex gap-6 justify-start z-100 items-center", {
        "bg-red-400 text-red-900": alert.type === 'error',
        "bg-green-400 text-green-900 border-green-900 border-2": alert.type === "success",
    })
    return (
        <div className="alert">
            {
                alert.type != "none" && (
                    <div className="absolute z-[110] left-0 top-0 right-0 h-auto m-2 flex justify-center">
                        <div className={classes}>
                            <p className="grow">{alert.text}</p>
                            <span onClick={() => alert.clear?.()}>
                                {alert.type !== 'loading' && (
                                    <svg className="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20">
                                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                                    </svg>
                                )}
                            </span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Alert;