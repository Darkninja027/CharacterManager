import { useNavigate } from "@tanstack/react-location"
import PageHeader from "../../components/PageHeader"
import { useGetAllCHaractersQuery } from "./characters.generated"

export function CharactersPage() {
    const navigate = useNavigate()
    const { isLoading, data: { allCharacters } = {} } = useGetAllCHaractersQuery()
    console.log(allCharacters)
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