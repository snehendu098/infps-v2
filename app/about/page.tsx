'use client';

import Image from 'next/image';
import { Code, Shield, Zap, Users, CheckCircle, Award } from 'lucide-react';

export default function AboutPage() {
  const services = [
    'DevOps & DevSecOps engineering',
    'Cybersecurity operations and security automation',
    'Advanced networking & infrastructure architecture',
    'Smart city systems and IoT-driven deployments',
    'AI/ML-powered automation and intelligent decisioning',
    'Blockchain development & secure distributed systems',
    'High-performance websites and mobile applications'
  ];

  const operatingPrinciples = [
    'An engineering-heavy delivery model',
    'Strong security discipline',
    'Rapid deployment frameworks',
    'Vendor-agnostic solutions',
    'Rigorous testing and optimization cycles'
  ];

  const clientReasons = [
    'Deep technical capability across modern, emerging, and enterprise tech',
    'Architecture frameworks built for security, automation, and uptime',
    'Ability to take end-to-end ownership — from design to deployment to maintenance',
    'Experience across cloud providers, complex networks, and multi-vendor infrastructure',
    'A team that responds fast, executes cleanly, and understands real operational constraints'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-background z-0" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text fade-in-up">
              About Infiniti Tech Partners
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/90 max-w-4xl mx-auto mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
              A Founder Who Built, Broke, and Rebuilt Technology Until It Made Sense
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
              alt="Technology and Innovation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
              Infiniti Tech Partners was founded by <span className="text-primary font-semibold">Sudipto</span>, a technologist who has spent his career inside the engine rooms of enterprise systems — building architectures, securing environments, scaling platforms, and leading high-impact technology transformations. Over the years, he worked across modernization, cloud engineering, cybersecurity, networking, and automation, eventually developing a reputation for solving problems that other teams labeled <span className="text-primary font-semibold">"too complex."</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: '0.4s' }}>
              Infiniti Tech Partners grew from that mindset: <span className="font-semibold text-foreground">engineering-first, execution-driven</span>, and built for organizations that expect reliability, speed, and long-term scalability.
            </p>
          </div>
        </div>
      </section>

      {/* How the Company Evolved */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
                alt="Engineering Team at Work"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 gradient-text">
                How the Company Evolved
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The company started as a specialized engineering unit focused on modern data centers (MDC), cloud integrations, and automation frameworks. As businesses demanded deeper resilience and smarter systems, we expanded into:
              </p>

              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/90">{service}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Infiniti Tech Partners operates as a <span className="font-semibold text-foreground">full-stack technology engineering firm</span>, supporting clients who require dependable, scalable, and secure solutions — from startups building their first core architecture to enterprises upgrading legacy systems into modern ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 gradient-text">
                What Drives Us
              </h2>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl mb-8 border border-primary/20">
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed italic">
                  "Build systems that last, secure them by design, automate everything possible, and keep scaling forward."
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our teams operate with:
              </p>

              <div className="grid grid-cols-1 gap-4">
                {operatingPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-center gap-3 bg-muted/20 p-4 rounded-xl border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{principle}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-8">
                This ensures our clients get solutions that are <span className="font-semibold text-foreground">resilient, efficient, and ready for the next decade</span> — not just the next quarter.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Work With Us */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
              Why Clients Work With Us
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not because of geography. Not because of cost.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Because we deliver technology that performs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clientReasons.map((reason, index) => (
              <div key={index} className="bg-background p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-start gap-3">
                  <Award className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground/90 leading-relaxed">{reason}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
              alt="Technology Performance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="glass p-10 rounded-3xl border-2 border-primary/30 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                To engineer the systems that power the next generation of digital infrastructure—<span className="font-semibold">secure, automated, intelligent, and built for scale.</span>
              </p>
            </div>

            {/* Commitment */}
            <div className="glass p-10 rounded-3xl border-2 border-secondary/30 hover:border-secondary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-secondary">Our Commitment</h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                We don't sell shortcuts.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                We deliver <span className="font-semibold">systems engineered with precision, built to perform, and designed to evolve</span> as your business grows.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                Infiniti Tech Partners exists for companies that want their technology to be an <span className="gradient-text">advantage</span>, not a liability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
