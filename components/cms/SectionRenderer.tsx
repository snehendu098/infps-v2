'use client'

import { Section } from '@/lib/sanity.types'
import ColumnRenderer from './ColumnRenderer'
import { urlFor } from '@/lib/sanity.image'

export default function SectionRenderer({ section }: { section: Section }) {
  const paddingMap = {
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24',
  }

  const padding = paddingMap[section.layout?.padding || 'medium']
  const widthClass =
    section.layout?.width === 'full' ? 'w-full' : 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'

  const getBackgroundStyle = () => {
    if (!section.background?.type || section.background.type === 'none') return {}

    if (section.background.type === 'color' && section.background.color) {
      return { backgroundColor: section.background.color.hex }
    }

    return {}
  }

  return (
    <section className={`relative ${padding}`} style={getBackgroundStyle()}>
      {/* Background Image */}
      {section.background?.type === 'image' && section.background.image?.asset && (
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${urlFor(section.background.image.asset).width(1920).url()})`,
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      )}

      <div className={widthClass}>
        {section.columns && section.columns.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {section.columns.map((column) => (
              <ColumnRenderer key={column._key} column={column} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
