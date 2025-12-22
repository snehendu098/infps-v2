'use client'

import { PortableText as SanityPortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'
import { SanityImage } from './SanityImage'
import type { RichText as RichTextType } from '@/lib/sanity/types'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold mb-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-semibold mb-3">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg md:text-xl font-semibold mb-2">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base md:text-lg font-semibold mb-2">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    check: ({ children }) => (
      <ul className="mb-4 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-2">{children}</li>,
    number: ({ children }) => <li className="ml-2">{children}</li>,
    check: ({ children }) => (
      <li className="flex items-start gap-2">
        <span className="text-green-500 mt-1">✓</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    'strike-through': ({ children }) => (
      <span className="line-through">{children}</span>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    highlight: ({ children }) => (
      <mark className="bg-yellow-200 px-1">{children}</mark>
    ),
    link: ({ children, value }) => {
      const isExternal = value?.linkType === 'external'
      const href =
        value?.linkType === 'internal'
          ? `/${value?.internalLink?.slug?.current || ''}`
          : value?.href || '#'

      if (isExternal) {
        return (
          <a
            href={href}
            target={value?.openInNewTab ? '_blank' : undefined}
            rel={value?.openInNewTab ? 'noopener noreferrer' : undefined}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </a>
        )
      }

      return (
        <Link href={href} className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </Link>
      )
    },
    textColor: ({ children, value }) => (
      <span style={{ color: value?.color?.hex }}>{children}</span>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-6">
        <SanityImage
          image={value}
          alt={value.alt || ''}
          width={800}
          height={600}
          className="rounded-lg w-full"
        />
        {value.caption && (
          <figcaption className="mt-2 text-center text-sm text-gray-500">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

interface PortableTextProps {
  value: RichTextType
  className?: string
}

export function PortableTextRenderer({ value, className }: PortableTextProps) {
  if (!value) return null

  return (
    <div className={className}>
      <SanityPortableText value={value} components={components} />
    </div>
  )
}
