import { PlayerCharacterInput } from "@types";
import { UseFormReturn } from "react-hook-form";
import Input from "../formInputs/Input";
type ArmorClassProps = {
    methods: UseFormReturn<PlayerCharacterInput>
}
export function ArmorClass({ methods }: ArmorClassProps) {
    return (
        <div className="w-24 h-24 flex flex-col items-center">
            <div className="absolute flex leading-none flex-col items-center w-12 mt-4">
                <p className="whitespace-nowrap text-sm">Armor Class</p>
                <Input methods={methods} styling="AC" name="armorClass" type="number" min={0} />
            </div>
            <svg viewBox="0 0 466.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M2235 5054 c-611 -446 -1297 -663 -2065 -653 l-165 2 1 -344 c4 -987 164 -1772 495 -2439 329 -661 808 -1140 1464 -1462 88 -43 206 -96 263 -119 l102 -40 103 41 c583 234 1086 618 1448 1105 423 570 674 1309 754 2215 20 225 30 652 20 850 l-7 155 -206 1 c-372 2 -707 73 -1132 241 -298 118 -702 327 -963 498 -22 14 -28 11 -112 -51z m218 -308 c495 -298 944 -480 1368 -556 132 -23 356 -39 476 -32 l81 4 7 -57 c12 -93 -2 -724 -19 -894 -124 -1202 -574 -2046 -1376 -2580 -198 -131 -596 -331 -660 -331 -27 0 -180 63 -325 134 -869 426 -1414 1200 -1629 2311 -68 352 -96 649 -103 1101 l-6 341 249 6 c259 6 395 20 599 62 377 78 763 250 1095 488 58 42 108 76 113 76 4 1 62 -32 130 -73z" />
                </g>
            </svg>
        </div>
    )
}