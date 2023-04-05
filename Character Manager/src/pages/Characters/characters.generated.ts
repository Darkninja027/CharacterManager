import * as Types from '@types';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { httpClient } from '@httpClient';
export type CreateCharacterMutationVariables = Types.Exact<{
  character: Types.PlayerCharacterInput;
}>;


export type CreateCharacterMutation = { __typename?: 'Mutations', createCharacter: { __typename?: 'Character', id: number } };


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