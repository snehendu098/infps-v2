'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';

export default function HomepageCTA() {
  const settings = useSiteSettings();

  // Get CTA content from Sanity with fallbacks
  const ctaContent = settings.homepageCta || {};
  const heading = ctaContent.heading || 'Ready to Transform Your Business?';
  const description = ctaContent.description || "Let's discuss your project and bring your vision to life";
  const buttonText = ctaContent.buttonText || 'Get in Touch';
  const buttonLink = ctaContent.buttonLink || '/contact';

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-r from-primary/40 to-secondary/40 text-white relative z-10">
      {/* Blackish overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
          {heading}
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-95">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-primary px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl touch-manipulation"
        >
          {buttonText}
          <ArrowRight size={20} className="hidden sm:block" />
        </Link>
      </div>
    </section>
  );
}
