import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../../common/icons/SvgList";
import PageHeader from "../../../components/PageHeader";

export default function Npc() {
    const navigate = useNavigate();
    return (
        <PageHeader title="NPCs" backButton="/characters" icon={<AddIcon />} action={true} onClick={(e) => {
            e.preventDefault()
            navigate({ to: "new" })
        }} />
    )
}