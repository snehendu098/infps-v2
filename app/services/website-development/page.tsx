import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Development Services | High-Performance Corporate Websites',
  description: 'Custom websites engineered for speed, SEO, security & conversion. Corporate sites, e-commerce platforms, UX design, and full-stack web development.',
  keywords: 'website development USA, corporate web design, SEO optimized website, enterprise website development, e-commerce website builders, custom CMS development',
};

export default function WebsiteDevelopmentPage() {
  const deliverables = [
    'Corporate websites & landing pages',
    'High-speed, SEO-ready builds',
    'Custom CMS development',
    'E-commerce solutions',
    'Brand-aligned UI/UX design',
    'Security hardening & optimization',
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
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
            >
              <Globe size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              Website Development
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              A website is often your business's first handshake - so it must be fast, secure, and engineered with purpose. We build <span className="font-semibold text-foreground">high-performance websites</span> optimized for branding, UX, and SEO.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We build fast, secure, and responsive websites designed for performance, branding, and conversion.
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
                Websites That Perform
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We create websites that do not just look good - they perform. From corporate sites to e-commerce platforms, every website is engineered for speed, security, and conversion.
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
                We create websites that do not just look good - <span className="gradient-text">they perform</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's create a high-performance website that drives results for your business.
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
