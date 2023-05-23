import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../common/icons/SvgList";
import MagicItemCard from "../../components/MagicItemCard";


import { Page } from "../../components/Page";
import { useGetItemsQuery } from "./items.generated";

export default function ItemsPage() {

    const { isLoading, data: { magicItems } = {} } = useGetItemsQuery();
    const navigate = useNavigate();

    if (isLoading) {
        <p>Loading...</p>
    }

    return (
        <Page title="Magic Items" buttonText="Add Magic Item" icon={<AddIcon />} onClick={(e) => {
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