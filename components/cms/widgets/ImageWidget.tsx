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
