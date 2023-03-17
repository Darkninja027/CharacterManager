import { useNavigate } from "@tanstack/react-location"
import PageHeader from "../../components/PageHeader"

export function CharactersPage() {
    const navigate = useNavigate()
    return (
        <>
            <PageHeader title="Characters" label="Add Character" onClick={(e) => {
                e.preventDefault()
                navigate({ to: "new" })
            }} />
            <div className="grid grid-cols-3 gap-5">

            </div>
        </>
    )
}