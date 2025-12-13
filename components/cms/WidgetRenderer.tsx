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
