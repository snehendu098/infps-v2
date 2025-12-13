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
