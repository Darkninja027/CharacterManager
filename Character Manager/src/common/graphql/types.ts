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
  property1?: Maybe<Scalars['String']>;
  property2?: Maybe<Scalars['String']>;
  property3?: Maybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['Int']>;
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
  createMagicItem: MagicItem;
  deleteAllItems: Scalars['Boolean'];
  deleteMagicItem: Scalars['Boolean'];
  updateMagicItem: MagicItem;
};


export type MutationsCreateMagicItemArgs = {
  magicItem: MagicItemInput;
};


export type MutationsDeleteMagicItemArgs = {
  id: Scalars['Int'];
};


export type MutationsUpdateMagicItemArgs = {
  magicItem: MagicItemInput;
};

export type Query = {
  __typename?: 'Query';
  magicItem: MagicItem;
  magicItems: Array<MagicItem>;
};


export type QueryMagicItemArgs = {
  id: Scalars['Int'];
};
