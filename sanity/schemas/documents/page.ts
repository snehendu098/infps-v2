import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'content', title: 'Page Content', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
    { name: 'settings', title: 'Page Settings' },
  ],
  fields: [
    // Page Settings
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    // Sections (Page Builder)
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      description: 'Add, remove, and reorder sections to build your page',
      of: [
        defineArrayMember({ type: 'heroSection' }),
        defineArrayMember({ type: 'textBlockSection' }),
        defineArrayMember({ type: 'imageTextSection' }),
        defineArrayMember({ type: 'featureGridSection' }),
        defineArrayMember({ type: 'testimonialsSection' }),
        defineArrayMember({ type: 'ctaSection' }),
        defineArrayMember({ type: 'gallerySection' }),
        defineArrayMember({ type: 'pricingSection' }),
        defineArrayMember({ type: 'faqSection' }),
        defineArrayMember({ type: 'statsSection' }),
        defineArrayMember({ type: 'logoCloudSection' }),
        defineArrayMember({ type: 'contactFormSection' }),
        defineArrayMember({ type: 'customHtmlSection' }),
        defineArrayMember({
          type: 'reference',
          title: 'Reusable Block',
          to: [{ type: 'reusableBlock' }],
        }),
      ],
      group: 'content',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO & Social Sharing',
      type: 'seo',
      group: 'seo',
    }),

    // Page Settings
    defineField({
      name: 'status',
      title: 'Page Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Scheduled', value: 'scheduled' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      group: 'settings',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      hidden: ({ parent }) => parent?.status !== 'scheduled',
      group: 'settings',
    }),
    defineField({
      name: 'hideFromNavigation',
      title: 'Hide from Navigation',
      type: 'boolean',
      description: 'Page will not appear in auto-generated navigation',
      initialValue: false,
      group: 'settings',
    }),
    defineField({
      name: 'pageTemplate',
      title: 'Page Template',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Full Width (No Padding)', value: 'fullwidth' },
          { title: 'Landing Page (No Header/Footer)', value: 'landing' },
          { title: 'Blog/Article', value: 'article' },
        ],
      },
      initialValue: 'default',
      group: 'settings',
    }),
    defineField({
      name: 'customHeaderFooter',
      title: 'Custom Header/Footer',
      type: 'object',
      fields: [
        {
          name: 'hideHeader',
          title: 'Hide Header',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'hideFooter',
          title: 'Hide Footer',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'transparentHeader',
          title: 'Transparent Header',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'lightHeader',
          title: 'Light Header (White Text)',
          type: 'boolean',
          initialValue: false,
        },
      ],
      group: 'settings',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      status: 'status',
    },
    prepare({ title, slug, status }) {
      const statusEmoji = status === 'published' ? '✓' : status === 'scheduled' ? '⏱' : '○'
      return {
        title: `${statusEmoji} ${title || 'Untitled'}`,
        subtitle: `/${slug || ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Recently Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }],
    },
  ],
})
