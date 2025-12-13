'use client'

import { Page } from '@/lib/sanity.types'
import SectionRenderer from './SectionRenderer'

export default function PageRenderer({ page }: { page: Page }) {
  return (
    <div className="min-h-screen pt-20">
      {page.sections?.map((section) => (
        <SectionRenderer key={section._key} section={section} />
      ))}
    </div>
  )
}
