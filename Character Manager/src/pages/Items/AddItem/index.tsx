import ItemForm from "../../../components/Form/ItemForm";
import PageHeader from "../../../components/PageHeader";

export function AddItem() {
    return (
        <>
            <PageHeader title="Add Magic Item" backButton />
            <div className="mx-5 pt-32">
                <ItemForm />
            </div>
        </>
    )
}