import { MagicItem, MagicItemCategory, MagicItemInput } from "@types";
import { Tooltip } from "react-tooltip";
import { ArmorIcon, DeleteIcon, PotionIcon, RingIcon, RodIcon, ScrollIcon, StaffIcon, WandIcon, WeaponIcon, WonderousItemIcon } from "../../common/icons/SvgList";
import { enumStringConversion } from "../../common/util/enumStringConversion";
import { useDeleteMagicItemMutation } from "../../pages/Items/items.generated";
import Accordian from "../accordian";

import 'react-tooltip/dist/react-tooltip.css'
import RarityBadge from "../Badges/RarityBadge";
interface MagicItemCardProps {
    item: MagicItem
}

type props = { category: MagicItemCategory, id: number }
function GetIcon({ category, id }: props) {
    const styles = "p-1.5 w-8 h-8 bg-[#d9bda5] rounded-full"
    return (
        <div id={`categoryIcon${id}`} className={styles}>
            {category == MagicItemCategory.Armor && <ArmorIcon />}
            {category == MagicItemCategory.Potion && <PotionIcon />}
            {category == MagicItemCategory.Ring && <RingIcon />}
            {category == MagicItemCategory.Rod && <RodIcon />}
            {category == MagicItemCategory.Scroll && <ScrollIcon />}
            {category == MagicItemCategory.Staff && <StaffIcon />}
            {category == MagicItemCategory.Wand && <WandIcon />}
            {category == MagicItemCategory.Weapon && <WeaponIcon />}
            {category == MagicItemCategory.WonderousItem && <WonderousItemIcon />}
        </div>
    )
}


export default function MagicItemCard({ item }: MagicItemCardProps) {
    const deleteMagicItem = useDeleteMagicItemMutation()

    return (
        <Accordian heading={
            <div className="flex justify-between gap-2 items-center">
                <div className="flex items-center gap-2">
                    <p>{item.name}</p>
                    <RarityBadge rarity={item.rarity} />
                    <GetIcon category={item.category} id={item.id} />
                </div>

                <button id="deleteButton" className="h-92" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteMagicItem.mutate({ id: item.id })
                }}>
                    <DeleteIcon />
                </button>
                <Tooltip anchorSelect="#deleteButton" content="Delete Magic Item" place="bottom" noArrow />
                <Tooltip anchorSelect={`#categoryIcon${item.id}`} content={enumStringConversion(item.category)} place="bottom" noArrow />
            </div>}>
            <p>Description: {item.description}</p>
            {item.property1 && <p>Property 1: {item.property1}</p>}
            {item.property2 && <p>Property 2: {item.property2}</p>}
            {item.property3 && <p>Property 3: {item.property3}</p>}
        </Accordian>

    )
}