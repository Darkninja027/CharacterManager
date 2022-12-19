import useGetAllCharacters from "../../util/Hooks/Characters/GetAllCharacters"

export function CharactersPage() {

    const { isLoading, data } = useGetAllCharacters()

    return (
        <div className="">characters</div>
    )
}