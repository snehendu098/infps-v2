import { getTeamMembers } from '@/lib/sanity/fetch';
import ProfileCard from '@/components/ui/ProfileCard';

// Fallback team data in case Sanity has no data yet
const fallbackTeam = [
  {
    name: 'Sudipto Ghosh',
    role: 'Managing Director',
    initial: 'SG',
    color: 'from-[#DC2626] to-[#F97316]',
    bio: 'Leading with vision and dedication to drive Infinititech Partners towards innovation and excellence.',
    email: 'sudipto.ghosh@infinititechpartners.com',
    linkedin: 'https://linkedin.com/in/sudipto-ghosh',
  },
  {
    name: 'Arnab Ghosh',
    role: 'Director of Operations',
    initial: 'AG',
    color: 'from-[#7C3AED] to-[#3B82F6]',
    bio: 'Ensuring seamless operations and delivering exceptional results for our clients.',
    email: 'arnab.ghosh@infinititechpartners.com',
    linkedin: 'https://linkedin.com/in/arnab-ghosh',
  },
  {
    name: 'Anwesha Samanta',
    role: 'Financial Director',
    initial: 'AS',
    color: 'from-[#059669] to-[#10B981]',
    bio: 'Managing financial strategies and ensuring sustainable growth for the company.',
    email: 'anwesha.samanta@infinititechpartners.com',
    linkedin: 'https://linkedin.com/in/anwesha-samanta',
  },
  {
    name: 'Ashish Ghosh',
    role: 'Technical Director',
    initial: 'AG',
    color: 'from-[#0891B2] to-[#22D3EE]',
    bio: 'Driving technical excellence and innovation across all our projects and solutions.',
    email: 'ashish.ghosh@infinititechpartners.com',
    linkedin: 'https://linkedin.com/in/ashish-ghosh',
  },
];

export default async function TeamPage() {
  // Fetch team members from Sanity
  const teamMembers = await getTeamMembers();

  // Use Sanity data if available, otherwise use fallback
  const team = teamMembers.length > 0 ? teamMembers : fallbackTeam;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 gradient-text fade-in-up">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            The experts driving innovation and excellence at Infinititech Partners. Click on any card to see contact details!
          </p>
        </div>
      </section>

      {/* Team Grid with Profile Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <ProfileCard
                key={member.name || idx}
                name={member.name}
                role={member.role}
                bio={member.bio || ''}
                initial={member.initial || member.name.split(' ').map(n => n[0]).join('')}
                color={member.color || 'from-primary to-secondary'}
                email={member.email || `${member.name.toLowerCase().replace(' ', '.')}@infinititechpartners.com`}
                linkedin={member.linkedin || `https://linkedin.com/in/${member.name.toLowerCase().replace(' ', '-')}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
