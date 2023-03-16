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

export type Character = {
  __typename?: 'Character';
  id: Scalars['Int'];
  languages: Array<Languages>;
  level: Scalars['Int'];
  name: Scalars['String'];
  race?: Maybe<Race>;
};

export enum CreatureTypeEnum {
  Aberration = 'ABERRATION',
  Beast = 'BEAST',
  Celestial = 'CELESTIAL',
  Construct = 'CONSTRUCT',
  Dragon = 'DRAGON',
  Elemental = 'ELEMENTAL',
  Fey = 'FEY',
  Fiend = 'FIEND',
  Giant = 'GIANT',
  Humanoid = 'HUMANOID',
  Monstrosity = 'MONSTROSITY',
  Ooze = 'OOZE',
  Plant = 'PLANT',
  Undead = 'UNDEAD'
}

export type DragonAncestry = {
  __typename?: 'DragonAncestry';
  breathSave: Scalars['String'];
  breathType: Scalars['String'];
  damageType: Scalars['String'];
  dragon: DragonEnum;
  id: Scalars['Int'];
  level1: Scalars['String'];
  level5: Scalars['String'];
  level11: Scalars['String'];
  level17: Scalars['String'];
  name: Scalars['String'];
  resistance: Scalars['String'];
};

export enum DragonEnum {
  Amethyst = 'AMETHYST',
  Black = 'BLACK',
  Blue = 'BLUE',
  Brass = 'BRASS',
  Bronze = 'BRONZE',
  Copper = 'COPPER',
  Crystal = 'CRYSTAL',
  Emerald = 'EMERALD',
  Gold = 'GOLD',
  Green = 'GREEN',
  Red = 'RED',
  Sapphire = 'SAPPHIRE',
  Silver = 'SILVER',
  Topaz = 'TOPAZ',
  White = 'WHITE'
}

export type LanguageInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type Languages = {
  __typename?: 'Languages';
  characters?: Maybe<Array<Character>>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum LanguagesEnum {
  Abanasinia = 'ABANASINIA',
  Abyssal = 'ABYSSAL',
  Aquan = 'AQUAN',
  Auran = 'AURAN',
  Celestial = 'CELESTIAL',
  Common = 'COMMON',
  DeepSpeech = 'DEEP_SPEECH',
  Draconic = 'DRACONIC',
  Dwarvish = 'DWARVISH',
  Elvish = 'ELVISH',
  Ergot = 'ERGOT',
  Giant = 'GIANT',
  Gnomish = 'GNOMISH',
  Goblin = 'GOBLIN',
  Hadozee = 'HADOZEE',
  Halfling = 'HALFLING',
  Ignan = 'IGNAN',
  Infernal = 'INFERNAL',
  Istarian = 'ISTARIAN',
  Kenderspeak = 'KENDERSPEAK',
  Kharolian = 'KHAROLIAN',
  Khur = 'KHUR',
  Kothian = 'KOTHIAN',
  Kraul = 'KRAUL',
  Leonin = 'LEONIN',
  Loxodon = 'LOXODON',
  Marquesian = 'MARQUESIAN',
  Merfolk = 'MERFOLK',
  Minotaur = 'MINOTAUR',
  Naush = 'NAUSH',
  Nerakese = 'NERAKESE',
  Nordmaarian = 'NORDMAARIAN',
  Orc = 'ORC',
  Primordial = 'PRIMORDIAL',
  Quori = 'QUORI',
  Reidran = 'REIDRAN',
  Solamnic = 'SOLAMNIC',
  Sphinx = 'SPHINX',
  Sylvan = 'SYLVAN',
  Terran = 'TERRAN',
  ThriKreen = 'THRI_KREEN',
  Undercommon = 'UNDERCOMMON',
  Vedalken = 'VEDALKEN',
  Zemnian = 'ZEMNIAN'
}

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
  createLanguage: Languages;
  createMagicItem: MagicItem;
  deleteAllItems: Scalars['Boolean'];
  deleteLanguage: Scalars['Boolean'];
  deleteMagicItem: Scalars['Boolean'];
  updateMagicItem: MagicItem;
};


export type MutationsCreateLanguageArgs = {
  language: LanguageInput;
};


export type MutationsCreateMagicItemArgs = {
  magicItem: MagicItemInput;
};


export type MutationsDeleteLanguageArgs = {
  id: Scalars['Int'];
};


export type MutationsDeleteMagicItemArgs = {
  id: Scalars['Int'];
};


export type MutationsUpdateMagicItemArgs = {
  magicItem: MagicItemInput;
};

export type Query = {
  __typename?: 'Query';
  allLanguages: Array<Languages>;
  magicItem: MagicItem;
  magicItems: Array<MagicItem>;
};


export type QueryMagicItemArgs = {
  id: Scalars['Int'];
};

export type Race = {
  __typename?: 'Race';
  charisma: Scalars['Int'];
  constitution: Scalars['Int'];
  defaultLanguage: LanguagesEnum;
  dexterity: Scalars['Int'];
  dragonAncestry?: Maybe<DragonAncestry>;
  dragonAncestryId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  intelligence: Scalars['Int'];
  knownFeats: Scalars['Int'];
  knownLanguages: Scalars['Int'];
  name: Scalars['String'];
  raceTraits?: Maybe<Array<RaceTraits>>;
  size: SizeEnum;
  speed: Scalars['Int'];
  strength: Scalars['Int'];
  type: CreatureTypeEnum;
  wisdom: Scalars['Int'];
};

export type RaceTraits = {
  __typename?: 'RaceTraits';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  race?: Maybe<Race>;
};

export enum SizeEnum {
  Gargantuan = 'GARGANTUAN',
  Huge = 'HUGE',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL',
  Tiny = 'TINY'
}
