import { useQuery } from "react-query";

export default function useGetAllCharacters() {
    const query = useQuery(['AllCharacters'], { queryFn: getAllCharacters })
    return query
}

async function getAllCharacters() {
    const resp = await fetch("http://localhost:4680/api/Character", {
        method: "GET",
        headers: {

        }
    })

    console.log(resp, resp.text())
    const data = await resp.json()
    return data

}