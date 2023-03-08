export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Item = {
  __typename?: 'Item';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ItemInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Mutations = {
  __typename?: 'Mutations';
  createItem: Item;
  updateItem: Item;
};


export type MutationsCreateItemArgs = {
  item: ItemInput;
};


export type MutationsUpdateItemArgs = {
  id: Scalars['Int'];
  item: ItemInput;
};

export type Query = {
  __typename?: 'Query';
  items: Array<Item>;
};
