import Card from "../../../components/Card";
import ItemForm from "../../../components/Form/ItemForm";
import { Page } from "../../../components/Page";

export function AddItem() {
    return (
        <Page title="Add Magic Item" backButton={".."}>
            <Card>
                <ItemForm />
            </Card>
        </Page>
    )
}