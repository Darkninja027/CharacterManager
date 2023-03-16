import * as Types from '@types';

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetAllLanguagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQuery = { __typename?: 'Query', allLanguages: Array<{ __typename?: 'Languages', id: number, name: string }> };

export type CreateLanguageMutationVariables = Types.Exact<{
  language: Types.LanguageInput;
}>;


export type CreateLanguageMutation = { __typename?: 'Mutations', createLanguage: { __typename?: 'Languages', id: number } };

export type DeleteLanguageMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteLanguageMutation = { __typename?: 'Mutations', deleteLanguage: boolean };


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
export const CreateLanguageDocument = `
    mutation createLanguage($language: LanguageInput!) {
  createLanguage(language: $language) {
    id
  }
}
    `;
export const useCreateLanguageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateLanguageMutation, TError, CreateLanguageMutationVariables, TContext>) =>
    useMutation<CreateLanguageMutation, TError, CreateLanguageMutationVariables, TContext>(
      ['createLanguage'],
      (variables?: CreateLanguageMutationVariables) => httpClient<CreateLanguageMutation, CreateLanguageMutationVariables>(CreateLanguageDocument, variables)(),
      options
    );
export const DeleteLanguageDocument = `
    mutation deleteLanguage($id: Int!) {
  deleteLanguage(id: $id)
}
    `;
export const useDeleteLanguageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteLanguageMutation, TError, DeleteLanguageMutationVariables, TContext>) =>
    useMutation<DeleteLanguageMutation, TError, DeleteLanguageMutationVariables, TContext>(
      ['deleteLanguage'],
      (variables?: DeleteLanguageMutationVariables) => httpClient<DeleteLanguageMutation, DeleteLanguageMutationVariables>(DeleteLanguageDocument, variables)(),
      options
    );