'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'
import type { ResponsiveImage as ResponsiveImageType, SanityImage as SanityImageType } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'

interface SanityImageProps {
  image: SanityImageType
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
}

export function SanityImage({
  image,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  sizes = '100vw',
  quality = 85,
}: SanityImageProps) {
  if (!image?.asset) return null

  const imageUrl = urlFor(image)
    .quality(quality)
    .auto('format')
    .url()

  // Get dimensions from the asset if not provided
  const imgWidth = width || 1200
  const imgHeight = height || 800

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        priority={priority}
        className={cn('object-cover', className)}
        sizes={sizes}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={imgWidth}
      height={imgHeight}
      priority={priority}
      className={className}
      sizes={sizes}
    />
  )
}

interface ResponsiveImageProps {
  data: ResponsiveImageType
  className?: string
  containerClassName?: string
  sizes?: string
}

export function ResponsiveImage({
  data,
  className,
  containerClassName,
  sizes = '100vw',
}: ResponsiveImageProps) {
  if (!data?.image?.asset) return null

  const roundedMap: Record<string, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }

  const shadowMap: Record<string, string> = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  const aspectRatioMap: Record<string, string> = {
    auto: '',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
    '21/9': 'aspect-[21/9]',
    '9/16': 'aspect-[9/16]',
  }

  const objectFitMap: Record<string, string> = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        aspectRatioMap[data.aspectRatio || 'auto'],
        roundedMap[data.rounded || 'none'],
        shadowMap[data.shadow || 'none'],
        containerClassName
      )}
    >
      <SanityImage
        image={data.image}
        alt={data.alt}
        fill
        priority={data.priority}
        className={cn(
          objectFitMap[data.objectFit || 'cover'],
          className
        )}
        sizes={sizes}
      />
      {data.caption && (
        <p className="mt-2 text-sm text-gray-500 text-center">{data.caption}</p>
      )}
    </div>
  )
}
