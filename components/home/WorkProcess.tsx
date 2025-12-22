'use client';

import { CheckCircle, Search, FileText, Lightbulb, Code, CheckSquare, Rocket, type LucideIcon } from 'lucide-react';
import type { WorkProcessStep } from '@/lib/sanity/types';

// Icon mapping for work process steps
const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  FileText,
  Lightbulb,
  Code,
  CheckSquare,
  Rocket,
  CheckCircle,
};

// Fallback data if Sanity fetch fails
const FALLBACK_WORK_PROCESS = [
  { _id: '1', stepNumber: '01', title: 'Discovery', description: 'Understanding your business requirements and goals', icon: 'Search', points: ['Stakeholder interviews', 'Market research', 'Competitive analysis', 'Requirements gathering'] },
  { _id: '2', stepNumber: '02', title: 'Planning', description: 'Creating a strategic roadmap for success', icon: 'FileText', points: ['Project scope definition', 'Resource planning', 'Timeline creation', 'Risk assessment'] },
  { _id: '3', stepNumber: '03', title: 'Design', description: 'Crafting user-centric solutions', icon: 'Lightbulb', points: ['UX/UI design', 'Prototyping', 'User testing', 'Design iterations'] },
  { _id: '4', stepNumber: '04', title: 'Development', description: 'Building robust and scalable solutions', icon: 'Code', points: ['Agile development', 'Code reviews', 'Quality assurance', 'Continuous integration'] },
  { _id: '5', stepNumber: '05', title: 'Testing', description: 'Ensuring quality and reliability', icon: 'CheckSquare', points: ['Unit testing', 'Integration testing', 'Performance testing', 'Security testing'] },
  { _id: '6', stepNumber: '06', title: 'Deployment', description: 'Launching your solution to the world', icon: 'Rocket', points: ['Staged rollout', 'Monitoring setup', 'Documentation', 'Training & support'] },
];

interface WorkProcessProps {
  workProcess?: WorkProcessStep[];
}

export default function WorkProcess({ workProcess }: WorkProcessProps) {
  const displayProcess = workProcess && workProcess.length > 0 ? workProcess : FALLBACK_WORK_PROCESS;
  return (
    <section className="py-32 bg-background/30 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Work Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Liquid Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block liquid-flow"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))',
              boxShadow: '0 0 20px hsl(var(--primary))',
            }}
          />

          {/* Steps */}
          {displayProcess.map((step, idx) => {
            const iconName = step.icon || 'CheckCircle';
            const Icon = ICON_MAP[iconName] || CheckCircle;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step._id || idx}
                className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 relative ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div
                    className="bg-gradient-to-br from-muted/50 to-background p-8 rounded-3xl border-2 border-primary/30 transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 liquid-float"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl font-extrabold gradient-text">{step.stepNumber}</div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>

                    {/* Step Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(step.points || []).map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle (Desktop only) */}
                <div className="hidden lg:flex w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center flex-shrink-0 relative z-10 border-4 border-background shadow-lg">
                  <span className="text-2xl font-extrabold text-white">{idx + 1}</span>
                </div>

                {/* Empty Space (Desktop only) */}
                <div className="hidden lg:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
