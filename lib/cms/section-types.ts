// Enhanced Section Types for Page Builder

export interface CMSImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CMSButton {
  text: string;
  link: string;
  style: 'primary' | 'secondary' | 'outline';
}

// Hero Section
export interface HeroSection {
  type: 'hero';
  heading: string;
  subheading?: string;
  description: string;
  backgroundType: 'gradient' | 'image' | 'video' | 'particles';
  backgroundImage?: CMSImage;
  backgroundVideo?: string;
  buttons: CMSButton[];
  showParticles: boolean;
}

// Text Section
export interface TextSection {
  type: 'text';
  heading?: string;
  content: string;
  alignment: 'left' | 'center' | 'right';
  backgroundColor?: string;
  textColor?: string;
}

// Image Gallery Section
export interface ImageSection {
  type: 'image';
  images: CMSImage[];
  layout: 'single' | 'grid' | 'carousel' | 'masonry';
  columns?: number;
}

// Features Section
export interface FeatureItem {
  icon: string; // Icon name or emoji
  title: string;
  description: string;
}

export interface FeaturesSection {
  type: 'features';
  heading: string;
  subheading?: string;
  features: FeatureItem[];
  layout: 'grid' | 'list' | 'carousel';
  columns: number;
}

// Services Section
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link?: string;
  image?: CMSImage;
}

export interface ServicesSection {
  type: 'services';
  heading: string;
  subheading?: string;
  services: ServiceItem[];
  layout: 'cards' | 'list' | 'accordion';
}

// Testimonials Section
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar?: CMSImage;
  quote: string;
  rating?: number;
}

export interface TestimonialsSection {
  type: 'testimonials';
  heading: string;
  testimonials: Testimonial[];
  layout: 'carousel' | 'grid' | 'single';
}

// CTA Section
export interface CTASection {
  type: 'cta';
  heading: string;
  description: string;
  buttons: CMSButton[];
  backgroundImage?: CMSImage;
  backgroundColor?: string;
  textColor?: string;
}

// Stats/Numbers Section
export interface StatItem {
  number: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface StatsSection {
  type: 'stats';
  heading?: string;
  stats: StatItem[];
  backgroundColor?: string;
  animated: boolean;
}

// FAQ Section
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  type: 'faq';
  heading: string;
  faqs: FAQItem[];
  layout: 'accordion' | 'grid';
}

// Team Section
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: CMSImage;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface TeamSection {
  type: 'team';
  heading: string;
  subheading?: string;
  members: TeamMember[];
  layout: 'grid' | 'carousel';
}

// Contact Form Section
export interface ContactFormSection {
  type: 'contact';
  heading: string;
  description?: string;
  fields: Array<{
    name: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    label: string;
    required: boolean;
    options?: string[];
  }>;
  submitText: string;
}

// Pricing Section
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  buttonText: string;
  buttonLink: string;
}

export interface PricingSection {
  type: 'pricing';
  heading: string;
  subheading?: string;
  plans: PricingPlan[];
}

// Blog/Posts Section
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: CMSImage;
  author: string;
  date: string;
  category: string;
  link: string;
}

export interface BlogSection {
  type: 'blog';
  heading: string;
  posts: BlogPost[];
  layout: 'grid' | 'list';
  showCategories: boolean;
}

// Logo Grid Section
export interface LogoGridSection {
  type: 'logos';
  heading?: string;
  logos: CMSImage[];
  layout: 'grid' | 'carousel';
  grayscale: boolean;
}

// Video Section
export interface VideoSection {
  type: 'video';
  heading?: string;
  videoUrl: string;
  thumbnail?: CMSImage;
  autoplay: boolean;
}

// Spacer Section
export interface SpacerSection {
  type: 'spacer';
  height: number;
  backgroundColor?: string;
}

// Custom HTML Section
export interface CustomHTMLSection {
  type: 'custom-html';
  html: string;
  css?: string;
}

// Union type of all section types
export type CMSSection =
  | HeroSection
  | TextSection
  | ImageSection
  | FeaturesSection
  | ServicesSection
  | TestimonialsSection
  | CTASection
  | StatsSection
  | FAQSection
  | TeamSection
  | ContactFormSection
  | PricingSection
  | BlogSection
  | LogoGridSection
  | VideoSection
  | SpacerSection
  | CustomHTMLSection;

// Page structure
export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaKeywords?: string;
  sections: (CMSSection & { id: string; order: number })[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// Header/Footer/Navigation
export interface MenuItem {
  label: string;
  link: string;
  children?: MenuItem[];
}

export interface Header {
  logo: CMSImage;
  navigation: MenuItem[];
  ctaButton?: CMSButton;
  sticky: boolean;
  transparent: boolean;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    link: string;
  }>;
}

export interface Footer {
  columns: FooterColumn[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  copyright: string;
  logo?: CMSImage;
}

// Complete CMS Content
export interface CMSContent {
  pages: CMSPage[];
  header: Header;
  footer: Footer;
  popups: Array<{
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
  }>;
  settings: {
    siteTitle: string;
    siteDescription: string;
    logo?: CMSImage;
    favicon?: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
  };
}
