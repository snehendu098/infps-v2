#!/bin/bash

# ColumnRenderer.tsx
cat > components/cms/ColumnRenderer.tsx << 'EOF'
import { Column } from '@/lib/sanity.types'
import WidgetRenderer from './WidgetRenderer'

export default function ColumnRenderer({ column }: { column: Column }) {
  const widthMap: Record<string, string> = {
    '1/1': 'md:col-span-12',
    '1/2': 'md:col-span-6',
    '1/3': 'md:col-span-4',
    '2/3': 'md:col-span-8',
  }

  const colSpan = widthMap[column.width] || 'md:col-span-12'

  return (
    <div className={colSpan}>
      {column.widgets?.map((widget) => (
        <WidgetRenderer key={widget._key} widget={widget} />
      ))}
    </div>
  )
}
EOF

# WidgetRenderer.tsx
cat > components/cms/WidgetRenderer.tsx << 'EOF'
import { Widget } from '@/lib/sanity.types'
import TextWidget from './widgets/TextWidget'
import ImageWidget from './widgets/ImageWidget'
import ButtonWidget from './widgets/ButtonWidget'
import SpacerWidget from './widgets/SpacerWidget'

export default function WidgetRenderer({ widget }: { widget: Widget }) {
  switch (widget._type) {
    case 'textWidget':
      return <TextWidget data={widget} />
    case 'imageWidget':
      return <ImageWidget data={widget} />
    case 'buttonWidget':
      return <ButtonWidget data={widget} />
    case 'spacerWidget':
      return <SpacerWidget data={widget} />
    default:
      console.warn(`Unknown widget type: ${widget._type}`)
      return null
  }
}
EOF

# TextWidget.tsx
cat > components/cms/widgets/TextWidget.tsx << 'EOF'
import { PortableText } from '@portabletext/react'

export default function TextWidget({ data }: { data: any }) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[data.textAlign || 'left']

  return (
    <div className={`portable-text ${alignmentClass} mb-6`}>
      <PortableText value={data.content} />
    </div>
  )
}
EOF

# ImageWidget.tsx
cat > components/cms/widgets/ImageWidget.tsx << 'EOF'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.image'
import { Link as LinkType } from '@/lib/sanity.types'

export default function ImageWidget({ data }: { data: any }) {
  const imageUrl = urlFor(data.image.asset).width(1200).url()
  const imageAlt = data.image.alt || ''

  const getHref = (link: LinkType): string => {
    if (!link) return ''
    if (link.linkType === 'external') {
      return link.externalUrl || ''
    }
    return `/${link.internalLink?.slug?.current || ''}`
  }

  const imageElement = (
    <div className="relative w-full mb-6">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={1200}
        height={800}
        className="w-full h-auto rounded-lg"
      />
    </div>
  )

  if (data.link) {
    const href = getHref(data.link)
    if (href) {
      return <Link href={href}>{imageElement}</Link>
    }
  }

  return imageElement
}
EOF

# ButtonWidget.tsx
cat > components/cms/widgets/ButtonWidget.tsx << 'EOF'
import Link from 'next/link'
import { Link as LinkType } from '@/lib/sanity.types'

export default function ButtonWidget({ data }: { data: any }) {
  const getHref = (link: LinkType): string => {
    if (link.linkType === 'external') {
      return link.externalUrl || '#'
    }
    return `/${link.internalLink?.slug?.current || ''}`
  }

  const styleMap: Record<string, string> = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-105',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const buttonStyle = styleMap[data.style || 'primary']

  return (
    <div className="flex mb-6">
      <Link
        href={getHref(data.link)}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${buttonStyle}`}
      >
        <span>{data.label}</span>
      </Link>
    </div>
  )
}
EOF

# SpacerWidget.tsx
cat > components/cms/widgets/SpacerWidget.tsx << 'EOF'
export default function SpacerWidget({ data }: { data: any }) {
  const heightMap: Record<string, string> = {
    sm: 'h-10',
    md: 'h-15',
    lg: 'h-20',
  }

  const height = heightMap[data.height || 'md']

  return <div className={height} />
}
EOF

echo "✅ All CMS components created successfully!"
