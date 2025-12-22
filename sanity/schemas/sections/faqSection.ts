import { defineType, defineField } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  icon: HelpCircleIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'faqs', title: 'FAQs' },
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

    // FAQs
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'richText',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              description: 'Optional category for grouping',
            },
          ],
          preview: {
            select: {
              question: 'question',
              category: 'category',
            },
            prepare({ question, category }) {
              return {
                title: question || 'FAQ',
                subtitle: category,
              }
            },
          },
        },
      ],
      group: 'faqs',
    }),
    defineField({
      name: 'showCategories',
      title: 'Group by Category',
      type: 'boolean',
      initialValue: false,
      group: 'faqs',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Accordion', value: 'accordion' },
          { title: 'Two Columns', value: 'columns' },
          { title: 'Cards', value: 'cards' },
        ],
      },
      initialValue: 'accordion',
      group: 'layout',
    }),
    defineField({
      name: 'allowMultipleOpen',
      title: 'Allow Multiple Open',
      type: 'boolean',
      description: 'Allow multiple FAQs to be expanded at once',
      initialValue: false,
      hidden: ({ parent }) => parent?.layout !== 'accordion',
      group: 'layout',
    }),
    defineField({
      name: 'firstOpenByDefault',
      title: 'First Item Open by Default',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.layout !== 'accordion',
      group: 'layout',
    }),
    defineField({
      name: 'accordionStyle',
      title: 'Accordion Style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Bordered', value: 'bordered' },
          { title: 'Separated', value: 'separated' },
        ],
      },
      initialValue: 'separated',
      hidden: ({ parent }) => parent?.layout !== 'accordion',
      group: 'layout',
    }),

    // Settings
    defineField({
      name: 'addSchemaMarkup',
      title: 'Add FAQ Schema Markup',
      type: 'boolean',
      description: 'Adds structured data for Google rich results',
      initialValue: true,
      group: 'settings',
    }),
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
      faqs: 'faqs',
    },
    prepare({ heading, faqs }) {
      return {
        title: heading || 'FAQ',
        subtitle: `${faqs?.length || 0} questions`,
      }
    },
  },
})
