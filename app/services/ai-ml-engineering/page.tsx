import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Development | Predictive & Intelligent Systems',
  description: 'AI and ML engineering services: predictive analytics, computer vision, NLP, automation, MLOps, and custom AI model development for real-world impact.',
  keywords: 'AI development services, machine learning company USA, predictive analytics solutions, NLP development, computer vision engineering, MLOps services',
};

export default function AIMLEngineeringPage() {
  const deliverables = [
    'Machine learning model development',
    'AI automation systems',
    'NLP & computer vision',
    'Predictive analytics',
    'MLOps & model deployment',
    'Data pipelines & feature engineering',
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
              style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}
            >
              <Brain size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
              AI / Machine Learning Engineering
            </h1>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              AI is no longer optional - it is a competitive necessity. We build <span className="font-semibold text-foreground">AI and ML solutions</span> that help businesses automate decisions, uncover insights, and optimize performance.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our engineers focus on real-world AI that drives measurable outcomes - not experimentation for its own sake.
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
                From Data to Intelligence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We create intelligent systems that automate decisions, optimize operations, and open new capabilities. From predictive analytics to computer vision, we transform data into intelligence and intelligence into impact.
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
                We transform data into intelligence and <span className="gradient-text">intelligence into impact</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Ready to Build Intelligent Systems?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Let's create AI and ML solutions that drive measurable business outcomes.
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
