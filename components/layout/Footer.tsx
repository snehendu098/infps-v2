'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github, Instagram, Facebook, Youtube } from 'lucide-react';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

// Default company info fallback
const defaultCompanyInfo = {
  name: 'Infinititech Partners',
  email: 'infinititechpartners@gmail.com',
  description: 'Leading provider of Data Center Management, Custom Software Development, Smart City Solutions, and comprehensive Digital Services.',
};

// Default social links fallback
const defaultSocialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/infinititech-partners', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/infinititechp', icon: 'twitter' },
  { name: 'GitHub', url: 'https://github.com/infinititech-partners', icon: 'github' },
  { name: 'Instagram', url: 'https://instagram.com/infinititechpartners', icon: 'instagram' },
];

export default function Footer() {
  const settings = useSiteSettings();

  // Get company info from Sanity with fallbacks
  const companyName = settings.siteName || defaultCompanyInfo.name;
  const companyEmail = settings.email || defaultCompanyInfo.email;
  const companyDescription = settings.description || defaultCompanyInfo.description;

  // Get social links from Sanity with fallback
  const socialLinks = settings.socialLinks && settings.socialLinks.length > 0
    ? settings.socialLinks
    : defaultSocialLinks;

  // Get navigation links from Sanity with fallback
  const navigationLinks = settings.navigationLinks && settings.navigationLinks.length > 0
    ? settings.navigationLinks
    : [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Products', href: '/products' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Team', href: '/team' },
        { label: 'Contact', href: '/contact' },
      ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-base sm:text-xl font-bold text-white">∞</span>
              </div>
              <span className="text-base sm:text-lg font-semibold">{companyName}</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
              {companyDescription}
            </p>
            <a
              href={`mailto:${companyEmail}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors touch-manipulation"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">{companyEmail}</span>
              <span className="sm:hidden">Contact Us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-3">
              {navigationLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => {
                const iconKey = social.icon as keyof typeof socialIcons;
                const Icon = socialIcons[iconKey] || Linkedin;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 touch-manipulation"
                    aria-label={social.name}
                  >
                    <Icon size={18} className="text-foreground hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
