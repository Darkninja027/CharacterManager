import { useMatch, useNavigate } from "@tanstack/react-location";
import ItemForm from "../../../components/Form/ItemForm";
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
            <button onClick={(e) => {
                e.preventDefault()
                nav({ to: ".." })
            }}>go back</button>
            <h1>Edit item</h1>
            <ItemForm magicItem={magicItem} />
        </>
    )
}