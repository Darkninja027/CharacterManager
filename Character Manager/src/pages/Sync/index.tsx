import { MagicItemRarity } from "@types";
import { ScrollIcon, WeaponIcon } from "../../common/icons/SvgList";
import RarityBadge from "../../components/Badges/RarityBadge";
import { useDeleteAllItemsMutation } from "./sync.generated";


export default function SyncPage() {

    const clearAllItemsMutation = useDeleteAllItemsMutation();

    const x = () => {
        clearAllItemsMutation.mutate({})
    }
    return (
        <div className="flex flex-col gap-5 p-5 w-96">

            <button className="p-3 bg-gray-400 rounded-lg" onClick={() => x()}>clear  items</button>
            {/* <button className="p-3 bg-gray-400 rounded-lg" onClick={() => clearRaces.mutate()}>Clear Races</button> */}
            <RarityBadge rarity={MagicItemRarity.Common} />
            <RarityBadge rarity={MagicItemRarity.Uncommon} />
            <RarityBadge rarity={MagicItemRarity.Rare} />
            <RarityBadge rarity={MagicItemRarity.VeryRare} />
            <RarityBadge rarity={MagicItemRarity.Legendary} />
            <div className="p-1 w-8 h-8 bg-[#d9bda5] rounded-full">
                <ScrollIcon />
            </div>
            <div className="p-1.5 w-8 h-8 bg-[#d9bda5] rounded-full">
                <WeaponIcon />
            </div>

        </div>
    )
}

