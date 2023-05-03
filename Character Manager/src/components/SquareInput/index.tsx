import { PlayerCharacterInput } from "@types"
import { Path, UseFormReturn } from "react-hook-form"
import Input from "../formInputs/Input"

type SquareInputProps = {
    methods: UseFormReturn<PlayerCharacterInput>
    title: string
    name: Path<PlayerCharacterInput>
}


export default function SquareInput({ methods, name, title }: SquareInputProps) {
    return (
        <div className="w-24 h-24 bg-gray-400 rounded-lg border-4 border-black border-double flex flex-col items-center p-2">
            <p>{title}</p>
            <Input methods={methods} styling="SQUARE" name={name} />
        </div>
    )
}