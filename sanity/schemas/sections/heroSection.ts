import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: HomeIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'media', title: 'Media' },
    { name: 'buttons', title: 'Buttons' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Content
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small text above the headline',
      group: 'content',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Highlight Words',
      type: 'string',
      description: 'Words to highlight with gradient/accent color (comma separated)',
      group: 'content',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'headlineStyles',
      title: 'Headline Styling',
      type: 'textStyles',
      group: 'content',
    }),

    // Media
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Animation/Lottie', value: 'lottie' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      group: 'media',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'responsiveImage',
      hidden: ({ parent }) => parent?.mediaType !== 'image',
      group: 'media',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video URL',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
      group: 'media',
    }),
    defineField({
      name: 'videoPoster',
      title: 'Video Poster Image',
      type: 'image',
      description: 'Shown before video plays',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
      group: 'media',
    }),
    defineField({
      name: 'autoplayVideo',
      title: 'Autoplay Video',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.mediaType !== 'video',
      group: 'media',
    }),
    defineField({
      name: 'loopVideo',
      title: 'Loop Video',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.mediaType !== 'video',
      group: 'media',
    }),
    defineField({
      name: 'muteVideo',
      title: 'Mute Video',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.mediaType !== 'video',
      group: 'media',
    }),
    defineField({
      name: 'lottieUrl',
      title: 'Lottie Animation URL',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'lottie',
      group: 'media',
    }),
    defineField({
      name: 'mediaPosition',
      title: 'Media Position',
      type: 'string',
      options: {
        list: [
          { title: 'Right (Text Left)', value: 'right' },
          { title: 'Left (Text Right)', value: 'left' },
          { title: 'Background', value: 'background' },
          { title: 'Below Text', value: 'below' },
        ],
        layout: 'radio',
      },
      initialValue: 'right',
      group: 'media',
    }),

    // Buttons
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'button',
      group: 'buttons',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'button',
      group: 'buttons',
    }),

    // Settings
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Split (50/50)', value: 'split' },
          { title: 'Centered', value: 'centered' },
          { title: 'Full Width Background', value: 'fullwidth' },
          { title: 'Asymmetric (60/40)', value: 'asymmetric' },
        ],
        layout: 'radio',
      },
      initialValue: 'split',
      group: 'settings',
    }),
    defineField({
      name: 'height',
      title: 'Section Height',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: 'Full Screen', value: 'screen' },
          { title: '80% Screen', value: '80vh' },
          { title: '60% Screen', value: '60vh' },
          { title: 'Large (600px min)', value: 'large' },
          { title: 'Medium (400px min)', value: 'medium' },
        ],
      },
      initialValue: 'auto',
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
      headline: 'headline',
      image: 'image.image',
    },
    prepare({ headline, image }) {
      return {
        title: headline || 'Hero Section',
        subtitle: 'Hero',
        media: image,
      }
    },
  },
})
