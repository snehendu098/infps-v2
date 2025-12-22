import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'Company Info' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'social', title: 'Social Links' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'aboutPreview', title: 'About Preview' },
    { name: 'homeCta', title: 'Homepage CTA' },
    { name: 'effects', title: 'Visual Effects' },
    { name: 'cursor', title: 'Cursor Effects' },
    { name: 'seasonal', title: 'Seasonal Effects' },
    { name: 'scroll', title: 'Scroll Settings' },
  ],
  fields: [
    // ========== COMPANY INFO ==========
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
      initialValue: 'Infinititech Partners',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
      initialValue: 'Infinite Possibilities, One Partner',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'general',
      initialValue: 'hello@infinititechpartners.com',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'general',
      initialValue: '+91 629 103 3969',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      group: 'general',
      fields: [
        { name: 'city', title: 'City', type: 'string', initialValue: 'Kolkata' },
        { name: 'state', title: 'State', type: 'string', initialValue: 'West Bengal' },
        { name: 'country', title: 'Country', type: 'string', initialValue: 'India' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'general',
      rows: 3,
      initialValue: 'Transform your digital vision into reality with cutting-edge technology solutions',
    }),

    // ========== NAVIGATION LINKS ==========
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      group: 'navigation',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'URL Path', type: 'string' },
        ],
        preview: {
          select: { title: 'label', subtitle: 'href' },
        },
      }],
      initialValue: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Products', href: '/products' },
        { label: 'Team', href: '/team' },
        { label: 'Contact', href: '/contact' },
      ],
    }),

    // ========== SOCIAL LINKS ==========
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'social',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Platform Name', type: 'string' },
          { name: 'url', title: 'URL', type: 'url' },
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
              list: [
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'Twitter/X', value: 'twitter' },
                { title: 'GitHub', value: 'github' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'YouTube', value: 'youtube' },
              ],
            },
          },
        ],
        preview: {
          select: { title: 'name', subtitle: 'url' },
        },
      }],
    }),

    // ========== HERO SECTION ==========
    defineField({
      name: 'heroSection',
      title: 'Hero Section Content',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'headingLine1',
          title: 'Heading Line 1 (Gradient)',
          type: 'string',
          initialValue: 'Transform, Innovate',
        }),
        defineField({
          name: 'headingLine2',
          title: 'Heading Line 2',
          type: 'string',
          initialValue: '& Scale Your Business',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue: 'Leading provider of Data Center Management, Custom Software Development, Smart City Solutions, and comprehensive Digital Services',
        }),
        defineField({
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: 'Start Your Project',
        }),
        defineField({
          name: 'primaryButtonLink',
          title: 'Primary Button Link',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          initialValue: 'Explore Services',
        }),
        defineField({
          name: 'secondaryButtonLink',
          title: 'Secondary Button Link',
          type: 'string',
          initialValue: '/services',
        }),
      ],
    }),

    // ========== ABOUT PREVIEW (Homepage) ==========
    defineField({
      name: 'aboutPreview',
      title: 'About Preview Section (Homepage)',
      type: 'object',
      group: 'aboutPreview',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'About Infinititech Partners',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 3,
          initialValue: 'Founded with a vision to bridge the gap between innovative technology and real-world business needs, we combine technical expertise with business acumen.',
        }),
        defineField({
          name: 'values',
          title: 'Core Values',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string', options: { list: [
                { title: 'Target', value: 'Target' },
                { title: 'Eye', value: 'Eye' },
                { title: 'Heart', value: 'Heart' },
                { title: 'Shield', value: 'Shield' },
                { title: 'Zap', value: 'Zap' },
                { title: 'Star', value: 'Star' },
              ]}},
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text', rows: 2 },
            ],
            preview: {
              select: { title: 'title', subtitle: 'description' },
            },
          }],
        }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'number', title: 'Number/Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
            preview: {
              select: { title: 'number', subtitle: 'label' },
            },
          }],
        }),
      ],
    }),

    // ========== HOMEPAGE CTA ==========
    defineField({
      name: 'homepageCta',
      title: 'Homepage CTA Section',
      type: 'object',
      group: 'homeCta',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Ready to Transform Your Business?',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: "Let's discuss your project and bring your vision to life",
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get in Touch',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact',
        }),
      ],
    }),

    // Particle Logo Effect
    defineField({
      name: 'particleLogo',
      title: 'Particle Logo Effect',
      type: 'object',
      group: 'effects',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Particle Logo',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'particleCount',
          title: 'Particle Count',
          type: 'number',
          initialValue: 1000,
          description: 'Number of particles (800-1500 recommended)',
          validation: Rule => Rule.min(100).max(3000),
        }),
        defineField({
          name: 'colorA',
          title: 'Primary Color',
          type: 'string',
          initialValue: '#FF9966',
        }),
        defineField({
          name: 'colorB',
          title: 'Secondary Color',
          type: 'string',
          initialValue: '#FF6B35',
        }),
        defineField({
          name: 'forceRadius',
          title: 'Mouse Force Radius',
          type: 'number',
          initialValue: 140,
          description: 'Mouse influence radius in pixels',
        }),
        defineField({
          name: 'shadowBlur',
          title: 'Glow Amount',
          type: 'number',
          initialValue: 12,
          description: 'Particle glow intensity (0 to disable)',
        }),
      ],
    }),

    // Liquid Ether Background
    defineField({
      name: 'liquidEther',
      title: 'Liquid Ether Background',
      type: 'object',
      group: 'effects',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Liquid Ether',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'desktopParticleCount',
          title: 'Desktop Particle Count',
          type: 'number',
          initialValue: 50,
        }),
        defineField({
          name: 'tabletParticleCount',
          title: 'Tablet Particle Count',
          type: 'number',
          initialValue: 35,
        }),
        defineField({
          name: 'mobileParticleCount',
          title: 'Mobile Particle Count',
          type: 'number',
          initialValue: 20,
        }),
        defineField({
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'object',
          fields: [
            { name: 'h', title: 'Hue', type: 'number', initialValue: 20 },
            { name: 's', title: 'Saturation', type: 'number', initialValue: 100 },
            { name: 'l', title: 'Lightness', type: 'number', initialValue: 70 },
          ],
        }),
        defineField({
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'object',
          fields: [
            { name: 'h', title: 'Hue', type: 'number', initialValue: 15 },
            { name: 's', title: 'Saturation', type: 'number', initialValue: 100 },
            { name: 'l', title: 'Lightness', type: 'number', initialValue: 60 },
          ],
        }),
        defineField({
          name: 'desktopBlur',
          title: 'Desktop Blur (px)',
          type: 'number',
          initialValue: 40,
        }),
        defineField({
          name: 'tabletBlur',
          title: 'Tablet Blur (px)',
          type: 'number',
          initialValue: 30,
        }),
        defineField({
          name: 'mobileBlur',
          title: 'Mobile Blur (px)',
          type: 'number',
          initialValue: 20,
        }),
      ],
    }),

    // Cursor Effects
    defineField({
      name: 'splashCursor',
      title: 'Splash Cursor Effect',
      type: 'object',
      group: 'cursor',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Splash Cursor',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'dotSize',
          title: 'Cursor Dot Size (px)',
          type: 'number',
          initialValue: 12,
        }),
        defineField({
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          initialValue: '#FF9966',
        }),
        defineField({
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          initialValue: '#FF6B35',
        }),
        defineField({
          name: 'trailThrottle',
          title: 'Trail Throttle (ms)',
          type: 'number',
          initialValue: 50,
          description: 'Delay between trail particles',
        }),
        defineField({
          name: 'trailDuration',
          title: 'Trail Duration (ms)',
          type: 'number',
          initialValue: 600,
        }),
        defineField({
          name: 'rippleDuration',
          title: 'Click Ripple Duration (ms)',
          type: 'number',
          initialValue: 1200,
        }),
      ],
    }),

    // Snowfall Effect
    defineField({
      name: 'snowfall',
      title: 'Snowfall Effect',
      type: 'object',
      group: 'seasonal',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Snowfall',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'snowflakeCount',
          title: 'Snowflake Count',
          type: 'number',
          initialValue: 70,
        }),
        defineField({
          name: 'minRadius',
          title: 'Min Snowflake Size',
          type: 'number',
          initialValue: 0.5,
        }),
        defineField({
          name: 'maxRadius',
          title: 'Max Snowflake Size',
          type: 'number',
          initialValue: 2.5,
        }),
        defineField({
          name: 'minSpeed',
          title: 'Min Fall Speed',
          type: 'number',
          initialValue: 0.2,
        }),
        defineField({
          name: 'maxSpeed',
          title: 'Max Fall Speed',
          type: 'number',
          initialValue: 0.7,
        }),
        defineField({
          name: 'minOpacity',
          title: 'Min Opacity',
          type: 'number',
          initialValue: 0.15,
        }),
        defineField({
          name: 'maxOpacity',
          title: 'Max Opacity',
          type: 'number',
          initialValue: 0.45,
        }),
      ],
    }),

    // Christmas Lights
    defineField({
      name: 'christmasLights',
      title: 'Christmas Lights',
      type: 'object',
      group: 'seasonal',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Christmas Lights',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'spacing',
          title: 'Light Spacing (px)',
          type: 'number',
          initialValue: 60,
        }),
        defineField({
          name: 'colors',
          title: 'Light Colors',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'],
        }),
        defineField({
          name: 'pulseSpeed',
          title: 'Pulse Speed',
          type: 'number',
          initialValue: 0.02,
          description: 'How fast lights pulse (lower = slower)',
        }),
        defineField({
          name: 'glowRadius',
          title: 'Glow Radius (px)',
          type: 'number',
          initialValue: 15,
        }),
      ],
    }),

    // Smooth Scroll
    defineField({
      name: 'smoothScroll',
      title: 'Smooth Scroll',
      type: 'object',
      group: 'scroll',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Smooth Scroll',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'duration',
          title: 'Scroll Duration (ms)',
          type: 'number',
          initialValue: 1500,
        }),
        defineField({
          name: 'navbarOffset',
          title: 'Navbar Offset (px)',
          type: 'number',
          initialValue: 80,
          description: 'Space to leave at top when scrolling to sections',
        }),
      ],
    }),

    // Scroll Progress
    defineField({
      name: 'scrollProgress',
      title: 'Scroll Progress Bar',
      type: 'object',
      group: 'scroll',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Scroll Progress',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'color',
          title: 'Progress Bar Color',
          type: 'string',
          initialValue: '#FF9966',
        }),
        defineField({
          name: 'height',
          title: 'Bar Height (px)',
          type: 'number',
          initialValue: 3,
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global configuration',
      }
    },
  },
})
