import { useNavigate } from "@tanstack/react-location";
import { useState } from "react";
import { AddIcon } from "../../common/icons/SvgList";
import ItemForm from "../../components/Form/ItemForm";
import MagicItemCard from "../../components/MagicItemCard";
import PageHeader from "../../components/PageHeader";


import { useGetItemsQuery } from "./items.generated";
import { Page } from "../../components/Page";

export default function ItemsPage() {

    const { isLoading, data: { magicItems } = {} } = useGetItemsQuery();
    const navigate = useNavigate();

    if (isLoading) {
        <p>Loading...</p>
    }

    return (
        <Page title="Magic Items" action={true} icon={<AddIcon />} onClick={(e) => {
            e.preventDefault()
            navigate({ to: "new" })
        }}>

            <div className="flex flex-wrap gap-5">
                {magicItems && magicItems?.length < 1 && (
                    <div className="bg-dnd-red-300 w-full col-span-12 rounded-full px-5 py-3 text-dnd-red-700">
                        'No magic items found'
                    </div>
                )}
                {magicItems?.map((magicItem) => (
                    <MagicItemCard key={magicItem.id} item={magicItem} />
                ))}
            </div>

        </Page>
    )
}