import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const logoCloudSection = defineType({
  name: 'logoCloudSection',
  title: 'Logo Cloud / Partners',
  type: 'object',
  icon: UsersIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'logos', title: 'Logos' },
    { name: 'layout', title: 'Layout' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Header
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'showHeader',
      title: 'Show Header',
      type: 'boolean',
      initialValue: true,
      group: 'header',
    }),

    // Logos
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'logo',
          fields: [
            {
              name: 'image',
              title: 'Logo Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Website Link',
              type: 'url',
            },
          ],
          preview: {
            select: {
              name: 'name',
              media: 'image',
            },
            prepare({ name, media }) {
              return {
                title: name || 'Logo',
                media,
              }
            },
          },
        },
      ],
      group: 'logos',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Inline Row', value: 'inline' },
          { title: 'Marquee/Scroll', value: 'marquee' },
        ],
      },
      initialValue: 'inline',
      group: 'layout',
    }),
    defineField({
      name: 'columns',
      title: 'Columns (for grid)',
      type: 'number',
      options: {
        list: [
          { title: '4 Columns', value: 4 },
          { title: '5 Columns', value: 5 },
          { title: '6 Columns', value: 6 },
        ],
      },
      initialValue: 5,
      hidden: ({ parent }) => parent?.layout !== 'grid',
      group: 'layout',
    }),
    defineField({
      name: 'logoSize',
      title: 'Logo Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
      group: 'layout',
    }),
    defineField({
      name: 'grayscale',
      title: 'Grayscale Logos',
      type: 'boolean',
      description: 'Show logos in grayscale (color on hover)',
      initialValue: true,
      group: 'layout',
    }),
    defineField({
      name: 'marqueeSpeed',
      title: 'Marquee Speed',
      type: 'string',
      options: {
        list: [
          { title: 'Slow', value: 'slow' },
          { title: 'Normal', value: 'normal' },
          { title: 'Fast', value: 'fast' },
        ],
      },
      initialValue: 'normal',
      hidden: ({ parent }) => parent?.layout !== 'marquee',
      group: 'layout',
    }),
    defineField({
      name: 'marqueeDirection',
      title: 'Marquee Direction',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'left',
      hidden: ({ parent }) => parent?.layout !== 'marquee',
      group: 'layout',
    }),

    // Settings
    defineField({
      name: 'settings',
      title: 'Section Settings',
      type: 'sectionSettings',
      group: 'settings',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      logos: 'logos',
    },
    prepare({ heading, logos }) {
      return {
        title: heading || 'Logo Cloud',
        subtitle: `${logos?.length || 0} logos`,
      }
    },
  },
})
