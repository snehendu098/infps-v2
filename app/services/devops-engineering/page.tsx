import { Metadata } from 'next';
import Link from 'next/link';
import { GitBranch, CheckCircle, ArrowLeft, TrendingUp, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevOps Engineering Services | CI/CD, Kubernetes, IaC – Infiniti Tech Partners',
  description: 'Accelerate delivery with DevOps automation. CI/CD pipelines, Kubernetes orchestration, IaC, cloud-native workflows, and end-to-end DevOps engineering for reliable deployments.',
  keywords: 'DevOps services USA, CI/CD automation, Kubernetes DevOps, Infrastructure as Code, DevOps engineering, cloud native DevOps, enterprise DevOps company',
};

export default function DevOpsEngineeringPage() {
  const deliverables = [
    'CI/CD pipeline design and automation',
    'Infrastructure as Code (Terraform, Ansible, CloudFormation)',
    'Docker, Kubernetes & container orchestration',
    'Cloud-native architecture optimization',
    'Monitoring, logging & observability tooling',
    'Environment hardening & pipeline security',
  ];

  const costReductions = [
    'Less manual testing → fewer human hours',
    'Automated deployments → less downtime',
    'Standardized environments → fewer production errors',
    'Better resource scaling → optimized cloud spending',
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
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
            >
              <GitBranch size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              DevOps Engineering
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              DevOps is not just a set of tools - it is a strategic advantage. In a marketplace where speed, reliability, and constant improvement determine survival, DevOps becomes the engine that drives innovation. At Infiniti Tech Partners, we build <span className="font-semibold text-foreground">DevOps ecosystems</span> that transform the way businesses build, deploy, and scale their digital products.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our DevOps frameworks are designed around automation, predictability, and operational intelligence. We build CI/CD pipelines, containerized environments, infrastructure automation, and cloud-native architectures that enable faster releases, cleaner deployments, and lower operational strain.
            </p>
          </div>
        </div>
      </section>

      {/* How DevOps Accelerates Growth */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            How DevOps Accelerates Business Growth
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The financial impact of DevOps is significant:
            </p>
            <div className="space-y-4 bg-muted/30 p-8 rounded-xl border-2 border-primary/20">
              <div className="flex items-start gap-3">
                <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Faster release cycles</span> = faster revenue generation</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Automated deployments</span> = fewer failures & incidents</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Reduced manual effort</span> = lower operational costs</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Stable environments</span> = better customer experience</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground"><span className="font-semibold">Consistent pipelines</span> = predictable scaling and expansion</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-foreground mt-8 text-center">
              When the pipeline is automated, your engineering team can finally focus on building features that generate value - not fixing broken deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            Our DevOps Engineering Framework
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Our approach is built on five pillars: automation, standardization, observability, scalability, and security.
          </p>

          <div className="bg-background p-8 md:p-12 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">We Deliver</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Reduction Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 gradient-text text-center">
            How DevOps Reduces Cost
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 bg-muted/30 p-8 rounded-xl border-2 border-primary/20">
            {costReductions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <TrendingUp className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-semibold text-foreground mt-8 text-center">
            DevOps becomes a continuous ROI machine - cutting unnecessary expenses and increasing developer output.
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 rounded-3xl border-2 border-primary/30 text-center">
            <p className="text-2xl md:text-4xl font-bold text-foreground leading-relaxed">
              DevOps transforms your engineering team into a <span className="gradient-text">high-velocity delivery machine</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Accelerate Your Delivery?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's build automated, reliable DevOps pipelines that enable your team to ship faster and more confidently.
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
