import { defineType, defineField } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Call to Action',
  type: 'object',
  icon: RocketIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'buttons', title: 'Buttons' },
    { name: 'layout', title: 'Layout' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Content
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      group: 'content',
    }),
    defineField({
      name: 'highlightWords',
      title: 'Highlight Words',
      type: 'string',
      description: 'Words to highlight with gradient (comma separated)',
      group: 'content',
    }),

    // Buttons
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'button',
      group: 'buttons',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'button',
      group: 'buttons',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Centered', value: 'centered' },
          { title: 'Left Aligned', value: 'left' },
          { title: 'Split (Text Left, Buttons Right)', value: 'split' },
          { title: 'Card/Banner', value: 'card' },
        ],
      },
      initialValue: 'centered',
      group: 'layout',
    }),
    defineField({
      name: 'size',
      title: 'Section Size',
      type: 'string',
      options: {
        list: [
          { title: 'Compact', value: 'compact' },
          { title: 'Normal', value: 'normal' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'normal',
      group: 'layout',
    }),
    defineField({
      name: 'showDecoration',
      title: 'Show Background Decoration',
      type: 'boolean',
      description: 'Add decorative elements like patterns or shapes',
      initialValue: false,
      group: 'layout',
    }),
    defineField({
      name: 'decorationType',
      title: 'Decoration Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dots', value: 'dots' },
          { title: 'Gradient Blur', value: 'blur' },
          { title: 'Geometric', value: 'geometric' },
          { title: 'Wave', value: 'wave' },
        ],
      },
      hidden: ({ parent }) => !parent?.showDecoration,
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
    },
    prepare({ heading }) {
      return {
        title: heading || 'CTA Section',
        subtitle: 'Call to Action',
      }
    },
  },
})
