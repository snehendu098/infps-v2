/**
 * Seed pages into Sanity
 * Run with: SANITY_API_READ_TOKEN=<token> npx ts-node --skip-project scripts/seed-pages.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '51qjg3ag',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  apiVersion: '2024-01-01',
})

const PAGES = [
  {
    title: 'Home',
    slug: 'home',
    isHomePage: true,
    description: 'Welcome to Infinititech Partners - Transform Your Digital Future',
  },
  {
    title: 'About Us',
    slug: 'about',
    description: 'Learn about Infinititech Partners and our mission',
  },
  {
    title: 'Services',
    slug: 'services',
    description: 'Our comprehensive technology solutions',
  },
  {
    title: 'Portfolio',
    slug: 'portfolio',
    description: 'Explore our successful projects',
  },
  {
    title: 'Products',
    slug: 'products',
    description: 'Our software products and solutions',
  },
  {
    title: 'Team',
    slug: 'team',
    description: 'Meet our talented team',
  },
  {
    title: 'Contact',
    slug: 'contact',
    description: 'Get in touch with us',
  },
]

async function seedPages() {
  console.log('Seeding pages...\n')

  for (const page of PAGES) {
    const doc = {
      _type: 'page',
      title: page.title,
      slug: { _type: 'slug', current: page.slug },
      status: 'published',
      hideFromNavigation: false,
      seo: {
        metaTitle: `${page.title} | Infinititech Partners`,
        metaDescription: page.description,
      },
      sections: [], // Empty sections - can be added via Studio
    }

    try {
      const result = await client.create(doc)
      console.log(`✓ Created page: ${page.title} (${result._id})`)
    } catch (error: any) {
      console.error(`✗ Failed to create page ${page.title}:`, error.message)
    }
  }

  console.log('\n✅ Pages seeded successfully!')
  console.log('\nYou can now:')
  console.log('1. Go to http://localhost:3000/studio')
  console.log('2. Click on "Pages" in the sidebar')
  console.log('3. Click on any page to add sections using the page builder')
}

seedPages()
