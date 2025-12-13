import { PortableText } from '@portabletext/react'

export default function TextWidget({ data }: { data: any }) {
  const alignmentMap: { [key: string]: string } = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }
  const alignmentClass = alignmentMap[data.textAlign || 'left']

  return (
    <div className={`portable-text ${alignmentClass} mb-6`}>
      <PortableText value={data.content} />
    </div>
  )
}
