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

export enum AlignmentEnum {
  ChaoticEvil = 'CHAOTIC_EVIL',
  ChaoticGood = 'CHAOTIC_GOOD',
  ChaoticNeutral = 'CHAOTIC_NEUTRAL',
  LawfulEvil = 'LAWFUL_EVIL',
  LawfulGood = 'LAWFUL_GOOD',
  LawfulNeutral = 'LAWFUL_NEUTRAL',
  NeutralEvil = 'NEUTRAL_EVIL',
  NeutralGood = 'NEUTRAL_GOOD',
  TrueNeutral = 'TRUE_NEUTRAL'
}

export type Character = {
  __typename?: 'Character';
  age?: Maybe<Scalars['Int']>;
  alignment?: Maybe<AlignmentEnum>;
  armorClass: Scalars['Int'];
  bonds?: Maybe<Scalars['String']>;
  charisma: Scalars['Int'];
  charismaModifier: Scalars['Int'];
  constitution: Scalars['Int'];
  constitutionModifier: Scalars['Int'];
  dexterity: Scalars['Int'];
  dexterityModifier: Scalars['Int'];
  experience?: Maybe<Scalars['Int']>;
  eyes?: Maybe<Scalars['String']>;
  flaws?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  health: Scalars['Int'];
  height?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  ideals?: Maybe<Scalars['String']>;
  intelligence: Scalars['Int'];
  intelligenceModifier: Scalars['Int'];
  languages: Array<Languages>;
  level: Scalars['Int'];
  maxHealth: Scalars['Int'];
  milestone: Scalars['Boolean'];
  name: Scalars['String'];
  personalityTraits?: Maybe<Scalars['String']>;
  proficiencyBonus: Scalars['Int'];
  race?: Maybe<Race>;
  size: SizeEnum;
  skills: Array<Skill>;
  skin?: Maybe<Scalars['String']>;
  strength: Scalars['Int'];
  strengthModifier: Scalars['Int'];
  temporaryHealth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
  wisdom: Scalars['Int'];
  wisdomModifier: Scalars['Int'];
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
  createCharacter: Character;
  createLanguage: Languages;
  createMagicItem: MagicItem;
  deleteAllItems: Scalars['Boolean'];
  deleteLanguage: Scalars['Boolean'];
  deleteMagicItem: Scalars['Boolean'];
  updateMagicItem: MagicItem;
};


export type MutationsCreateCharacterArgs = {
  character: PlayerCharacterInput;
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

export type PcLanguagesInput = {
  id: Scalars['Int'];
};

export type PcSkillsInput = {
  attribute: Scalars['String'];
  expertise: Scalars['Boolean'];
  modifier: Scalars['Int'];
  name: Scalars['String'];
  proficient: Scalars['Boolean'];
};

export type PlayerCharacterInput = {
  age?: InputMaybe<Scalars['Int']>;
  alignment?: InputMaybe<AlignmentEnum>;
  armorClass: Scalars['Int'];
  bonds?: InputMaybe<Scalars['String']>;
  charisma: Scalars['Int'];
  charismaModifier: Scalars['Int'];
  constitution: Scalars['Int'];
  constitutionModifier: Scalars['Int'];
  dexterity: Scalars['Int'];
  dexterityModifier: Scalars['Int'];
  experience?: InputMaybe<Scalars['Int']>;
  eyes?: InputMaybe<Scalars['String']>;
  flaws?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  hair?: InputMaybe<Scalars['String']>;
  health: Scalars['Int'];
  height?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ideals?: InputMaybe<Scalars['String']>;
  intelligence: Scalars['Int'];
  intelligenceModifier: Scalars['Int'];
  languages: Array<PcLanguagesInput>;
  level: Scalars['Int'];
  maxHealth: Scalars['Int'];
  milestone: Scalars['Boolean'];
  name: Scalars['String'];
  personalityTraits?: InputMaybe<Scalars['String']>;
  proficiencyBonus: Scalars['Int'];
  savingThrows: Array<PcSkillsInput>;
  size: SizeEnum;
  skills: Array<PcSkillsInput>;
  skin?: InputMaybe<Scalars['String']>;
  strength: Scalars['Int'];
  strengthModifier: Scalars['Int'];
  temporaryHealth?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  wisdom: Scalars['Int'];
  wisdomModifier: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allCharacters: Array<Character>;
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

export type Skill = {
  __typename?: 'Skill';
  attribute: Scalars['String'];
  character: Character;
  expertise: Scalars['Boolean'];
  id: Scalars['Int'];
  modifier: Scalars['Int'];
  name: Scalars['String'];
  proficient: Scalars['Boolean'];
};
