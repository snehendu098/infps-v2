'use client'

import { useState } from 'react'
import type { GallerySection as GallerySectionType } from '@/lib/sanity/types'
import { SanityImage } from '../common/SanityImage'
import { SanityLink } from '../common/SanityButton'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { urlFor } from '@/lib/sanity/client'

interface GallerySectionProps {
  data: GallerySectionType
}

export default function GallerySection({ data }: GallerySectionProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const {
    eyebrow,
    heading,
    subheading,
    images,
    layout = 'grid',
    columns = 4,
    gap = 'md',
    aspectRatio = 'original',
    enableLightbox = true,
    showFilters = false,
    showCaptions = 'hover',
    hoverEffect = 'zoom',
  } = data

  // Get unique categories
  const categories: string[] = [
    'all',
    ...Array.from(
      new Set(
        images
          ?.map((img) => img.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ),
  ]

  // Filter images
  const filteredImages =
    activeFilter === 'all'
      ? images
      : images?.filter((img) => img.category === activeFilter)

  const columnClasses: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  }

  const gapClasses: Record<string, string> = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }

  const aspectClasses: Record<string, string> = {
    original: '',
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
  }

  const hoverClasses: Record<string, string> = {
    none: '',
    zoom: 'group-hover:scale-110',
    lift: 'group-hover:-translate-y-2',
    darken: 'group-hover:brightness-75',
    reveal: '',
  }

  return (
    <div>
      {/* Header */}
      {(eyebrow || heading || subheading) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {eyebrow && (
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-lg text-gray-600">{subheading}</p>
          )}
        </div>
      )}

      {/* Filters */}
      {showFilters && categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={cn('grid', columnClasses[columns], gapClasses[gap])}>
        {filteredImages?.map((galleryImage) => {
          const imageContent = (
            <div
              className={cn(
                'group relative overflow-hidden rounded-lg cursor-pointer',
                aspectClasses[aspectRatio]
              )}
              onClick={() => {
                if (enableLightbox && galleryImage.image) {
                  setLightboxImage(urlFor(galleryImage.image).width(1920).url())
                }
              }}
            >
              <SanityImage
                image={galleryImage.image}
                alt={galleryImage.alt}
                fill={aspectRatio !== 'original'}
                width={aspectRatio === 'original' ? 600 : undefined}
                height={aspectRatio === 'original' ? 400 : undefined}
                className={cn(
                  'w-full h-full object-cover transition-all duration-300',
                  hoverClasses[hoverEffect]
                )}
              />

              {/* Caption Overlay */}
              {galleryImage.caption && showCaptions !== 'never' && (
                <div
                  className={cn(
                    'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300',
                    showCaptions === 'hover' && 'opacity-0 group-hover:opacity-100'
                  )}
                >
                  <p className="text-white text-sm">{galleryImage.caption}</p>
                </div>
              )}
            </div>
          )

          if (galleryImage.link) {
            return (
              <SanityLink key={galleryImage._key} link={galleryImage.link}>
                {imageContent}
              </SanityLink>
            )
          }

          return <div key={galleryImage._key}>{imageContent}</div>
        })}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
