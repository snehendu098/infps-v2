import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, ArrowLeft, CheckCircle, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pigeon Pulse - Intelligent Avian Health Monitoring | Infiniti Tech Partners',
  description: 'IoT-powered health monitoring system for pigeons. 40-60% faster disease detection, real-time vitals tracking, automated health analytics.',
  keywords: 'IoT health monitoring, avian health system, pigeon health tracker, animal health IoT, AWS IoT Core, veterinary technology',
};

export default function PigeonPulsePage() {
  const technologies = [
    'IoT Sensors', 'MQTT', 'Python', 'Node.js', 'AWS IoT Core',
    'DynamoDB', 'React Native', 'Flutter', 'Grafana', 'BLE Modules'
  ];

  const deliverables = [
    'Wearable IoT sensors for pigeons',
    'Gateway-based data collection system',
    'Cloud backend for analytics (AWS IoT Core)',
    'Mobile and web dashboards (React Native)',
    'Temperature & heart-rate detection',
    'Motion analysis algorithms',
    'Real-time alert system',
    'Historical trend analysis',
    'Caretaker assignment workflows',
  ];

  const challenges = [
    {
      title: 'Tiny Sensors for Tiny Birds',
      description: 'Designing ultra-lightweight, non-invasive IoT sensors that pigeons could wear comfortably was a major engineering constraint.',
      icon: AlertCircle,
    },
    {
      title: 'Erratic Connectivity',
      description: 'Aviaries presented challenging RF environments with signal drop-offs and interference from building structures.',
      icon: AlertCircle,
    },
    {
      title: 'Battery Life Issues',
      description: 'Continuous monitoring drained batteries quickly, requiring innovative power management solutions.',
      icon: AlertCircle,
    },
    {
      title: 'No Historical Datasets',
      description: 'Lack of existing health data for training anomaly detection models made baseline creation difficult.',
      icon: AlertCircle,
    },
  ];

  const solutions = [
    {
      title: 'Aggressive Power Management',
      description: 'Designed custom firmware with advanced sleep modes and wake-on-motion protocols to extend battery life by 300%.',
      icon: Lightbulb,
    },
    {
      title: 'Edge Filtering',
      description: 'Implemented intelligent edge computing to filter and compress data at the source, minimizing packets sent to the cloud.',
      icon: Lightbulb,
    },
    {
      title: 'RF Optimization',
      description: 'Strategically placed RF repeaters and optimized antenna placement to eliminate connectivity dead zones.',
      icon: Lightbulb,
    },
    {
      title: 'Crowdsourced Baseline Model',
      description: 'Created a pseudo-baseline health model using aggregated data from multiple aviaries to establish normal ranges.',
      icon: Lightbulb,
    },
  ];

  const results = [
    '40-60% improvement in disease detection time',
    '70% reduction in manual monitoring workload',
    'Higher survival rates through early intervention',
    'Predictable care cycles and resource allocation',
    'Real-time visibility for caretakers across multiple locations',
  ];

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                >
                  <Activity size={40} className="text-white" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    IoT / Animal Health / AgriTech
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
                Pigeon Pulse
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
                Intelligent Avian Health Monitoring System
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Smart health-monitoring ecosystem for pigeons using lightweight IoT devices to track vitals, detect early symptoms of illness, and enable real-time care decisions in large aviaries.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xl font-bold text-foreground">6-8 months</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                  <p className="text-xl font-bold text-foreground">4-6 engineers</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=2074"
                alt="Pigeon Pulse Project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center gradient-text">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-muted/50 text-foreground font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pigeon caretakers in large aviaries faced a critical problem: <span className="font-semibold text-foreground">detecting illness early enough to save birds</span>. Traditional methods relied on manual observation—inconsistent, time-consuming, and often too late.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                There was no digital system in place. Everything was logged manually, observations were spotty, and by the time symptoms became visible, disease had often spread throughout the flock.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We set out to <span className="font-semibold text-foreground">automate health tracking, identify anomalies early, and give caretakers real-time visibility</span> into the health status of every bird.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Reduce mortality rates through early detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Improve early diagnosis capabilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/90">Create a data-driven care model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Delivered */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            What We Delivered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-primary/10">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Pain Points & Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div key={index} className="p-6 bg-background rounded-2xl border-2 border-red-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{challenge.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            How We Overcame Them
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="p-6 bg-muted/20 rounded-2xl border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center gradient-text">
            Results & Impact
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-10 rounded-3xl border-2 border-primary/30 mb-8">
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                    <p className="text-lg text-foreground font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-xl text-muted-foreground italic">
              "The client reported higher survival rates and more predictable care cycles, transforming how they manage aviary health."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">
            Need a Similar IoT Solution?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We specialize in building custom IoT systems for health monitoring, agriculture, and industrial applications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Let's Build Together
          </Link>
        </div>
      </section>
    </div>
  );
}
