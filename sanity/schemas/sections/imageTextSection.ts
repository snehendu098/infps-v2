import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const imageTextSection = defineType({
  name: 'imageTextSection',
  title: 'Image + Text',
  type: 'object',
  icon: ImagesIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'media', title: 'Media' },
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
      group: 'content',
    }),
    defineField({
      name: 'headingLevel',
      title: 'Heading Level',
      type: 'string',
      options: {
        list: [
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
      name: 'features',
      title: 'Feature List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
      validation: (Rule) => Rule.max(2),
      group: 'content',
    }),

    // Media
    defineField({
      name: 'image',
      title: 'Image',
      type: 'responsiveImage',
      group: 'media',
    }),
    defineField({
      name: 'imageDecoration',
      title: 'Image Decoration',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Shadow', value: 'shadow' },
          { title: 'Border', value: 'border' },
          { title: 'Gradient Overlay', value: 'gradient' },
          { title: 'Floating Card', value: 'floating' },
        ],
      },
      initialValue: 'none',
      group: 'media',
    }),
    defineField({
      name: 'showVideoButton',
      title: 'Show Video Play Button',
      type: 'boolean',
      initialValue: false,
      group: 'media',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({ parent }) => !parent?.showVideoButton,
      group: 'media',
    }),

    // Layout
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
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
      group: 'layout',
    }),
    defineField({
      name: 'verticalAlignment',
      title: 'Vertical Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Top', value: 'start' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
      group: 'layout',
    }),
    defineField({
      name: 'imageSize',
      title: 'Image Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small (40%)', value: 'small' },
          { title: 'Medium (50%)', value: 'medium' },
          { title: 'Large (60%)', value: 'large' },
        ],
      },
      initialValue: 'medium',
      group: 'layout',
    }),
    defineField({
      name: 'reverseOnMobile',
      title: 'Reverse Order on Mobile',
      type: 'boolean',
      description: 'Show image before text on mobile devices',
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
      image: 'image.image',
    },
    prepare({ heading, image }) {
      return {
        title: heading || 'Image + Text',
        subtitle: 'Image + Text Section',
        media: image,
      }
    },
  },
})
