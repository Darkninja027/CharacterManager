import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../common/icons/SvgList";
import PageHeader from "../../components/PageHeader";

export default function WorldsPage() {
    const navigate = useNavigate();
    return (
        <PageHeader title="Worlds" action={true} icon={<AddIcon />} onClick={(e) => {
            e.preventDefault();
            navigate({ to: "new" })
        }} />
    )
}