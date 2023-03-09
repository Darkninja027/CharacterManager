import { MagicItemCategory, MagicItemInput, MagicItemRarity } from "@types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import Button from "../../components/formInputs/Button";
import Input from "../../components/formInputs/Input";
import Radio from "../../components/formInputs/Radio";
import MagicItemCard from "../../components/magicItemCard";

import { useCreateMagicItemMutation, useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { items } = {} } = useGetItemsQuery();
    const itemMutation = useCreateMagicItemMutation({
        onSuccess: () => {
            methods.reset()
        }
    });
    const [showForm, setShowForm] = useState<boolean>(false)
    const methods = useForm<MagicItemInput>()
    const onSubmit: SubmitHandler<MagicItemInput> = (data) => {
        itemMutation.mutate({ magicItem: data });
    }

    const categories = Object.values(MagicItemCategory)
    const rarities = [
        MagicItemRarity.Common,
        MagicItemRarity.Uncommon,
        MagicItemRarity.Rare,
        MagicItemRarity.VeryRare,
        MagicItemRarity.Legendary,
    ]
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
                <Form methods={methods} onSubmit={onSubmit}>
                    <Input methods={methods} name="name" label="Name" required />
                    <Input methods={methods} name="description" label="Description" required />

                    {categories.map(category => (
                        <Radio key={category} methods={methods} name="category" value={category} />
                    ))}

                    {rarities.map(rarity => (
                        <Radio key={rarity} methods={methods} name="rarity" value={rarity} />
                    ))}

                    <Button label="Add Magic Item" />
                </Form>
            )}
            <div className="grid grid-cols-4 gap-3 items-start flex-wrap">

                {items?.map((item) => {
                    return (
                        <MagicItemCard key={item.id} item={item} />
                    )
                })}
            </div>
        </>
    )
}