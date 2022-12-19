import { useQuery } from "react-query";

export default function useGetAllCharacters() {
    const query = useQuery(['AllCharacters'], { queryFn: getAllCharacters })
    return query
}

async function getAllCharacters() {
    const resp = await fetch("http://localhost:4680/api/Character", {
        mode: "no-cors"
    })
    return await resp.json()

}