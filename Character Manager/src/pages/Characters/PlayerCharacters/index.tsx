import { useNavigate } from "@tanstack/react-location";
import { AddIcon } from "../../../common/icons/SvgList";
import { useRolling } from "../../../common/util/RollingUi";
import { Page } from "../../../components/Page";
import PageHeader from "../../../components/PageHeader";

export default function PlayerCharacters() {
    const navigate = useNavigate();
    const rolling = useRolling();
    // rolling.show('roll', 'normal', [0, 0])
    return (
        <Page title="Player Characters" backButton={"/characters"} icon={<AddIcon />} buttonText="Add Character" onClick={(e) => {
            e.preventDefault()
            navigate({ to: "new" })
        }}>

        </Page>
    )
}