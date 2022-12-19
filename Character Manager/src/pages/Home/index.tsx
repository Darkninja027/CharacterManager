import React from "react"
import useGetAllCharacters from "../../util/Hooks/Characters/GetAllCharacters"

export default function HomePage() {

    const { isLoading, data } = useGetAllCharacters()
    console.log(data)
    return (
        <div>
            Home
        </div>
    )
}