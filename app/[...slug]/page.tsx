import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { sanityFetch } from '@/lib/sanity/client'
import { PAGE_QUERY, ALL_PAGES_SLUGS_QUERY } from '@/lib/sanity/queries'
import type { Page } from '@/lib/sanity/types'
import SectionRenderer from '@/components/sanity/SectionRenderer'
import { urlFor } from '@/lib/sanity/client'

interface PageProps {
  params: { slug: string[] }
}

// Generate static params for all pages
export async function generateStaticParams() {
  const pages = await sanityFetch<{ slug: string }[]>({
    query: ALL_PAGES_SLUGS_QUERY,
    tags: ['page'],
  })

  return pages.map((page) => ({
    slug: page.slug.split('/'),
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug.join('/')
  const { isEnabled: preview } = draftMode()

  const page = await sanityFetch<Page>({
    query: PAGE_QUERY,
    params: { slug },
    preview,
    tags: [`page:${slug}`],
  })

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  const seo = page.seo

  // Build OG image URL
  const ogImage = seo?.ogImage?.asset
    ? urlFor(seo.ogImage.asset).width(1200).height(630).url()
    : undefined

  return {
    title: seo?.metaTitle || page.title,
    description: seo?.metaDescription,
    robots: seo?.noIndex ? 'noindex, nofollow' : undefined,
    alternates: seo?.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || page.title,
      description: seo?.ogDescription || seo?.metaDescription,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
      type: 'website',
    },
    twitter: {
      card: seo?.twitterCardType === 'summary' ? 'summary' : 'summary_large_image',
      title: seo?.ogTitle || seo?.metaTitle || page.title,
      description: seo?.ogDescription || seo?.metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const slug = params.slug.join('/')

  // Skip system routes - these should be handled by their own routes
  const systemPaths = ['studio', 'api', 'admin', '_next', 'favicon.ico', 'icon']
  if (systemPaths.some(path => slug.startsWith(path))) {
    notFound()
  }

  const { isEnabled: preview } = draftMode()

  const page = await sanityFetch<Page>({
    query: PAGE_QUERY,
    params: { slug },
    preview,
    tags: [`page:${slug}`],
  })

  // Return 404 if page not found or is draft (and not in preview mode)
  if (!page || (page.status === 'draft' && !preview)) {
    notFound()
  }

  return (
    <>
      {/* Preview Mode Banner */}
      {preview && (
        <div className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-4">
          <span className="text-sm">Preview Mode</span>
          <a
            href={`/api/exit-preview?slug=${slug}`}
            className="text-xs bg-white text-blue-600 px-2 py-1 rounded hover:bg-blue-50"
          >
            Exit Preview
          </a>
        </div>
      )}

      {/* Page Content */}
      <SectionRenderer sections={page.sections} />

      {/* FAQ Schema Markup */}
      {page.sections?.some(
        (s) => s._type === 'faqSection' && (s as any).addSchemaMarkup
      ) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(page.sections)),
          }}
        />
      )}
    </>
  )
}

// Generate FAQ schema for SEO
function generateFAQSchema(sections: Page['sections']) {
  const faqSections = sections.filter(
    (s) => s._type === 'faqSection' && (s as any).addSchemaMarkup
  )

  const faqItems = faqSections.flatMap((section: any) =>
    section.faqs?.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // Convert portable text to plain text
        text: faq.answer
          ?.map((block: any) =>
            block.children?.map((child: any) => child.text).join('')
          )
          .join('\n'),
      },
    })) || []
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  }
}
