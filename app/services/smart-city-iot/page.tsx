import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart City Solutions | IoT Architecture & Automation – Infiniti Tech Partners',
  description: 'Build connected, intelligent ecosystems with Smart City and IoT solutions. Surveillance, traffic systems, energy management, IoT sensors & real-time analytics.',
  keywords: 'smart city solutions USA, IoT engineering company, city automation services, smart surveillance systems, IoT platform development, smart infrastructure services',
};

export default function SmartCityIoTPage() {
  const deliverables = [
    'IoT architecture & sensor deployment',
    'Smart surveillance systems',
    'Traffic & mobility automation',
    'Energy management platforms',
    'Environmental monitoring',
    'Real-time data dashboards',
    'Secure smart-city backbone infrastructure',
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
              style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}
            >
              <Building2 size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              Smart City & IoT Solutions
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Cities are becoming intelligent ecosystems - and we engineer the technology behind them. Our <span className="font-semibold text-foreground">Smart City and IoT solutions</span> connect devices, data, systems, and analytics to improve efficiency, safety, and performance.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We help governments and enterprises build connected systems that improve efficiency, operations, and citizen experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
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

            {/* Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Connected Intelligent Ecosystems
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We design smart ecosystems that are scalable, secure, and built for public impact. From IoT sensors to real-time analytics, we create the infrastructure for the future of urban living.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                We build the <span className="gradient-text">connected future of urban living</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Build Your Smart City?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's create connected systems that transform cities and improve quality of life.
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
