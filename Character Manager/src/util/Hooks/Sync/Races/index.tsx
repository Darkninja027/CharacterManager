import { useMutation, useQuery } from "react-query";

export function usePopulateRaces() {
    const mutation = useMutation({ mutationFn: populateRaces })
    return mutation

}

async function populateRaces() {
    const response = await fetch("http://localhost:4680/api/Data/SeedRaces", {
        method: "POST"
    });
    const data = await response.json();
    return data;

}

export function useClearRaces() {
    const mutation = useMutation({ mutationFn: clearRaces });
    return mutation;
}

async function clearRaces() {
    const response = await fetch("http://localhost:4680/api/Data/ClearRaces", {
        method: "DELETE"
    });

    const data = response.json();
    return data;
}