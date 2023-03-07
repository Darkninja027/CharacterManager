import { useGetItemsQuery } from "./itemquery.generated"

export default function ItemsPage() {

    const { isLoading, data } = useGetItemsQuery();
    return (
        <div className="grow m-5">

            <div className="flex justify-between items-center">
                <header className="text-2xl">Items</header>

            </div>
        </div>
    )
}