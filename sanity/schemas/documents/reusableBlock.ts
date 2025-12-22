import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export const reusableBlock = defineType({
  name: 'reusableBlock',
  title: 'Reusable Block',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Block Name',
      type: 'string',
      description: 'Internal name for this reusable block',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'What is this block used for?',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Header', value: 'header' },
          { title: 'Content', value: 'content' },
          { title: 'CTA', value: 'cta' },
          { title: 'Footer', value: 'footer' },
          { title: 'Sidebar', value: 'sidebar' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({ type: 'heroSection' }),
        defineArrayMember({ type: 'textBlockSection' }),
        defineArrayMember({ type: 'imageTextSection' }),
        defineArrayMember({ type: 'featureGridSection' }),
        defineArrayMember({ type: 'testimonialsSection' }),
        defineArrayMember({ type: 'ctaSection' }),
        defineArrayMember({ type: 'gallerySection' }),
        defineArrayMember({ type: 'pricingSection' }),
        defineArrayMember({ type: 'faqSection' }),
        defineArrayMember({ type: 'statsSection' }),
        defineArrayMember({ type: 'logoCloudSection' }),
        defineArrayMember({ type: 'contactFormSection' }),
        defineArrayMember({ type: 'customHtmlSection' }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category',
      sections: 'sections',
    },
    prepare({ name, category, sections }) {
      return {
        title: name || 'Reusable Block',
        subtitle: `${category || 'Uncategorized'} • ${sections?.length || 0} sections`,
      }
    },
  },
})
