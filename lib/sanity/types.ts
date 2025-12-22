// Comprehensive TypeScript types for Sanity CMS Page Builder

// Base types
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanityColor {
  hex: string
  alpha?: number
  hsl?: { h: number; s: number; l: number; a: number }
  rgb?: { r: number; g: number; b: number; a: number }
}

export interface Link {
  _type: 'link'
  linkType: 'internal' | 'external' | 'email' | 'phone' | 'anchor' | 'file'
  internalLink?: {
    _ref: string
    slug?: { current: string }
  }
  externalUrl?: string
  email?: string
  phone?: string
  anchor?: string
  file?: { asset: { url: string } }
  openInNewTab?: boolean
}

export interface Button {
  _type: 'button'
  _key?: string
  label: string
  link?: Link
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

export interface ResponsiveImage {
  _type: 'responsiveImage'
  image: SanityImage
  alt: string
  caption?: string
  lazyLoad?: boolean
  priority?: boolean
  aspectRatio?: string
  objectFit?: 'cover' | 'contain' | 'fill'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface TextStyles {
  fontSize?: string
  fontWeight?: string
  textColor?: SanityColor
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  lineHeight?: string
  letterSpacing?: string
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
}

export interface SectionSettings {
  isVisible?: boolean
  visibleOn?: {
    desktop?: boolean
    tablet?: boolean
    mobile?: boolean
  }
  containerWidth?: 'full' | 'wide' | 'default' | 'narrow'
  contentAlignment?: 'left' | 'center' | 'right'
  verticalAlignment?: 'start' | 'center' | 'end'
  backgroundType?: 'none' | 'color' | 'gradient' | 'image' | 'video'
  backgroundColor?: SanityColor
  gradient?: {
    type?: 'linear' | 'radial'
    angle?: number
    colorStart?: SanityColor
    colorEnd?: SanityColor
  }
  backgroundImage?: SanityImage
  backgroundVideo?: string
  backgroundOverlay?: {
    enabled?: boolean
    color?: SanityColor
    opacity?: number
  }
  backgroundPosition?: string
  backgroundAttachment?: boolean
  paddingTop?: string
  paddingBottom?: string
  marginTop?: string
  marginBottom?: string
  sectionId?: string
  customClasses?: string
  animateOnScroll?: string
}

// Block content (Portable Text)
export interface PortableTextBlock {
  _type: 'block'
  _key: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    [key: string]: unknown
  }>
  style?: string
  listItem?: string
  level?: number
}

export type RichText = PortableTextBlock[]

// Section Types
export interface BaseSection {
  _key: string
  _type: string
  settings?: SectionSettings
}

export interface HeroSection extends BaseSection {
  _type: 'heroSection'
  eyebrow?: string
  headline: string
  headlineHighlight?: string
  subheadline?: string
  headlineStyles?: TextStyles
  mediaType?: 'none' | 'image' | 'video' | 'lottie'
  image?: ResponsiveImage
  videoUrl?: string
  videoPoster?: SanityImage
  autoplayVideo?: boolean
  loopVideo?: boolean
  muteVideo?: boolean
  lottieUrl?: string
  mediaPosition?: 'right' | 'left' | 'background' | 'below'
  primaryButton?: Button
  secondaryButton?: Button
  layout?: 'split' | 'centered' | 'fullwidth' | 'asymmetric'
  height?: string
}

export interface TextBlockSection extends BaseSection {
  _type: 'textBlockSection'
  eyebrow?: string
  heading?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4'
  content?: RichText
  buttons?: Button[]
  alignment?: 'left' | 'center' | 'right'
  maxWidth?: 'full' | 'lg' | 'md' | 'sm' | 'xs'
  headingStyles?: TextStyles
  textColor?: SanityColor
}

export interface ImageTextSection extends BaseSection {
  _type: 'imageTextSection'
  eyebrow?: string
  heading?: string
  headingLevel?: 'h2' | 'h3' | 'h4'
  content?: RichText
  features?: Array<{
    _key: string
    icon?: string
    title?: string
    description?: string
  }>
  buttons?: Button[]
  image?: ResponsiveImage
  imageDecoration?: string
  showVideoButton?: boolean
  videoUrl?: string
  imagePosition?: 'left' | 'right'
  verticalAlignment?: 'start' | 'center' | 'end'
  imageSize?: 'small' | 'medium' | 'large'
  reverseOnMobile?: boolean
}

export interface FeatureItem {
  _key: string
  icon?: string
  iconColor?: SanityColor
  image?: SanityImage
  title: string
  description?: string
  link?: Link
}

export interface FeatureGridSection extends BaseSection {
  _type: 'featureGridSection'
  eyebrow?: string
  heading?: string
  subheading?: string
  headerAlignment?: 'left' | 'center'
  features: FeatureItem[]
  columns?: number
  cardStyle?: 'simple' | 'elevated' | 'bordered' | 'filled' | 'gradient'
  iconStyle?: 'plain' | 'rounded' | 'square' | 'outlined'
  iconSize?: 'sm' | 'md' | 'lg'
  cardAlignment?: 'left' | 'center'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface Testimonial {
  _key: string
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: SanityImage
  companyLogo?: SanityImage
  rating?: number
  featured?: boolean
}

export interface TestimonialsSection extends BaseSection {
  _type: 'testimonialsSection'
  eyebrow?: string
  heading?: string
  subheading?: string
  testimonials: Testimonial[]
  layout?: 'grid' | 'carousel' | 'masonry' | 'featured' | 'single'
  columns?: number
  cardStyle?: 'simple' | 'bordered' | 'elevated' | 'glass'
  showRating?: boolean
  showQuoteIcon?: boolean
  autoplay?: boolean
  autoplaySpeed?: number
}

export interface CtaSection extends BaseSection {
  _type: 'ctaSection'
  eyebrow?: string
  heading: string
  subheading?: string
  highlightWords?: string
  primaryButton?: Button
  secondaryButton?: Button
  layout?: 'centered' | 'left' | 'split' | 'card'
  size?: 'compact' | 'normal' | 'large'
  showDecoration?: boolean
  decorationType?: string
}

export interface GalleryImage {
  _key: string
  image: SanityImage
  alt: string
  caption?: string
  category?: string
  size?: 'normal' | 'wide' | 'tall' | 'large'
  link?: Link
}

export interface GallerySection extends BaseSection {
  _type: 'gallerySection'
  eyebrow?: string
  heading?: string
  subheading?: string
  images: GalleryImage[]
  layout?: 'grid' | 'masonry' | 'carousel' | 'justified'
  columns?: number
  gap?: 'none' | 'sm' | 'md' | 'lg'
  aspectRatio?: 'original' | 'square' | 'landscape' | 'portrait'
  enableLightbox?: boolean
  showFilters?: boolean
  showCaptions?: 'never' | 'hover' | 'always'
  hoverEffect?: 'none' | 'zoom' | 'lift' | 'darken' | 'reveal'
}

export interface PricingFeature {
  _key: string
  text: string
  included?: boolean
  highlight?: boolean
}

export interface PricingPlan {
  _key: string
  name: string
  description?: string
  priceMonthly?: number
  priceAnnual?: number
  priceLabel?: string
  currency?: string
  billingPeriod?: string
  featured?: boolean
  badge?: string
  features?: PricingFeature[]
  button?: Button
}

export interface PricingSection extends BaseSection {
  _type: 'pricingSection'
  eyebrow?: string
  heading?: string
  subheading?: string
  showBillingToggle?: boolean
  plans: PricingPlan[]
  columns?: number
  cardStyle?: 'simple' | 'bordered' | 'elevated' | 'gradient'
  featuredScale?: boolean
  showFeatureComparison?: boolean
}

export interface FaqItem {
  _key: string
  question: string
  answer: RichText
  category?: string
}

export interface FaqSection extends BaseSection {
  _type: 'faqSection'
  eyebrow?: string
  heading?: string
  subheading?: string
  faqs: FaqItem[]
  showCategories?: boolean
  layout?: 'accordion' | 'columns' | 'cards'
  allowMultipleOpen?: boolean
  firstOpenByDefault?: boolean
  accordionStyle?: 'simple' | 'bordered' | 'separated'
  addSchemaMarkup?: boolean
}

export interface Stat {
  _key: string
  number: string
  label: string
  description?: string
  icon?: string
  animateNumber?: boolean
}

export interface StatsSection extends BaseSection {
  _type: 'statsSection'
  eyebrow?: string
  heading?: string
  subheading?: string
  showHeader?: boolean
  stats: Stat[]
  columns?: number
  style?: 'simple' | 'cards' | 'bordered' | 'gradient'
  alignment?: 'left' | 'center'
  size?: 'md' | 'lg' | 'xl'
  showDividers?: boolean
}

export interface Logo {
  _key: string
  image: SanityImage
  name: string
  link?: string
}

export interface LogoCloudSection extends BaseSection {
  _type: 'logoCloudSection'
  heading?: string
  subheading?: string
  showHeader?: boolean
  logos: Logo[]
  layout?: 'grid' | 'inline' | 'marquee'
  columns?: number
  logoSize?: 'sm' | 'md' | 'lg'
  grayscale?: boolean
  marqueeSpeed?: 'slow' | 'normal' | 'fast'
  marqueeDirection?: 'left' | 'right'
}

export interface FormField {
  _key: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
  name: string
  label: string
  placeholder?: string
  required?: boolean
  width?: 'full' | 'half'
  options?: string[]
}

export interface ContactFormSection extends BaseSection {
  _type: 'contactFormSection'
  eyebrow?: string
  heading?: string
  description?: RichText
  contactInfo?: Array<{
    _key: string
    icon?: string
    label?: string
    value?: string
    link?: Link
  }>
  image?: ResponsiveImage
  formFields?: FormField[]
  submitButton?: Button
  successMessage?: string
  formEndpoint?: string
  layout?: 'form-only' | 'split' | 'with-image' | 'two-columns'
  formStyle?: 'simple' | 'boxed' | 'card'
}

export interface CustomHtmlSection extends BaseSection {
  _type: 'customHtmlSection'
  title?: string
  htmlContent?: string
  cssContent?: string
  allowScripts?: boolean
  embedType?: 'raw' | 'iframe' | 'embed'
  iframeSrc?: string
  iframeHeight?: string
  sandboxMode?: boolean
}

// Union type for all sections
export type Section =
  | HeroSection
  | TextBlockSection
  | ImageTextSection
  | FeatureGridSection
  | TestimonialsSection
  | CtaSection
  | GallerySection
  | PricingSection
  | FaqSection
  | StatsSection
  | LogoCloudSection
  | ContactFormSection
  | CustomHtmlSection

// Page type
export interface SEO {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  noIndex?: boolean
  ogImage?: SanityImage
  ogTitle?: string
  ogDescription?: string
  twitterCardType?: 'summary' | 'summary_large_image'
  schemaMarkup?: string
}

export interface Page {
  _id: string
  _type: 'page'
  title: string
  slug: { current: string }
  sections: Section[]
  seo?: SEO
  status?: 'draft' | 'published' | 'scheduled'
  publishedAt?: string
  hideFromNavigation?: boolean
  pageTemplate?: 'default' | 'fullwidth' | 'landing' | 'article'
  customHeaderFooter?: {
    hideHeader?: boolean
    hideFooter?: boolean
    transparentHeader?: boolean
    lightHeader?: boolean
  }
}

// Global types
export interface NavItem {
  _key: string
  label: string
  link?: Link
  highlight?: boolean
  children?: Array<{
    _key: string
    label?: string
    description?: string
    icon?: string
    link?: Link
  }>
  megaMenu?: boolean
}

export interface Header {
  _id: string
  _type: 'header'
  logo?: SanityImage
  logoAlt?: string
  logoWidth?: number
  logoLink?: Link
  navigation?: NavItem[]
  showSearch?: boolean
  ctaButton?: Button
  secondaryButton?: Button
  showSocialLinks?: boolean
  socialLinks?: Array<{
    _key: string
    platform?: string
    url?: string
  }>
  style?: 'standard' | 'centered' | 'split'
  sticky?: boolean
  shrinkOnScroll?: boolean
  transparent?: boolean
  backgroundColor?: SanityColor
  textColor?: SanityColor
  mobileBreakpoint?: 'sm' | 'md' | 'lg'
}

export interface FooterColumn {
  _key: string
  title?: string
  links?: Array<{
    _key: string
    label?: string
    link?: Link
    badge?: string
  }>
}

export interface Footer {
  _id: string
  _type: 'footer'
  logo?: SanityImage
  description?: string
  columns?: FooterColumn[]
  socialLinks?: Array<{
    _key: string
    platform?: string
    url?: string
  }>
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
  newsletter?: {
    enabled?: boolean
    heading?: string
    description?: string
    placeholder?: string
    buttonText?: string
    formAction?: string
  }
  copyrightText?: string
  legalLinks?: Array<{
    _key: string
    label?: string
    link?: Link
  }>
  layout?: 'standard' | 'minimal' | 'centered' | 'two-row'
  backgroundColor?: SanityColor
  textColor?: SanityColor
  showBackToTop?: boolean
  showDivider?: boolean
}

export interface ThemeSettings {
  _id: string
  _type: 'themeSettings'
  colors?: {
    primary?: SanityColor
    secondary?: SanityColor
    accent?: SanityColor
    background?: SanityColor
    surface?: SanityColor
    text?: SanityColor
    textMuted?: SanityColor
    border?: SanityColor
    success?: SanityColor
    warning?: SanityColor
    error?: SanityColor
  }
  gradients?: Array<{
    _key: string
    name?: string
    colorStart?: SanityColor
    colorEnd?: SanityColor
    angle?: number
  }>
  darkMode?: {
    background?: SanityColor
    surface?: SanityColor
    text?: SanityColor
  }
  fonts?: {
    heading?: string
    body?: string
    mono?: string
  }
  headingSizes?: {
    h1?: string
    h2?: string
    h3?: string
    h4?: string
    h5?: string
    h6?: string
  }
  baseFontSize?: string
  buttonStyles?: {
    borderRadius?: string
    padding?: string
    textTransform?: string
    fontWeight?: string
  }
  layout?: {
    maxWidth?: string
    containerPadding?: string
    sectionSpacing?: string
    borderRadius?: string
  }
  logo?: SanityImage
  logoDark?: SanityImage
  favicon?: SanityImage
  siteName?: string
  tagline?: string
}

// Site Settings with Effects Configuration
export interface ParticleLogoSettings {
  enabled?: boolean
  particleCount?: number
  colorA?: string
  colorB?: string
  forceRadius?: number
  shadowBlur?: number
}

export interface LiquidEtherSettings {
  enabled?: boolean
  desktopParticleCount?: number
  tabletParticleCount?: number
  mobileParticleCount?: number
  primaryColor?: { h: number; s: number; l: number }
  secondaryColor?: { h: number; s: number; l: number }
  desktopBlur?: number
  tabletBlur?: number
  mobileBlur?: number
}

export interface SplashCursorSettings {
  enabled?: boolean
  dotSize?: number
  primaryColor?: string
  secondaryColor?: string
  trailThrottle?: number
  trailDuration?: number
  rippleDuration?: number
}

export interface SnowfallSettings {
  enabled?: boolean
  snowflakeCount?: number
  minRadius?: number
  maxRadius?: number
  minSpeed?: number
  maxSpeed?: number
  minOpacity?: number
  maxOpacity?: number
}

export interface ChristmasLightsSettings {
  enabled?: boolean
  spacing?: number
  colors?: string[]
  pulseSpeed?: number
  glowRadius?: number
}

export interface SmoothScrollSettings {
  enabled?: boolean
  duration?: number
  navbarOffset?: number
}

export interface ScrollProgressSettings {
  enabled?: boolean
  color?: string
  height?: number
}

// Navigation Link
export interface NavigationLink {
  label: string
  href: string
}

// Social Link
export interface SocialLink {
  name: string
  url: string
  icon: 'linkedin' | 'twitter' | 'github' | 'instagram' | 'facebook' | 'youtube'
}

// Hero Section Content
export interface HeroSectionContent {
  headingLine1?: string
  headingLine2?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

// About Preview Content
export interface AboutPreviewValue {
  icon?: string
  title?: string
  description?: string
}

export interface AboutPreviewStat {
  number?: string
  label?: string
}

export interface AboutPreviewContent {
  heading?: string
  description?: string
  values?: AboutPreviewValue[]
  stats?: AboutPreviewStat[]
}

// Homepage CTA Content
export interface HomepageCtaContent {
  heading?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

// Address
export interface Address {
  city?: string
  state?: string
  country?: string
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  siteName?: string
  tagline?: string
  email?: string
  phone?: string
  address?: Address
  description?: string
  navigationLinks?: NavigationLink[]
  socialLinks?: SocialLink[]
  heroSection?: HeroSectionContent
  aboutPreview?: AboutPreviewContent
  homepageCta?: HomepageCtaContent
  particleLogo?: ParticleLogoSettings
  liquidEther?: LiquidEtherSettings
  splashCursor?: SplashCursorSettings
  snowfall?: SnowfallSettings
  christmasLights?: ChristmasLightsSettings
  smoothScroll?: SmoothScrollSettings
  scrollProgress?: ScrollProgressSettings
}

// Service
export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: string
  icon?: string
  shortDescription?: string
  description?: string
  color?: string
  features?: string[]
  image?: SanityImage
  order?: number
  isVisible?: boolean
}

// Team Member
export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  role: string
  initial?: string
  photo?: SanityImage
  bio?: string
  color?: string
  linkedin?: string
  twitter?: string
  github?: string
  email?: string
  order?: number
  isVisible?: boolean
}

// Portfolio Item
export interface PortfolioItem {
  _id: string
  _type: 'portfolioItem'
  title: string
  slug: string
  category?: string
  description?: string
  fullDescription?: RichText
  image?: SanityImage
  gradient?: string
  technologies?: string[]
  projectUrl?: string
  caseStudyUrl?: string
  client?: string
  completionDate?: string
  isFeatured?: boolean
  order?: number
  isVisible?: boolean
}

// Work Process Step
export interface WorkProcessStep {
  _id: string
  _type: 'workProcess'
  stepNumber: string
  title: string
  icon?: string
  description?: string
  points?: string[]
  order?: number
  isVisible?: boolean
}

// Product Feature
export interface ProductFeature {
  _key: string
  title?: string
  description?: string
  icon?: string
}

// Product
export interface Product {
  _id: string
  _type: 'product'
  name: string
  slug: string
  tagline?: string
  shortDescription?: string
  fullDescription?: RichText
  icon?: string
  logo?: SanityImage
  screenshot?: SanityImage
  gradient?: string
  features?: ProductFeature[]
  demoUrl?: string
  docUrl?: string
  isFeatured?: boolean
  order?: number
  isVisible?: boolean
}
