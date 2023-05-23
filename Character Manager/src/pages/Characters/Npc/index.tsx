import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../../common/icons/SvgList";
import { Page } from "../../../components/Page";
import PageHeader from "../../../components/PageHeader";

export default function Npc() {
    const navigate = useNavigate();
    return (
        <Page title="NPCs" backButton="/characters" icon={<AddIcon />} buttonText="Add NPC" onClick={(e) => {
            e.preventDefault()
            navigate({ to: "new" })
        }} >

        </Page>
    )
}