'use client'

import type { FeatureGridSection as FeatureGridSectionType } from '@/lib/sanity/types'
import { SanityImage } from '../common/SanityImage'
import { SanityLink } from '../common/SanityButton'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'

interface FeatureGridSectionProps {
  data: FeatureGridSectionType
}

export default function FeatureGridSection({ data }: FeatureGridSectionProps) {
  const {
    eyebrow,
    heading,
    subheading,
    headerAlignment = 'center',
    features,
    columns = 3,
    cardStyle = 'simple',
    iconStyle = 'rounded',
    iconSize = 'md',
    cardAlignment = 'center',
    gap = 'md',
  } = data

  // Grid columns classes
  const columnClasses: Record<number, string> = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
  }

  // Gap classes
  const gapClasses: Record<string, string> = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  }

  // Card style classes
  const cardStyleClasses: Record<string, string> = {
    simple: '',
    elevated: 'bg-white rounded-xl shadow-lg p-6',
    bordered: 'border border-gray-200 rounded-xl p-6',
    filled: 'bg-gray-50 rounded-xl p-6',
    gradient: 'bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6',
  }

  // Icon style classes
  const iconStyleClasses: Record<string, string> = {
    plain: '',
    rounded: 'bg-blue-100 rounded-full p-3',
    square: 'bg-blue-100 rounded-lg p-3',
    outlined: 'border-2 border-blue-200 rounded-full p-3',
  }

  // Icon size classes
  const iconSizeClasses: Record<string, string> = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
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
    <div>
      {/* Header */}
      {(eyebrow || heading || subheading) && (
        <div
          className={cn(
            'mb-12',
            headerAlignment === 'center' && 'text-center',
            headerAlignment === 'center' && 'max-w-3xl mx-auto'
          )}
        >
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

      {/* Features Grid */}
      <div className={cn('grid', columnClasses[columns], gapClasses[gap])}>
        {features?.map((feature) => {
          const IconComponent = feature.icon ? getIcon(feature.icon) : null

          const cardContent = (
            <div
              className={cn(
                cardStyleClasses[cardStyle],
                cardAlignment === 'center' && 'text-center items-center',
                'flex flex-col',
                feature.link && 'hover:shadow-xl transition-shadow cursor-pointer'
              )}
            >
              {/* Icon or Image */}
              {(IconComponent || feature.image) && (
                <div
                  className={cn(
                    'mb-4',
                    cardAlignment === 'center' && 'mx-auto'
                  )}
                >
                  {feature.image ? (
                    <SanityImage
                      image={feature.image}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain"
                    />
                  ) : IconComponent ? (
                    <div
                      className={iconStyleClasses[iconStyle]}
                      style={
                        feature.iconColor?.hex
                          ? { backgroundColor: `${feature.iconColor.hex}20` }
                          : undefined
                      }
                    >
                      <IconComponent
                        className={cn(
                          iconSizeClasses[iconSize],
                          'text-blue-600'
                        )}
                        style={
                          feature.iconColor?.hex
                            ? { color: feature.iconColor.hex }
                            : undefined
                        }
                      />
                    </div>
                  ) : null}
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              {feature.description && (
                <p className="text-gray-600">{feature.description}</p>
              )}
            </div>
          )

          if (feature.link) {
            return (
              <SanityLink key={feature._key} link={feature.link}>
                {cardContent}
              </SanityLink>
            )
          }

          return <div key={feature._key}>{cardContent}</div>
        })}
      </div>
    </div>
  )
}
