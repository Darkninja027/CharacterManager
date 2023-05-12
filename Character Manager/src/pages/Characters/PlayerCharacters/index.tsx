import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../../common/icons/SvgList";
import PageHeader from "../../../components/PageHeader";

export default function PlayerCharacters() {
    const navigate = useNavigate();
    return (
        // <PageHeader title="Player Characters" backButton action={true} icon={<AddIcon />} onClick={(e) => {
        //     e.preventDefault();
        //     navigate({ to: "new" })
        // }} />
        <PageHeader title="Player Characters" backButton={"/characters"} icon={<AddIcon />} action={true} onClick={(e) => {
            e.preventDefault()
            navigate({ to: "new" })
        }} />
    )
}