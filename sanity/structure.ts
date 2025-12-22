import { StructureBuilder } from 'sanity/structure'
import {
  DocumentIcon,
  CogIcon,
  MenuIcon,
  BlockElementIcon,
  ColorWheelIcon,
  TextIcon,
  ImageIcon,
  UsersIcon,
  RocketIcon,
  StackIcon,
  ComponentIcon,
  SparklesIcon,
  BoltIcon,
} from '@sanity/icons'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Pages Section
      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .child(
          S.documentTypeList('page')
            .title('All Pages')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),

      S.divider(),

      // Content Section
      S.listItem()
        .title('Website Content')
        .icon(StackIcon)
        .child(
          S.list()
            .title('Website Content')
            .items([
              S.listItem()
                .title('Services')
                .icon(RocketIcon)
                .child(
                  S.documentTypeList('service')
                    .title('Services')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('Team Members')
                .icon(UsersIcon)
                .child(
                  S.documentTypeList('teamMember')
                    .title('Team Members')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('Portfolio')
                .icon(ImageIcon)
                .child(
                  S.documentTypeList('portfolioItem')
                    .title('Portfolio Items')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('Products')
                .icon(ComponentIcon)
                .child(
                  S.documentTypeList('product')
                    .title('Products')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('Work Process')
                .icon(BoltIcon)
                .child(
                  S.documentTypeList('workProcess')
                    .title('Work Process Steps')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
            ])
        ),

      S.divider(),

      // Global Settings Section
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Global Settings & Effects')
                .icon(SparklesIcon)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Site Settings & Effects')
                ),
              S.listItem()
                .title('Theme & Branding')
                .icon(ColorWheelIcon)
                .child(
                  S.document()
                    .schemaType('themeSettings')
                    .documentId('themeSettings')
                    .title('Theme Settings')
                ),
              S.listItem()
                .title('Header')
                .icon(MenuIcon)
                .child(
                  S.document()
                    .schemaType('header')
                    .documentId('header')
                    .title('Header')
                ),
              S.listItem()
                .title('Footer')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('footer')
                    .documentId('footer')
                    .title('Footer')
                ),
              S.listItem()
                .title('Default SEO')
                .icon(TextIcon)
                .child(
                  S.document()
                    .schemaType('defaultSeo')
                    .documentId('defaultSeo')
                    .title('Default SEO Settings')
                ),
            ])
        ),

      // Reusable Blocks
      S.listItem()
        .title('Reusable Blocks')
        .icon(BlockElementIcon)
        .child(
          S.documentTypeList('reusableBlock')
            .title('Reusable Blocks')
        ),

      S.divider(),

      // Media Library
      S.listItem()
        .title('Media Library')
        .icon(ImageIcon)
        .child(
          S.documentTypeList('sanity.imageAsset')
            .title('Media Library')
        ),
    ])
