// GROQ Queries for Sanity Page Builder

// Helper fragments for reusable query parts
const linkFragment = `
  linkType,
  internalLink->{
    _id,
    "slug": slug.current
  },
  externalUrl,
  email,
  phone,
  anchor,
  file{
    asset->{
      url
    }
  },
  openInNewTab
`

const buttonFragment = `
  label,
  link{
    ${linkFragment}
  },
  variant,
  size,
  icon,
  iconPosition,
  fullWidth
`

const imageFragment = `
  asset->{
    _id,
    url,
    metadata{
      dimensions,
      lqip,
      palette
    }
  },
  hotspot,
  crop
`

const responsiveImageFragment = `
  image{
    ${imageFragment}
  },
  alt,
  caption,
  lazyLoad,
  priority,
  aspectRatio,
  objectFit,
  rounded,
  shadow
`

const sectionSettingsFragment = `
  isVisible,
  visibleOn,
  containerWidth,
  contentAlignment,
  verticalAlignment,
  backgroundType,
  backgroundColor,
  gradient,
  backgroundImage{
    ${imageFragment}
  },
  backgroundVideo,
  backgroundOverlay,
  backgroundPosition,
  backgroundAttachment,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
  sectionId,
  customClasses,
  animateOnScroll
`

const seoFragment = `
  metaTitle,
  metaDescription,
  canonicalUrl,
  noIndex,
  ogImage{
    ${imageFragment}
  },
  ogTitle,
  ogDescription,
  twitterCardType,
  schemaMarkup
`

// Main page query - fetches all section data
export const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  status,
  publishedAt,
  hideFromNavigation,
  pageTemplate,
  customHeaderFooter,
  seo{
    ${seoFragment}
  },
  sections[]{
    _key,
    _type,

    // Hero Section
    _type == "heroSection" => {
      eyebrow,
      headline,
      headlineHighlight,
      subheadline,
      headlineStyles,
      mediaType,
      image{
        ${responsiveImageFragment}
      },
      videoUrl,
      videoPoster{
        ${imageFragment}
      },
      autoplayVideo,
      loopVideo,
      muteVideo,
      lottieUrl,
      mediaPosition,
      primaryButton{
        ${buttonFragment}
      },
      secondaryButton{
        ${buttonFragment}
      },
      layout,
      height,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Text Block Section
    _type == "textBlockSection" => {
      eyebrow,
      heading,
      headingLevel,
      content,
      buttons[]{
        _key,
        ${buttonFragment}
      },
      alignment,
      maxWidth,
      headingStyles,
      textColor,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Image + Text Section
    _type == "imageTextSection" => {
      eyebrow,
      heading,
      headingLevel,
      content,
      features[]{
        _key,
        icon,
        title,
        description
      },
      buttons[]{
        _key,
        ${buttonFragment}
      },
      image{
        ${responsiveImageFragment}
      },
      imageDecoration,
      showVideoButton,
      videoUrl,
      imagePosition,
      verticalAlignment,
      imageSize,
      reverseOnMobile,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Feature Grid Section
    _type == "featureGridSection" => {
      eyebrow,
      heading,
      subheading,
      headerAlignment,
      features[]{
        _key,
        icon,
        iconColor,
        image{
          ${imageFragment}
        },
        title,
        description,
        link{
          ${linkFragment}
        }
      },
      columns,
      cardStyle,
      iconStyle,
      iconSize,
      cardAlignment,
      gap,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Testimonials Section
    _type == "testimonialsSection" => {
      eyebrow,
      heading,
      subheading,
      testimonials[]{
        _key,
        quote,
        author,
        role,
        company,
        avatar{
          ${imageFragment}
        },
        companyLogo{
          ${imageFragment}
        },
        rating,
        featured
      },
      layout,
      columns,
      cardStyle,
      showRating,
      showQuoteIcon,
      autoplay,
      autoplaySpeed,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // CTA Section
    _type == "ctaSection" => {
      eyebrow,
      heading,
      subheading,
      highlightWords,
      primaryButton{
        ${buttonFragment}
      },
      secondaryButton{
        ${buttonFragment}
      },
      layout,
      size,
      showDecoration,
      decorationType,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Gallery Section
    _type == "gallerySection" => {
      eyebrow,
      heading,
      subheading,
      images[]{
        _key,
        image{
          ${imageFragment}
        },
        alt,
        caption,
        category,
        size,
        link{
          ${linkFragment}
        }
      },
      layout,
      columns,
      gap,
      aspectRatio,
      enableLightbox,
      showFilters,
      showCaptions,
      hoverEffect,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Pricing Section
    _type == "pricingSection" => {
      eyebrow,
      heading,
      subheading,
      showBillingToggle,
      plans[]{
        _key,
        name,
        description,
        priceMonthly,
        priceAnnual,
        priceLabel,
        currency,
        billingPeriod,
        featured,
        badge,
        features[]{
          _key,
          text,
          included,
          highlight
        },
        button{
          ${buttonFragment}
        }
      },
      columns,
      cardStyle,
      featuredScale,
      showFeatureComparison,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // FAQ Section
    _type == "faqSection" => {
      eyebrow,
      heading,
      subheading,
      faqs[]{
        _key,
        question,
        answer,
        category
      },
      showCategories,
      layout,
      allowMultipleOpen,
      firstOpenByDefault,
      accordionStyle,
      addSchemaMarkup,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Stats Section
    _type == "statsSection" => {
      eyebrow,
      heading,
      subheading,
      showHeader,
      stats[]{
        _key,
        number,
        label,
        description,
        icon,
        animateNumber
      },
      columns,
      style,
      alignment,
      size,
      showDividers,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Logo Cloud Section
    _type == "logoCloudSection" => {
      heading,
      subheading,
      showHeader,
      logos[]{
        _key,
        image{
          ${imageFragment}
        },
        name,
        link
      },
      layout,
      columns,
      logoSize,
      grayscale,
      marqueeSpeed,
      marqueeDirection,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Contact Form Section
    _type == "contactFormSection" => {
      eyebrow,
      heading,
      description,
      contactInfo[]{
        _key,
        icon,
        label,
        value,
        link{
          ${linkFragment}
        }
      },
      image{
        ${responsiveImageFragment}
      },
      formFields[]{
        _key,
        type,
        name,
        label,
        placeholder,
        required,
        width,
        options
      },
      submitButton{
        ${buttonFragment}
      },
      successMessage,
      formEndpoint,
      layout,
      formStyle,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Custom HTML Section
    _type == "customHtmlSection" => {
      title,
      htmlContent,
      cssContent,
      allowScripts,
      embedType,
      iframeSrc,
      iframeHeight,
      sandboxMode,
      settings{
        ${sectionSettingsFragment}
      }
    },

    // Reusable Block Reference
    _type == "reference" => @->{
      _type,
      name,
      sections[]{
        _key,
        _type,
        ...
      }
    }
  }
}`

// Get all page slugs for static generation
export const ALL_PAGES_SLUGS_QUERY = `*[_type == "page" && status == "published"]{
  "slug": slug.current
}`

// Get all pages for navigation
export const ALL_PAGES_QUERY = `*[_type == "page" && status == "published" && hideFromNavigation != true]{
  _id,
  title,
  "slug": slug.current
}`

// Header query
export const HEADER_QUERY = `*[_type == "header" && _id == "header"][0]{
  _id,
  logo{
    ${imageFragment}
  },
  logoAlt,
  logoWidth,
  logoLink{
    ${linkFragment}
  },
  navigation[]{
    _key,
    label,
    link{
      ${linkFragment}
    },
    highlight,
    children[]{
      _key,
      label,
      description,
      icon,
      link{
        ${linkFragment}
      }
    },
    megaMenu
  },
  showSearch,
  ctaButton{
    ${buttonFragment}
  },
  secondaryButton{
    ${buttonFragment}
  },
  showSocialLinks,
  socialLinks[]{
    _key,
    platform,
    url
  },
  style,
  sticky,
  shrinkOnScroll,
  transparent,
  backgroundColor,
  textColor,
  mobileBreakpoint
}`

// Footer query
export const FOOTER_QUERY = `*[_type == "footer" && _id == "footer"][0]{
  _id,
  logo{
    ${imageFragment}
  },
  description,
  columns[]{
    _key,
    title,
    links[]{
      _key,
      label,
      link{
        ${linkFragment}
      },
      badge
    }
  },
  socialLinks[]{
    _key,
    platform,
    url
  },
  contactInfo,
  newsletter,
  copyrightText,
  legalLinks[]{
    _key,
    label,
    link{
      ${linkFragment}
    }
  },
  layout,
  backgroundColor,
  textColor,
  showBackToTop,
  showDivider
}`

// Theme settings query
export const THEME_SETTINGS_QUERY = `*[_type == "themeSettings" && _id == "themeSettings"][0]{
  _id,
  colors,
  gradients,
  darkMode,
  fonts,
  headingSizes,
  baseFontSize,
  buttonStyles,
  layout,
  logo{
    ${imageFragment}
  },
  logoDark{
    ${imageFragment}
  },
  favicon{
    ${imageFragment}
  },
  siteName,
  tagline
}`

// Default SEO query
export const DEFAULT_SEO_QUERY = `*[_type == "defaultSeo" && _id == "defaultSeo"][0]{
  _id,
  metaTitleSuffix,
  defaultMetaDescription,
  keywords,
  defaultOgImage{
    ${imageFragment}
  },
  twitterHandle,
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  robotsTxt,
  customHeadTags,
  organizationSchema
}`

// Get page for preview
export const PAGE_PREVIEW_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  ${PAGE_QUERY.replace('*[_type == "page" && slug.current == $slug][0]', '')}
}`

// Site Settings query (includes all effects configuration)
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  _id,
  siteName,
  tagline,
  email,
  phone,
  address{city, state, country},
  description,
  navigationLinks[]{label, href},
  socialLinks[]{name, url, icon},
  heroSection{
    headingLine1,
    headingLine2,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  },
  aboutPreview{
    heading,
    description,
    values[]{icon, title, description},
    stats[]{number, label}
  },
  homepageCta{
    heading,
    description,
    buttonText,
    buttonLink
  },
  particleLogo{
    enabled,
    particleCount,
    colorA,
    colorB,
    forceRadius,
    shadowBlur
  },
  liquidEther{
    enabled,
    desktopParticleCount,
    tabletParticleCount,
    mobileParticleCount,
    primaryColor{h, s, l},
    secondaryColor{h, s, l},
    desktopBlur,
    tabletBlur,
    mobileBlur
  },
  splashCursor{
    enabled,
    dotSize,
    primaryColor,
    secondaryColor,
    trailThrottle,
    trailDuration,
    rippleDuration
  },
  snowfall{
    enabled,
    snowflakeCount,
    minRadius,
    maxRadius,
    minSpeed,
    maxSpeed,
    minOpacity,
    maxOpacity
  },
  christmasLights{
    enabled,
    spacing,
    colors,
    pulseSpeed,
    glowRadius
  },
  smoothScroll{
    enabled,
    duration,
    navbarOffset
  },
  scrollProgress{
    enabled,
    color,
    height
  }
}`

// Services query
export const ALL_SERVICES_QUERY = `*[_type == "service" && isVisible == true] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  icon,
  shortDescription,
  description,
  color,
  features,
  image{
    ${imageFragment}
  },
  order
}`

// Single service query
export const SERVICE_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  icon,
  shortDescription,
  description,
  color,
  features,
  image{
    ${imageFragment}
  }
}`

// Team members query
export const ALL_TEAM_MEMBERS_QUERY = `*[_type == "teamMember" && isVisible == true] | order(order asc){
  _id,
  name,
  role,
  initial,
  photo{
    ${imageFragment}
  },
  bio,
  color,
  linkedin,
  twitter,
  github,
  email,
  order
}`

// Portfolio items query
export const ALL_PORTFOLIO_ITEMS_QUERY = `*[_type == "portfolioItem" && isVisible == true] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image{
    ${imageFragment}
  },
  gradient,
  technologies,
  projectUrl,
  isFeatured,
  order
}`

// Featured portfolio items
export const FEATURED_PORTFOLIO_ITEMS_QUERY = `*[_type == "portfolioItem" && isVisible == true && isFeatured == true] | order(order asc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image{
    ${imageFragment}
  },
  gradient,
  technologies
}`

// Single portfolio item query
export const PORTFOLIO_ITEM_QUERY = `*[_type == "portfolioItem" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  fullDescription,
  image{
    ${imageFragment}
  },
  gradient,
  technologies,
  projectUrl,
  caseStudyUrl,
  client,
  completionDate
}`

// Work process steps query
export const WORK_PROCESS_QUERY = `*[_type == "workProcess" && isVisible == true] | order(order asc){
  _id,
  stepNumber,
  title,
  icon,
  description,
  points,
  order
}`

// Products query
export const ALL_PRODUCTS_QUERY = `*[_type == "product" && isVisible == true] | order(order asc){
  _id,
  name,
  "slug": slug.current,
  tagline,
  shortDescription,
  icon,
  logo{
    ${imageFragment}
  },
  screenshot{
    ${imageFragment}
  },
  gradient,
  features[]{
    _key,
    title,
    description,
    icon
  },
  demoUrl,
  docUrl,
  isFeatured,
  order
}`

// Featured products
export const FEATURED_PRODUCTS_QUERY = `*[_type == "product" && isVisible == true && isFeatured == true] | order(order asc){
  _id,
  name,
  "slug": slug.current,
  tagline,
  shortDescription,
  icon,
  logo{
    ${imageFragment}
  },
  gradient
}`

// Single product query
export const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  tagline,
  shortDescription,
  fullDescription,
  icon,
  logo{
    ${imageFragment}
  },
  screenshot{
    ${imageFragment}
  },
  gradient,
  features[]{
    _key,
    title,
    description,
    icon
  },
  demoUrl,
  docUrl
}`
