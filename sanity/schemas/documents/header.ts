import { defineType, defineField } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: MenuIcon,
  groups: [
    { name: 'logo', title: 'Logo', default: true },
    { name: 'navigation', title: 'Navigation' },
    { name: 'actions', title: 'Actions' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Logo
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'logo',
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      initialValue: 'Site Logo',
      group: 'logo',
    }),
    defineField({
      name: 'logoWidth',
      title: 'Logo Width',
      type: 'number',
      description: 'Width in pixels',
      initialValue: 150,
      group: 'logo',
    }),
    defineField({
      name: 'logoLink',
      title: 'Logo Link',
      type: 'link',
      group: 'logo',
    }),

    // Navigation
    defineField({
      name: 'navigation',
      title: 'Navigation Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'link',
            },
            {
              name: 'highlight',
              title: 'Highlight',
              type: 'boolean',
              description: 'Show as highlighted/accent item',
              initialValue: false,
            },
            {
              name: 'children',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'description', title: 'Description', type: 'string' },
                    { name: 'icon', title: 'Icon', type: 'string' },
                    { name: 'link', title: 'Link', type: 'link' },
                  ],
                  preview: {
                    select: { title: 'label' },
                  },
                },
              ],
            },
            {
              name: 'megaMenu',
              title: 'Mega Menu',
              type: 'boolean',
              description: 'Display dropdown as mega menu',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              label: 'label',
              children: 'children',
            },
            prepare({ label, children }) {
              return {
                title: label || 'Nav Item',
                subtitle: children?.length ? `${children.length} dropdown items` : '',
              }
            },
          },
        },
      ],
      group: 'navigation',
    }),

    // Actions
    defineField({
      name: 'showSearch',
      title: 'Show Search',
      type: 'boolean',
      initialValue: false,
      group: 'actions',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'button',
      group: 'actions',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'button',
      group: 'actions',
    }),
    defineField({
      name: 'showSocialLinks',
      title: 'Show Social Links',
      type: 'boolean',
      initialValue: false,
      group: 'actions',
    }),
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
      hidden: ({ parent }) => !parent?.showSocialLinks,
      group: 'actions',
    }),

    // Settings
    defineField({
      name: 'style',
      title: 'Header Style',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'Centered Logo', value: 'centered' },
          { title: 'Split (Logo Left, Nav Center, Actions Right)', value: 'split' },
        ],
      },
      initialValue: 'standard',
      group: 'settings',
    }),
    defineField({
      name: 'sticky',
      title: 'Sticky Header',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'shrinkOnScroll',
      title: 'Shrink on Scroll',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'transparent',
      title: 'Transparent Background',
      type: 'boolean',
      description: 'Header background is transparent until scroll',
      initialValue: false,
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
      name: 'mobileBreakpoint',
      title: 'Mobile Menu Breakpoint',
      type: 'string',
      options: {
        list: [
          { title: 'Small (640px)', value: 'sm' },
          { title: 'Medium (768px)', value: 'md' },
          { title: 'Large (1024px)', value: 'lg' },
        ],
      },
      initialValue: 'lg',
      group: 'settings',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
        subtitle: 'Site header configuration',
      }
    },
  },
})
