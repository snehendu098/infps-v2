import { defineType, defineField } from 'sanity'
import { SearchIcon } from '@sanity/icons'

export const defaultSeo = defineType({
  name: 'defaultSeo',
  title: 'Default SEO Settings',
  type: 'document',
  icon: SearchIcon,
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'social', title: 'Social Sharing' },
    { name: 'advanced', title: 'Advanced' },
  ],
  fields: [
    // General
    defineField({
      name: 'metaTitleSuffix',
      title: 'Meta Title Suffix',
      type: 'string',
      description: 'Appended to all page titles (e.g., " | Company Name")',
      group: 'general',
    }),
    defineField({
      name: 'defaultMetaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      description: 'Used when a page has no specific description',
      group: 'general',
    }),
    defineField({
      name: 'keywords',
      title: 'Default Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      group: 'general',
    }),

    // Social
    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image',
      type: 'image',
      description: 'Default image for social sharing (1200x630px)',
      group: 'social',
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'e.g., @yourcompany',
      group: 'social',
    }),
    defineField({
      name: 'facebookAppId',
      title: 'Facebook App ID',
      type: 'string',
      group: 'social',
    }),

    // Advanced
    defineField({
      name: 'googleSiteVerification',
      title: 'Google Site Verification',
      type: 'string',
      description: 'Google Search Console verification code',
      group: 'advanced',
    }),
    defineField({
      name: 'bingSiteVerification',
      title: 'Bing Site Verification',
      type: 'string',
      group: 'advanced',
    }),
    defineField({
      name: 'robotsTxt',
      title: 'robots.txt Content',
      type: 'text',
      rows: 10,
      group: 'advanced',
    }),
    defineField({
      name: 'customHeadTags',
      title: 'Custom Head Tags',
      type: 'text',
      rows: 8,
      description: 'Custom HTML to inject in the <head> of all pages',
      group: 'advanced',
    }),
    defineField({
      name: 'organizationSchema',
      title: 'Organization Schema',
      type: 'object',
      group: 'advanced',
      fields: [
        { name: 'name', title: 'Organization Name', type: 'string' },
        { name: 'logo', title: 'Organization Logo', type: 'image' },
        { name: 'url', title: 'Website URL', type: 'url' },
        { name: 'email', title: 'Contact Email', type: 'string' },
        { name: 'phone', title: 'Contact Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text', rows: 3 },
        {
          name: 'socialProfiles',
          title: 'Social Profiles',
          type: 'array',
          of: [{ type: 'url' }],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Default SEO Settings',
        subtitle: 'Site-wide SEO configuration',
      }
    },
  },
})
