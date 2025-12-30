import { ArrowRight, Wallet, CreditCard, Send, Shield, Users, Building2, BarChart3, Bell, Lock, FileCheck, Landmark, RefreshCcw, DollarSign, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Xfer - Digital Payment Platform | Infiniti Tech Partners",
  description: "PayPal-like payment platform with multi-currency wallets, P2P transfers, KYC verification, fraud detection, vendor payments, and comprehensive admin controls.",
};

export default function XferProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-sky-500/20 via-blue-500/20 to-sky-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              Xfer Payment Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Complete Digital Payment Solution
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Launch your own PayPal-like payment service with multi-currency wallets, P2P transfers, KYC/AML compliance, fraud detection, and comprehensive merchant tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://xfer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Live Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-sky-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-sky-500/30 hover:border-white/50"
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
              Powerful Payment Features
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern payment platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-sky-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Portals */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Multi-Role Platform
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Four distinct portals for different user types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userPortals.map((portal, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-sky-500/20 to-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {portal.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{portal.title}</h3>
                <p className="text-sm text-sky-600 font-medium mb-4">{portal.path}</p>
                <p className="text-muted-foreground mb-6">{portal.description}</p>
                <ul className="space-y-2">
                  {portal.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Financial Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade financial infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-sky-500/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Compliance & Security
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for regulatory compliance from day one
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-sky-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
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

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful Integrations
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with leading financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all text-center"
              >
                <div className="text-5xl mb-4">{integration.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{integration.name}</h3>
                <p className="text-muted-foreground">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade fintech stack
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
      <section className="py-20 bg-gradient-to-r from-sky-500/40 to-blue-500/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Launch Your Payment Platform?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of Xfer today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://xfer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-sky-600 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            >
              View Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-sky-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-sky-500/30 hover:border-white/50"
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
    title: "Multi-Currency Wallets",
    description: "Create and manage wallets in multiple currencies including USD, EUR, GBP, and more. Real-time balance tracking with ledger entries.",
    icon: <Wallet className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "P2P Transfers",
    description: "Send money instantly to other users via email or phone. Low fees, real-time delivery, and complete transaction history.",
    icon: <Send className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "Stripe Payments",
    description: "Seamless card payments with 3D Secure, saved cards, and automatic retry logic. PCI DSS compliant infrastructure.",
    icon: <CreditCard className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "KYC Verification",
    description: "Complete identity verification workflow with document upload, liveness detection, and sanctions screening.",
    icon: <UserCheck className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "Fraud Detection",
    description: "AI-powered fraud scoring based on velocity, device fingerprint, geolocation, and behavioral patterns.",
    icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "Vendor Payments",
    description: "Complete merchant solution with invoicing, checkout flows, and automatic payouts to vendor accounts.",
    icon: <Building2 className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "Dispute Management",
    description: "Handle chargebacks and disputes with evidence submission, timeline tracking, and resolution workflows.",
    icon: <FileCheck className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "Real-Time Notifications",
    description: "Push notifications, email alerts via Resend, and in-app notifications for all transaction events.",
    icon: <Bell className="w-8 h-8 text-sky-500" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive reporting with transaction volumes, revenue metrics, user growth, and fraud analytics.",
    icon: <BarChart3 className="w-8 h-8 text-sky-500" />,
  },
];

const userPortals = [
  {
    title: "User Dashboard",
    path: "/dashboard",
    description: "Standard user features for managing personal finances",
    icon: <Users className="w-10 h-10 text-sky-500" />,
    features: [
      "Wallet management",
      "Send and receive money",
      "Transaction history",
      "Payment methods",
      "Profile settings",
      "KYC submission",
    ],
  },
  {
    title: "Vendor Portal",
    path: "/vendor",
    description: "Merchant features for business accounts",
    icon: <Building2 className="w-10 h-10 text-sky-500" />,
    features: [
      "Product catalog",
      "Order management",
      "Invoice generation",
      "Payout settings",
      "API integration",
      "Business analytics",
    ],
  },
  {
    title: "Admin Dashboard",
    path: "/admin",
    description: "User, KYC, and dispute management",
    icon: <Shield className="w-10 h-10 text-sky-500" />,
    features: [
      "User management",
      "KYC review queue",
      "Dispute resolution",
      "Transaction monitoring",
      "Risk assessment",
      "Activity logs",
    ],
  },
  {
    title: "Super Admin",
    path: "/super-admin",
    description: "Full system configuration and control",
    icon: <Lock className="w-10 h-10 text-sky-500" />,
    features: [
      "System configuration",
      "Fee structures",
      "User role management",
      "Platform analytics",
      "API management",
      "Audit logs",
    ],
  },
];

const financialFeatures = [
  {
    title: "Double-Entry Ledger",
    description: "Every transaction creates balanced ledger entries",
    icon: <BarChart3 className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Bank Connectivity",
    description: "Link bank accounts via Plaid integration",
    icon: <Landmark className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Auto Withdrawals",
    description: "Schedule automatic withdrawals to bank",
    icon: <RefreshCcw className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Fee Management",
    description: "Configurable fee structures per transaction type",
    icon: <DollarSign className="w-6 h-6 text-sky-500" />,
  },
];

const complianceFeatures = [
  {
    title: "KYC/AML Compliance",
    description: "Full identity verification with document checks, liveness detection, and sanctions screening for regulatory compliance.",
    icon: <UserCheck className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Risk Profiling",
    description: "Automatic risk scoring from LOW to CRITICAL with transaction limits and velocity checks per user.",
    icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "AES-256 Encryption",
    description: "Sensitive data encrypted at rest with industry-standard AES-256 encryption.",
    icon: <Lock className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "JWT Authentication",
    description: "Secure token-based auth with HTTP-only cookies, 24-hour expiry, and account lockout.",
    icon: <Shield className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Rate Limiting",
    description: "API rate limiting to prevent abuse with configurable thresholds per endpoint.",
    icon: <RefreshCcw className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Audit Trail",
    description: "Complete activity logging for all user actions and system events.",
    icon: <FileCheck className="w-6 h-6 text-sky-500" />,
  },
];

const integrations = [
  {
    name: "Stripe",
    icon: "💳",
    description: "Card payments, 3D Secure authentication, and webhook handling for payment events.",
  },
  {
    name: "Plaid",
    icon: "🏦",
    description: "Bank account linking, balance verification, and ACH transfer capabilities.",
  },
  {
    name: "Resend",
    icon: "📧",
    description: "Transactional emails for receipts, notifications, and password resets.",
  },
];

const techStack = [
  { name: "Next.js 16", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Prisma 7", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Stripe SDK", icon: "💳" },
  { name: "Plaid SDK", icon: "🏦" },
  { name: "Resend", icon: "📧" },
  { name: "Jose JWT", icon: "🔐" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Radix UI", icon: "🧱" },
];
