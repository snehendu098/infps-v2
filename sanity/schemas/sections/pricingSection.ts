import { defineType, defineField } from 'sanity'
import { CreditCardIcon } from '@sanity/icons'

export const pricingSection = defineType({
  name: 'pricingSection',
  title: 'Pricing',
  type: 'object',
  icon: CreditCardIcon,
  groups: [
    { name: 'header', title: 'Header', default: true },
    { name: 'plans', title: 'Pricing Plans' },
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
    defineField({
      name: 'showBillingToggle',
      title: 'Show Monthly/Annual Toggle',
      type: 'boolean',
      initialValue: false,
      group: 'header',
    }),

    // Plans
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingPlan',
          fields: [
            {
              name: 'name',
              title: 'Plan Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'priceMonthly',
              title: 'Monthly Price',
              type: 'number',
            },
            {
              name: 'priceAnnual',
              title: 'Annual Price',
              type: 'number',
            },
            {
              name: 'priceLabel',
              title: 'Custom Price Label',
              type: 'string',
              description: 'e.g., "Contact Us", "Free", "Custom"',
            },
            {
              name: 'currency',
              title: 'Currency Symbol',
              type: 'string',
              initialValue: '$',
            },
            {
              name: 'billingPeriod',
              title: 'Billing Period Label',
              type: 'string',
              initialValue: '/month',
            },
            {
              name: 'featured',
              title: 'Featured/Popular Plan',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'badge',
              title: 'Badge Text',
              type: 'string',
              description: 'e.g., "Most Popular", "Best Value"',
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                    },
                    {
                      name: 'included',
                      title: 'Included',
                      type: 'boolean',
                      initialValue: true,
                    },
                    {
                      name: 'highlight',
                      title: 'Highlight Feature',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      included: 'included',
                    },
                    prepare({ title, included }) {
                      return {
                        title,
                        subtitle: included ? 'Included' : 'Not Included',
                      }
                    },
                  },
                },
              ],
            },
            {
              name: 'button',
              title: 'CTA Button',
              type: 'button',
            },
          ],
          preview: {
            select: {
              name: 'name',
              price: 'priceMonthly',
              currency: 'currency',
              featured: 'featured',
            },
            prepare({ name, price, currency, featured }) {
              return {
                title: name || 'Plan',
                subtitle: price ? `${currency || '$'}${price}` : 'Custom',
              }
            },
          },
        },
      ],
      group: 'plans',
    }),

    // Layout
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [
          { title: '2 Columns', value: 2 },
          { title: '3 Columns', value: 3 },
          { title: '4 Columns', value: 4 },
        ],
      },
      initialValue: 3,
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
          { title: 'Gradient Featured', value: 'gradient' },
        ],
      },
      initialValue: 'elevated',
      group: 'layout',
    }),
    defineField({
      name: 'featuredScale',
      title: 'Scale Featured Plan',
      type: 'boolean',
      description: 'Make the featured plan slightly larger',
      initialValue: true,
      group: 'layout',
    }),
    defineField({
      name: 'showFeatureComparison',
      title: 'Show as Comparison Table',
      type: 'boolean',
      description: 'Display plans in a feature comparison table format',
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
      plans: 'plans',
    },
    prepare({ heading, plans }) {
      return {
        title: heading || 'Pricing',
        subtitle: `${plans?.length || 0} plans`,
      }
    },
  },
})
