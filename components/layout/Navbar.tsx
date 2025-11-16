'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
        isScrolled ? 'bg-background/50 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
      style={{ marginLeft: '6px' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-[10000]">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center transition-all group-hover:bg-primary/20 group-hover:border-primary/50">
            <span className="text-2xl font-bold text-primary">∞</span>
          </div>
          <span className="text-xl font-semibold">Infinititech</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors relative group ${
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
          className="md:hidden z-[10000] p-2 rounded-lg hover:bg-primary/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-[9999] transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-bold transition-all duration-500 ${
                pathname === link.href ? 'text-primary' : 'text-foreground/80'
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
    </nav>
  );
}