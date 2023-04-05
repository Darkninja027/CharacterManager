import * as Types from '@types';

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type CreateCharacterMutationVariables = Types.Exact<{
  character: Types.PlayerCharacterInput;
}>;


export type CreateCharacterMutation = { __typename?: 'Mutations', createCharacter: { __typename?: 'Character', id: number } };

export type GetAllCHaractersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCHaractersQuery = { __typename?: 'Query', allCharacters: Array<{ __typename?: 'Character', id: number, name: string, level: number, languages: Array<{ __typename?: 'Languages', id: number, name: string }>, race?: { __typename?: 'Race', id: number } | null }> };


export const CreateCharacterDocument = `
    mutation createCharacter($character: PlayerCharacterInput!) {
  createCharacter(character: $character) {
    id
  }
}
    `;
export const useCreateCharacterMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCharacterMutation, TError, CreateCharacterMutationVariables, TContext>) =>
    useMutation<CreateCharacterMutation, TError, CreateCharacterMutationVariables, TContext>(
      ['createCharacter'],
      (variables?: CreateCharacterMutationVariables) => httpClient<CreateCharacterMutation, CreateCharacterMutationVariables>(CreateCharacterDocument, variables)(),
      options
    );
export const GetAllCHaractersDocument = `
    query getAllCHaracters {
  allCharacters {
    id
    name
    level
    languages {
      id
      name
    }
    race {
      id
    }
  }
}
    `;
export const useGetAllCHaractersQuery = <
      TData = GetAllCHaractersQuery,
      TError = unknown
    >(
      variables?: GetAllCHaractersQueryVariables,
      options?: UseQueryOptions<GetAllCHaractersQuery, TError, TData>
    ) =>
    useQuery<GetAllCHaractersQuery, TError, TData>(
      variables === undefined ? ['getAllCHaracters'] : ['getAllCHaracters', variables],
      httpClient<GetAllCHaractersQuery, GetAllCHaractersQueryVariables>(GetAllCHaractersDocument, variables),
      options
    );