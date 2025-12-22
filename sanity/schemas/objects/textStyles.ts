import { defineType, defineField } from 'sanity'

export const textStyles = defineType({
  name: 'textStyles',
  title: 'Text Styling',
  type: 'object',
  fields: [
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      options: {
        list: [
          { title: 'Extra Small', value: 'xs' },
          { title: 'Small', value: 'sm' },
          { title: 'Base', value: 'base' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
          { title: '2XL', value: '2xl' },
          { title: '3XL', value: '3xl' },
          { title: '4XL', value: '4xl' },
          { title: '5XL', value: '5xl' },
          { title: '6XL', value: '6xl' },
        ],
      },
      initialValue: 'base',
    }),
    defineField({
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: '300' },
          { title: 'Normal', value: '400' },
          { title: 'Medium', value: '500' },
          { title: 'Semibold', value: '600' },
          { title: 'Bold', value: '700' },
          { title: 'Extra Bold', value: '800' },
        ],
      },
      initialValue: '400',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'colorPicker',
    }),
    defineField({
      name: 'textAlign',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
          { title: 'Justify', value: 'justify' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'lineHeight',
      title: 'Line Height',
      type: 'string',
      options: {
        list: [
          { title: 'Tight', value: 'tight' },
          { title: 'Normal', value: 'normal' },
          { title: 'Relaxed', value: 'relaxed' },
          { title: 'Loose', value: 'loose' },
        ],
      },
      initialValue: 'normal',
    }),
    defineField({
      name: 'letterSpacing',
      title: 'Letter Spacing',
      type: 'string',
      options: {
        list: [
          { title: 'Tighter', value: 'tighter' },
          { title: 'Tight', value: 'tight' },
          { title: 'Normal', value: 'normal' },
          { title: 'Wide', value: 'wide' },
          { title: 'Wider', value: 'wider' },
        ],
      },
      initialValue: 'normal',
    }),
    defineField({
      name: 'textTransform',
      title: 'Text Transform',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Uppercase', value: 'uppercase' },
          { title: 'Lowercase', value: 'lowercase' },
          { title: 'Capitalize', value: 'capitalize' },
        ],
      },
      initialValue: 'none',
    }),
  ],
})
