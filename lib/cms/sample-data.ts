import { CMSContent } from './types';

// Sample CMS content with example popup
export const sampleCMSContent: CMSContent = {
  pages: [],
  popups: [
    {
      id: 'sample_diwali_2024',
      title: 'Happy Diwali 2024! 🪔',
      message: 'Wishing you and your loved ones a prosperous and joyful Diwali! May this festival of lights illuminate your path to success and happiness.',
      active: true,
      type: 'festive',
      startDate: new Date().toISOString().split('T')[0], // Today
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      ctaText: 'Explore Our Services',
      ctaLink: '/services',
      backgroundColor: '#FF6B35',
      textColor: '#FFFFFF',
    },
  ],
  settings: {
    siteTitle: 'InfiniTech Partners',
    siteDescription: 'Your trusted partner in digital transformation. Specializing in Data Center Management, Custom Software Development, Smart City Solutions, and more.',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/infinitech-partners',
      twitter: 'https://twitter.com/infinitechp',
      instagram: 'https://instagram.com/infinitechpartners',
    },
    contact: {
      email: 'info@infinitechpartners.com',
      phone: '+1 (555) 123-4567',
      address: '123 Tech Street, Silicon Valley, CA 94025',
    },
  },
};

// Initialize CMS with sample data (call this once)
export const initializeCMS = () => {
  if (typeof window !== 'undefined') {
    const existing = localStorage.getItem('cms_content');
    if (!existing) {
      localStorage.setItem('cms_content', JSON.stringify(sampleCMSContent));
      console.log('✅ CMS initialized with sample content');
    }
  }
};
