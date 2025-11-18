import { Metadata } from 'next';
import Link from 'next/link';
import { Blocks, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blockchain Development | Secure Distributed Systems',
  description: 'Enterprise blockchain services: smart contracts, private blockchain setup, dApp development, tokenization, and secure distributed architecture.',
  keywords: 'blockchain development services, enterprise blockchain, smart contract developers, dApp development company, distributed systems engineering, private blockchain setup',
};

export default function BlockchainPage() {
  const deliverables = [
    'Smart contract development',
    'Private blockchain networks',
    'dApp architecture',
    'Tokenization frameworks',
    'Identity & integrity systems',
    'Blockchain + legacy integration',
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
              style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}
            >
              <Blocks size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              Blockchain & Distributed Systems
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Blockchain is not hype - it is infrastructure. We engineer <span className="font-semibold text-foreground">secure, scalable blockchain and distributed systems</span> for enterprises that need transparent, tamper-proof, and high-performance digital solutions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We develop secure, high-performance blockchain applications tailored to business use-cases - not hype.
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
                Business-Driven Blockchain
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on security, scalability, and business-driven blockchain outcomes. From smart contracts to private networks, we build blockchain solutions that deliver real business value.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                Our blockchain engineering focuses on <span className="gradient-text">security, scalability, and real business value</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's create secure, scalable blockchain solutions for your enterprise.
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
