import { MagicItemCategory, MagicItemInput, MagicItemRarity } from "@types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/formInputs/Input";
import MagicItemCard from "../../components/magicItemCard";
import { useCreateMagicItemMutation, useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { items } = {} } = useGetItemsQuery();
    const itemMutation = useCreateMagicItemMutation();
    const [showForm, setShowForm] = useState<boolean>(false)
    const methods = useForm<MagicItemInput>()

    const onSubmit: SubmitHandler<MagicItemInput> = (data) => {
        data.rarity = MagicItemRarity.Common
        data.category = MagicItemCategory.WonderousItem
        itemMutation.mutate({ magicItem: data });
    }
    if (isLoading) {
        <p>Loading...</p>
    }
    return (


        <>
            <div className="flex justify-between items-center">
                <header className="text-2xl">Items</header>
                <button onClick={(e) => {
                    e.preventDefault()
                    setShowForm(!showForm)
                }}>{!showForm ? "Add Item" : "Hide"}</button>
            </div>
            {showForm && (
                <Form methods={methods}>
                    <Input methods={methods} name="name" label="Name" required />
                    <Input methods={methods} name="description" label="Description" required />
                </Form>
            )}
            {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-min gap-5">
                    <input type="text"{...register("name")} />
                    <input type="text"{...register("description")} />
                    <button type="submit">
                        Test
                    </button>
                </form> */}
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