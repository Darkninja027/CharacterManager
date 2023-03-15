import * as Types from '@types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetAllLanguagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQuery = { __typename?: 'Query', allLanguages: Array<{ __typename?: 'Languages', id: number, name: string }> };


export const GetAllLanguagesDocument = `
    query GetAllLanguages {
  allLanguages {
    id
    name
  }
}
    `;
export const useGetAllLanguagesQuery = <
      TData = GetAllLanguagesQuery,
      TError = unknown
    >(
      variables?: GetAllLanguagesQueryVariables,
      options?: UseQueryOptions<GetAllLanguagesQuery, TError, TData>
    ) =>
    useQuery<GetAllLanguagesQuery, TError, TData>(
      variables === undefined ? ['GetAllLanguages'] : ['GetAllLanguages', variables],
      httpClient<GetAllLanguagesQuery, GetAllLanguagesQueryVariables>(GetAllLanguagesDocument, variables),
      options
    );