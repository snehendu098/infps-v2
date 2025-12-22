import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const responsiveImage = defineType({
  name: 'responsiveImage',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for SEO and accessibility',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional image caption',
    }),
    defineField({
      name: 'lazyLoad',
      title: 'Lazy Load',
      type: 'boolean',
      description: 'Delay loading until image is in viewport',
      initialValue: true,
    }),
    defineField({
      name: 'priority',
      title: 'Priority Load',
      type: 'boolean',
      description: 'Load immediately (for above-the-fold images)',
      initialValue: false,
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: '16:9 (Widescreen)', value: '16/9' },
          { title: '4:3 (Standard)', value: '4/3' },
          { title: '1:1 (Square)', value: '1/1' },
          { title: '3:2 (Photo)', value: '3/2' },
          { title: '21:9 (Ultrawide)', value: '21/9' },
          { title: '9:16 (Portrait)', value: '9/16' },
        ],
      },
      initialValue: 'auto',
    }),
    defineField({
      name: 'objectFit',
      title: 'Image Fit',
      type: 'string',
      options: {
        list: [
          { title: 'Cover (fill area, crop if needed)', value: 'cover' },
          { title: 'Contain (show full image)', value: 'contain' },
          { title: 'Fill (stretch to fit)', value: 'fill' },
        ],
        layout: 'radio',
      },
      initialValue: 'cover',
    }),
    defineField({
      name: 'rounded',
      title: 'Border Radius',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Full (Circle)', value: 'full' },
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'shadow',
      title: 'Shadow',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'none',
    }),
  ],
  preview: {
    select: {
      alt: 'alt',
      media: 'image',
    },
    prepare({ alt, media }) {
      return {
        title: alt || 'Image',
        media,
      }
    },
  },
})
