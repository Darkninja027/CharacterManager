import useGetAllCharacters from "../../util/Hooks/Characters/GetAllCharacters"

export function CharactersPage() {

    const { isLoading, data } = useGetAllCharacters()

    return (
        <>
            <div className="grow">

                <div className="flex justify-between items-center">
                    <header className="text-2xl">Characters</header>
                    <button>Add New</button>
                </div>
            </div>
        </>
    )
}