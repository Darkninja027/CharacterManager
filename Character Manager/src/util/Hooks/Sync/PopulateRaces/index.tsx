import { useMutation, useQuery } from "react-query";

export default function usePopulateRaces() {
    const query = useMutation({ mutationFn: populateRaces })
    return query

}

async function populateRaces() {
    const response = await fetch("http://localhost:4680/api/Data/SeedRaces", {
        method: "POST"
    });
    const data = await response.json();
    return data;

}