import { MagicItemCategory, MagicItemInput, MagicItemRarity } from "@types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import Form from "../../components/Form";
import Button from "../../components/formInputs/Button";
import Input from "../../components/formInputs/Input";
import Radio from "../../components/formInputs/Radio";
import TextArea from "../../components/formInputs/TextArea";
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
        console.log(data)
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
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <Input methods={methods} name="name" label="Name" required />
                                <Input methods={methods} name="description" label="Description" required />
                            </div>

                            <div className="flex gap-3">
                                <span>
                                    <label>Item Category</label>
                                    {categories.map(category => (
                                        <Radio key={category} methods={methods} name="category" value={category} />
                                    ))}
                                </span>
                                <span>
                                    <label>Item Rarity</label>
                                    {rarities.map(rarity => (
                                        <Radio key={rarity} methods={methods} name="rarity" value={rarity} />
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <TextArea methods={methods} name="property1" label="Property 1" />
                            <TextArea methods={methods} name="property2" label="Property 2" />
                            {<TextArea methods={methods} name="property3" label="Property 3" />}
                        </div>
                    </div>
                    <Button className="mt-3" label="Add Magic Item" />
                </Form>
            )}
            <div className="grid grid-cols-4 gap-3 items-start flex-wrap mt-10">
                {items?.map((item) => (
                    <MagicItemCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}