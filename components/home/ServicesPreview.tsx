'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Service } from '@/lib/sanity/types';

// Fallback data if Sanity fetch fails
const FALLBACK_SERVICES = [
  { _id: '1', title: 'Data Center Management', shortDescription: 'Enterprise-grade data center solutions', icon: 'Server', color: '#FF9966' },
  { _id: '2', title: 'Custom MDC Software', shortDescription: 'Tailored modular data center software', icon: 'Code', color: '#a855f7' },
  { _id: '3', title: 'Smart City Solutions', shortDescription: 'IoT-powered urban infrastructure', icon: 'Globe', color: '#14b8a6' },
  { _id: '4', title: 'CRM, ERP & POS', shortDescription: 'Complete enterprise software suite', icon: 'TrendingUp', color: '#f59e0b' },
  { _id: '5', title: 'Web & Mobile Development', shortDescription: 'Cross-platform digital experiences', icon: 'Smartphone', color: '#ec4899' },
  { _id: '6', title: 'Digital Marketing', shortDescription: 'Data-driven growth strategies', icon: 'Zap', color: '#8b5cf6' },
];

interface ServicesPreviewProps {
  services?: Service[];
}

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  const displayServices = services && services.length > 0 ? services : FALLBACK_SERVICES;
  const Icons = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;

  return (
    <section className="py-32 bg-muted/30 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayServices.map((service, idx) => {
            const iconName = service.icon || 'Settings';
            const Icon = Icons[iconName] || Icons.Settings;

            return (
              <div
                key={service._id || idx}
                className="bg-background p-8 rounded-3xl border-2 transition-all hover:border-opacity-100 card-hover liquid-float"
                style={{
                  borderColor: `${service.color || '#FF9966'}30`,
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${service.color || '#FF9966'}, hsl(var(--secondary)))`,
                  }}
                >
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>

                {/* Short Description */}
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-primary hover:text-white hover:scale-105"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
