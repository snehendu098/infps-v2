import { defineType, defineField } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials',
  type: 'object',
  icon: CommentIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'testimonials', title: 'Testimonials' },
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

    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'author',
              title: 'Author Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Role/Title',
              type: 'string',
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'avatar',
              title: 'Avatar',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'companyLogo',
              title: 'Company Logo',
              type: 'image',
            },
            {
              name: 'rating',
              title: 'Rating (1-5)',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
              initialValue: 5,
            },
            {
              name: 'featured',
              title: 'Featured Testimonial',
              type: 'boolean',
              description: 'Show this testimonial prominently',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              author: 'author',
              company: 'company',
              avatar: 'avatar',
            },
            prepare({ author, company, avatar }) {
              return {
                title: author || 'Testimonial',
                subtitle: company,
                media: avatar,
              }
            },
          },
        },
      ],
      group: 'testimonials',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Carousel/Slider', value: 'carousel' },
          { title: 'Masonry', value: 'masonry' },
          { title: 'Featured + Grid', value: 'featured' },
          { title: 'Single Large', value: 'single' },
        ],
      },
      initialValue: 'grid',
      group: 'layout',
    }),
    defineField({
      name: 'columns',
      title: 'Columns (for grid layout)',
      type: 'number',
      options: {
        list: [
          { title: '2 Columns', value: 2 },
          { title: '3 Columns', value: 3 },
          { title: '4 Columns', value: 4 },
        ],
      },
      initialValue: 3,
      hidden: ({ parent }) => parent?.layout !== 'grid' && parent?.layout !== 'masonry',
      group: 'layout',
    }),
    defineField({
      name: 'cardStyle',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Bordered', value: 'bordered' },
          { title: 'Elevated', value: 'elevated' },
          { title: 'Glass', value: 'glass' },
        ],
      },
      initialValue: 'elevated',
      group: 'layout',
    }),
    defineField({
      name: 'showRating',
      title: 'Show Star Rating',
      type: 'boolean',
      initialValue: true,
      group: 'layout',
    }),
    defineField({
      name: 'showQuoteIcon',
      title: 'Show Quote Icon',
      type: 'boolean',
      initialValue: true,
      group: 'layout',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay (for carousel)',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.layout !== 'carousel',
      group: 'layout',
    }),
    defineField({
      name: 'autoplaySpeed',
      title: 'Autoplay Speed (seconds)',
      type: 'number',
      initialValue: 5,
      hidden: ({ parent }) => parent?.layout !== 'carousel' || !parent?.autoplay,
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
      testimonials: 'testimonials',
    },
    prepare({ heading, testimonials }) {
      return {
        title: heading || 'Testimonials',
        subtitle: `${testimonials?.length || 0} testimonials`,
      }
    },
  },
})
