import { useNavigate } from "@tanstack/react-location";
import { useState } from "react";
import { AddIcon } from "../../common/icons/SvgList";
import ItemForm from "../../components/Form/ItemForm";
import MagicItemCard from "../../components/MagicItemCard";
import PageHeader from "../../components/PageHeader";


import { useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { magicItems } = {} } = useGetItemsQuery();
    const navigate = useNavigate();

    if (isLoading) {
        <p>Loading...</p>
    }

    return (
        <>
            <PageHeader title="Magic Items" action={true} icon={<AddIcon />} onClick={(e) => {
                e.preventDefault()
                navigate({ to: "new" })
            }} />

            <div className="mx-5 pt-32">
                <div className="grid grid-cols-4 gap-3 items-start flex-wrap">
                    {magicItems && magicItems?.length < 1 && (
                        <div className="bg-dnd-red-300 w-full col-span-12 rounded-full px-5 py-3 text-dnd-red-700">
                            'No magic items found'
                        </div>
                    )}
                    {magicItems?.map((magicItem) => (
                        <MagicItemCard key={magicItem.id} item={magicItem} />
                    ))}
                </div>
            </div>

        </>
    )
}