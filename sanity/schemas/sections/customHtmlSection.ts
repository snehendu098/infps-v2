import { defineType, defineField } from 'sanity'
import { CodeBlockIcon } from '@sanity/icons'

export const customHtmlSection = defineType({
  name: 'customHtmlSection',
  title: 'Custom HTML',
  type: 'object',
  icon: CodeBlockIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Content
    defineField({
      name: 'title',
      title: 'Section Title (for reference)',
      type: 'string',
      description: 'Internal name for this section',
      group: 'content',
    }),
    defineField({
      name: 'htmlContent',
      title: 'HTML Content',
      type: 'text',
      rows: 15,
      description: 'Custom HTML code (be careful with scripts)',
      group: 'content',
    }),
    defineField({
      name: 'cssContent',
      title: 'CSS Styles',
      type: 'text',
      rows: 10,
      description: 'Custom CSS for this section',
      group: 'content',
    }),
    defineField({
      name: 'allowScripts',
      title: 'Allow JavaScript',
      type: 'boolean',
      description: 'Warning: Only enable if you trust the script source',
      initialValue: false,
      group: 'content',
    }),
    defineField({
      name: 'embedType',
      title: 'Embed Type',
      type: 'string',
      options: {
        list: [
          { title: 'Raw HTML', value: 'raw' },
          { title: 'iFrame', value: 'iframe' },
          { title: 'Code Embed (Codepen, etc.)', value: 'embed' },
        ],
      },
      initialValue: 'raw',
      group: 'content',
    }),
    defineField({
      name: 'iframeSrc',
      title: 'iFrame Source URL',
      type: 'url',
      hidden: ({ parent }) => parent?.embedType !== 'iframe',
      group: 'content',
    }),
    defineField({
      name: 'iframeHeight',
      title: 'iFrame Height',
      type: 'string',
      description: 'e.g., 400px, 50vh',
      initialValue: '400px',
      hidden: ({ parent }) => parent?.embedType !== 'iframe',
      group: 'content',
    }),

    // Settings
    defineField({
      name: 'sandboxMode',
      title: 'Sandbox Mode',
      type: 'boolean',
      description: 'Isolate this content in an iframe for security',
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
      title: 'title',
      embedType: 'embedType',
    },
    prepare({ title, embedType }) {
      return {
        title: title || 'Custom HTML',
        subtitle: `Custom HTML (${embedType || 'raw'})`,
      }
    },
  },
})
