import { useNavigate } from "@tanstack/react-location"
import PageHeader from "../../components/PageHeader"
import { useGetAllCHaractersQuery } from "./characters.generated"

export function CharactersPage() {
    const navigate = useNavigate()
    const { isLoading, data: { allCharacters } = {} } = useGetAllCHaractersQuery()
    console.log(allCharacters)
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (allCharacters?.length == 0) {
        return (
            <div className="bg-red-400 w-full col-span-12 rounded-full px-5 py-3 text-red-900">
                'No Characters found'
            </div>
        )
    }
    return (
        <>
            <PageHeader title="Characters" label="Add Character" onClick={(e) => {
                e.preventDefault()
                navigate({ to: "new" })
            }} />
            <div className="grid grid-cols-3 gap-5">
                {allCharacters?.map(char => {
                    return (
                        <div>{char.name}</div>
                    )
                })}
            </div>
        </>
    )
}