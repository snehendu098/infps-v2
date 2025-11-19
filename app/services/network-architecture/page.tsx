import { Metadata } from 'next';
import Link from 'next/link';
import { Network, CheckCircle, ArrowLeft, TrendingUp, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Network Architecture Solutions | SD-WAN, Firewall & Enterprise Networking',
  description: 'Enterprise-grade network architecture, SD-WAN, firewall security, multi-site connectivity, load balancing & optimized network infrastructure for scalable and secure operations.',
  keywords: 'network architecture services, SD-WAN company USA, firewall engineering, enterprise network design, network optimization services, infrastructure engineering, secure corporate networks',
};

export default function NetworkArchitecturePage() {
  const services = [
    'Enterprise network design and restructuring',
    'SD-WAN architecture and implementation',
    'Firewall, IDS/IPS & perimeter protection',
    'Multi-site connectivity & VPN frameworks',
    'Wireless network engineering',
    'Load balancing & traffic optimization',
    'Network monitoring & health analytics',
  ];

  const businessImpact = [
    'Reduced downtime = more transactions, more productivity',
    'Optimized routing = lower bandwidth and cloud cost',
    'Better security = fewer breaches, lower risk',
    'Faster internal tools = faster teams → faster delivery',
    'Scalable design = future expansion without expensive rebuilds',
  ];

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
            >
              <Network size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              Network Architecture & Infrastructure
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              A modern business runs on its network. Every application, every device, every cloud dependency, every remote employee - all rely on a stable, fast, and secure network backbone. When the network is slow, unstable, or poorly designed, the entire business slows down with it. Sales drop, operations lag, communication breaks, and productivity takes a hit.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Infiniti Tech Partners, we engineer <span className="font-semibold text-foreground">network architectures built for scale, resilience, and high performance</span>. We design enterprise networks that stay secure under pressure, handle large volumes of traffic, and seamlessly support remote work, cloud services, and multi-location operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Network Architecture Matters */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            Why Network Architecture Affects Business Revenue
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-12">
            A high-performance network directly fuels business efficiency and profitability.
          </p>

          <div className="max-w-4xl mx-auto space-y-4 bg-muted/30 p-8 rounded-xl border-2 border-primary/20">
            <div className="flex items-start gap-3">
              <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Fast networks</span> → fast operations → faster customer service</p>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Reduced latency</span> → smoother digital experiences → higher conversions</p>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Strong network security</span> → protects customer data and brand integrity</p>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Stable connectivity</span> → fewer outages → more productivity</p>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Scalable architecture</span> → supports growth without major reinvestment</p>
            </div>
          </div>

          <p className="text-xl font-semibold text-foreground mt-8 text-center">
            A poorly designed network silently destroys revenue. A well-designed network silently increases it.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            Network Services We Deliver
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-16">
            We focus on intelligent routing, high availability, secure perimeter defenses, and cloud-aware connectivity. Whether you are operating from one office or multiple global locations, we build your network to maintain speed, stability, and airtight security.
          </p>

          <div className="bg-background p-8 md:p-12 rounded-2xl border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90 leading-relaxed">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profitability Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            How Network Engineering Improves Profitability
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 bg-muted/30 p-8 rounded-xl border-2 border-primary/20">
            {businessImpact.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-semibold text-foreground mt-8 text-center">
            A strong network multiplies the power of every other system in your stack.
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30 text-center">
            <p className="text-2xl md:text-4xl font-bold text-foreground leading-relaxed">
              We engineer networks that <span className="gradient-text">power business growth</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Optimize Your Network?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's build a fast, secure, and scalable network infrastructure for your organization.
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
