import { Metadata } from 'next';
import Link from 'next/link';
import { Network, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Network Architecture Solutions | SD-WAN, Firewall & Enterprise Networking',
  description: 'Enterprise-grade network design, SD-WAN architecture, firewall security, multi-site connectivity, load balancing & optimized network infrastructure.',
  keywords: 'network architecture services, SD-WAN solutions, enterprise networking USA, firewall architecture, corporate network design, network optimization, secure infrastructure',
};

export default function NetworkArchitecturePage() {
  const deliverables = [
    'Enterprise network design & restructuring',
    'SD-WAN solutions',
    'Firewall & perimeter security',
    'Multi-site connectivity',
    'Wireless network design',
    'Load balancing & traffic optimization',
    'Network health monitoring',
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
              Your network is the backbone of your operations. We engineer <span className="font-semibold text-foreground">high-performance networks</span> capable of supporting enterprise workloads, distributed operations, and real-time applications.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our network solutions emphasize speed, stability, redundancy, and airtight security.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Fast, Secure, Scalable Networks
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern businesses depend on networks that are fast, reliable, and secure. We design networks that stay stable under pressure and scale without disruption.
              </p>
            </div>

            {/* What We Deliver */}
            <div className="bg-muted/30 p-8 rounded-2xl border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">What We Deliver</h3>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                We design networks that <span className="gradient-text">stay fast, stay secure, and scale without friction</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Optimize Your Network?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's build a network infrastructure that supports your growth and operations.
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
