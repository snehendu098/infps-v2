import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const gallerySection = defineType({
  name: 'gallerySection',
  title: 'Gallery',
  type: 'object',
  icon: ImageIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'images', title: 'Images' },
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

    // Images
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryImage',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              description: 'For filtering',
            },
            {
              name: 'size',
              title: 'Size (for masonry)',
              type: 'string',
              options: {
                list: [
                  { title: 'Normal', value: 'normal' },
                  { title: 'Wide', value: 'wide' },
                  { title: 'Tall', value: 'tall' },
                  { title: 'Large', value: 'large' },
                ],
              },
              initialValue: 'normal',
            },
            {
              name: 'link',
              title: 'Link (optional)',
              type: 'link',
            },
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        },
      ],
      group: 'images',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Masonry', value: 'masonry' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Justified', value: 'justified' },
        ],
      },
      initialValue: 'grid',
      group: 'layout',
    }),
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
      initialValue: 4,
      hidden: ({ parent }) => parent?.layout === 'carousel',
      group: 'layout',
    }),
    defineField({
      name: 'gap',
      title: 'Gap Between Images',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
      group: 'layout',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Image Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Original', value: 'original' },
          { title: 'Square (1:1)', value: 'square' },
          { title: 'Landscape (16:9)', value: 'landscape' },
          { title: 'Portrait (3:4)', value: 'portrait' },
        ],
      },
      initialValue: 'original',
      hidden: ({ parent }) => parent?.layout === 'masonry',
      group: 'layout',
    }),
    defineField({
      name: 'enableLightbox',
      title: 'Enable Lightbox',
      type: 'boolean',
      description: 'Click to view full-size image',
      initialValue: true,
      group: 'layout',
    }),
    defineField({
      name: 'showFilters',
      title: 'Show Category Filters',
      type: 'boolean',
      description: 'Show filter buttons based on image categories',
      initialValue: false,
      group: 'layout',
    }),
    defineField({
      name: 'showCaptions',
      title: 'Show Captions',
      type: 'string',
      options: {
        list: [
          { title: 'Never', value: 'never' },
          { title: 'On Hover', value: 'hover' },
          { title: 'Always', value: 'always' },
        ],
      },
      initialValue: 'hover',
      group: 'layout',
    }),
    defineField({
      name: 'hoverEffect',
      title: 'Hover Effect',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Zoom', value: 'zoom' },
          { title: 'Lift', value: 'lift' },
          { title: 'Darken', value: 'darken' },
          { title: 'Reveal Caption', value: 'reveal' },
        ],
      },
      initialValue: 'zoom',
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
      images: 'images',
    },
    prepare({ heading, images }) {
      return {
        title: heading || 'Gallery',
        subtitle: `${images?.length || 0} images`,
      }
    },
  },
})
