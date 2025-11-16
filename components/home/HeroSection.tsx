'use client';

import { ChevronDown, ArrowRight } from 'lucide-react';
import ParticleLogoCanvas from '@/components/effects/ParticleLogo';
import FallingText from '@/components/effects/FallingText';
import { COMPANY_INFO } from '@/lib/constants';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Grid Background Pattern Only */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center py-8 md:py-0">
        {/* Particle Logo - Centered - Responsive */}
        <div
          className="flex justify-center mb-6 sm:mb-8 md:mb-6 lg:mb-8 fade-in-up"
          style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'clamp(200px, 35vh, 640px)', // Responsive height: 200px min, 35% viewport height, 640px max
            margin: '0 auto'
          }}
        >
          <ParticleLogoCanvas />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 md:mb-6 slide-in-left px-2">
          <span className="gradient-text">Transform, Innovate</span>
          <br />
          <span className="text-foreground">& Scale Your Business</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 md:mb-12 max-w-2xl mx-auto leading-relaxed slide-in-right px-4">
          Leading provider of Data Center Management, Custom Software Development,
          Smart City Solutions, and comprehensive Digital Services
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center items-center mb-16 md:mb-16 scale-in px-4">
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/services"
            className="group relative overflow-hidden glass text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 border border-primary/30 w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
}