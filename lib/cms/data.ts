import { CMSContent, CMSPopup, CMSSettings } from './types';

// Default CMS content
export const defaultCMSContent: CMSContent = {
  pages: [],
  popups: [],
  settings: {
    siteTitle: 'InfiniTech Partners',
    siteDescription: 'Your trusted partner in digital transformation',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/infinitech-partners',
      twitter: 'https://twitter.com/infinitechp',
    },
    contact: {
      email: 'info@infinitechpartners.com',
      phone: '+1 (555) 123-4567',
      address: '123 Tech Street, Silicon Valley, CA 94025',
    },
  },
};

// In-memory storage (for development - replace with database in production)
let cmsContent: CMSContent = defaultCMSContent;

export const getCMSContent = (): CMSContent => {
  // In production, fetch from database/API
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('cms_content');
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return cmsContent;
};

export const saveCMSContent = (content: CMSContent): void => {
  cmsContent = content;
  if (typeof window !== 'undefined') {
    localStorage.setItem('cms_content', JSON.stringify(content));
  }
};

export const getActivePopups = (): CMSPopup[] => {
  const content = getCMSContent();
  const now = new Date();

  return content.popups.filter(popup => {
    if (!popup.active) return false;

    if (popup.startDate && new Date(popup.startDate) > now) return false;
    if (popup.endDate && new Date(popup.endDate) < now) return false;

    return true;
  });
};

export const getSettings = (): CMSSettings => {
  return getCMSContent().settings;
};
