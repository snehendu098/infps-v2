'use client'

import type { HeroSection as HeroSectionType } from '@/lib/sanity/types'
import { ResponsiveImage } from '../common/SanityImage'
import { SanityButton } from '../common/SanityButton'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  data: HeroSectionType
}

export default function HeroSection({ data }: HeroSectionProps) {
  const {
    eyebrow,
    headline,
    headlineHighlight,
    subheadline,
    mediaType,
    image,
    primaryButton,
    secondaryButton,
    layout = 'split',
    mediaPosition = 'right',
    height = 'auto',
  } = data

  // Apply highlight to headline words
  const renderHeadline = () => {
    if (!headline) return null

    if (!headlineHighlight) {
      return <span>{headline}</span>
    }

    const highlightWords = headlineHighlight.split(',').map((w) => w.trim())
    let result = headline

    highlightWords.forEach((word) => {
      result = result.replace(
        new RegExp(`(${word})`, 'gi'),
        '<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$1</span>'
      )
    })

    return <span dangerouslySetInnerHTML={{ __html: result }} />
  }

  // Height classes
  const heightClasses: Record<string, string> = {
    auto: '',
    screen: 'min-h-screen',
    '80vh': 'min-h-[80vh]',
    '60vh': 'min-h-[60vh]',
    large: 'min-h-[600px]',
    medium: 'min-h-[400px]',
  }

  // Layout classes
  const isFullWidth = layout === 'fullwidth' || layout === 'centered'
  const isSplit = layout === 'split' || layout === 'asymmetric'
  const mediaOnLeft = mediaPosition === 'left'

  return (
    <div
      className={cn(
        'flex items-center',
        heightClasses[height]
      )}
    >
      <div className={cn(
        'w-full',
        isSplit && 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
      )}>
        {/* Content */}
        <div
          className={cn(
            isSplit && mediaOnLeft && 'lg:order-2',
            !isSplit && 'text-center max-w-4xl mx-auto',
            'space-y-6'
          )}
        >
          {/* Eyebrow */}
          {eyebrow && (
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              {eyebrow}
            </p>
          )}

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {renderHeadline()}
          </h1>

          {/* Subheadline */}
          {subheadline && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              {subheadline}
            </p>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {primaryButton && <SanityButton data={primaryButton} />}
              {secondaryButton && <SanityButton data={secondaryButton} />}
            </div>
          )}
        </div>

        {/* Media */}
        {isSplit && mediaType === 'image' && image && (
          <div className={cn(mediaOnLeft && 'lg:order-1')}>
            <ResponsiveImage
              data={image}
              className="w-full h-auto"
              containerClassName="rounded-2xl overflow-hidden shadow-2xl"
            />
          </div>
        )}

        {/* Video */}
        {isSplit && mediaType === 'video' && data.videoUrl && (
          <div className={cn(mediaOnLeft && 'lg:order-1')}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src={data.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* Below text media */}
      {mediaPosition === 'below' && mediaType === 'image' && image && (
        <div className="mt-12 w-full">
          <ResponsiveImage
            data={image}
            className="w-full h-auto"
            containerClassName="rounded-2xl overflow-hidden shadow-2xl"
          />
        </div>
      )}
    </div>
  )
}
