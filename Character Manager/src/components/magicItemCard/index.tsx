import { MagicItem, MagicItemInput } from "@types";
import { DeleteIcon } from "../../common/icons/SvgList";
import { enumStringConversion } from "../../common/util/enumStringConversion";
import { useDeleteMagicItemMutation } from "../../pages/Items/items.generated";
import Accordian from "../accordian";
interface MagicItemCardProps {
    item: MagicItem
}


export default function MagicItemCard({ item }: MagicItemCardProps) {
    const deleteMagicItem = useDeleteMagicItemMutation()
    return (
        <Accordian heading={
            <div className="flex gap-2 items-center">
                <p>{item.name}</p>
                <p>'{enumStringConversion(item.category)}'</p>
                <p>'{enumStringConversion(item.rarity)}'</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteMagicItem.mutate({ id: item.id })
                }}>
                    <DeleteIcon />
                </button>
            </div>}>
            <p>Description: {item.description}</p>
            {item.property1 && <p>Property 1: {item.property1}</p>}
            {item.property2 && <p>Property 2: {item.property2}</p>}
            {item.property3 && <p>Property 3: {item.property3}</p>}
        </Accordian>
    )
}