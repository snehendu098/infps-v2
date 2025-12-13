// TypeScript types for Sanity data

export interface Link {
  linkType: 'internal' | 'external'
  internalLink?: {
    slug: {
      current: string
    }
  }
  externalUrl?: string
}

export interface Widget {
  _type: string
  _key: string
  [key: string]: any
}

export interface Column {
  _key: string
  width: string
  widgets: Widget[]
}

export interface Section {
  _key: string
  layout: {
    width: 'full' | 'boxed'
    padding: 'small' | 'medium' | 'large'
  }
  background?: {
    type: 'none' | 'color' | 'image'
    color?: { hex: string }
    image?: {
      asset: any
    }
  }
  columns: Column[]
}

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: {
      asset: any
    }
  }
  sections: Section[]
}

export interface Header {
  logo: {
    asset: any
    alt: string
  }
  navigation: {
    label: string
    link: Link
  }[]
}

export interface Footer {
  logo?: {
    asset: any
  }
  columns: {
    title: string
    links: {
      label: string
      link: Link
    }[]
  }[]
  copyrightText: string
}
