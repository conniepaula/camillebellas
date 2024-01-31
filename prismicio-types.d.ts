// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | WorkSlice
  | ContactSlice
  | ProcessSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Project Name field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_name: prismic.KeyTextField;

  /**
   * Project Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
  /**
   * Link field in *Settings → Nav Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Nav Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Developer*
 */
export interface SettingsDocumentDataDeveloperItem {
  /**
   * Developer Name field in *Settings → Developer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.developer[].developer_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  developer_name: prismic.KeyTextField;

  /**
   * Developer Contact Link field in *Settings → Developer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.developer[].developer_contact_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  developer_contact_link: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Nav Item field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

  /**
   * Call to Action Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * Call to Action Label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * Linkedin Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin_link: prismic.LinkField;

  /**
   * Twitter Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.twitter_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter_link: prismic.LinkField;

  /**
   * Developer field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.developer[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  developer: prismic.GroupField<Simplify<SettingsDocumentDataDeveloperItem>> /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | ProjectDocument
  | SettingsDocument;

/**
 * Primary content in *Contact → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Heading field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Contact → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Tag Line field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Portrait field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.portrait
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  portrait: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Process → Primary*
 */
export interface ProcessSliceDefaultPrimary {
  /**
   * Heading field in *Process → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: process.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Process → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: process.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Image field in *Process → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: process.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Process Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProcessSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProcessSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Process*
 */
type ProcessSliceVariation = ProcessSliceDefault;

/**
 * Process Shared Slice
 *
 * - **API ID**: `process`
 * - **Description**: Process
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProcessSlice = prismic.SharedSlice<
  "process",
  ProcessSliceVariation
>;

/**
 * Primary content in *Work → Primary*
 */
export interface WorkSliceDefaultPrimary {
  /**
   * Heading field in *Work → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Quote Author field in *Work → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.primary.quote_author
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quote_author: prismic.KeyTextField;

  /**
   * Quote Content field in *Work → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.primary.quote_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quote_content: prismic.KeyTextField;
}

/**
 * Primary content in *Work → Items*
 */
export interface WorkSliceDefaultItem {
  /**
   * Project field in *Work → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: work.items[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField<"project">;
}

/**
 * Default variation for Work Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkSliceDefaultPrimary>,
  Simplify<WorkSliceDefaultItem>
>;

/**
 * Slice variation for *Work*
 */
type WorkSliceVariation = WorkSliceDefault;

/**
 * Work Shared Slice
 *
 * - **API ID**: `work`
 * - **Description**: Work
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSlice = prismic.SharedSlice<"work", WorkSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavItemItem,
      SettingsDocumentDataDeveloperItem,
      AllDocumentTypes,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProcessSlice,
      ProcessSliceDefaultPrimary,
      ProcessSliceVariation,
      ProcessSliceDefault,
      WorkSlice,
      WorkSliceDefaultPrimary,
      WorkSliceDefaultItem,
      WorkSliceVariation,
      WorkSliceDefault,
    };
  }
}
