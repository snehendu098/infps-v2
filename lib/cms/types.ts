// CMS Content Types
export interface CMSImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  sections: CMSSection[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSSection {
  id: string;
  type: 'hero' | 'text' | 'image' | 'cta' | 'features' | 'testimonials' | 'custom';
  content: Record<string, any>;
  order: number;
}

export interface CMSPopup {
  id: string;
  title: string;
  message: string;
  image?: CMSImage;
  ctaText?: string;
  ctaLink?: string;
  active: boolean;
  startDate?: string;
  endDate?: string;
  type: 'festive' | 'offer' | 'announcement' | 'alert';
  backgroundColor?: string;
  textColor?: string;
}

export interface CMSSettings {
  siteTitle: string;
  siteDescription: string;
  logo?: CMSImage;
  favicon?: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface CMSContent {
  pages: CMSPage[];
  popups: CMSPopup[];
  settings: CMSSettings;
}
