import { MagicItemCategory, MagicItemInput, MagicItemRarity } from "@types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import Form from "../../components/Form";
import ItemForm from "../../components/Form/ItemForm";
import Button from "../../components/formInputs/Button";
import Input from "../../components/formInputs/Input";
import Radio from "../../components/formInputs/Radio";
import TextArea from "../../components/formInputs/TextArea";
import MagicItemCard from "../../components/magicItemCard";


import { useCreateMagicItemMutation, useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { items } = {} } = useGetItemsQuery();
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
                {items?.map((item) => (
                    <MagicItemCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}