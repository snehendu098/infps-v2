import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity.client'
import { PAGE_QUERY } from '@/lib/sanity.queries'
import { Page } from '@/lib/sanity.types'
import PageRenderer from '@/components/cms/PageRenderer'
import { Metadata } from 'next'
import { urlFor } from '@/lib/sanity.image'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page: Page = await client.fetch(PAGE_QUERY, { slug: params.slug })

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  const metaTitle = page.seo?.metaTitle || page.title
  const metaDescription = page.seo?.metaDescription || ''
  const ogImage = page.seo?.ogImage?.asset
    ? urlFor(page.seo.ogImage.asset).width(1200).height(630).url()
    : undefined

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default async function CMSPage({ params }: Props) {
  const page: Page = await client.fetch(PAGE_QUERY, { slug: params.slug })

  if (!page) {
    notFound()
  }

  return <PageRenderer page={page} />
}

export const revalidate = 60 // Revalidate every 60 seconds
