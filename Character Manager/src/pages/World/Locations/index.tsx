import { AddIcon } from "../../../common/icons/SvgList";
import { Page } from "../../../components/Page";
import PageHeader from "../../../components/PageHeader";

export default function Locations() {
    return (
        <Page title="Locations" backButton="../.." action icon={<AddIcon />} onClick={(e) => {
            e.preventDefault()
        }} >
        </Page>
    )
}