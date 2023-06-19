import { createContext, useContext, useState } from "react"
import { DeleteIcon } from "../../icons/SvgList"
type RollType = 'roll' | 'save' | 'skill' | 'none'
type RollOutcome = "success" | "failure" | "critical success" | "critical failure" | "normal"
type RollingContextType = {
    type: RollType,
    outcome: RollOutcome,
    roll: number[],
    skill?: string,
    show: (type: RollType, outcome: RollOutcome, roll: number[], skill?: string, timeout?: number) => void,
    clear: () => void
}

const rollingContext = createContext<RollingContextType>({
    type: "roll",
    outcome: "normal",
    roll: [],
    skill: "",
    show: () => { },
    clear: () => { }
})

export function useRolling() {
    return useContext(rollingContext)
}

export function RollingProvider({ children }: { children: React.ReactNode }) {
    const [type, setType] = useState<RollType>('none')
    const [outcome, setOutcome] = useState<RollOutcome>('normal')
    const [roll, setRoll] = useState<number[]>([0, 0])
    const [skill, setSkill] = useState<string>("")
    return (
        <rollingContext.Provider value={{
            type: type,
            outcome: outcome,
            roll: roll,
            skill: skill,
            show: (type, outcome, roll, skill, timeout = 1) => {
                setType(type)
                setOutcome(outcome)
                setRoll(roll)
                setSkill(skill ?? '')
            },
            clear: () => { setType("none") }
        }}>
            {children}
        </rollingContext.Provider>
    )
}


export function Rolling({ }) {
    const rolling = useRolling();
    return (
        <div className="rolling">
            {rolling.type != "none" && (
                <div className="fixed bottom-0 right-0 mr-5 mb-5 bg-dnd-secondary-100 px-5 py-3 rounded-lg shadow-md shadow-black/50">
                    <div className="flex justify-end">
                        <span className="hover:cursor-pointer" onClick={() => rolling.clear?.()}><DeleteIcon /></span>
                    </div>
                    <div>
                        <p>{rolling.roll[0]}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Rolling