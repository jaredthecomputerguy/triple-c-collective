/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    blogs: Blog;
    media: Media;
    deals: Deal;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface Blog {
  id: string;
  image: string | Media;
  slug: string;
  title: string;
  description: string;
  content: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Deal {
  id: string;
  active?: boolean | null;
  title: string;
  description: string;
  brand?:
    | (
        | 'ELYON'
        | "JUICY JAY'S"
        | 'RAW'
        | 'EAGLE'
        | 'HIGH HEMP'
        | 'DOMPEN'
        | 'GLASSHOUSE'
        | 'EQUILIBRIUM GENETICS'
        | 'STIIZY'
        | 'LOOKAH'
        | 'EVERYDAY SLUGGER'
        | 'FLORACAL'
        | 'TYSON 2.0'
        | 'LEVEL'
        | 'AKWAABA FARMS'
        | 'BIG BOY  DRO'
        | "UNCLE ARNIE'S"
        | 'PUFF POP'
        | 'NORTHERN EMERALDS'
        | 'KEEF LIFE H20'
        | 'HIGH SPIRITS'
        | 'ROYAL BLUNT'
        | 'STIIIZY'
        | 'SNICKLEFRITZ'
        | 'JUICY JAY'
        | 'AE EL BLUNTO'
        | 'EVERYDAY DABS'
        | 'ABX'
        | 'WAXMAID'
        | 'HIGH GRADE FARMS'
        | 'RAW GARDEN'
        | 'FLAV'
        | 'HERBAL CLEAN'
        | 'KOA'
        | 'EMERALD  BAY EXTRACTS'
        | 'OH WELL'
        | 'KING PALM'
        | 'JEETER'
        | 'HUMBOLDT TERP COUNCIL'
        | 'BABY JEETER'
        | 'ELEMENT'
        | 'LIGHTER LEASH'
        | 'EMERLAD BAY EXTRACTS'
        | 'KUSHY PUNCH'
        | 'SEVEN LEAVES'
        | 'ASH AND EMBER'
        | 'LMFAO'
        | 'ROYAL BLUNTS'
        | 'CLSICS'
        | 'BEMORE'
        | 'BOLT'
        | 'TOKER POKER'
        | 'KLARITY KRATOM'
        | 'PACIFIC STONE'
        | 'VETCBD'
        | 'SKUNK BRAND'
        | 'TECHNO'
        | 'GELATO'
        | 'SHAMAN'
        | 'DROPS'
        | 'NFUZED'
        | 'PUFF'
        | 'EIGHTY EAST'
        | 'PANDA CORE'
        | 'ZIG ZAG'
        | 'EMERALD SKY'
        | 'KIVA'
        | 'KRAVE'
        | 'CLIPPER'
        | 'CAMINO'
        | 'BANGERS'
        | 'CANNATRUST'
        | 'PURE LYFE'
        | 'PLUS'
        | 'MIDS FACTORY'
        | 'ARTISANAL HEMP'
        | 'WEST COAST TREEZ'
        | 'EMERALD BAY EXTRACTS'
        | 'FLAWLESS FLOWERS'
        | 'B.O.B STASH'
        | 'YUMMI KARMA'
        | 'ZAIG ZAG'
        | 'HEMP ZONE'
        | 'ELEMENTS'
        | 'YOCAN'
        | 'SHAMAN RESERVE'
        | "BIG PETE'S"
        | 'GEALTO'
        | 'WHIP IT'
        | "PAPA'S HERB"
        | 'GENERIC...'
        | 'PURE'
        | 'HONEYBUTTER'
        | 'HIGH SUPPLY'
        | 'CARE BY DESIGN'
        | "BALIEY'S"
        | 'MARY JONES'
        | 'GLASS HOUSE FARMS'
        | 'BIG BOY DRO'
        | 'WULF'
        | 'JUICY JAYS'
        | 'O.P.M.S'
        | 'MIDSFACTORY'
      )
    | null;
  categories?:
    | (
        | 'beverage'
        | 'pill'
        | 'tincture'
        | 'cartridge'
        | 'preroll'
        | 'flower'
        | 'extract'
        | 'edible'
        | 'plant'
        | 'merch'
      )[]
    | null;
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}