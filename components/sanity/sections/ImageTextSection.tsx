'use client'

import type { ImageTextSection as ImageTextSectionType } from '@/lib/sanity/types'
import { ResponsiveImage } from '../common/SanityImage'
import { PortableTextRenderer } from '../common/PortableText'
import { SanityButton } from '../common/SanityButton'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'

interface ImageTextSectionProps {
  data: ImageTextSectionType
}

export default function ImageTextSection({ data }: ImageTextSectionProps) {
  const {
    eyebrow,
    heading,
    headingLevel = 'h2',
    content,
    features,
    buttons,
    image,
    imagePosition = 'right',
    verticalAlignment = 'center',
    imageSize = 'medium',
    reverseOnMobile,
  } = data

  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements

  const imageSizeClasses: Record<string, string> = {
    small: 'lg:col-span-4',
    medium: 'lg:col-span-5',
    large: 'lg:col-span-6',
  }

  const contentSizeClasses: Record<string, string> = {
    small: 'lg:col-span-8',
    medium: 'lg:col-span-7',
    large: 'lg:col-span-6',
  }

  const alignmentClasses: Record<string, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }

  // Dynamic icon component
  const getIcon = (iconName: string) => {
    const formattedName = iconName
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>
    return icons[formattedName] || null
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12',
        alignmentClasses[verticalAlignment]
      )}
    >
      {/* Content */}
      <div
        className={cn(
          contentSizeClasses[imageSize],
          imagePosition === 'left' && 'lg:order-2',
          reverseOnMobile && 'order-2 lg:order-none'
        )}
      >
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
        )}

        {/* Heading */}
        {heading && (
          <HeadingTag className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {heading}
          </HeadingTag>
        )}

        {/* Content */}
        {content && (
          <PortableTextRenderer
            value={content}
            className="prose prose-lg max-w-none text-gray-600"
          />
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="mt-6 space-y-4">
            {features.map((feature) => {
              const IconComponent = feature.icon ? getIcon(feature.icon) : null

              return (
                <li key={feature._key} className="flex items-start gap-3">
                  {IconComponent && (
                    <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    {feature.title && (
                      <h4 className="font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                    )}
                    {feature.description && (
                      <p className="text-gray-600">{feature.description}</p>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}

        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8">
            {buttons.map((button) => (
              <SanityButton key={button._key} data={button} />
            ))}
          </div>
        )}
      </div>

      {/* Image */}
      {image && (
        <div
          className={cn(
            imageSizeClasses[imageSize],
            imagePosition === 'left' && 'lg:order-1',
            reverseOnMobile && 'order-1 lg:order-none'
          )}
        >
          <ResponsiveImage
            data={image}
            className="w-full h-auto"
            containerClassName="rounded-2xl overflow-hidden shadow-lg"
          />
        </div>
      )}
    </div>
  )
}
