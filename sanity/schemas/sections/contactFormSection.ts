import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactFormSection = defineType({
  name: 'contactFormSection',
  title: 'Contact Form',
  type: 'object',
  icon: EnvelopeIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'form', title: 'Form Fields' },
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
      name: 'description',
      title: 'Description',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Email', value: 'mail' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Location', value: 'map-pin' },
                  { title: 'Clock', value: 'clock' },
                ],
              },
            },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'link', title: 'Link', type: 'link' },
          ],
          preview: {
            select: {
              label: 'label',
              value: 'value',
            },
            prepare({ label, value }) {
              return {
                title: label || 'Contact Info',
                subtitle: value,
              }
            },
          },
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'image',
      title: 'Side Image',
      type: 'responsiveImage',
      group: 'content',
    }),

    // Form
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'formField',
          fields: [
            {
              name: 'type',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Phone', value: 'tel' },
                  { title: 'Textarea', value: 'textarea' },
                  { title: 'Select', value: 'select' },
                  { title: 'Checkbox', value: 'checkbox' },
                  { title: 'Radio', value: 'radio' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Field Name',
              type: 'string',
              description: 'Used as the field identifier',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            },
            {
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'width',
              title: 'Width',
              type: 'string',
              options: {
                list: [
                  { title: 'Full', value: 'full' },
                  { title: 'Half', value: 'half' },
                ],
              },
              initialValue: 'full',
            },
            {
              name: 'options',
              title: 'Options (for select/radio)',
              type: 'array',
              of: [{ type: 'string' }],
              hidden: ({ parent }) => !['select', 'radio'].includes(parent?.type || ''),
            },
          ],
          preview: {
            select: {
              label: 'label',
              type: 'type',
            },
            prepare({ label, type }) {
              return {
                title: label || 'Field',
                subtitle: type,
              }
            },
          },
        },
      ],
      group: 'form',
    }),
    defineField({
      name: 'submitButton',
      title: 'Submit Button',
      type: 'button',
      group: 'form',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you for your message! We will get back to you soon.',
      group: 'form',
    }),
    defineField({
      name: 'formEndpoint',
      title: 'Form Endpoint URL',
      type: 'string',
      description: 'API endpoint to submit form data',
      group: 'form',
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Form Only', value: 'form-only' },
          { title: 'Split (Content + Form)', value: 'split' },
          { title: 'Form with Image', value: 'with-image' },
          { title: 'Two Columns', value: 'two-columns' },
        ],
      },
      initialValue: 'split',
      group: 'layout',
    }),
    defineField({
      name: 'formStyle',
      title: 'Form Style',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Boxed', value: 'boxed' },
          { title: 'Card', value: 'card' },
        ],
      },
      initialValue: 'card',
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
    },
    prepare({ heading }) {
      return {
        title: heading || 'Contact Form',
        subtitle: 'Contact Form Section',
      }
    },
  },
})
