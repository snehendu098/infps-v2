import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Email', value: 'email' },
          { title: 'Phone', value: 'phone' },
          { title: 'Anchor', value: 'anchor' },
          { title: 'File Download', value: 'file' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Page',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'phone',
    }),
    defineField({
      name: 'anchor',
      title: 'Anchor ID',
      type: 'string',
      description: 'The ID of the element to scroll to (without #)',
      hidden: ({ parent }) => parent?.linkType !== 'anchor',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      hidden: ({ parent }) => parent?.linkType !== 'file',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      linkType: 'linkType',
      internalTitle: 'internalLink.title',
      externalUrl: 'externalUrl',
      email: 'email',
      phone: 'phone',
    },
    prepare({ linkType, internalTitle, externalUrl, email, phone }) {
      const typeLabels: Record<string, string> = {
        internal: 'Internal',
        external: 'External',
        email: 'Email',
        phone: 'Phone',
        anchor: 'Anchor',
        file: 'File',
      }
      return {
        title: internalTitle || externalUrl || email || phone || 'Link',
        subtitle: typeLabels[linkType] || 'Link',
      }
    },
  },
})
