'use client'

import type { TextBlockSection as TextBlockSectionType } from '@/lib/sanity/types'
import { PortableTextRenderer } from '../common/PortableText'
import { SanityButton } from '../common/SanityButton'
import { cn } from '@/lib/utils'

interface TextBlockSectionProps {
  data: TextBlockSectionType
}

export default function TextBlockSection({ data }: TextBlockSectionProps) {
  const {
    eyebrow,
    heading,
    headingLevel = 'h2',
    content,
    buttons,
    alignment = 'left',
    maxWidth = 'md',
    textColor,
  } = data

  const maxWidthClasses: Record<string, string> = {
    full: 'max-w-none',
    lg: 'max-w-4xl',
    md: 'max-w-3xl',
    sm: 'max-w-2xl',
    xs: 'max-w-xl',
  }

  const alignmentClasses: Record<string, string> = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements

  return (
    <div
      className={cn(
        maxWidthClasses[maxWidth],
        alignmentClasses[alignment]
      )}
      style={textColor?.hex ? { color: textColor.hex } : undefined}
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
          className="prose prose-lg max-w-none"
        />
      )}

      {/* Buttons */}
      {buttons && buttons.length > 0 && (
        <div
          className={cn(
            'flex flex-wrap gap-4 mt-8',
            alignment === 'center' && 'justify-center',
            alignment === 'right' && 'justify-end'
          )}
        >
          {buttons.map((button) => (
            <SanityButton key={button._key} data={button} />
          ))}
        </div>
      )}
    </div>
  )
}
