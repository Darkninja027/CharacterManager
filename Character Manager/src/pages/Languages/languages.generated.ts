import * as Types from '@types';

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type GetAllLanguagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllLanguagesQuery = { __typename?: 'Query', allLanguages: Array<{ __typename?: 'Languages', id: number, name: string }> };

export type AddLanguageMutationVariables = Types.Exact<{
  language: Types.LanguageInput;
}>;


export type AddLanguageMutation = { __typename?: 'Mutations', addLanguage: { __typename?: 'Languages', id: number } };


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
export const AddLanguageDocument = `
    mutation addLanguage($language: LanguageInput!) {
  addLanguage(language: $language) {
    id
  }
}
    `;
export const useAddLanguageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddLanguageMutation, TError, AddLanguageMutationVariables, TContext>) =>
    useMutation<AddLanguageMutation, TError, AddLanguageMutationVariables, TContext>(
      ['addLanguage'],
      (variables?: AddLanguageMutationVariables) => httpClient<AddLanguageMutation, AddLanguageMutationVariables>(AddLanguageDocument, variables)(),
      options
    );