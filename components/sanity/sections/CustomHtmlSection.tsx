'use client'

import { useRef, useEffect } from 'react'
import type { CustomHtmlSection as CustomHtmlSectionType } from '@/lib/sanity/types'

interface CustomHtmlSectionProps {
  data: CustomHtmlSectionType
}

export default function CustomHtmlSection({ data }: CustomHtmlSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const {
    htmlContent,
    cssContent,
    embedType = 'raw',
    iframeSrc,
    iframeHeight = '400px',
    sandboxMode = true,
  } = data

  // Inject CSS if provided
  useEffect(() => {
    if (cssContent && containerRef.current) {
      const styleId = `custom-style-${data._key}`
      let styleElement = document.getElementById(styleId)

      if (!styleElement) {
        styleElement = document.createElement('style')
        styleElement.id = styleId
        document.head.appendChild(styleElement)
      }

      styleElement.textContent = cssContent

      return () => {
        styleElement?.remove()
      }
    }
  }, [cssContent, data._key])

  // iFrame embed
  if (embedType === 'iframe' && iframeSrc) {
    return (
      <div className="w-full">
        <iframe
          src={iframeSrc}
          className="w-full border-0"
          style={{ height: iframeHeight }}
          title="Embedded content"
          loading="lazy"
          sandbox={
            sandboxMode
              ? 'allow-scripts allow-same-origin allow-popups'
              : undefined
          }
        />
      </div>
    )
  }

  // Sandboxed HTML (in an iframe for security)
  if (sandboxMode && htmlContent) {
    const srcdoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
            ${cssContent || ''}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `

    return (
      <div className="w-full">
        <iframe
          srcDoc={srcdoc}
          className="w-full border-0"
          style={{ minHeight: '200px' }}
          title="Custom HTML content"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    )
  }

  // Raw HTML (use with caution)
  if (htmlContent) {
    return (
      <div
        ref={containerRef}
        className="w-full"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )
  }

  return null
}
