import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Server, ArrowLeft, CheckCircle, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MDC System - Modular Data Center Automation | Infiniti Tech Partners',
  description: 'Full-stack data center monitoring platform. Power, cooling, rack health tracking, predictive maintenance. Reduced downtime, proactive alerts.',
  keywords: 'data center monitoring, MDC automation, SNMP monitoring, data center management, InfluxDB monitoring, Grafana dashboards, DCIM software',
};

export default function MDCSystemPage() {
  const technologies = [
    'Python', 'Node.js', 'SNMP', 'Modbus/TCP', 'InfluxDB',
    'Grafana', 'Docker', 'MQTT', 'Power/Energy APIs'
  ];

  const deliverables = [
    'Hardware integration layer (SNMP/Modbus)',
    'Backend for time-series data processing',
    'Real-time monitoring dashboards',
    'Threshold-based alerting system',
    'Automated alert rules engine',
    'Maintenance log management',
    'Role-based access control',
    'Energy meter integration',
    'UPS system monitoring',
    'PAC (Precision Air Conditioning) unit integration',
    'Physical security sensor connectivity',
  ];

  const challenges = [
    {
      title: 'Protocol Inconsistency',
      description: 'Different hardware vendors used incompatible protocols (SNMP, Modbus, proprietary APIs), making unified monitoring difficult.',
      icon: AlertCircle,
    },
    {
      title: 'Time-Series Load Spikes',
      description: 'Thousands of sensors sending data simultaneously created massive ingestion spikes that overwhelmed traditional databases.',
      icon: AlertCircle,
    },
    {
      title: 'Corrupted Edge Packets',
      description: 'Edge devices occasionally sent malformed or incomplete data packets due to power fluctuations or network issues.',
      icon: AlertCircle,
    },
    {
      title: 'Mission-Critical Sensitivity',
      description: 'Any monitoring system failure could blind operators to critical infrastructure issues affecting uptime.',
      icon: AlertCircle,
    },
  ];

  const solutions = [
    {
      title: 'Protocol Abstraction Layer',
      description: 'Built a universal adapter framework that normalized SNMP, Modbus, and custom protocols into a standard data format.',
      icon: Lightbulb,
    },
    {
      title: 'InfluxDB + Buffered Collectors',
      description: 'Implemented InfluxDB time-series database with buffered data collectors to handle massive ingestion spikes gracefully.',
      icon: Lightbulb,
    },
    {
      title: 'Packet Sanitization & Retry Logic',
      description: 'Created intelligent packet validation with automatic retry mechanisms and error logging for corrupted data.',
      icon: Lightbulb,
    },
    {
      title: 'Redundancy & Health Heartbeats',
      description: 'Deployed redundant monitoring nodes with active health-check heartbeats and automatic failover for safety.',
      icon: Lightbulb,
    },
  ];

  const results = [
    'Boosted system visibility across all racks and equipment',
    'Reduced downtime through proactive alerting',
    'Enabled predictive maintenance scheduling',
    'Scaled operations without proportional manpower increase',
    'Became a core operational asset for the client',
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
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}
                >
                  <Server size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Data Centers / IT Infrastructure
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                MDC System
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Modular Data Center Automation & Monitoring
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Full-stack monitoring and automation platform for modular data centers—tracking power, cooling, rack health, security access, and predictive maintenance with real-time visibility.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xl font-bold text-foreground">8-10 months</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                  <p className="text-xl font-bold text-foreground">6-8 engineers</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2134"
                alt="MDC System Project"
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
                The client's modular data center operations were <span className="font-semibold text-foreground">fragmented, manual, and prone to delayed fault detection</span>. Each system—power, cooling, security—had its own monitoring tool.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Without unified visibility, issues often went unnoticed until they became critical. There was no predictive maintenance, no centralized alerting, and too much manual intervention.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Unify all sensors, equipment controllers, and monitoring interfaces under <span className="font-semibold text-foreground">a single dashboard</span> with intelligent automation.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Improve uptime through proactive monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Enable automated alerting and response</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Reduce manpower dependency</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Enable predictive failure detection</span>
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
              "The MDC System became a core operational asset, enabling the client to scale their data center operations without scaling manpower proportionally."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Need Data Center Automation?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We build comprehensive monitoring and automation platforms for data centers, server rooms, and critical infrastructure.
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
