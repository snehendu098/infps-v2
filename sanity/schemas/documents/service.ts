import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Server, Code, Globe, Smartphone)',
      options: {
        list: [
          { title: 'Server', value: 'Server' },
          { title: 'Code', value: 'Code' },
          { title: 'Globe', value: 'Globe' },
          { title: 'Trending Up', value: 'TrendingUp' },
          { title: 'Smartphone', value: 'Smartphone' },
          { title: 'Zap', value: 'Zap' },
          { title: 'Shield', value: 'Shield' },
          { title: 'Database', value: 'Database' },
          { title: 'Cloud', value: 'Cloud' },
          { title: 'Cpu', value: 'Cpu' },
          { title: 'Network', value: 'Network' },
          { title: 'Lock', value: 'Lock' },
          { title: 'Rocket', value: 'Rocket' },
          { title: 'Settings', value: 'Settings' },
          { title: 'Users', value: 'Users' },
          { title: 'Bot', value: 'Bot' },
          { title: 'Brain', value: 'Brain' },
          { title: 'Blocks', value: 'Blocks' },
        ],
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'Brief description for cards',
      validation: Rule => Rule.max(100),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      initialValue: '#FF9966',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isVisible',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'image',
    },
  },
})
