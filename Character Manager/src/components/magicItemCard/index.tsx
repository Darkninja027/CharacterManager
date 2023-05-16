import { useNavigate } from "@tanstack/react-location";
import { MagicItem, MagicItemCategory, MagicItemRarity } from "@types";
import { Tooltip } from "react-tooltip";
import { ArmorIcon, BackButtonIcon, DeleteIcon, EditIcon, MoreIcon, PotionIcon, RingIcon, RodIcon, ScrollIcon, StaffIcon, WandIcon, WeaponIcon, WonderousItemIcon } from "../../common/icons/SvgList";
import { useAlert } from "../../common/util/Alerts";
import { formatString } from "../../common/util/stringFormatting";
import { useDeleteMagicItemMutation } from "../../pages/Items/items.generated";
import Accordian from "../Accordian";
import Tilt from 'react-parallax-tilt';


import RarityBadge from "../Badges/RarityBadge";
import { useState } from "react";
import classNames from "classnames";
import ItemForm from "../Form/ItemForm";
interface MagicItemCardProps {
    item: MagicItem
}

type IconProps = { category: MagicItemCategory }
export function GetIcon({ category }: IconProps) {
    return (
        <div className="w-full p-2">
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
    const alert = useAlert()
    const deleteMagicItem = useDeleteMagicItemMutation({
        onSuccess: () => {
            alert.show('success', "Magic item Deleted")
        }
    })
    const [flipCard, setFlipCard] = useState<boolean>(false)
    const navigate = useNavigate()

    const cardStyles = classNames(
        "absolute w-full h-full bg-dnd-red-200 backface-hidden p-2 shadow-xl border-4 border-dnd-red-900 hover:cursor-pointer"
    )

    const dotStyles = classNames("w-2.5 h-2.5 rounded-full", {
        "bg-common": item.rarity == MagicItemRarity.Common,
        "bg-uncommon": item.rarity == MagicItemRarity.Uncommon,
        "bg-rare": item.rarity == MagicItemRarity.Rare,
        "bg-veryrare": item.rarity == MagicItemRarity.VeryRare,
        "bg-legendary": item.rarity == MagicItemRarity.Legendary,
    })

    const categoryStyle = classNames("font-bold italic text-xs", {
        "text-common": item.rarity == MagicItemRarity.Common,
        "text-uncommon": item.rarity == MagicItemRarity.Uncommon,
        "text-rare": item.rarity == MagicItemRarity.Rare,
        "text-veryrare": item.rarity == MagicItemRarity.VeryRare,
        "text-legendary": item.rarity == MagicItemRarity.Legendary,
    })

    const rareityStyles = classNames("border-t-[1px] text-${getColour(item.rarity)} border-t-${getColour(item.rarity)} w-[60%] text-center font-bold italic text-xs", {
        "text-common border-t-common": item.rarity == MagicItemRarity.Common,
        "text-uncommon border-t-uncommon": item.rarity == MagicItemRarity.Uncommon,
        "text-rare border-t-rare": item.rarity == MagicItemRarity.Rare,
        "text-veryrare border-t-veryrare": item.rarity == MagicItemRarity.VeryRare,
        "text-legendary border-t-legendary": item.rarity == MagicItemRarity.Legendary,
    })

    function getRarityDots(rarity: MagicItemRarity) {
        let count = ['']

        if (rarity == MagicItemRarity.Uncommon) {
            count.push('')
        }
        if (rarity == MagicItemRarity.Rare) {
            count.push('', '');
        }
        if (rarity == MagicItemRarity.VeryRare) {
            count.push('', '', '');
        }
        if (rarity == MagicItemRarity.Legendary) {
            count.push('', '', '', '');
        }

        let dots = count.map(() => (
            <div className={dotStyles} />
        ))
        return dots
    }


    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="w-[300px] h-[420px] bg-transparent group perspective ">
                <div className={`relative preserve-3d ${flipCard && "my-rotate-y-180"} duration-1000 w-full h-full `}>
                    <div className={`${cardStyles}`} onClick={(e) => {
                        e.preventDefault()
                        setFlipCard(true)
                    }}>
                        <div className={`${dotStyles} absolute top-0.5 left-0.5`} />
                        <div className={`${dotStyles} absolute top-0.5 right-0.5`} />
                        <div className="border-2 border-black h-[95%] w-[275px] rounded-2xl">
                            <header className="border-2 border-black flex justify-center items-center rounded-2xl w-[275px] py-3 -ml-0.5 -mt-0.5 font-black">
                                {item.name.toLocaleUpperCase()}
                            </header>
                            <div className="flex flex-col items-center justify-between h-[85%]">
                                <GetIcon category={item.category} />
                                <div className="w-full text-center flex flex-col items-center gap-1">
                                    <span className={categoryStyle}>{formatString(item.category)}</span>
                                    <span className={rareityStyles}>{formatString(item.rarity)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-1 h-[5%] items-center">
                            {getRarityDots(item.rarity)}
                        </div>
                    </div>
                    <div className={`my-rotate-y-180 ${cardStyles}`} onClick={(e) => {
                        e.preventDefault()
                        setFlipCard(false)
                    }}>
                        <div className={`${dotStyles} absolute top-0.5 left-0.5`} />
                        <div className={`${dotStyles} absolute top-0.5 right-0.5`} />
                        <div className="border-2 border-black h-[95%] w-[275px] rounded-2xl">
                            <header className="border-2 border-black flex justify-center items-center rounded-2xl w-[275px] py-3 -ml-0.5 -mt-0.5 font-black">
                                {item.name.toLocaleUpperCase()}
                            </header>
                            <div className="flex flex-col items-center justify-between h-[85%]">
                                <div className="flex flex-col w-full text-[12px] leading-none p-2 gap-3 overflow-hidden">
                                    <p>{item.description}</p>
                                    <p>{item.property1}</p>
                                    <p>{item.property2}</p>
                                    <p>{item.property3}</p>
                                </div>
                                <div className="w-full text-center flex flex-col items-center gap-1">
                                    <span className={categoryStyle}>{formatString(item.category)}</span>
                                    <span className={rareityStyles}>{formatString(item.rarity)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-1 h-[5%] items-center">
                            {getRarityDots(item.rarity)}
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>

    )
}