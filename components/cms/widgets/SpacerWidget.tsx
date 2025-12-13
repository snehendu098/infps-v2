export default function SpacerWidget({ data }: { data: any }) {
  const heightMap: Record<string, string> = {
    sm: 'h-10',
    md: 'h-15',
    lg: 'h-20',
  }

  const height = heightMap[data.height || 'md']

  return <div className={height} />
}
