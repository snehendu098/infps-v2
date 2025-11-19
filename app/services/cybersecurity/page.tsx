import { Metadata } from 'next';
import Link from 'next/link';
import { Lock, CheckCircle, ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybersecurity & Threat Management | Zero Trust, SOC & Enterprise Protection',
  description: 'Enterprise cybersecurity services including threat monitoring, SOC setup, Zero Trust architecture, cloud security, identity management, and ransomware defense for resilient operations.',
  keywords: 'cybersecurity services USA, enterprise threat management, Zero Trust cybersecurity, SOC and SIEM solutions, ransomware protection, cloud security experts, cybersecurity consulting firm',
};

export default function CybersecurityPage() {
  const services = [
    'Security Audits & Vulnerability Assessments',
    'SOC Setup & Threat Monitoring (24/7)',
    'Network, Cloud & Endpoint Security',
    'Zero Trust Security Framework',
    'Identity & Access Management (IAM)',
    'Ransomware Defense & Recovery',
    'Incident Response & Digital Forensics',
  ];

  const businessBenefits = [
    'Prevents financial losses caused by breaches, downtime, and ransomware',
    'Strengthens customer confidence, improving retention and brand reputation',
    'Ensures business continuity, even during attempted attacks',
    'Enables enterprise partnerships, especially where compliance is required',
    'Reduces long-term cost, by automating repetitive security tasks',
    'Protects intellectual property, safeguarding future product lines',
    'Supports secure scaling, allowing new systems, apps, and users to onboard safely',
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
              style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
            >
              <Lock size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              Cybersecurity & Threat Management
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Cybersecurity is no longer a technical add-on - it is a core business function that protects revenue, customer trust, operational continuity, and long-term reputation. Modern companies operate in an environment where threats evolve daily: ransomware, data theft, phishing attacks, supply-chain vulnerabilities, insider risks, cloud misconfigurations, and AI-driven exploitation.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Infiniti Tech Partners builds <span className="font-semibold text-foreground">cybersecurity frameworks</span> that help organizations operate fearlessly. Our approach combines advanced threat intelligence, real-time monitoring, Zero Trust methodology, automated defense systems, and incident response capabilities engineered for resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity Matters */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            Why Cybersecurity is a Direct Business Priority
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-12">
            A strong cybersecurity program does more than protect servers - it protects revenue streams and accelerates growth.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-muted/30 p-6 rounded-xl border-2 border-primary/20">
                <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold text-foreground mt-12 text-center">
            Cybersecurity is not a cost center - it is a business safeguard that keeps operations stable and profitable.
          </p>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            Our Cybersecurity Framework
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-16">
            We take a layered approach, securing every part of your environment: endpoints, users, networks, cloud resources, applications, APIs, IoT devices, and data flows. Our systems detect threats early, isolate them quickly, and neutralize them before they disrupt business operations.
          </p>

          <div className="bg-background p-8 md:p-12 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">What We Deliver</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{service}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Performance Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            How Our Cybersecurity Solutions Strengthen Business Performance
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 bg-muted/30 p-8 rounded-xl border-2 border-primary/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Less downtime</span> → more transactions, more productivity</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Better compliance</span> → access to bigger markets (healthcare, finance, government)</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Faster detection</span> → less damage and lower recovery cost</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Automated protection</span> → smaller security teams needed</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Secure infrastructure</span> → safe cloud migration & digital transformation</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="text-foreground"><span className="font-semibold">Risk prevention</span> → stronger investor and customer confidence</p>
            </div>
          </div>
          <p className="text-xl font-semibold text-foreground mt-8 text-center">
            Your environment becomes a fortress - not a liability.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Our Cybersecurity Philosophy</h3>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
              We believe business should move quickly - and securely.
            </p>
            <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
              Cybersecurity should never slow growth; it should <span className="gradient-text">enable it</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's build a cybersecurity framework that protects your business while enabling growth and innovation.
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
