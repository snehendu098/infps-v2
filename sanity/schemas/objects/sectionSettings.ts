import { defineType, defineField } from 'sanity'

export const sectionSettings = defineType({
  name: 'sectionSettings',
  title: 'Section Settings',
  type: 'object',
  groups: [
    { name: 'visibility', title: 'Visibility' },
    { name: 'layout', title: 'Layout' },
    { name: 'background', title: 'Background' },
    { name: 'spacing', title: 'Spacing' },
    { name: 'advanced', title: 'Advanced' },
  ],
  fields: [
    // Visibility
    defineField({
      name: 'isVisible',
      title: 'Show Section',
      type: 'boolean',
      description: 'Toggle to hide this section without deleting it',
      initialValue: true,
      group: 'visibility',
    }),
    defineField({
      name: 'visibleOn',
      title: 'Show On Devices',
      type: 'object',
      group: 'visibility',
      fields: [
        { name: 'desktop', title: 'Desktop', type: 'boolean', initialValue: true },
        { name: 'tablet', title: 'Tablet', type: 'boolean', initialValue: true },
        { name: 'mobile', title: 'Mobile', type: 'boolean', initialValue: true },
      ],
    }),

    // Layout
    defineField({
      name: 'containerWidth',
      title: 'Container Width',
      type: 'string',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Wide (1400px)', value: 'wide' },
          { title: 'Default (1200px)', value: 'default' },
          { title: 'Narrow (800px)', value: 'narrow' },
        ],
        layout: 'radio',
      },
      initialValue: 'default',
      group: 'layout',
    }),
    defineField({
      name: 'contentAlignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
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

    // Background
    defineField({
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      options: {
        list: [
          { title: 'None (Transparent)', value: 'none' },
          { title: 'Solid Color', value: 'color' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
      group: 'background',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPicker',
      hidden: ({ parent }) => parent?.backgroundType !== 'color',
      group: 'background',
    }),
    defineField({
      name: 'gradient',
      title: 'Gradient',
      type: 'object',
      hidden: ({ parent }) => parent?.backgroundType !== 'gradient',
      group: 'background',
      fields: [
        {
          name: 'type',
          title: 'Gradient Type',
          type: 'string',
          options: {
            list: [
              { title: 'Linear', value: 'linear' },
              { title: 'Radial', value: 'radial' },
            ],
          },
          initialValue: 'linear',
        },
        {
          name: 'angle',
          title: 'Angle (degrees)',
          type: 'number',
          description: 'For linear gradients only',
          initialValue: 180,
          validation: (Rule) => Rule.min(0).max(360),
        },
        {
          name: 'colorStart',
          title: 'Start Color',
          type: 'colorPicker',
        },
        {
          name: 'colorEnd',
          title: 'End Color',
          type: 'colorPicker',
        },
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
      group: 'background',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL, or direct video file URL',
      hidden: ({ parent }) => parent?.backgroundType !== 'video',
      group: 'background',
    }),
    defineField({
      name: 'backgroundOverlay',
      title: 'Background Overlay',
      type: 'object',
      group: 'background',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Overlay',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'color',
          title: 'Overlay Color',
          type: 'colorPicker',
        },
        {
          name: 'opacity',
          title: 'Opacity',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(100),
          initialValue: 50,
        },
      ],
    }),
    defineField({
      name: 'backgroundPosition',
      title: 'Background Position',
      type: 'string',
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Top', value: 'top' },
          { title: 'Bottom', value: 'bottom' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'center',
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
      group: 'background',
    }),
    defineField({
      name: 'backgroundAttachment',
      title: 'Parallax Effect',
      type: 'boolean',
      description: 'Background stays fixed while scrolling',
      initialValue: false,
      hidden: ({ parent }) => parent?.backgroundType !== 'image',
      group: 'background',
    }),

    // Spacing
    defineField({
      name: 'paddingTop',
      title: 'Padding Top',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '0' },
          { title: 'Small (16px)', value: 'sm' },
          { title: 'Medium (32px)', value: 'md' },
          { title: 'Large (64px)', value: 'lg' },
          { title: 'Extra Large (96px)', value: 'xl' },
          { title: '2XL (128px)', value: '2xl' },
        ],
      },
      initialValue: 'lg',
      group: 'spacing',
    }),
    defineField({
      name: 'paddingBottom',
      title: 'Padding Bottom',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '0' },
          { title: 'Small (16px)', value: 'sm' },
          { title: 'Medium (32px)', value: 'md' },
          { title: 'Large (64px)', value: 'lg' },
          { title: 'Extra Large (96px)', value: 'xl' },
          { title: '2XL (128px)', value: '2xl' },
        ],
      },
      initialValue: 'lg',
      group: 'spacing',
    }),
    defineField({
      name: 'marginTop',
      title: 'Margin Top',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '0' },
          { title: 'Small (16px)', value: 'sm' },
          { title: 'Medium (32px)', value: 'md' },
          { title: 'Large (64px)', value: 'lg' },
        ],
      },
      initialValue: '0',
      group: 'spacing',
    }),
    defineField({
      name: 'marginBottom',
      title: 'Margin Bottom',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '0' },
          { title: 'Small (16px)', value: 'sm' },
          { title: 'Medium (32px)', value: 'md' },
          { title: 'Large (64px)', value: 'lg' },
        ],
      },
      initialValue: '0',
      group: 'spacing',
    }),

    // Advanced
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Unique ID for anchor links (e.g., "about-us")',
      group: 'advanced',
    }),
    defineField({
      name: 'customClasses',
      title: 'Custom CSS Classes',
      type: 'string',
      description: 'Additional CSS classes (advanced)',
      group: 'advanced',
    }),
    defineField({
      name: 'animateOnScroll',
      title: 'Animate on Scroll',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Fade In', value: 'fade-in' },
          { title: 'Fade Up', value: 'fade-up' },
          { title: 'Fade Down', value: 'fade-down' },
          { title: 'Fade Left', value: 'fade-left' },
          { title: 'Fade Right', value: 'fade-right' },
          { title: 'Zoom In', value: 'zoom-in' },
          { title: 'Scale Up', value: 'scale-up' },
        ],
      },
      initialValue: 'none',
      group: 'advanced',
    }),
  ],
})
