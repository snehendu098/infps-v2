import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '51qjg3ag'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Standard client for data fetching
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

// Preview client for draft content
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
})

// Get appropriate client based on preview mode
export function getClient(preview = false) {
  return preview ? previewClient : client
}

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper to get optimized image URL
export function getImageUrl(
  source: SanityImageSource,
  options: {
    width?: number
    height?: number
    quality?: number
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
    format?: 'jpg' | 'png' | 'webp'
  } = {}
) {
  let imageBuilder = builder.image(source)

  if (options.width) imageBuilder = imageBuilder.width(options.width)
  if (options.height) imageBuilder = imageBuilder.height(options.height)
  if (options.quality) imageBuilder = imageBuilder.quality(options.quality)
  if (options.fit) imageBuilder = imageBuilder.fit(options.fit)
  if (options.format) imageBuilder = imageBuilder.format(options.format)

  return imageBuilder.auto('format').url()
}

// Fetch function with error handling
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  preview = false,
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
  preview?: boolean
}): Promise<T> {
  const selectedClient = getClient(preview)

  return selectedClient.fetch<T>(query, params, {
    next: {
      revalidate: preview ? 0 : 60, // Revalidate every 60 seconds in production
      tags,
    },
  })
}
