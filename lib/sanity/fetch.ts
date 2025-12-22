import { sanityFetch } from './client'
import {
  SITE_SETTINGS_QUERY,
  ALL_SERVICES_QUERY,
  ALL_TEAM_MEMBERS_QUERY,
  ALL_PORTFOLIO_ITEMS_QUERY,
  WORK_PROCESS_QUERY,
  ALL_PRODUCTS_QUERY,
} from './queries'
import type {
  SiteSettings,
  Service,
  TeamMember,
  PortfolioItem,
  WorkProcessStep,
  Product,
} from './types'

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await sanityFetch<SiteSettings>({
      query: SITE_SETTINGS_QUERY,
      tags: ['siteSettings'],
    })
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    return await sanityFetch<Service[]>({
      query: ALL_SERVICES_QUERY,
      tags: ['services'],
    })
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    return await sanityFetch<TeamMember[]>({
      query: ALL_TEAM_MEMBERS_QUERY,
      tags: ['teamMembers'],
    })
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    return await sanityFetch<PortfolioItem[]>({
      query: ALL_PORTFOLIO_ITEMS_QUERY,
      tags: ['portfolioItems'],
    })
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    return []
  }
}

export async function getWorkProcess(): Promise<WorkProcessStep[]> {
  try {
    return await sanityFetch<WorkProcessStep[]>({
      query: WORK_PROCESS_QUERY,
      tags: ['workProcess'],
    })
  } catch (error) {
    console.error('Error fetching work process:', error)
    return []
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    return await sanityFetch<Product[]>({
      query: ALL_PRODUCTS_QUERY,
      tags: ['products'],
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}
