import { defineType, defineField } from 'sanity'

export const workProcess = defineType({
  name: 'workProcess',
  title: 'Work Process Step',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'string',
      description: 'e.g., 01, 02, 03',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name',
      options: {
        list: [
          { title: 'Search', value: 'Search' },
          { title: 'File Check', value: 'FileCheck' },
          { title: 'Palette', value: 'Palette' },
          { title: 'Code', value: 'Code' },
          { title: 'Rocket', value: 'Rocket' },
          { title: 'CheckCircle', value: 'CheckCircle' },
          { title: 'Users', value: 'Users' },
          { title: 'MessageSquare', value: 'MessageSquare' },
          { title: 'Settings', value: 'Settings' },
          { title: 'Lightbulb', value: 'Lightbulb' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'points',
      title: 'Key Points',
      type: 'array',
      of: [{ type: 'string' }],
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
      title: 'Step Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      stepNumber: 'stepNumber',
    },
    prepare({ title, stepNumber }) {
      return {
        title: `${stepNumber}. ${title}`,
      }
    },
  },
})
