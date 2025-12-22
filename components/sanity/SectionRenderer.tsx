'use client'

import { lazy, Suspense } from 'react'
import type { Section, SectionSettings } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/client'
import { cn } from '@/lib/utils'

// Lazy load section components for performance
const HeroSection = lazy(() => import('./sections/HeroSection'))
const TextBlockSection = lazy(() => import('./sections/TextBlockSection'))
const ImageTextSection = lazy(() => import('./sections/ImageTextSection'))
const FeatureGridSection = lazy(() => import('./sections/FeatureGridSection'))
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'))
const CtaSection = lazy(() => import('./sections/CtaSection'))
const GallerySection = lazy(() => import('./sections/GallerySection'))
const PricingSection = lazy(() => import('./sections/PricingSection'))
const FaqSection = lazy(() => import('./sections/FaqSection'))
const StatsSection = lazy(() => import('./sections/StatsSection'))
const LogoCloudSection = lazy(() => import('./sections/LogoCloudSection'))
const ContactFormSection = lazy(() => import('./sections/ContactFormSection'))
const CustomHtmlSection = lazy(() => import('./sections/CustomHtmlSection'))

// Map section types to components
// Using 'any' for data prop since each component has its specific section type
// Runtime type safety is ensured by the section._type check
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionComponents: Record<string, React.ComponentType<{ data: any }>> = {
  heroSection: HeroSection,
  textBlockSection: TextBlockSection,
  imageTextSection: ImageTextSection,
  featureGridSection: FeatureGridSection,
  testimonialsSection: TestimonialsSection,
  ctaSection: CtaSection,
  gallerySection: GallerySection,
  pricingSection: PricingSection,
  faqSection: FaqSection,
  statsSection: StatsSection,
  logoCloudSection: LogoCloudSection,
  contactFormSection: ContactFormSection,
  customHtmlSection: CustomHtmlSection,
}

// Loading skeleton for sections
function SectionSkeleton() {
  return (
    <div className="animate-pulse py-16">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  )
}

// Get padding classes from settings
function getPaddingClasses(settings?: SectionSettings) {
  const paddingMap: Record<string, string> = {
    '0': 'py-0',
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-16',
    xl: 'py-24',
    '2xl': 'py-32',
  }

  const paddingTop = paddingMap[settings?.paddingTop || 'lg'] || 'py-16'
  const paddingBottom = paddingMap[settings?.paddingBottom || 'lg'] || 'py-16'

  // Return combined classes
  const topClass = paddingTop.replace('py-', 'pt-')
  const bottomClass = paddingBottom.replace('py-', 'pb-')

  return `${topClass} ${bottomClass}`
}

// Get margin classes from settings
function getMarginClasses(settings?: SectionSettings) {
  const marginMap: Record<string, string> = {
    '0': '',
    sm: '4',
    md: '8',
    lg: '16',
  }

  const mt = marginMap[settings?.marginTop || '0']
  const mb = marginMap[settings?.marginBottom || '0']

  return cn(mt && `mt-${mt}`, mb && `mb-${mb}`)
}

// Get container width classes
function getContainerClasses(settings?: SectionSettings) {
  const widthMap: Record<string, string> = {
    full: 'w-full',
    wide: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8',
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  }

  return widthMap[settings?.containerWidth || 'default']
}

// Get background styles
function getBackgroundStyles(settings?: SectionSettings) {
  if (!settings?.backgroundType || settings.backgroundType === 'none') {
    return {}
  }

  if (settings.backgroundType === 'color' && settings.backgroundColor) {
    return { backgroundColor: settings.backgroundColor.hex }
  }

  if (settings.backgroundType === 'gradient' && settings.gradient) {
    const { type, angle, colorStart, colorEnd } = settings.gradient
    const startColor = colorStart?.hex || '#000'
    const endColor = colorEnd?.hex || '#fff'

    if (type === 'radial') {
      return { background: `radial-gradient(circle, ${startColor}, ${endColor})` }
    }
    return { background: `linear-gradient(${angle || 180}deg, ${startColor}, ${endColor})` }
  }

  return {}
}

// Get alignment classes
function getAlignmentClasses(settings?: SectionSettings) {
  const alignMap: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return alignMap[settings?.contentAlignment || 'center']
}

// Get animation classes
function getAnimationClasses(settings?: SectionSettings) {
  if (!settings?.animateOnScroll || settings.animateOnScroll === 'none') {
    return ''
  }

  // Add intersection observer-based animations later
  const animationMap: Record<string, string> = {
    'fade-in': 'animate-fade-in',
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'zoom-in': 'animate-zoom-in',
    'scale-up': 'animate-scale-up',
  }

  return animationMap[settings.animateOnScroll] || ''
}

// Get responsive visibility classes
function getVisibilityClasses(settings?: SectionSettings) {
  if (!settings?.visibleOn) return ''

  const classes: string[] = []

  if (settings.visibleOn.desktop === false) classes.push('lg:hidden')
  if (settings.visibleOn.tablet === false) classes.push('md:hidden lg:block')
  if (settings.visibleOn.mobile === false) classes.push('hidden md:block')

  return classes.join(' ')
}

interface SectionWrapperProps {
  section: Section
  children: React.ReactNode
}

function SectionWrapper({ section, children }: SectionWrapperProps) {
  const settings = section.settings

  // Check visibility
  if (settings?.isVisible === false) {
    return null
  }

  const backgroundStyles = getBackgroundStyles(settings)
  const hasBackgroundImage =
    settings?.backgroundType === 'image' && settings.backgroundImage?.asset

  return (
    <section
      id={settings?.sectionId}
      className={cn(
        'relative',
        getPaddingClasses(settings),
        getMarginClasses(settings),
        getAlignmentClasses(settings),
        getAnimationClasses(settings),
        getVisibilityClasses(settings),
        settings?.customClasses
      )}
      style={backgroundStyles}
    >
      {/* Background Image */}
      {hasBackgroundImage && (
        <div
          className={cn(
            'absolute inset-0 -z-10 bg-cover bg-center',
            settings?.backgroundAttachment && 'bg-fixed'
          )}
          style={{
            backgroundImage: `url(${urlFor(settings.backgroundImage!.asset).width(1920).url()})`,
            backgroundPosition: settings?.backgroundPosition || 'center',
          }}
        />
      )}

      {/* Background Overlay */}
      {settings?.backgroundOverlay?.enabled && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundColor: settings.backgroundOverlay.color?.hex || '#000',
            opacity: (settings.backgroundOverlay.opacity || 50) / 100,
          }}
        />
      )}

      {/* Content */}
      <div className={getContainerClasses(settings)}>{children}</div>
    </section>
  )
}

interface SectionRendererProps {
  sections: Section[]
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section._type]

        if (!SectionComponent) {
          // Gracefully handle unknown section types
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Unknown section type: ${section._type}`)
          }
          return null
        }

        return (
          <Suspense key={section._key} fallback={<SectionSkeleton />}>
            <SectionWrapper section={section}>
              <SectionComponent data={section} />
            </SectionWrapper>
          </Suspense>
        )
      })}
    </>
  )
}
