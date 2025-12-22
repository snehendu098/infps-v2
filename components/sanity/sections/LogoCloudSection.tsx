'use client'

import type { LogoCloudSection as LogoCloudSectionType } from '@/lib/sanity/types'
import { SanityImage } from '../common/SanityImage'
import { cn } from '@/lib/utils'

interface LogoCloudSectionProps {
  data: LogoCloudSectionType
}

export default function LogoCloudSection({ data }: LogoCloudSectionProps) {
  const {
    heading,
    subheading,
    showHeader = true,
    logos,
    layout = 'inline',
    columns = 5,
    logoSize = 'md',
    grayscale = true,
    marqueeSpeed = 'normal',
    marqueeDirection = 'left',
  } = data

  const columnClasses: Record<number, string> = {
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-3 sm:grid-cols-6',
  }

  const sizeClasses: Record<string, { wrapper: string; image: string }> = {
    sm: { wrapper: 'h-8', image: 'max-h-8' },
    md: { wrapper: 'h-12', image: 'max-h-12' },
    lg: { wrapper: 'h-16', image: 'max-h-16' },
  }

  const speedClasses: Record<string, string> = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast',
  }

  const renderLogo = (logo: LogoCloudSectionType['logos'][0]) => (
    <div
      key={logo._key}
      className={cn(
        'flex items-center justify-center px-6',
        sizeClasses[logoSize].wrapper
      )}
    >
      {logo.link ? (
        <a
          href={logo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <SanityImage
            image={logo.image}
            alt={logo.name}
            width={160}
            height={80}
            className={cn(
              'object-contain w-auto transition-all',
              sizeClasses[logoSize].image,
              grayscale && 'grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
            )}
          />
        </a>
      ) : (
        <SanityImage
          image={logo.image}
          alt={logo.name}
          width={160}
          height={80}
          className={cn(
            'object-contain w-auto',
            sizeClasses[logoSize].image,
            grayscale && 'grayscale opacity-60'
          )}
        />
      )}
    </div>
  )

  return (
    <div>
      {/* Header */}
      {showHeader && (heading || subheading) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {heading && (
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-gray-500">{subheading}</p>
          )}
        </div>
      )}

      {/* Grid Layout */}
      {layout === 'grid' && (
        <div className={cn('grid gap-8 items-center', columnClasses[columns])}>
          {logos?.map(renderLogo)}
        </div>
      )}

      {/* Inline Layout */}
      {layout === 'inline' && (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos?.map(renderLogo)}
        </div>
      )}

      {/* Marquee Layout */}
      {layout === 'marquee' && (
        <div className="relative overflow-hidden">
          <div
            className={cn(
              'flex whitespace-nowrap',
              speedClasses[marqueeSpeed],
              marqueeDirection === 'right' && 'flex-row-reverse'
            )}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo._key}-${index}`}
                className={cn(
                  'flex-shrink-0 flex items-center justify-center px-8',
                  sizeClasses[logoSize].wrapper
                )}
              >
                <SanityImage
                  image={logo.image}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className={cn(
                    'object-contain w-auto',
                    sizeClasses[logoSize].image,
                    grayscale && 'grayscale opacity-60'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
