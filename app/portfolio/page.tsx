'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Activity, Stethoscope, Building2, Server } from 'lucide-react';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Pigeon Pulse',
      subtitle: 'Intelligent Avian Health Monitoring System',
      category: 'IoT / Animal Health / AgriTech',
      slug: 'pigeon-pulse',
      icon: Activity,
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=2074',
      description: 'Smart health-monitoring ecosystem for pigeons using lightweight IoT devices to track vitals, detect early symptoms, and enable real-time care.',
      technologies: ['IoT Sensors', 'MQTT', 'AWS IoT Core', 'React Native', 'Python', 'DynamoDB'],
      impact: '40-60% faster disease detection, 70% reduction in manual monitoring',
    },
    {
      title: 'Paravet',
      subtitle: 'Rural Veterinary Telemedicine Network',
      category: 'Telemedicine / Rural Healthcare',
      slug: 'paravet',
      icon: Stethoscope,
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070',
      description: 'Digital network connecting livestock owners to para-vets and veterinary doctors, enabling remote triage and field case management.',
      technologies: ['Android', 'Node.js', 'Firebase', 'Google Maps API', 'Python'],
      impact: '50% faster case turnaround, improved documentation accuracy',
    },
    {
      title: 'SmartCity Platform',
      subtitle: 'Integrated Operations & Monitoring Suite',
      category: 'Urban Tech / IoT / Public Infrastructure',
      slug: 'smart-city',
      icon: Building2,
      color: '#f59e0b',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070',
      description: 'Unified command dashboard consolidating surveillance, traffic flow, emergency response, and environmental monitoring for city operations.',
      technologies: ['Microservices', 'Kubernetes', 'Kafka', 'AI/ML', 'React', 'PostgreSQL'],
      impact: 'Centralized siloed operations, faster emergency coordination',
    },
    {
      title: 'MDC System',
      subtitle: 'Modular Data Center Automation',
      category: 'Data Centers / IT Infrastructure',
      slug: 'mdc-system',
      icon: Server,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2134',
      description: 'Full-stack monitoring and automation platform for modular data centers, tracking power, cooling, rack health, and predictive maintenance.',
      technologies: ['Python', 'SNMP', 'InfluxDB', 'Grafana', 'Docker', 'MQTT'],
      impact: 'Reduced downtime, proactive maintenance, improved uptime',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text fade-in-up">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore our successful projects across IoT, healthcare, smart cities, and infrastructure—<span className="font-semibold text-foreground">engineered for impact</span>.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Link
                  key={index}
                  href={`/portfolio/${project.slug}`}
                  className="group rounded-3xl overflow-hidden bg-background border-2 border-muted hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10 group-hover:from-black/30 group-hover:to-black/50 transition-all" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}
                      >
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-black text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary/80 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 rounded-md bg-muted/50 text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <p className="text-sm font-semibold text-primary mb-1">Impact</p>
                      <p className="text-sm text-foreground/90">{project.impact}</p>
                    </div>

                    {/* View Case Study Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      View Case Study
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
            Want to See Your Project Here?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's collaborate and create something amazing together
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
