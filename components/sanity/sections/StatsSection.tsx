'use client'

import type { StatsSection as StatsSectionType } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'

interface StatsSectionProps {
  data: StatsSectionType
}

export default function StatsSection({ data }: StatsSectionProps) {
  const {
    eyebrow,
    heading,
    subheading,
    showHeader = true,
    stats,
    columns = 4,
    style = 'simple',
    alignment = 'center',
    size = 'lg',
    showDividers = false,
  } = data

  const columnClasses: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-5',
  }

  const sizeClasses: Record<string, string> = {
    md: 'text-3xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  }

  const styleClasses: Record<string, string> = {
    simple: '',
    cards: 'bg-white rounded-xl shadow-lg p-6',
    bordered: 'border border-gray-200 rounded-xl p-6',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6',
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
      {showHeader && (eyebrow || heading || subheading) && (
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

      {/* Stats */}
      <div
        className={cn(
          'grid gap-8',
          columnClasses[columns],
          showDividers && 'divide-x divide-gray-200'
        )}
      >
        {stats?.map((stat) => {
          const IconComponent = stat.icon ? getIcon(stat.icon) : null

          return (
            <div
              key={stat._key}
              className={cn(
                styleClasses[style],
                alignment === 'center' ? 'text-center' : 'text-left',
                showDividers && 'px-4 first:pl-0 last:pr-0'
              )}
            >
              {/* Icon */}
              {IconComponent && (
                <div
                  className={cn(
                    'mb-4',
                    alignment === 'center' && 'flex justify-center'
                  )}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              )}

              {/* Number */}
              <div
                className={cn(
                  'font-bold text-gray-900 mb-2',
                  sizeClasses[size]
                )}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">{stat.label}</div>

              {/* Description */}
              {stat.description && (
                <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
