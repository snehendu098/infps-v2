'use client';

import { Target, Eye, Heart, Shield, Zap, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSiteSettings } from '@/lib/context/SiteSettingsContext';

// Icon mapping for dynamic icons from Sanity
const iconMap = {
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Star,
};

// Default values for fallback
const defaultValues = [
  {
    icon: 'Target',
    title: 'Our Mission',
    description: 'Empower businesses with cutting-edge technology solutions that drive growth and digital transformation.',
  },
  {
    icon: 'Eye',
    title: 'Our Vision',
    description: 'Be the most trusted technology partner globally, known for excellence and innovation.',
  },
  {
    icon: 'Heart',
    title: 'Our Values',
    description: 'Integrity, Innovation, Excellence, and Customer-Centricity guide everything we do.',
  },
];

const defaultStats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '4', label: 'Team Members' },
  { number: '6', label: 'Services Offered' },
];

export default function AboutPreview() {
  const settings = useSiteSettings();

  // Get about preview content from Sanity with fallbacks
  const aboutContent = settings.aboutPreview || {};
  const heading = aboutContent.heading || 'About Infinititech Partners';
  const description = aboutContent.description || 'Founded with a vision to bridge the gap between innovative technology and real-world business needs, we combine technical expertise with business acumen.';
  const values = aboutContent.values && aboutContent.values.length > 0 ? aboutContent.values : defaultValues;
  const stats = aboutContent.stats && aboutContent.stats.length > 0 ? aboutContent.stats : defaultStats;

  return (
    <section className="py-32 bg-muted/20 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, idx) => {
            const iconName = value.icon as keyof typeof iconMap;
            const Icon = iconMap[iconName] || Target;
            return (
              <div
                key={idx}
                className="bg-muted/30 p-8 rounded-3xl border-2 border-primary/20 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
          >
            Learn More About Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
