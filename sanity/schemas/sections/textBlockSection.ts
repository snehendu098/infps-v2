import { defineType, defineField } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const textBlockSection = defineType({
  name: 'textBlockSection',
  title: 'Text Block',
  type: 'object',
  icon: TextIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'styling', title: 'Styling' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Content
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow/Label',
      type: 'string',
      description: 'Small text above the heading',
      group: 'content',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'headingLevel',
      title: 'Heading Level',
      type: 'string',
      options: {
        list: [
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'h2',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
      validation: (Rule) => Rule.max(3),
      group: 'content',
    }),

    // Styling
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'left',
      group: 'styling',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Maximum Width',
      type: 'string',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Large (1000px)', value: 'lg' },
          { title: 'Medium (800px)', value: 'md' },
          { title: 'Small (600px)', value: 'sm' },
          { title: 'Extra Small (500px)', value: 'xs' },
        ],
      },
      initialValue: 'md',
      group: 'styling',
    }),
    defineField({
      name: 'headingStyles',
      title: 'Heading Styles',
      type: 'textStyles',
      group: 'styling',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'colorPicker',
      group: 'styling',
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
      eyebrow: 'eyebrow',
    },
    prepare({ heading, eyebrow }) {
      return {
        title: heading || eyebrow || 'Text Block',
        subtitle: 'Text Block',
      }
    },
  },
})
