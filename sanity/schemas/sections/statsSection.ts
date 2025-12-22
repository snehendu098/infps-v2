import { defineType, defineField } from 'sanity'
import { BarChartIcon } from '@sanity/icons'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats/Numbers',
  type: 'object',
  icon: BarChartIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'stats', title: 'Statistics' },
    { name: 'layout', title: 'Layout' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Header
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      group: 'header',
    }),
    defineField({
      name: 'showHeader',
      title: 'Show Header',
      type: 'boolean',
      initialValue: true,
      group: 'header',
    }),

    // Stats
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            {
              name: 'number',
              title: 'Number/Value',
              type: 'string',
              description: 'e.g., "500+", "99%", "$1M"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'None', value: 'none' },
                  { title: 'Users', value: 'users' },
                  { title: 'Globe', value: 'globe' },
                  { title: 'Award', value: 'award' },
                  { title: 'Clock', value: 'clock' },
                  { title: 'Chart', value: 'bar-chart' },
                  { title: 'Star', value: 'star' },
                  { title: 'Check', value: 'check-circle' },
                  { title: 'Heart', value: 'heart' },
                  { title: 'Rocket', value: 'rocket' },
                ],
              },
            },
            {
              name: 'animateNumber',
              title: 'Animate Number',
              type: 'boolean',
              description: 'Count up animation on scroll',
              initialValue: true,
            },
          ],
          preview: {
            select: {
              number: 'number',
              label: 'label',
            },
            prepare({ number, label }) {
              return {
                title: number || 'Stat',
                subtitle: label,
              }
            },
          },
        },
      ],
      group: 'stats',
    }),

    // Layout
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [
          { title: '2 Columns', value: 2 },
          { title: '3 Columns', value: 3 },
          { title: '4 Columns', value: 4 },
          { title: '5 Columns', value: 5 },
        ],
      },
      initialValue: 4,
      group: 'layout',
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Cards', value: 'cards' },
          { title: 'Bordered', value: 'bordered' },
          { title: 'Gradient Background', value: 'gradient' },
        ],
      },
      initialValue: 'simple',
      group: 'layout',
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
      group: 'layout',
    }),
    defineField({
      name: 'size',
      title: 'Number Size',
      type: 'string',
      options: {
        list: [
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'lg',
      group: 'layout',
    }),
    defineField({
      name: 'showDividers',
      title: 'Show Dividers',
      type: 'boolean',
      initialValue: false,
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
      stats: 'stats',
    },
    prepare({ heading, stats }) {
      return {
        title: heading || 'Stats Section',
        subtitle: `${stats?.length || 0} statistics`,
      }
    },
  },
})
