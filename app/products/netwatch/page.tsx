import { ArrowRight, Monitor, Eye, Camera, Keyboard, ClipboardList, Terminal, FolderOpen, Shield, BarChart3, Bell, Lock, Globe, AppWindow, FileText, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "NetWatch - Employee Monitoring Platform | Infiniti Tech Partners",
  description: "Comprehensive employee monitoring solution with real-time screen monitoring, activity tracking, remote management, website/app blocking, and productivity analytics.",
};

export default function NetWatchProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-500/20 via-rose-500/20 to-red-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              NetWatch Pro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Enterprise Employee Monitoring Platform
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Monitor employee productivity with real-time screen capture, activity tracking, remote management, and comprehensive reporting—all with enterprise-grade security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://netwatch-nu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Live Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-red-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-red-500/30 hover:border-white/50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Monitoring Features
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to monitor and manage your workforce effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-red-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Complete Platform Stack
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-component architecture for enterprise deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-red-500/20 to-rose-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{platform.title}</h3>
                <p className="text-sm text-red-600 font-medium mb-4">{platform.type}</p>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Advanced Monitoring Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by real-time Socket.io for instant data streaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {capability.icon}
                </div>
                <h4 className="font-bold mb-2">{capability.title}</h4>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data is protected with industry-standard encryption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade stack for web and desktop
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h4 className="font-bold text-sm">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/40 to-rose-500/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Monitor Your Workforce?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of NetWatch Pro today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://netwatch-nu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            >
              View Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-red-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-red-500/30 hover:border-white/50"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Real-Time Screen Monitoring",
    description: "Live view of all connected computers with automatic and on-demand screenshot capture. Full-screen viewer with zoom capabilities.",
    icon: <Eye className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Screen Recording",
    description: "Record screen activity with playback support. Store recordings with configurable retention periods for compliance.",
    icon: <Camera className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Activity Tracking",
    description: "Track application usage, websites visited, and idle time. Detailed productivity analytics with categorization.",
    icon: <BarChart3 className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Keystroke Logging",
    description: "Encrypted keystroke logging with search and export capabilities. AES-256-GCM encryption for data at rest.",
    icon: <Keyboard className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Clipboard Monitoring",
    description: "Track clipboard content changes in real-time. Capture text, files, and images copied by users.",
    icon: <ClipboardList className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Remote Desktop",
    description: "View and control remote computers in real-time. SSH-like terminal access for advanced management.",
    icon: <Monitor className="w-8 h-8 text-red-500" />,
  },
  {
    title: "File Transfer",
    description: "Upload and download files to/from remote computers securely. Full audit trail of all transfers.",
    icon: <FolderOpen className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Website & App Blocking",
    description: "Block access to websites by URL patterns. Prevent specific applications from running with quick rules.",
    icon: <Globe className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Real-Time Alerts",
    description: "Get notified of policy violations and suspicious activity. Configure custom alert rules and thresholds.",
    icon: <Bell className="w-8 h-8 text-red-500" />,
  },
];

const platforms = [
  {
    title: "Admin Dashboard",
    type: "Next.js 16 / React 19",
    description: "Comprehensive web dashboard for monitoring and management",
    icon: <Monitor className="w-10 h-10 text-red-500" />,
    features: [
      "Real-time computer monitoring",
      "Screenshot and recording viewer",
      "Activity reports and analytics",
      "Policy configuration",
      "User and role management",
      "Audit logging",
    ],
  },
  {
    title: "Desktop Agent",
    type: "Electron 28",
    description: "Cross-platform agent for Windows, macOS, and Linux",
    icon: <AppWindow className="w-10 h-10 text-red-500" />,
    features: [
      "Auto-start on boot",
      "Stealth mode operation",
      "Screenshot capture",
      "Activity logging",
      "Keystroke recording",
      "Remote command execution",
    ],
  },
  {
    title: "Socket.io Server",
    type: "Node.js",
    description: "Real-time communication backbone for instant data streaming",
    icon: <Shield className="w-10 h-10 text-red-500" />,
    features: [
      "WebSocket connections",
      "Real-time data streaming",
      "Scalable architecture",
      "Auto-reconnection",
      "Event broadcasting",
      "Connection management",
    ],
  },
];

const monitoringCapabilities = [
  {
    title: "Live Screenshots",
    description: "Automatic capture at configurable intervals",
    icon: <Camera className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Process Monitoring",
    description: "View running processes on remote computers",
    icon: <Terminal className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Firewall Rules",
    description: "Configure firewall per computer",
    icon: <Shield className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Remote Commands",
    description: "Lock, shutdown, restart, or message",
    icon: <Monitor className="w-6 h-6 text-red-500" />,
  },
];

const securityFeatures = [
  {
    title: "AES-256 Encryption",
    description: "All sensitive data including keylogs encrypted at rest using AES-256-GCM encryption standard.",
    icon: <Lock className="w-6 h-6 text-red-500" />,
  },
  {
    title: "PBKDF2 Password Hashing",
    description: "Passwords are hashed using PBKDF2 with random salts for maximum security.",
    icon: <Shield className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Role-Based Access Control",
    description: "Three user roles: Admin, Manager, and Viewer with granular permissions.",
    icon: <Lock className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Rate Limiting",
    description: "API routes are rate-limited to prevent abuse and brute force attacks.",
    icon: <Shield className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Complete Audit Trail",
    description: "Every action is logged for compliance and security auditing purposes.",
    icon: <FileText className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Data Retention Policies",
    description: "Configurable retention periods for screenshots, recordings, and logs.",
    icon: <Clock className="w-6 h-6 text-red-500" />,
  },
];

const techStack = [
  { name: "Next.js 16", icon: "⚡" },
  { name: "React 19", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Prisma", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Socket.io", icon: "🔌" },
  { name: "Electron 28", icon: "💻" },
  { name: "NextAuth.js", icon: "🔐" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Sentry", icon: "🐛" },
];
