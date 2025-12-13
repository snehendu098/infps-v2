// GROQ Queries for Sanity

export const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  seo{
    metaTitle,
    metaDescription,
    ogImage{
      asset->
    }
  },
  sections[]{
    _key,
    layout{
      width,
      padding
    },
    background{
      type,
      color,
      image{
        asset->
      }
    },
    columns[]{
      _key,
      width,
      widgets[]{
        _type,
        _key,
        ...
      }
    }
  }
}`

export const ALL_PAGES_QUERY = `*[_type == "page"]{
  slug
}`

export const HEADER_QUERY = `*[_type == "header" && _id == "header"][0]{
  logo{
    asset->,
    alt
  },
  navigation[]{
    label,
    link{
      linkType,
      internalLink->{
        slug
      },
      externalUrl
    }
  }
}`

export const FOOTER_QUERY = `*[_type == "footer" && _id == "footer"][0]{
  logo{
    asset->
  },
  columns[]{
    title,
    links[]{
      label,
      link{
        linkType,
        internalLink->{
          slug
        },
        externalUrl
      }
    }
  },
  copyrightText
}`
