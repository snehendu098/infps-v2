'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'
import { Suspense } from 'react'

function StudioLoader() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#101112'
    }}>
      <div style={{ color: '#fff', fontSize: '18px' }}>Loading Studio...</div>
    </div>
  )
}

export default function StudioPage() {
  return (
    <Suspense fallback={<StudioLoader />}>
      <NextStudio config={config} />
    </Suspense>
  )
}
