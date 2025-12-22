import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infinititech CMS',
  description: 'Content Management Studio',
}

// This layout is nested inside root layout - no html/body tags needed
// The root layout handles studio detection and renders children directly
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh', width: '100%' }}>
      {children}
    </div>
  )
}
