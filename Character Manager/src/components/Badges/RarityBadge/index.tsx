import { MagicItemRarity } from "@types";
import classNames from "classnames";
import { enumStringConversion } from "../../../common/util/enumStringConversion";
interface BadgeProps {
    rarity: MagicItemRarity
    size?: keyof typeof BADGE_SIZE
}

const BADGE_SIZE = {
    SMALL: "px-2 py-1 text-xs font-bold rounded-full w-min no-wrap whitespace-nowrap italic",
    LARGE: ""
} as const
export default function RarityBadge({ rarity, size }: BadgeProps) {


    const classes = classNames(
        BADGE_SIZE[size ?? "SMALL"],
        {
            "bg-white text-black": rarity == MagicItemRarity.Common,
            "bg-[#1eff00]": rarity == MagicItemRarity.Uncommon,
            "bg-[#0070dd]": rarity == MagicItemRarity.Rare,
            "bg-[#a335ee]": rarity == MagicItemRarity.VeryRare,
            "bg-[#ff8000]": rarity == MagicItemRarity.Legendary,
        }
    );

    return (
        <span className={classes}>
            {enumStringConversion(rarity)}
        </span>
    )
}