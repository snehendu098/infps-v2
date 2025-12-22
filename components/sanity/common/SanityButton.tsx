'use client'

import Link from 'next/link'
import type { Button as ButtonType, Link as LinkType } from '@/lib/sanity/types'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Download,
  Play,
  Phone,
  Mail,
  Check,
  Plus,
} from 'lucide-react'

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'external-link': ExternalLink,
  download: Download,
  play: Play,
  phone: Phone,
  email: Mail,
  check: Check,
  plus: Plus,
}

// Get href from link object
function getLinkHref(link?: LinkType): string {
  if (!link) return '#'

  switch (link.linkType) {
    case 'internal':
      return link.internalLink?.slug ? `/${link.internalLink.slug}` : '#'
    case 'external':
      return link.externalUrl || '#'
    case 'email':
      return link.email ? `mailto:${link.email}` : '#'
    case 'phone':
      return link.phone ? `tel:${link.phone}` : '#'
    case 'anchor':
      return link.anchor ? `#${link.anchor}` : '#'
    case 'file':
      return link.file?.asset?.url || '#'
    default:
      return '#'
  }
}

interface SanityButtonProps {
  data: ButtonType
  className?: string
}

export function SanityButton({ data, className }: SanityButtonProps) {
  if (!data?.label) return null

  const href = getLinkHref(data.link)
  const isExternal =
    data.link?.linkType === 'external' || data.link?.openInNewTab

  // Variant styles
  const variantStyles: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
    secondary:
      'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
    gradient:
      'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:opacity-90 shadow-lg',
    white:
      'bg-white text-gray-900 hover:bg-gray-100 shadow-lg',
    dark:
      'bg-gray-900 text-white hover:bg-gray-800',
  }

  // Size styles
  const sizeStyles: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const IconComponent =
    data.icon && data.icon !== 'none' ? iconMap[data.icon] : null

  const buttonContent = (
    <>
      {IconComponent && data.iconPosition === 'left' && (
        <IconComponent className="w-5 h-5 mr-2" />
      )}
      <span>{data.label}</span>
      {IconComponent && data.iconPosition !== 'left' && (
        <IconComponent className="w-5 h-5 ml-2" />
      )}
    </>
  )

  const buttonClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    variantStyles[data.variant || 'primary'],
    sizeStyles[data.size || 'md'],
    data.fullWidth && 'w-full sm:w-auto',
    className
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClasses}>
      {buttonContent}
    </Link>
  )
}

interface SanityLinkProps {
  link?: LinkType
  children: React.ReactNode
  className?: string
}

export function SanityLink({ link, children, className }: SanityLinkProps) {
  const href = getLinkHref(link)
  const isExternal =
    link?.linkType === 'external' || link?.openInNewTab

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
