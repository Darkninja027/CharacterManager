import * as Types from '@types';

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'MagicItem', id: number, name: string, description: string, category: Types.MagicItemCategory, rarity: Types.MagicItemRarity, property1?: string | null, property2?: string | null, property3?: string | null }> };

export type CreateMagicItemMutationVariables = Types.Exact<{
  magicItem: Types.MagicItemInput;
}>;


export type CreateMagicItemMutation = { __typename?: 'Mutations', createMagicItem: { __typename?: 'MagicItem', id: number } };

export type DeleteMagicItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteMagicItemMutation = { __typename?: 'Mutations', deleteMagicItem: boolean };


export const GetItemsDocument = `
    query GetItems {
  items {
    id
    name
    description
    category
    rarity
    property1
    property2
    property3
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
export const DeleteMagicItemDocument = `
    mutation deleteMagicItem($id: Int!) {
  deleteMagicItem(id: $id)
}
    `;
export const useDeleteMagicItemMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteMagicItemMutation, TError, DeleteMagicItemMutationVariables, TContext>) =>
    useMutation<DeleteMagicItemMutation, TError, DeleteMagicItemMutationVariables, TContext>(
      ['deleteMagicItem'],
      (variables?: DeleteMagicItemMutationVariables) => httpClient<DeleteMagicItemMutation, DeleteMagicItemMutationVariables>(DeleteMagicItemDocument, variables)(),
      options
    );