import { defineType, defineField } from 'sanity'
import { ColorWheelIcon } from '@sanity/icons'

export const themeSettings = defineType({
  name: 'themeSettings',
  title: 'Theme Settings',
  type: 'document',
  icon: ColorWheelIcon,
  groups: [
    { name: 'colors', title: 'Colors', default: true },
    { name: 'typography', title: 'Typography' },
    { name: 'buttons', title: 'Buttons' },
    { name: 'layout', title: 'Layout' },
    { name: 'branding', title: 'Branding' },
  ],
  fields: [
    // Colors
    defineField({
      name: 'colors',
      title: 'Color Palette',
      type: 'object',
      group: 'colors',
      fields: [
        {
          name: 'primary',
          title: 'Primary Color',
          type: 'colorPicker',
          description: 'Main brand color',
        },
        {
          name: 'secondary',
          title: 'Secondary Color',
          type: 'colorPicker',
        },
        {
          name: 'accent',
          title: 'Accent Color',
          type: 'colorPicker',
        },
        {
          name: 'background',
          title: 'Background Color',
          type: 'colorPicker',
        },
        {
          name: 'surface',
          title: 'Surface/Card Color',
          type: 'colorPicker',
        },
        {
          name: 'text',
          title: 'Text Color',
          type: 'colorPicker',
        },
        {
          name: 'textMuted',
          title: 'Muted Text Color',
          type: 'colorPicker',
        },
        {
          name: 'border',
          title: 'Border Color',
          type: 'colorPicker',
        },
        {
          name: 'success',
          title: 'Success Color',
          type: 'colorPicker',
        },
        {
          name: 'warning',
          title: 'Warning Color',
          type: 'colorPicker',
        },
        {
          name: 'error',
          title: 'Error Color',
          type: 'colorPicker',
        },
      ],
    }),
    defineField({
      name: 'gradients',
      title: 'Gradients',
      type: 'array',
      group: 'colors',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'colorStart', title: 'Start Color', type: 'colorPicker' },
            { name: 'colorEnd', title: 'End Color', type: 'colorPicker' },
            { name: 'angle', title: 'Angle', type: 'number', initialValue: 135 },
          ],
          preview: {
            select: { name: 'name' },
          },
        },
      ],
    }),
    defineField({
      name: 'darkMode',
      title: 'Dark Mode Colors',
      type: 'object',
      group: 'colors',
      fields: [
        {
          name: 'background',
          title: 'Dark Background',
          type: 'colorPicker',
        },
        {
          name: 'surface',
          title: 'Dark Surface',
          type: 'colorPicker',
        },
        {
          name: 'text',
          title: 'Dark Mode Text',
          type: 'colorPicker',
        },
      ],
    }),

    // Typography
    defineField({
      name: 'fonts',
      title: 'Fonts',
      type: 'object',
      group: 'typography',
      fields: [
        {
          name: 'heading',
          title: 'Heading Font',
          type: 'string',
          description: 'Google Font name (e.g., "Inter", "Poppins")',
          initialValue: 'Inter',
        },
        {
          name: 'body',
          title: 'Body Font',
          type: 'string',
          initialValue: 'Inter',
        },
        {
          name: 'mono',
          title: 'Monospace Font',
          type: 'string',
          initialValue: 'JetBrains Mono',
        },
      ],
    }),
    defineField({
      name: 'headingSizes',
      title: 'Heading Sizes',
      type: 'object',
      group: 'typography',
      description: 'Font sizes in rem units',
      fields: [
        { name: 'h1', title: 'H1 Size', type: 'string', initialValue: '3.5rem' },
        { name: 'h2', title: 'H2 Size', type: 'string', initialValue: '2.5rem' },
        { name: 'h3', title: 'H3 Size', type: 'string', initialValue: '2rem' },
        { name: 'h4', title: 'H4 Size', type: 'string', initialValue: '1.5rem' },
        { name: 'h5', title: 'H5 Size', type: 'string', initialValue: '1.25rem' },
        { name: 'h6', title: 'H6 Size', type: 'string', initialValue: '1rem' },
      ],
    }),
    defineField({
      name: 'baseFontSize',
      title: 'Base Font Size',
      type: 'string',
      description: 'Root font size',
      initialValue: '16px',
      group: 'typography',
    }),

    // Buttons
    defineField({
      name: 'buttonStyles',
      title: 'Button Styles',
      type: 'object',
      group: 'buttons',
      fields: [
        {
          name: 'borderRadius',
          title: 'Border Radius',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '0' },
              { title: 'Small', value: '4px' },
              { title: 'Medium', value: '8px' },
              { title: 'Large', value: '12px' },
              { title: 'Full', value: '9999px' },
            ],
          },
          initialValue: '8px',
        },
        {
          name: 'padding',
          title: 'Padding',
          type: 'string',
          initialValue: '12px 24px',
        },
        {
          name: 'textTransform',
          title: 'Text Transform',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: 'none' },
              { title: 'Uppercase', value: 'uppercase' },
              { title: 'Capitalize', value: 'capitalize' },
            ],
          },
          initialValue: 'none',
        },
        {
          name: 'fontWeight',
          title: 'Font Weight',
          type: 'string',
          options: {
            list: [
              { title: 'Normal', value: '400' },
              { title: 'Medium', value: '500' },
              { title: 'Semibold', value: '600' },
              { title: 'Bold', value: '700' },
            ],
          },
          initialValue: '500',
        },
      ],
    }),

    // Layout
    defineField({
      name: 'layout',
      title: 'Layout Settings',
      type: 'object',
      group: 'layout',
      fields: [
        {
          name: 'maxWidth',
          title: 'Max Content Width',
          type: 'string',
          initialValue: '1200px',
        },
        {
          name: 'containerPadding',
          title: 'Container Padding',
          type: 'string',
          initialValue: '20px',
        },
        {
          name: 'sectionSpacing',
          title: 'Default Section Spacing',
          type: 'string',
          initialValue: '80px',
        },
        {
          name: 'borderRadius',
          title: 'Default Border Radius',
          type: 'string',
          initialValue: '8px',
        },
      ],
    }),

    // Branding
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'branding',
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo (Dark Mode)',
      type: 'image',
      description: 'Alternative logo for dark backgrounds',
      group: 'branding',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'branding',
    }),
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'branding',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'branding',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Theme Settings',
        subtitle: 'Colors, fonts, and styling',
      }
    },
  },
})
