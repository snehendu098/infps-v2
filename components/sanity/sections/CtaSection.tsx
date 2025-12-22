'use client'

import type { CtaSection as CtaSectionType } from '@/lib/sanity/types'
import { SanityButton } from '../common/SanityButton'
import { cn } from '@/lib/utils'

interface CtaSectionProps {
  data: CtaSectionType
}

export default function CtaSection({ data }: CtaSectionProps) {
  const {
    eyebrow,
    heading,
    subheading,
    highlightWords,
    primaryButton,
    secondaryButton,
    layout = 'centered',
    size = 'normal',
  } = data

  // Apply highlight to heading words
  const renderHeading = () => {
    if (!heading) return null

    if (!highlightWords) {
      return <span>{heading}</span>
    }

    const words = highlightWords.split(',').map((w) => w.trim())
    let result = heading

    words.forEach((word) => {
      result = result.replace(
        new RegExp(`(${word})`, 'gi'),
        '<span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$1</span>'
      )
    })

    return <span dangerouslySetInnerHTML={{ __html: result }} />
  }

  const sizeClasses: Record<string, string> = {
    compact: 'py-8',
    normal: 'py-12',
    large: 'py-20',
  }

  const layoutClasses: Record<string, { container: string; content: string }> = {
    centered: {
      container: 'text-center',
      content: 'max-w-3xl mx-auto',
    },
    left: {
      container: 'text-left',
      content: 'max-w-2xl',
    },
    split: {
      container: 'flex flex-col lg:flex-row items-center justify-between gap-8',
      content: 'flex-1',
    },
    card: {
      container: 'text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 md:p-12',
      content: 'max-w-3xl mx-auto',
    },
  }

  const isCard = layout === 'card'

  return (
    <div className={cn(sizeClasses[size], layoutClasses[layout].container)}>
      <div className={layoutClasses[layout].content}>
        {/* Eyebrow */}
        {eyebrow && (
          <p
            className={cn(
              'text-sm font-semibold uppercase tracking-wider mb-3',
              isCard ? 'text-blue-200' : 'text-blue-600'
            )}
          >
            {eyebrow}
          </p>
        )}

        {/* Heading */}
        {heading && (
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
              isCard ? 'text-white' : 'text-gray-900'
            )}
          >
            {isCard ? heading : renderHeading()}
          </h2>
        )}

        {/* Subheading */}
        {subheading && (
          <p
            className={cn(
              'text-lg md:text-xl mb-8',
              isCard ? 'text-blue-100' : 'text-gray-600'
            )}
          >
            {subheading}
          </p>
        )}

        {/* Buttons (for non-split layouts) */}
        {layout !== 'split' && (primaryButton || secondaryButton) && (
          <div
            className={cn(
              'flex flex-wrap gap-4',
              layout === 'centered' && 'justify-center'
            )}
          >
            {primaryButton && (
              <SanityButton
                data={{
                  ...primaryButton,
                  variant: isCard ? 'white' : primaryButton.variant,
                }}
              />
            )}
            {secondaryButton && (
              <SanityButton
                data={{
                  ...secondaryButton,
                  variant: isCard ? 'ghost' : secondaryButton.variant,
                }}
                className={isCard ? 'text-white hover:bg-white/10' : ''}
              />
            )}
          </div>
        )}
      </div>

      {/* Buttons (for split layout) */}
      {layout === 'split' && (primaryButton || secondaryButton) && (
        <div className="flex flex-wrap gap-4">
          {primaryButton && <SanityButton data={primaryButton} />}
          {secondaryButton && <SanityButton data={secondaryButton} />}
        </div>
      )}
    </div>
  )
}
