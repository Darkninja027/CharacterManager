import * as Types from '@types';

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'MagicItem', id: number, name: string }> };

export type CreateItemMutationVariables = Types.Exact<{
  item: Types.MagicItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutations', createItem: { __typename?: 'MagicItem', id: number } };


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
export const CreateItemDocument = `
    mutation createItem($item: MagicItemInput!) {
  createItem(item: $item) {
    id
  }
}
    `;
export const useCreateItemMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateItemMutation, TError, CreateItemMutationVariables, TContext>) =>
    useMutation<CreateItemMutation, TError, CreateItemMutationVariables, TContext>(
      ['createItem'],
      (variables?: CreateItemMutationVariables) => httpClient<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, variables)(),
      options
    );