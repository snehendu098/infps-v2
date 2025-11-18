'use client';

import Link from 'next/link';
import { Server, GitBranch, Shield, Lock, Network, Building2, Brain, Blocks, Globe, Smartphone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Modern Data Center (MDC) Engineering',
      slug: 'mdc-engineering',
      icon: Server,
      color: '#3b82f6',
      description: 'Resilient, scalable MDC architectures that support mission-critical workloads with zero tolerance for failure.'
    },
    {
      title: 'DevOps Engineering',
      slug: 'devops-engineering',
      icon: GitBranch,
      color: '#10b981',
      description: 'Automated, fast, stable delivery pipelines that ensure teams can develop, deploy, and iterate without friction.'
    },
    {
      title: 'DevSecOps & Security Automation',
      slug: 'devsecops',
      icon: Shield,
      color: '#8b5cf6',
      description: 'Security embedded into every stage of development, testing, and deployment.'
    },
    {
      title: 'Cybersecurity & Threat Management',
      slug: 'cybersecurity',
      icon: Lock,
      color: '#ef4444',
      description: 'Defend against modern threats using a layered, intelligence-driven approach.'
    },
    {
      title: 'Network Architecture & Infrastructure',
      slug: 'network-architecture',
      icon: Network,
      color: '#f59e0b',
      description: 'Fast, reliable, and secure networks capable of supporting heavy loads and distributed operations.'
    },
    {
      title: 'Smart City & IoT Solutions',
      slug: 'smart-city-iot',
      icon: Building2,
      color: '#06b6d4',
      description: 'Connected systems that improve efficiency, operations, and citizen experience.'
    },
    {
      title: 'AI / Machine Learning Engineering',
      slug: 'ai-ml-engineering',
      icon: Brain,
      color: '#ec4899',
      description: 'Intelligent systems that automate decisions, optimize operations, and open new capabilities.'
    },
    {
      title: 'Blockchain & Distributed Systems',
      slug: 'blockchain',
      icon: Blocks,
      color: '#14b8a6',
      description: 'Secure, high-performance blockchain applications tailored to business use-cases.'
    },
    {
      title: 'Website Development',
      slug: 'website-development',
      icon: Globe,
      color: '#6366f1',
      description: 'Fast, secure, and responsive websites designed for performance, branding, and conversion.'
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      icon: Smartphone,
      color: '#a855f7',
      description: 'High-performance mobile applications engineered for usability, security, and scale.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text fade-in-up">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }}>
              Infiniti Tech Partners delivers <span className="font-semibold text-foreground">engineering-grade technology solutions</span> built for scale, security, and real-world performance. Our capabilities cover modern data center design, cloud engineering, enterprise automation, cybersecurity, advanced networking, smart city deployments, AI/ML systems, blockchain development, and full-stack digital product engineering.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Every service is designed, executed, and optimized by specialists who understand <span className="font-semibold text-foreground">complex infrastructures and high-availability environments</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group bg-background p-8 rounded-2xl border-2 border-muted hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Need a Custom Solution?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We specialize in creating tailored solutions for unique business challenges. Let's discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
