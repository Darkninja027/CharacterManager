import * as Types from '@types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: number, name: string }> };


export const GetItemsDocument = `
    query GetItems {
  items {
    id
    name
  }
}
    `;
export const useGetItemsQuery = <
      TData = GetItemsQuery,
      TError = unknown
    >(
      variables?: GetItemsQueryVariables,
      options?: UseQueryOptions<GetItemsQuery, TError, TData>
    ) =>
    useQuery<GetItemsQuery, TError, TData>(
      variables === undefined ? ['GetItems'] : ['GetItems', variables],
      httpClient<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, variables),
      options
    );