import { defineType, defineField } from 'sanity'
import { ThLargeIcon } from '@sanity/icons'

export const featureGridSection = defineType({
  name: 'featureGridSection',
  title: 'Feature Grid',
  type: 'object',
  icon: ThLargeIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'features', title: 'Features' },
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
      name: 'headerAlignment',
      title: 'Header Alignment',
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
      group: 'header',
    }),

    // Features
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name from Lucide icons library',
              options: {
                list: [
                  { title: 'Star', value: 'star' },
                  { title: 'Check', value: 'check' },
                  { title: 'Shield', value: 'shield' },
                  { title: 'Zap', value: 'zap' },
                  { title: 'Heart', value: 'heart' },
                  { title: 'Settings', value: 'settings' },
                  { title: 'Users', value: 'users' },
                  { title: 'Globe', value: 'globe' },
                  { title: 'Lock', value: 'lock' },
                  { title: 'Rocket', value: 'rocket' },
                  { title: 'Chart', value: 'bar-chart' },
                  { title: 'Clock', value: 'clock' },
                  { title: 'Code', value: 'code' },
                  { title: 'Database', value: 'database' },
                  { title: 'Cloud', value: 'cloud' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Mail', value: 'mail' },
                  { title: 'Target', value: 'target' },
                  { title: 'Award', value: 'award' },
                  { title: 'Layers', value: 'layers' },
                ],
              },
            },
            {
              name: 'iconColor',
              title: 'Icon Color',
              type: 'colorPicker',
            },
            {
              name: 'image',
              title: 'Custom Image (instead of icon)',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'link',
              title: 'Link (optional)',
              type: 'link',
            },
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
              image: 'image',
            },
            prepare({ title, image }) {
              return {
                title: title || 'Feature',
                media: image,
              }
            },
          },
        },
      ],
      group: 'features',
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
          { title: '6 Columns', value: 6 },
        ],
      },
      initialValue: 3,
      group: 'layout',
    }),
    defineField({
      name: 'cardStyle',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple (no card)', value: 'simple' },
          { title: 'Elevated (shadow)', value: 'elevated' },
          { title: 'Bordered', value: 'bordered' },
          { title: 'Filled Background', value: 'filled' },
          { title: 'Gradient', value: 'gradient' },
        ],
      },
      initialValue: 'simple',
      group: 'layout',
    }),
    defineField({
      name: 'iconStyle',
      title: 'Icon Style',
      type: 'string',
      options: {
        list: [
          { title: 'Plain', value: 'plain' },
          { title: 'Rounded Background', value: 'rounded' },
          { title: 'Square Background', value: 'square' },
          { title: 'Outlined', value: 'outlined' },
        ],
      },
      initialValue: 'rounded',
      group: 'layout',
    }),
    defineField({
      name: 'iconSize',
      title: 'Icon Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'md',
      group: 'layout',
    }),
    defineField({
      name: 'cardAlignment',
      title: 'Card Content Alignment',
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
      name: 'gap',
      title: 'Gap Between Cards',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'md',
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
      features: 'features',
    },
    prepare({ heading, features }) {
      return {
        title: heading || 'Feature Grid',
        subtitle: `${features?.length || 0} features`,
      }
    },
  },
})
