/**
 * Seed script for Sanity CMS
 * Run with: npx ts-node --skip-project scripts/seed-sanity.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '51qjg3ag',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  apiVersion: '2024-01-01',
})

// Data from constants
const SERVICES = [
  {
    icon: 'Server',
    title: 'Data Center Management',
    short: 'Enterprise-grade data center solutions',
    description: 'Comprehensive deployment and management solutions for modern data centers',
    features: ['24/7 Monitoring', 'Custom Deployment', 'Scalable Infrastructure', 'Disaster Recovery'],
    color: '#FF9966'
  },
  {
    icon: 'Code',
    title: 'Custom MDC Software',
    short: 'Tailored modular data center software',
    description: 'Tailored software development for modular data center operations',
    features: ['Custom Solutions', 'Real-time Analytics', 'Automation Tools', 'Integration APIs'],
    color: '#a855f7'
  },
  {
    icon: 'Globe',
    title: 'Smart City Solutions',
    short: 'IoT-powered urban infrastructure',
    description: 'Innovative technology for connected urban environments',
    features: ['IoT Integration', 'Data Analytics', 'Urban Planning Tools', 'Citizen Apps'],
    color: '#14b8a6'
  },
  {
    icon: 'TrendingUp',
    title: 'CRM, ERP & POS',
    short: 'Complete enterprise software suite',
    description: 'CRM, ERP, and POS systems designed for your business needs',
    features: ['Custom CRM', 'ERP Solutions', 'POS Systems', 'Business Intelligence'],
    color: '#f59e0b'
  },
  {
    icon: 'Smartphone',
    title: 'Web & Mobile Development',
    short: 'Cross-platform digital experiences',
    description: 'Beautiful, functional websites and mobile applications',
    features: ['Responsive Design', 'Native Apps', 'Progressive Web Apps', 'Cross-platform'],
    color: '#ec4899'
  },
  {
    icon: 'Zap',
    title: 'Digital Marketing',
    short: 'Data-driven growth strategies',
    description: 'Strategic digital marketing to grow your online presence',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    color: '#8b5cf6'
  }
]

const WORK_PROCESS = [
  {
    number: '01',
    title: 'Discovery',
    icon: 'Search',
    description: 'We get on a Teams call to understand your business module, end users, user personas, and your unique value proposition.',
    points: ['Business Analysis', 'User Research', 'Problem Definition', 'USP Identification']
  },
  {
    number: '02',
    title: 'Scope of Work Creation',
    icon: 'FileCheck',
    description: 'Comprehensive project planning with clear timelines, milestones, and success criteria.',
    points: ['Timeline Planning', 'Milestone Definition', 'Acceptance Criteria', 'Tech Stack Confirmation']
  },
  {
    number: '03',
    title: 'Design Confirmation',
    icon: 'Palette',
    description: 'Iterative design process ensuring your vision comes to life perfectly.',
    points: ['UI/UX Design', 'Prototype Creation', 'Design Reviews', 'Final Approval']
  },
  {
    number: '04',
    title: 'Development',
    icon: 'Code',
    description: 'Agile development with regular updates and quality assurance at every step.',
    points: ['Sprint Planning', 'Continuous Integration', 'Code Reviews', 'Testing']
  },
  {
    number: '05',
    title: 'Deployment',
    icon: 'Rocket',
    description: 'Smooth launch and ongoing support to ensure your success.',
    points: ['Production Deploy', 'Performance Monitoring', 'Training & Support', 'Maintenance']
  }
]

const TEAM = [
  {
    name: 'Sudipto Mitra',
    role: 'Founder & CEO',
    initial: 'SM',
    color: '#FF9966',
    bio: 'Visionary leader with 10+ years in technology innovation',
    linkedin: 'https://www.linkedin.com/in/sudipto-mtr'
  },
  {
    name: 'Pallabi Datta',
    role: 'Human Resources',
    initial: 'PD',
    color: '#a855f7',
    bio: 'Building strong teams and fostering workplace excellence'
  },
  {
    name: 'Snehendu Roy',
    role: 'Full Stack MERN Developer',
    initial: 'SR',
    color: '#14b8a6',
    bio: 'Expert in building scalable web applications'
  },
  {
    name: 'Mitali Giri',
    role: 'AI/ML Developer',
    initial: 'MG',
    color: '#f59e0b',
    bio: 'Pioneering intelligent solutions with machine learning'
  },
  {
    name: 'Achyut Pal',
    role: 'Sr Developer',
    initial: 'AP',
    color: '#ec4899',
    bio: 'Senior developer specializing in scalable enterprise solutions',
    linkedin: 'https://www.linkedin.com/in/achyutpal21'
  },
  {
    name: 'Tushar Daiya',
    role: 'Full Stack MERN Developer',
    initial: 'TD',
    color: '#3b82f6',
    bio: 'Building robust and scalable web applications'
  },
  {
    name: 'Balaji Yadav',
    role: 'Full Stack MERN Developer',
    initial: 'BY',
    color: '#10b981',
    bio: 'Crafting modern web solutions with expertise in MERN stack'
  }
]

const PORTFOLIO_ITEMS = [
  {
    title: 'Smart City Dashboard',
    category: 'Smart City',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Real-time urban monitoring system for efficient city management',
    technologies: ['React', 'Node.js', 'IoT', 'MongoDB']
  },
  {
    title: 'Enterprise CRM Platform',
    category: 'Enterprise Software',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Custom CRM solution for manufacturing industry',
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    title: 'Data Center Monitor',
    category: 'Data Center',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Comprehensive MDC management dashboard',
    technologies: ['Vue.js', 'Python', 'Docker', 'Kubernetes']
  },
  {
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    description: 'Native shopping experience for iOS and Android',
    technologies: ['React Native', 'Firebase', 'Stripe', 'GraphQL']
  },
  {
    title: 'Restaurant POS System',
    category: 'POS',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Cloud-based point of sale for restaurants',
    technologies: ['Angular', 'Node.js', 'MySQL', 'Socket.io']
  },
  {
    title: 'Marketing Analytics',
    category: 'Digital Marketing',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    description: 'Multi-channel campaign tracking and analytics',
    technologies: ['React', 'Python', 'TensorFlow', 'BigQuery']
  }
]

// Helper to create slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function seedSiteSettings() {
  console.log('Seeding site settings...')

  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Infinititech Partners',
    tagline: 'Infinite Possibilities, One Partner',
    email: 'infinititechpartners@gmail.com',
    phone: '+91 629 103 3969',
    address: {
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
    },
    description: 'Leading provider of Data Center Management, Custom Software Development, Smart City Solutions, and comprehensive Digital Services.',

    // Navigation Links
    navigationLinks: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],

    // Social Links
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/company/infinititech-partners', icon: 'linkedin' },
      { name: 'Twitter', url: 'https://twitter.com/infinititechp', icon: 'twitter' },
      { name: 'GitHub', url: 'https://github.com/infinititech-partners', icon: 'github' },
      { name: 'Instagram', url: 'https://instagram.com/infinititechpartners', icon: 'instagram' },
    ],

    // Hero Section Content
    heroSection: {
      headingLine1: 'Transform, Innovate',
      headingLine2: '& Scale Your Business',
      description: 'Leading provider of Data Center Management, Custom Software Development, Smart City Solutions, and comprehensive Digital Services',
      primaryButtonText: 'Start Your Project',
      primaryButtonLink: '/contact',
      secondaryButtonText: 'Explore Services',
      secondaryButtonLink: '/services',
    },

    // About Preview Section
    aboutPreview: {
      heading: 'About Infinititech Partners',
      description: 'Founded with a vision to bridge the gap between innovative technology and real-world business needs, we combine technical expertise with business acumen.',
      values: [
        {
          icon: 'Target',
          title: 'Our Mission',
          description: 'Empower businesses with cutting-edge technology solutions that drive growth and digital transformation.',
        },
        {
          icon: 'Eye',
          title: 'Our Vision',
          description: 'Be the most trusted technology partner globally, known for excellence and innovation.',
        },
        {
          icon: 'Heart',
          title: 'Our Values',
          description: 'Integrity, Innovation, Excellence, and Customer-Centricity guide everything we do.',
        },
      ],
      stats: [
        { number: '50+', label: 'Projects Delivered' },
        { number: '30+', label: 'Happy Clients' },
        { number: '4', label: 'Team Members' },
        { number: '6', label: 'Services Offered' },
      ],
    },

    // Homepage CTA
    homepageCta: {
      heading: 'Ready to Transform Your Business?',
      description: "Let's discuss your project and bring your vision to life",
      buttonText: 'Get in Touch',
      buttonLink: '/contact',
    },

    // Effects Settings
    particleLogo: {
      enabled: true,
      particleCount: 1000,
      colorA: '#FF9966',
      colorB: '#FF6B35',
      forceRadius: 140,
      shadowBlur: 12,
    },
    liquidEther: {
      enabled: true,
      desktopParticleCount: 50,
      tabletParticleCount: 35,
      mobileParticleCount: 20,
      primaryColor: { h: 20, s: 100, l: 70 },
      secondaryColor: { h: 15, s: 100, l: 60 },
      desktopBlur: 40,
      tabletBlur: 30,
      mobileBlur: 20,
    },
    splashCursor: {
      enabled: true,
      dotSize: 12,
      primaryColor: '#FF9966',
      secondaryColor: '#FF6B35',
      trailThrottle: 50,
      trailDuration: 600,
      rippleDuration: 1200,
    },
    snowfall: {
      enabled: true,
      snowflakeCount: 70,
      minRadius: 0.5,
      maxRadius: 2.5,
      minSpeed: 0.2,
      maxSpeed: 0.7,
      minOpacity: 0.15,
      maxOpacity: 0.45,
    },
    christmasLights: {
      enabled: true,
      spacing: 60,
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'],
      pulseSpeed: 0.02,
      glowRadius: 15,
    },
    smoothScroll: {
      enabled: true,
      duration: 1500,
      navbarOffset: 80,
    },
    scrollProgress: {
      enabled: true,
      color: '#FF9966',
      height: 3,
    },
  }

  await client.createOrReplace(siteSettings)
  console.log('Site settings created!')
}

async function seedServices() {
  console.log('Seeding services...')

  for (let i = 0; i < SERVICES.length; i++) {
    const service = SERVICES[i]
    const doc = {
      _type: 'service',
      title: service.title,
      slug: { _type: 'slug', current: slugify(service.title) },
      icon: service.icon,
      shortDescription: service.short,
      description: service.description,
      color: service.color,
      features: service.features,
      order: i,
      isVisible: true,
    }
    await client.create(doc)
    console.log(`Created service: ${service.title}`)
  }
}

async function seedTeamMembers() {
  console.log('Seeding team members...')

  for (let i = 0; i < TEAM.length; i++) {
    const member = TEAM[i]
    const doc = {
      _type: 'teamMember',
      name: member.name,
      role: member.role,
      initial: member.initial,
      bio: member.bio,
      color: member.color,
      linkedin: member.linkedin,
      order: i,
      isVisible: true,
    }
    await client.create(doc)
    console.log(`Created team member: ${member.name}`)
  }
}

async function seedPortfolio() {
  console.log('Seeding portfolio items...')

  for (let i = 0; i < PORTFOLIO_ITEMS.length; i++) {
    const item = PORTFOLIO_ITEMS[i]
    const doc = {
      _type: 'portfolioItem',
      title: item.title,
      slug: { _type: 'slug', current: slugify(item.title) },
      category: item.category,
      description: item.description,
      gradient: item.gradient,
      technologies: item.technologies,
      isFeatured: true,
      order: i,
      isVisible: true,
    }
    await client.create(doc)
    console.log(`Created portfolio item: ${item.title}`)
  }
}

async function seedWorkProcess() {
  console.log('Seeding work process steps...')

  for (let i = 0; i < WORK_PROCESS.length; i++) {
    const step = WORK_PROCESS[i]
    const doc = {
      _type: 'workProcess',
      stepNumber: step.number,
      title: step.title,
      icon: step.icon,
      description: step.description,
      points: step.points,
      order: i,
      isVisible: true,
    }
    await client.create(doc)
    console.log(`Created work process step: ${step.title}`)
  }
}

async function main() {
  console.log('Starting Sanity seed...\n')

  try {
    await seedSiteSettings()
    await seedServices()
    await seedTeamMembers()
    await seedPortfolio()
    await seedWorkProcess()

    console.log('\n✅ Seed completed successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
    process.exit(1)
  }
}

main()
