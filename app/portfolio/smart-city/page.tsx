import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowLeft, CheckCircle, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SmartCity Platform - Integrated Operations & Monitoring | Infiniti Tech Partners',
  description: 'Unified command center for city operations: surveillance, traffic analytics, emergency response, and environmental monitoring. Centralized control for smart cities.',
  keywords: 'smart city platform, city operations dashboard, urban IoT system, traffic management system, CCTV integration, city command center, municipal automation',
};

export default function SmartCityPage() {
  const technologies = [
    'Microservices (Node.js/Go)', 'Kubernetes', 'Docker', 'Kafka Streams',
    'CCTV/RTSP Integration', 'GIS Dashboards', 'AI/ML Anomaly Detection',
    'React', 'PostgreSQL', 'Redis'
  ];

  const deliverables = [
    'Multi-module command center platform',
    'CCTV ingestion & RTSP video wall',
    'Real-time traffic analytics',
    'Incident management workflows',
    'Pollution & environmental sensor dashboards',
    'Emergency dispatch coordination',
    'Microservices pipeline with Kafka',
    'ANPR camera integration',
    'GPS device & IoT sensor integration',
    'Weather station connectivity',
    'Protocol adapters for vendor neutrality',
  ];

  const challenges = [
    {
      title: 'Huge Data Volume from Cameras',
      description: 'Hundreds of CCTV feeds generating massive amounts of video data required high-throughput processing infrastructure.',
      icon: AlertCircle,
    },
    {
      title: 'Latency-Sensitive Analytics',
      description: 'Real-time traffic and incident detection could not tolerate delays - milliseconds mattered for emergency response.',
      icon: AlertCircle,
    },
    {
      title: 'Multiple Mismatched Vendors',
      description: 'Government departments used different vendors with incompatible data formats and protocols.',
      icon: AlertCircle,
    },
    {
      title: '24/7 Reliability Requirement',
      description: 'City operations demanded zero downtime—any failure could compromise public safety.',
      icon: AlertCircle,
    },
  ];

  const solutions = [
    {
      title: 'GPU-Accelerated Processing',
      description: 'Deployed GPU clusters for real-time video analytics, enabling parallel processing of multiple camera feeds simultaneously.',
      icon: Lightbulb,
    },
    {
      title: 'Kafka Buffering',
      description: 'Implemented Kafka message streams to buffer and stabilize massive data floods from sensors and cameras.',
      icon: Lightbulb,
    },
    {
      title: 'Protocol Abstraction Layer',
      description: 'Created universal adapters that normalized data from different vendors into a standard format.',
      icon: Lightbulb,
    },
    {
      title: 'Redundant Failover Clusters',
      description: 'Built active-active failover architecture with automatic health monitoring and seamless switchover.',
      icon: Lightbulb,
    },
  ];

  const results = [
    'Significantly reduced incident detection time',
    'Improved traffic flow reporting accuracy',
    'Faster emergency coordination and response',
    'Centralized previously siloed departmental operations',
    'Single pane of glass for city-wide monitoring',
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
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                >
                  <Building2 size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Urban Tech / IoT / Public Infrastructure
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                SmartCity Platform
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Integrated Operations & Monitoring Suite
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unified command dashboard consolidating surveillance, traffic flow, emergency response, and environmental monitoring—enabling real-time decision-making for city operations.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xl font-bold text-foreground">10-12 months</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                  <p className="text-xl font-bold text-foreground">8-12 engineers</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070"
                alt="SmartCity Platform"
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
                Before SmartCity, every department operated in isolation. <span className="font-semibold text-foreground">Traffic control had their own system, surveillance had another, and emergency services used yet another</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data was fragmented, response coordination was slow, and real-time decision-making was nearly impossible. The city needed a unified command center.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Create a <span className="font-semibold text-foreground">single pane of glass for city operations</span> that would consolidate all monitoring, analytics, and response systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Enable real-time decision-making through analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Enhance public safety and traffic efficiency</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Improve emergency response times</span>
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
              "The client praised the system for centralizing what used to be chaotic siloed operations into a unified, intelligent command center."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Need a Smart City Solution?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We build integrated command centers for cities, municipalities, and large-scale infrastructure operations.
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
