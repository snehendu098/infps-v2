'use client';

import React from 'react';
import {
  CMSSection,
  HeroSection,
  TextSection,
  FeaturesSection,
  ServicesSection,
  CTASection,
  TestimonialsSection,
  StatsSection,
  FAQSection,
  TeamSection,
  PricingSection,
  SpacerSection,
} from '@/lib/cms/section-types';
import Link from 'next/link';
import Image from 'next/image';

// Main Section Renderer
export function SectionRenderer({ section }: { section: CMSSection & { id: string } }) {
  switch (section.type) {
    case 'hero':
      return <HeroSectionRenderer section={section} />;
    case 'text':
      return <TextSectionRenderer section={section} />;
    case 'features':
      return <FeaturesSectionRenderer section={section} />;
    case 'services':
      return <ServicesSectionRenderer section={section} />;
    case 'cta':
      return <CTASectionRenderer section={section} />;
    case 'testimonials':
      return <TestimonialsSectionRenderer section={section} />;
    case 'stats':
      return <StatsSectionRenderer section={section} />;
    case 'faq':
      return <FAQSectionRenderer section={section} />;
    case 'team':
      return <TeamSectionRenderer section={section} />;
    case 'pricing':
      return <PricingSectionRenderer section={section} />;
    case 'spacer':
      return <SpacerSectionRenderer section={section} />;
    default:
      return null;
  }
}

// Hero Section
function HeroSectionRenderer({ section }: { section: HeroSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {section.backgroundType === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20 -z-10" />
      )}
      {section.backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={section.backgroundImage.src}
            alt={section.backgroundImage.alt}
            fill
            className="object-cover opacity-20"
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto text-center">
        {section.subheading && (
          <p className="text-primary text-lg mb-4 uppercase tracking-wider font-semibold">
            {section.subheading}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          {section.heading}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {section.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {section.buttons.map((button, i) => (
            <Link
              key={i}
              href={button.link}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                button.style === 'primary'
                  ? 'bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white hover:shadow-lg'
                  : button.style === 'secondary'
                  ? 'bg-muted text-foreground hover:bg-muted/80'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Text Section
function TextSectionRenderer({ section }: { section: TextSection }) {
  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: section.backgroundColor,
        color: section.textColor,
      }}
    >
      <div className={`max-w-4xl mx-auto text-${section.alignment}`}>
        {section.heading && (
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{section.heading}</h2>
        )}
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
      </div>
    </section>
  );
}

// Features Section
function FeaturesSectionRenderer({ section }: { section: FeaturesSection }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="text-xl text-muted-foreground">{section.subheading}</p>
          )}
        </div>

        <div
          className={`grid gap-8 ${
            section.layout === 'grid'
              ? `md:grid-cols-${section.columns}`
              : 'grid-cols-1'
          }`}
        >
          {section.features.map((feature, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSectionRenderer({ section }: { section: ServicesSection }) {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="text-xl text-muted-foreground">{section.subheading}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.services.map((service, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-xl border border-white/10 hover:shadow-xl transition-all"
            >
              {service.image ? (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="text-5xl mb-4">{service.icon}</div>
              )}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              {service.link && (
                <Link
                  href={service.link}
                  className="text-primary hover:underline font-semibold"
                >
                  Learn More →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASectionRenderer({ section }: { section: CTASection }) {
  return (
    <section
      className="py-20 px-4 relative"
      style={{
        backgroundColor: section.backgroundColor || '#FF6B35',
        color: section.textColor || '#FFFFFF',
      }}
    >
      {section.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={section.backgroundImage.src}
            alt={section.backgroundImage.alt}
            fill
            className="object-cover opacity-20"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{section.heading}</h2>
        <p className="text-xl mb-8">{section.description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {section.buttons.map((button, i) => (
            <Link
              key={i}
              href={button.link}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                button.style === 'primary'
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'border-2 border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSectionRenderer({ section }: { section: TestimonialsSection }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          {section.heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl border border-white/10"
            >
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
              )}
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSectionRenderer({ section }: { section: StatsSection }) {
  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: section.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto">
        {section.heading && (
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            {section.heading}
          </h2>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.prefix}
                {stat.number}
                {stat.suffix}
              </div>
              <p className="text-xl text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSectionRenderer({ section }: { section: FAQSection }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          {section.heading}
        </h2>

        <div className="space-y-4">
          {section.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/20 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 border-t border-white/10 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSectionRenderer({ section }: { section: TeamSection }) {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="text-xl text-muted-foreground">{section.subheading}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.members.map((member, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl border border-white/10 text-center"
            >
              {member.image && (
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image.src}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              {member.bio && <p className="text-muted-foreground mb-4">{member.bio}</p>}
              {member.social && (
                <div className="flex gap-3 justify-center">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-primary hover:underline">
                      LinkedIn
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-primary hover:underline">
                      Twitter
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSectionRenderer({ section }: { section: PricingSection }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="text-xl text-muted-foreground">{section.subheading}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {section.plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-card p-8 rounded-xl border-2 ${
                plan.highlighted
                  ? 'border-primary shadow-xl scale-105'
                  : 'border-white/10'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.buttonLink}
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Spacer Section
function SpacerSectionRenderer({ section }: { section: SpacerSection }) {
  return (
    <div
      style={{
        height: `${section.height}px`,
        backgroundColor: section.backgroundColor,
      }}
    />
  );
}
