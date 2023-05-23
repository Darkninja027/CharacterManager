import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../../common/icons/SvgList";
import { Page } from "../../../components/Page";
import PageHeader from "../../../components/PageHeader";

export default function PlayerCharacters() {
    const navigate = useNavigate();
    return (
        <Page title="Player Characters" backButton={"/characters"} icon={<AddIcon />} buttonText="Add Character" onClick={(e) => {
            e.preventDefault()
            navigate({ to: "new" })
        }}>

        </Page>
    )
}