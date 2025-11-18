import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevSecOps Services | Secure CI/CD & Automation – Infiniti Tech Partners',
  description: 'Integrate security into every stage of development with DevSecOps automation. Secure CI/CD, code scanning, policy enforcement, container security & continuous monitoring.',
  keywords: 'DevSecOps services, secure CI/CD pipelines, security automation, DevSecOps engineering, container security, shift left security, secure software pipeline',
};

export default function DevSecOpsPage() {
  const deliverables = [
    'Secure CI/CD workflows',
    'Automated code scanning & vulnerability detection',
    'Secrets & identity management',
    'Policy-as-code enforcement',
    'Container & Kubernetes security',
    'Shift-left security practices',
    'Continuous threat detection',
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
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}
            >
              <Shield size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              DevSecOps & Security Automation
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Security must operate at pipeline speed. Our DevSecOps services embed <span className="font-semibold text-foreground">security checks, policy enforcement, automated scanning, and real-time monitoring</span> directly into your CI/CD workflows.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We transform development and deployment into a secure, compliant, and continuous process.
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
                Security as Part of the Pipeline
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This builds a hardened delivery process that minimizes attack surfaces without slowing delivery. Your pipeline becomes a defense layer - not an attack surface.
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
                Your pipeline becomes a <span className="gradient-text">defense layer - not an attack surface</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Secure Your Pipeline?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's integrate security into every stage of your development and deployment process.
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
