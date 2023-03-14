import { useState } from "react";
import ItemForm from "../../components/Form/ItemForm";
import MagicItemCard from "../../components/magicItemCard";


import { useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { magicItems } = {} } = useGetItemsQuery();
    const [showForm, setShowForm] = useState<boolean>(false)

    if (isLoading) {
        <p>Loading...</p>
    }

    return (


        <>
            <div className="flex justify-between items-center">
                <header className="text-2xl">Magic Items</header>
                <button onClick={(e) => {
                    e.preventDefault()
                    setShowForm(!showForm)
                }}>{!showForm ? "Add Item" : "Hide"}</button>
            </div>
            {showForm && (
                <ItemForm />
            )}

            <div className="grid grid-cols-4 gap-3 items-start flex-wrap mt-10">
                {magicItems && magicItems?.length < 1 && (
                    <div className="bg-red-400 w-full col-span-12 rounded-full px-5 py-3 text-red-900">
                        'No magic items found'
                    </div>
                )}
                {magicItems?.map((magicItem) => (
                    <MagicItemCard key={magicItem.id} item={magicItem} />
                ))}
            </div>
        </>
    )
}