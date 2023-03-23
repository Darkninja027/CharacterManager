import { useMatch, useNavigate } from "@tanstack/react-location";
import ItemForm from "../../../components/Form/ItemForm";
import PageHeader from "../../../components/PageHeader";
import { useGetMagicItemsQuery } from "../items.generated";

export default function EditItem() {
    const params = useMatch()
    const nav = useNavigate()
    const { isLoading, data: { magicItem } = {} } = useGetMagicItemsQuery({ id: parseInt(params.params.id) })
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <>

            <PageHeader title={`Edit ${magicItem?.name}`} backButton />
            <ItemForm magicItem={magicItem} />
        </>
    )
}