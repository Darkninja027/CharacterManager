import { MagicItemInput } from "@types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateItemMutation, useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { items } = {} } = useGetItemsQuery();
    const itemMutation = useCreateItemMutation();

    const { register, handleSubmit } = useForm<MagicItemInput>()

    const onSubmit: SubmitHandler<MagicItemInput> = (data) => {
        itemMutation.mutate({ item: data });
    }
    if (isLoading) {
        <p>Loading...</p>
    }
    return (
        <div className="grow m-5">

            <div className="">
                <header className="text-2xl">Items</header>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-min gap-5">
                    <input type="text"{...register("name")} />
                    <input type="text"{...register("description")} />
                    <button type="submit">
                        Test
                    </button>
                </form>
                <div>
                    {items?.map(item => {
                        return (
                            <p>{item.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}