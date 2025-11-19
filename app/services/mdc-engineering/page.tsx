import { Metadata } from 'next';
import Link from 'next/link';
import { Server, CheckCircle, ArrowLeft, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modern Data Center Engineering | Scalable MDC Solutions – Infiniti Tech Partners',
  description: 'Modern data center engineering designed for high availability, hybrid cloud readiness, security, and scalability. MDC modernization, virtualization, automation & enterprise infrastructure.',
  keywords: 'modern data center services, MDC engineering, data center modernization, hybrid data center, enterprise DC design, virtualization infrastructure, high availability data center, cloud DC integration',
};

export default function MDCEngineeringPage() {
  const capabilities = [
    'Complete data center design & modernization',
    'Hybrid DC + cloud architecture',
    'Virtualization & hyperconverged infrastructure (HCI)',
    'High-availability & disaster recovery engineering',
    'Compute, network & storage optimization',
    'Security-first DC architecture',
    'Energy optimization & sustainability',
    'Monitoring & automation frameworks',
  ];

  const businessBenefits = [
    { title: 'Near-zero uptime', desc: 'Protects revenue and customer trust' },
    { title: 'Optimized utilization', desc: 'Reduces infrastructure cost' },
    { title: 'High-speed workload handling', desc: 'Improves customer experience' },
    { title: 'Better security posture', desc: 'Lowers breach risk' },
    { title: 'Scalable design', desc: 'Future growth without massive reinvestments' },
    { title: 'Energy-efficient frameworks', desc: 'Reduces operational costs drastically' },
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
              style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
            >
              <Server size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              Modern Data Center (MDC) Engineering
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              A modern data center is the beating heart of every ambitious enterprise. As organizations scale, adopt hybrid architectures, push data-heavy workloads, and shift to automation-driven operations, their infrastructure must evolve with them. Infiniti Tech Partners engineers <span className="font-semibold text-foreground">Modern Data Centers (MDC)</span> built not only for today's computing demands but for the unpredictable, high-growth future that every competitive business faces.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Our MDC engineering team combines deep expertise in physical infrastructure, virtualization, cybersecurity, and cloud integrations to create data centers that are resilient, cost-efficient, and fully prepared for dynamic scaling. Whether it's modernizing a legacy setup, building a hybrid data center, introducing high-availability architecture, or optimizing workload distribution, we ensure your digital backbone is engineered with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            Why a Modern Data Center Matters for Business Growth
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Your data center is a direct contributor to business revenue - even though many organizations do not see it that way. A slow, unstable, or outdated infrastructure restricts performance, causes downtime, increases operational cost, and creates security vulnerabilities. Every second of downtime results in lost revenue, lost trust, and lost opportunities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A well-engineered MDC boosts business performance through:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-muted/30 p-6 rounded-xl border-2 border-primary/20">
                <CheckCircle className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              When the core is strong, the entire digital ecosystem becomes faster, safer, and more adaptable.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            How We Build MDC Solutions That Transform Operations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Infiniti Tech Partners approaches MDC engineering holistically - starting from physical layout planning to virtualization, network design, security layers, cloud cooperation, and automation frameworks. Our objective is simple: build a data center that performs flawlessly, even when demand peaks.
          </p>

          <div className="bg-background p-8 md:p-12 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Our MDC Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Impact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            How Our MDC Solutions Increase Revenue
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A well-designed MDC creates measurable financial impact:
            </p>
            <div className="space-y-4 bg-muted/30 p-8 rounded-xl border-2 border-primary/20">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Faster applications</span> → higher customer satisfaction → higher retention</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">More uptime</span> → more transactions and uninterrupted operations</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Optimized hardware</span> → reduced CapEx and OpEx</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Automated failover</span> → lowered risk cost</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Scalable architecture</span> → more digital products launched faster</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-foreground mt-8 text-center">
              Your data center becomes an asset that actively pushes business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30 text-center">
            <p className="text-2xl md:text-4xl font-bold text-foreground leading-relaxed">
              Our data center solutions form the foundation for <span className="gradient-text">next-generation digital operations</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Build Your Modern Data Center?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's discuss how we can engineer a scalable, resilient MDC infrastructure for your organization.
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
