'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';

// Default navigation links for fallback
const defaultNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const settings = useSiteSettings();

  // Get navigation links from Sanity with fallback
  const navigationLinks = settings.navigationLinks && settings.navigationLinks.length > 0
    ? settings.navigationLinks
    : defaultNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/50 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-16 py-4 sm:py-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group relative z-10">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center transition-all group-hover:bg-primary/20 group-hover:border-primary/50">
              <span className="text-lg sm:text-2xl font-bold text-primary">∞</span>
            </div>
            <span className="text-base sm:text-xl font-semibold">Infinititech</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6 lg:gap-10 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-[15px] transition-colors relative group ${
                  pathname === link.href
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 rounded-lg hover:bg-primary/10 transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 pt-20 sm:pt-24"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-start gap-6 sm:gap-8 px-4 w-full h-full overflow-y-auto">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl sm:text-3xl font-bold transition-all duration-500 touch-manipulation ${
                  pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                }`}
                style={{
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-50px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}