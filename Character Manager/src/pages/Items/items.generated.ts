import * as Types from '@types';

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'MagicItem', id: number, name: string }> };

export type CreateMagicItemMutationVariables = Types.Exact<{
  magicItem: Types.MagicItemInput;
}>;


export type CreateMagicItemMutation = { __typename?: 'Mutations', createMagicItem: { __typename?: 'MagicItem', id: number } };


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
export const CreateMagicItemDocument = `
    mutation createMagicItem($magicItem: MagicItemInput!) {
  createMagicItem(magicItem: $magicItem) {
    id
  }
}
    `;
export const useCreateMagicItemMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateMagicItemMutation, TError, CreateMagicItemMutationVariables, TContext>) =>
    useMutation<CreateMagicItemMutation, TError, CreateMagicItemMutationVariables, TContext>(
      ['createMagicItem'],
      (variables?: CreateMagicItemMutationVariables) => httpClient<CreateMagicItemMutation, CreateMagicItemMutationVariables>(CreateMagicItemDocument, variables)(),
      options
    );