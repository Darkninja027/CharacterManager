import React from "react"
import useGetAllCharacters from "../../util/Hooks/Characters/GetAllCharacters"

export default function HomePage() {

    const { isLoading, data } = useGetAllCharacters()
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}