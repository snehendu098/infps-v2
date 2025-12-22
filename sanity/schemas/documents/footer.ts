import { defineType, defineField } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: BlockElementIcon,
  groups: [
    { name: 'branding', title: 'Branding', default: true },
    { name: 'navigation', title: 'Navigation' },
    { name: 'social', title: 'Social & Contact' },
    { name: 'legal', title: 'Legal' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Branding
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'branding',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'branding',
    }),

    // Navigation
    defineField({
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          fields: [
            {
              name: 'title',
              title: 'Column Title',
              type: 'string',
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'link', title: 'Link', type: 'link' },
                    {
                      name: 'badge',
                      title: 'Badge',
                      type: 'string',
                      description: 'e.g., "New", "Popular"',
                    },
                  ],
                  preview: {
                    select: { label: 'label' },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              links: 'links',
            },
            prepare({ title, links }) {
              return {
                title: title || 'Column',
                subtitle: `${links?.length || 0} links`,
              }
            },
          },
        },
      ],
      group: 'navigation',
    }),

    // Social & Contact
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Discord', value: 'discord' },
                ],
              },
            },
            { name: 'url', title: 'URL', type: 'url' },
          ],
          preview: {
            select: { platform: 'platform' },
            prepare({ platform }) {
              return { title: platform || 'Social Link' }
            },
          },
        },
      ],
      group: 'social',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter Signup',
      type: 'object',
      group: 'social',
      fields: [
        {
          name: 'enabled',
          title: 'Show Newsletter Signup',
          type: 'boolean',
          initialValue: false,
        },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'string' },
        { name: 'placeholder', title: 'Input Placeholder', type: 'string' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        {
          name: 'formAction',
          title: 'Form Action URL',
          type: 'string',
          description: 'Newsletter provider form action',
        },
      ],
    }),

    // Legal
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Use {year} for current year',
      initialValue: '© {year} Company Name. All rights reserved.',
      group: 'legal',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'link' },
          ],
          preview: {
            select: { label: 'label' },
          },
        },
      ],
      group: 'legal',
    }),

    // Settings
    defineField({
      name: 'layout',
      title: 'Footer Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Standard (Columns)', value: 'standard' },
          { title: 'Minimal', value: 'minimal' },
          { title: 'Centered', value: 'centered' },
          { title: 'Two Row', value: 'two-row' },
        ],
      },
      initialValue: 'standard',
      group: 'settings',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPicker',
      group: 'settings',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'colorPicker',
      group: 'settings',
    }),
    defineField({
      name: 'showBackToTop',
      title: 'Show Back to Top Button',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'showDivider',
      title: 'Show Divider Above Footer',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
        subtitle: 'Site footer configuration',
      }
    },
  },
})
