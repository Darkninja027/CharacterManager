import { useNavigate } from "@tanstack/react-location"
import { AddIcon, DeleteIcon } from "../../common/icons/SvgList"
import { useAlert } from "../../common/util/Alerts"
import PageHeader from "../../components/PageHeader"
import { useDeleteCharacterMutation, useGetAllCHaractersQuery } from "./characters.generated"

export function CharactersPage() {
    const navigate = useNavigate()
    const alert = useAlert()
    const { isLoading, data: { allCharacters } = {} } = useGetAllCHaractersQuery()
    const deleteCharacter = useDeleteCharacterMutation({
        onSuccess: () => {
            alert.show("success", "Character Deleted")
        }
    })
    // console.log(allCharacters)
    // if (isLoading) {
    //     return <p>Loading...</p>
    // }
    return (
        <>
            <PageHeader title="Characters" />
            <div className="grid grid-cols-3 gap-5">
                {allCharacters?.map(char => {
                    return (
                        <div className="flex gap-2">
                            <p>{char.name}</p>
                            <span className="hover:cursor-pointer" onClick={(e) => {
                                e.preventDefault()
                                deleteCharacter.mutate({ Id: char.id })
                            }}><DeleteIcon /></span>
                        </div>

                    )
                })}
            </div>
        </>
    )
}