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

export type MagicItem = {
  __typename?: 'MagicItem';
  category: MagicItemCategory;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  property1: Scalars['String'];
  property2: Scalars['String'];
  property3: Scalars['String'];
  rarity: MagicItemRarity;
};

export enum MagicItemCategory {
  Armor = 'ARMOR',
  Potion = 'POTION',
  Ring = 'RING',
  Rod = 'ROD',
  Scroll = 'SCROLL',
  Staff = 'STAFF',
  Wand = 'WAND',
  Weapon = 'WEAPON',
  WonderousItem = 'WONDEROUS_ITEM'
}

export type MagicItemInput = {
  category: MagicItemCategory;
  description: Scalars['String'];
  name: Scalars['String'];
  property1?: InputMaybe<Scalars['String']>;
  property2?: InputMaybe<Scalars['String']>;
  property3?: InputMaybe<Scalars['String']>;
  rarity: MagicItemRarity;
};

export enum MagicItemRarity {
  Common = 'COMMON',
  Legendary = 'LEGENDARY',
  Rare = 'RARE',
  Uncommon = 'UNCOMMON',
  VeryRare = 'VERY_RARE'
}

export type Mutations = {
  __typename?: 'Mutations';
  createItem: MagicItem;
  deleteAllItems: Scalars['Boolean'];
  updateItem: MagicItem;
};


export type MutationsCreateItemArgs = {
  item: MagicItemInput;
};


export type MutationsUpdateItemArgs = {
  id: Scalars['Int'];
  item: MagicItemInput;
};

export type Query = {
  __typename?: 'Query';
  items: Array<MagicItem>;
};
