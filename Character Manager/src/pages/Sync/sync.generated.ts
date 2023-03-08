import * as Types from '@types';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type DeleteAllItemsMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type DeleteAllItemsMutation = { __typename?: 'Mutations', deleteAllItems: boolean };


export const DeleteAllItemsDocument = `
    mutation deleteAllItems {
  deleteAllItems
}
    `;
export const useDeleteAllItemsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteAllItemsMutation, TError, DeleteAllItemsMutationVariables, TContext>) =>
    useMutation<DeleteAllItemsMutation, TError, DeleteAllItemsMutationVariables, TContext>(
      ['deleteAllItems'],
      (variables?: DeleteAllItemsMutationVariables) => httpClient<DeleteAllItemsMutation, DeleteAllItemsMutationVariables>(DeleteAllItemsDocument, variables)(),
      options
    );