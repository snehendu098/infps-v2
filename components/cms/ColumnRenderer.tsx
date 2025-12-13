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
