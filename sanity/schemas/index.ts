// Object schemas (reusable types)
import { seo } from './objects/seo'
import { link } from './objects/link'
import { button } from './objects/button'
import { responsiveImage } from './objects/responsiveImage'
import { sectionSettings } from './objects/sectionSettings'
import { richText } from './objects/richText'
import { textStyles } from './objects/textStyles'
import { colorPicker } from './objects/colorPicker'

// Section schemas
import { heroSection } from './sections/heroSection'
import { textBlockSection } from './sections/textBlockSection'
import { imageTextSection } from './sections/imageTextSection'
import { featureGridSection } from './sections/featureGridSection'
import { testimonialsSection } from './sections/testimonialsSection'
import { ctaSection } from './sections/ctaSection'
import { gallerySection } from './sections/gallerySection'
import { pricingSection } from './sections/pricingSection'
import { faqSection } from './sections/faqSection'
import { statsSection } from './sections/statsSection'
import { logoCloudSection } from './sections/logoCloudSection'
import { contactFormSection } from './sections/contactFormSection'
import { customHtmlSection } from './sections/customHtmlSection'

// Document schemas
import { page } from './documents/page'
import { themeSettings } from './documents/themeSettings'
import { header } from './documents/header'
import { footer } from './documents/footer'
import { reusableBlock } from './documents/reusableBlock'
import { defaultSeo } from './documents/defaultSeo'
import { siteSettings } from './documents/siteSettings'
import { service } from './documents/service'
import { teamMember } from './documents/teamMember'
import { portfolioItem } from './documents/portfolioItem'
import { workProcess } from './documents/workProcess'
import { product } from './documents/product'

export const schemaTypes = [
  // Objects (must be defined before documents that use them)
  colorPicker,
  seo,
  link,
  button,
  responsiveImage,
  sectionSettings,
  richText,
  textStyles,

  // Sections
  heroSection,
  textBlockSection,
  imageTextSection,
  featureGridSection,
  testimonialsSection,
  ctaSection,
  gallerySection,
  pricingSection,
  faqSection,
  statsSection,
  logoCloudSection,
  contactFormSection,
  customHtmlSection,

  // Documents
  page,
  themeSettings,
  header,
  footer,
  reusableBlock,
  defaultSeo,
  siteSettings,
  service,
  teamMember,
  portfolioItem,
  workProcess,
  product,
]
