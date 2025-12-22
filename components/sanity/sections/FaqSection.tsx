'use client'

import { useState } from 'react'
import type { FaqSection as FaqSectionType } from '@/lib/sanity/types'
import { PortableTextRenderer } from '../common/PortableText'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface FaqSectionProps {
  data: FaqSectionType
}

export default function FaqSection({ data }: FaqSectionProps) {
  const {
    eyebrow,
    heading,
    subheading,
    faqs,
    layout = 'accordion',
    allowMultipleOpen = false,
    firstOpenByDefault = true,
    accordionStyle = 'separated',
  } = data

  const [openItems, setOpenItems] = useState<string[]>(
    firstOpenByDefault && faqs?.[0]?._key ? [faqs[0]._key] : []
  )

  const toggleItem = (key: string) => {
    if (allowMultipleOpen) {
      setOpenItems((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      )
    } else {
      setOpenItems((prev) => (prev.includes(key) ? [] : [key]))
    }
  }

  const accordionStyleClasses: Record<string, { wrapper: string; item: string }> = {
    simple: {
      wrapper: 'divide-y divide-gray-200',
      item: '',
    },
    bordered: {
      wrapper: 'border border-gray-200 rounded-lg divide-y divide-gray-200 overflow-hidden',
      item: '',
    },
    separated: {
      wrapper: 'space-y-4',
      item: 'border border-gray-200 rounded-lg overflow-hidden',
    },
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

      {/* FAQ Accordion */}
      {layout === 'accordion' && (
        <div className={cn('max-w-3xl mx-auto', accordionStyleClasses[accordionStyle].wrapper)}>
          {faqs?.map((faq) => {
            const isOpen = openItems.includes(faq._key)

            return (
              <div
                key={faq._key}
                className={accordionStyleClasses[accordionStyle].item}
              >
                <button
                  onClick={() => toggleItem(faq._key)}
                  className={cn(
                    'w-full flex items-center justify-between py-4 px-6 text-left transition-colors',
                    isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'
                  )}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-gray-500 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-[1000px]' : 'max-h-0'
                  )}
                >
                  <div className="px-6 pb-4 text-gray-600">
                    <PortableTextRenderer value={faq.answer} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Two Columns Layout */}
      {layout === 'columns' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs?.map((faq) => (
            <div key={faq._key}>
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <div className="text-gray-600">
                <PortableTextRenderer value={faq.answer} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cards Layout */}
      {layout === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs?.map((faq) => (
            <div
              key={faq._key}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <div className="text-gray-600 text-sm">
                <PortableTextRenderer value={faq.answer} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
