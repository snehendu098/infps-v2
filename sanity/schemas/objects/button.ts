import { defineType, defineField } from 'sanity'
import { ControlsIcon } from '@sanity/icons'

export const button = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: ControlsIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
    defineField({
      name: 'variant',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Filled)', value: 'primary' },
          { title: 'Secondary (Outline)', value: 'secondary' },
          { title: 'Ghost (Text Only)', value: 'ghost' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'White', value: 'white' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Arrow Right', value: 'arrow-right' },
          { title: 'Arrow Left', value: 'arrow-left' },
          { title: 'External Link', value: 'external-link' },
          { title: 'Download', value: 'download' },
          { title: 'Play', value: 'play' },
          { title: 'Phone', value: 'phone' },
          { title: 'Email', value: 'email' },
          { title: 'Check', value: 'check' },
          { title: 'Plus', value: 'plus' },
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'iconPosition',
      title: 'Icon Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'right',
      hidden: ({ parent }) => !parent?.icon || parent?.icon === 'none',
    }),
    defineField({
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
      description: 'Make button span full width on mobile',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      label: 'label',
      variant: 'variant',
    },
    prepare({ label, variant }) {
      return {
        title: label || 'Button',
        subtitle: variant ? `Style: ${variant}` : 'Primary',
      }
    },
  },
})
