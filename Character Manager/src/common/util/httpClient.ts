import { QueryKey } from "@tanstack/react-query";

export function httpClient<TData, TVariables>(query: string, variables?: TVariables): (
    opts?: {
        signal?: AbortSignal;
        queryKey?: QueryKey;
    }
) => Promise<TData> {
    return async (opts): Promise<TData> => {
        const res = await fetch("http://localhost:4680/graphql" as string, {
            method: "POST",
            redirect: 'manual',
            ...({ "headers": { "Content-Type": "application/json" } }),
            body: JSON.stringify({
                query,
                variables,
                operationName: opts?.queryKey![0]
            }),
        });

        if (!res.ok) {
            throw res;
        }

        const json = await res.json();

        if (json.errors) {
            throw json.errors;
        }

        return json.data;
    };
}