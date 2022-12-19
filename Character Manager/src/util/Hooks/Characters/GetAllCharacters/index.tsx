import { useQuery } from "react-query";

export default function useGetAllCharacters() {
    const query = useQuery(['AllCharacters'], { queryFn: getAllCharacters })
    return query
}

async function getAllCharacters() {
    const resp = await fetch("http://localhost:4680/api/Character", {
        method: "GET",
    })

    const data = await resp.json()
    return data

}