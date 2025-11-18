import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, ArrowLeft, CheckCircle, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Paravet - Rural Veterinary Telemedicine Network | Infiniti Tech Partners',
  description: 'Digital telemedicine platform connecting livestock owners to para-vets. 50% faster case turnaround, improved documentation in rural areas.',
  keywords: 'veterinary telemedicine, rural healthcare app, livestock health platform, para-vet network, Android veterinary app, rural tech solution',
};

export default function ParavetPage() {
  const technologies = [
    'Android (Java/Kotlin)', 'Node.js', 'Python', 'Firebase',
    'AWS', 'Google Maps API', 'SMS Gateway'
  ];

  const deliverables = [
    'Mobile app with registration & vet discovery',
    'Case logging & documentation system',
    'GPS-based routing & location services',
    'In-field digital form collection',
    'Medicine recommendation engine',
    'Digital treatment receipts',
    'Vet performance tracking backend',
    'SMS/WhatsApp notification integration',
    'Offline-first architecture with smart syncing',
  ];

  const challenges = [
    {
      title: 'Low Network Bandwidth',
      description: 'Rural areas had extremely limited connectivity, making traditional online-only apps unusable.',
      icon: AlertCircle,
    },
    {
      title: 'Tech-Unfamiliar User Base',
      description: 'Livestock owners and field vets had minimal smartphone experience, requiring ultra-simple interfaces.',
      icon: AlertCircle,
    },
    {
      title: 'Inconsistent Documentation',
      description: 'Vets documented cases differently, making data aggregation and analysis nearly impossible.',
      icon: AlertCircle,
    },
    {
      title: 'Language Barriers',
      description: 'Multiple local languages needed to be supported for rural adoption across different regions.',
      icon: AlertCircle,
    },
  ];

  const solutions = [
    {
      title: 'Offline-First Architecture',
      description: 'Built smart local storage with intelligent background syncing when connectivity returned, ensuring zero disruption.',
      icon: Lightbulb,
    },
    {
      title: 'Icon-Based Workflows',
      description: 'Created simplified UI with large icons, minimal text, and guided step-by-step flows for ease of use.',
      icon: Lightbulb,
    },
    {
      title: 'Standardized Digital Forms',
      description: 'Implemented structured digital forms with pre-filled options and mandatory fields to ensure consistency.',
      icon: Lightbulb,
    },
    {
      title: 'Multilingual UI Layers',
      description: 'Added comprehensive language support with region-specific translations and voice guidance options.',
      icon: Lightbulb,
    },
  ];

  const results = [
    'Cut case turnaround time by almost 50%',
    'Increased vet assignment efficiency in remote villages',
    'Drastically improved documentation accuracy',
    'Enabled seamless audit trails for health authorities',
    'Smoother operations and resource allocation',
  ];

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
                >
                  <Stethoscope size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Telemedicine / Rural Healthcare
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                Paravet
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Rural Veterinary Telemedicine Network
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Digital network connecting livestock owners to trained para-vets and veterinary doctors, enabling remote triage, location-aware case assignment, and transparent field-to-cloud healthcare delivery.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xl font-bold text-foreground">4-6 months</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                  <p className="text-xl font-bold text-foreground">5-7 engineers</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070"
                alt="Paravet Project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center gradient-text">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-muted/50 text-foreground font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Paravet aimed to bridge the rural veterinary gap by connecting livestock owners with trained para-vets. However, the client faced a major issue: <span className="font-semibold text-foreground">no unified system existed</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bookings, case logs, and field reports were scattered across WhatsApp groups and manual notebooks. Service delivery was chaotic, tracking was impossible, and accountability was minimal.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission was to <span className="font-semibold text-foreground">digitize the field-vet ecosystem</span> and create a structured platform for case tracking, vet assignment, and service transparency.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Enable remote triage and consultation</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Location-aware vet assignment</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Transparent pricing and service records</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Improve service availability in rural areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Delivered */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            What We Delivered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-primary/10">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Pain Points & Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div key={index} className="p-6 bg-background rounded-2xl border-2 border-red-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{challenge.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            How We Overcame Them
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="p-6 bg-muted/20 rounded-2xl border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Results & Impact
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-10 rounded-3xl border-2 border-primary/30 mb-8">
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                    <p className="text-lg text-foreground font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-xl text-muted-foreground italic">
              "Client feedback highlighted smoother operations, easier audit trails, and a dramatic improvement in service delivery to remote areas."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Need a Rural Healthcare Platform?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We build telemedicine and field service platforms designed for challenging environments with limited connectivity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Let's Build Together
          </Link>
        </div>
      </section>
    </div>
  );
}
