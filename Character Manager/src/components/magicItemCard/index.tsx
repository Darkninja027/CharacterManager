import { MagicItemInput } from "@types";
import { enumStringConversion } from "../../common/util/enumStringConversion";
import Accordian from "../accordian";
interface MagicItemCardProps {
    item: MagicItemInput
}

export default function MagicItemCard({ item }: MagicItemCardProps) {
    return (
        <Accordian heading={
            <div className="flex gap-2">
                <p>{item.name}</p>
                <p>'{enumStringConversion(item.category)}'</p>
            </div>}>
            <p>Description: {item.description}</p>
            <p>Property 1: {item.property1}</p>
            <p>Property 2: {item.property2}</p>
            <p>Property 3: {item.property3}</p>
        </Accordian>
    )
}