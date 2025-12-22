import { defineType, defineField } from 'sanity'

// Custom color picker object that works without @sanity/color-input plugin
export const colorPicker = defineType({
  name: 'colorPicker',
  title: 'Color',
  type: 'object',
  fields: [
    defineField({
      name: 'hex',
      title: 'Hex Color',
      type: 'string',
      description: 'Enter a hex color (e.g., #3B82F6)',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex color',
          invert: false,
        }).warning('Please enter a valid hex color (e.g., #3B82F6)'),
    }),
    defineField({
      name: 'alpha',
      title: 'Opacity',
      type: 'number',
      description: 'Opacity from 0 to 1',
      validation: (Rule) => Rule.min(0).max(1),
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      hex: 'hex',
    },
    prepare({ hex }) {
      return {
        title: hex || 'No color',
      }
    },
  },
})
