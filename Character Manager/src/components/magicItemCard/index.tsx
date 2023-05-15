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
interface MagicItemCardProps {
    item: MagicItem
}

type IconProps = { category: MagicItemCategory, id: number }
function GetIcon({ category, id }: IconProps) {
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
    const alert = useAlert()
    const deleteMagicItem = useDeleteMagicItemMutation({
        onSuccess: () => {
            alert.show('success', "Magic item Deleted")
        }
    })
    const [flipCard, setFlipCard] = useState<boolean>(false)
    const navigate = useNavigate()

    const cardStyles = classNames(
        "absolute w-full h-full bg-gray-200 backface-hidden rounded-lg p-5 shadow-xl",
        {
            "border-4 border-white": item.rarity == MagicItemRarity.Common,
            "border-4 border-[#1eff00]": item.rarity == MagicItemRarity.Uncommon,
            "border-4 border-[#0070dd]": item.rarity == MagicItemRarity.Rare,
            "border-4 border-[#a335ee]": item.rarity == MagicItemRarity.VeryRare,
            "border-4 border-[#ff8000]": item.rarity == MagicItemRarity.Legendary,
        }
    )
    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="w-[300px] h-[420px] bg-transparent group perspective ">
                <div className={`relative preserve-3d ${flipCard && "my-rotate-y-180"} duration-1000 w-full h-full `}>
                    <div className={`${cardStyles}`}>
                        <header className="border-b-2 pb-3 border-black relative">
                            <p className="w-full text-center">{item?.name}</p>
                            <span className="absolute top-0">
                                <GetIcon category={item.category} id={item.id} />
                                <Tooltip anchorSelect={`#categoryIcon${item.id}`} content={formatString(item.category)} place="bottom" noArrow />
                            </span>
                            <span id={`more${item?.id}`} className="p-1.5 w-8 h-8 rounded-full absolute top-0 right-0 hover:cursor-pointer" onClick={() => {
                                setFlipCard(true)
                            }}>
                                <MoreIcon />
                                <Tooltip anchorSelect={`#more${item?.id}`} content={formatString("More")} place="bottom" noArrow />
                            </span>
                        </header>
                        <article>
                            <section>{item?.description}</section>
                            <section>{item?.property1}</section>
                            <section>{item?.property2}</section>
                            <section>{item?.property3}</section>
                        </article>


                    </div>
                    <div className={`my-rotate-y-180 ${cardStyles}`}>
                        <header className="border-b-2 pb-3 border-black relative">
                            <p className="w-full text-center">{item?.name}</p>
                            <span className="absolute top-0">
                                <GetIcon category={item.category} id={item.id} />
                                <Tooltip anchorSelect={`#categoryIcon${item.id}`} content={formatString(item.category)} place="bottom" noArrow />
                            </span>
                            <span id={`back${item?.id}`} className="p-1.5 w-8 h-8 rounded-full absolute top-0 right-0 hover:cursor-pointer" onClick={() => {
                                setFlipCard(false)
                            }}>
                                <BackButtonIcon />
                                <Tooltip anchorSelect={`#back${item?.id}`} content={formatString("Back")} place="bottom" noArrow />
                            </span>
                        </header>
                    </div>
                </div>
            </div>
        </Tilt>

    )
}