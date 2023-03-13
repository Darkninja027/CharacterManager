import * as Types from '@types';

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'MagicItem', id: number, name: string, description: string, category: Types.MagicItemCategory, rarity: Types.MagicItemRarity, property1?: string | null, property2?: string | null, property3?: string | null }> };

export type GetMagicItemsQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetMagicItemsQuery = { __typename?: 'Query', magicItem: { __typename?: 'MagicItem', id: number, name: string, description: string, category: Types.MagicItemCategory, rarity: Types.MagicItemRarity, property1?: string | null, property2?: string | null, property3?: string | null } };

export type CreateMagicItemMutationVariables = Types.Exact<{
  magicItem: Types.MagicItemInput;
}>;


export type CreateMagicItemMutation = { __typename?: 'Mutations', createMagicItem: { __typename?: 'MagicItem', id: number } };

export type EditMagicItemMutationVariables = Types.Exact<{
  magicItem: Types.MagicItemInput;
}>;


export type EditMagicItemMutation = { __typename?: 'Mutations', updateMagicItem: { __typename?: 'MagicItem', id: number } };

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
export const GetMagicItemsDocument = `
    query GetMagicItems($id: Int!) {
  magicItem(id: $id) {
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
export const useGetMagicItemsQuery = <
      TData = GetMagicItemsQuery,
      TError = unknown
    >(
      variables: GetMagicItemsQueryVariables,
      options?: UseQueryOptions<GetMagicItemsQuery, TError, TData>
    ) =>
    useQuery<GetMagicItemsQuery, TError, TData>(
      ['GetMagicItems', variables],
      httpClient<GetMagicItemsQuery, GetMagicItemsQueryVariables>(GetMagicItemsDocument, variables),
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
export const EditMagicItemDocument = `
    mutation editMagicItem($magicItem: MagicItemInput!) {
  updateMagicItem(item: $magicItem) {
    id
  }
}
    `;
export const useEditMagicItemMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<EditMagicItemMutation, TError, EditMagicItemMutationVariables, TContext>) =>
    useMutation<EditMagicItemMutation, TError, EditMagicItemMutationVariables, TContext>(
      ['editMagicItem'],
      (variables?: EditMagicItemMutationVariables) => httpClient<EditMagicItemMutation, EditMagicItemMutationVariables>(EditMagicItemDocument, variables)(),
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