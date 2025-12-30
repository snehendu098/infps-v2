import { ArrowRight, ParkingCircle, Camera, Car, CreditCard, BarChart3, Cpu, MapPin, Wallet, Bell, Shield, Clock, QrCode, FileText, Zap, Settings } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sparking - AI-Powered Smart Parking | Infiniti Tech Partners",
  description: "AI-powered parking management system with real-time vehicle detection, automatic license plate recognition, digital payments, and hardware integration.",
};

export default function SparkingProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              Sparking Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              AI-Powered Smart Parking Management
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Transform your parking operations with real-time vehicle detection, automatic license plate recognition, digital payments, and intelligent hardware control
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://smart-parking-xi-pearl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Live Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-green-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-green-500/30 hover:border-white/50"
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
              Intelligent Parking Features
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered solutions for modern parking management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
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
              End-to-end solution for parking operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{platform.title}</h3>
                <p className="text-sm text-green-600 font-medium mb-4">{platform.type}</p>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              AI-Powered Detection
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Computer vision for intelligent parking automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {capability.icon}
                </div>
                <h4 className="font-bold mb-2">{capability.title}</h4>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Integration */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hardware Integration
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Control physical devices for automated operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareIntegrations.map((hardware, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all text-center"
              >
                <div className="text-5xl mb-4">{hardware.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{hardware.name}</h3>
                <p className="text-muted-foreground mb-4">{hardware.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {hardware.protocols.map((protocol, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-600 font-medium"
                    >
                      {protocol}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Interfaces */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              User-Facing Interfaces
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Interfaces for different user types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userInterfaces.map((ui, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    {ui.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{ui.title}</h4>
                    <p className="text-xs text-green-600">{ui.path}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{ui.description}</p>
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
              AI and IoT stack for smart parking
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
      <section className="py-20 bg-gradient-to-r from-green-500/40 to-emerald-500/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Modernize Your Parking?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of AI-driven parking management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://smart-parking-xi-pearl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl"
            >
              View Demo
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-green-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-green-500/30 hover:border-white/50"
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
    title: "Vehicle Detection",
    description: "YOLOv8-based real-time vehicle detection with less than 100ms latency. Automatic entry/exit tracking without human intervention.",
    icon: <Car className="w-8 h-8 text-green-500" />,
  },
  {
    title: "License Plate Recognition",
    description: "Automatic Number Plate Recognition (ANPR) using Intel OpenVINO for high-accuracy plate reading in all conditions.",
    icon: <Camera className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Digital Wallet",
    description: "Built-in wallet system for contactless payments. Top-up via cards, auto-deduct parking fees, and transfer between users.",
    icon: <Wallet className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Gate Control",
    description: "Automatic gate operation based on vehicle detection. Support for HTTP, RS485, and Modbus protocols.",
    icon: <ParkingCircle className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered occupancy prediction, revenue forecasting, and peak hour analysis for better planning.",
    icon: <BarChart3 className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Multi-Tenant Support",
    description: "Manage multiple parking lots from a single dashboard. Zone and slot management with custom pricing.",
    icon: <MapPin className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Stripe Payments",
    description: "Integrated Stripe payment gateway for card payments, subscriptions, and automated billing.",
    icon: <CreditCard className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Real-Time Notifications",
    description: "Push notifications for entry/exit, payment confirmations, and alerts via email and webhooks.",
    icon: <Bell className="w-8 h-8 text-green-500" />,
  },
  {
    title: "PDF Reports",
    description: "Generate detailed PDF reports for transactions, occupancy, and revenue with custom date ranges.",
    icon: <FileText className="w-8 h-8 text-green-500" />,
  },
];

const platforms = [
  {
    title: "Admin Dashboard",
    type: "Next.js 16",
    description: "Comprehensive management interface for parking operations",
    icon: <BarChart3 className="w-10 h-10 text-green-500" />,
    features: [
      "Real-time occupancy monitoring",
      "Camera stream management",
      "Token and slot tracking",
      "Payment and wallet management",
      "Analytics and reporting",
      "Hardware configuration",
    ],
  },
  {
    title: "AI Pipeline",
    type: "Python / YOLOv8",
    description: "Computer vision service for vehicle detection and ANPR",
    icon: <Cpu className="w-10 h-10 text-green-500" />,
    features: [
      "RTSP stream processing",
      "Real-time vehicle detection",
      "License plate recognition",
      "Multi-camera support",
      "Mock mode for testing",
      "Event publishing to API",
    ],
  },
  {
    title: "Self-Service Kiosk",
    type: "Next.js PWA",
    description: "Touch-screen interface for customer self-service",
    icon: <QrCode className="w-10 h-10 text-green-500" />,
    features: [
      "QR code scanning",
      "Payment processing",
      "Receipt printing",
      "Slot reservation",
      "Find My Car feature",
      "Wallet top-up",
    ],
  },
];

const aiCapabilities = [
  {
    title: "YOLOv8 Detection",
    description: "State-of-the-art object detection model",
    icon: <Cpu className="w-6 h-6 text-green-500" />,
  },
  {
    title: "<100ms Latency",
    description: "Real-time processing for instant response",
    icon: <Zap className="w-6 h-6 text-green-500" />,
  },
  {
    title: "OpenVINO ANPR",
    description: "Intel-optimized plate recognition",
    icon: <Camera className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Multi-Camera",
    description: "Process multiple RTSP streams",
    icon: <Settings className="w-6 h-6 text-green-500" />,
  },
];

const hardwareIntegrations = [
  {
    name: "Gate Controllers",
    icon: "🚧",
    description: "Automatic barrier gates for entry and exit points with remote control capabilities.",
    protocols: ["HTTP/REST", "RS485", "Modbus"],
  },
  {
    name: "LED Displays",
    icon: "📺",
    description: "Show available slots, directional arrows, and custom messages to guide drivers.",
    protocols: ["HTTP/REST", "RS485"],
  },
  {
    name: "Ticket Printers",
    icon: "🎫",
    description: "Thermal printers for entry tickets and exit receipts with QR codes.",
    protocols: ["ESC/POS", "HTTP/REST"],
  },
];

const userInterfaces = [
  {
    title: "Dashboard",
    path: "/dashboard",
    description: "Main admin dashboard with real-time monitoring, analytics, and management tools.",
    icon: <BarChart3 className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Find My Car",
    path: "/find-car",
    description: "Public interface for visitors to locate their parked vehicle using license plate or token.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Self-Service Kiosk",
    path: "/kiosk",
    description: "Touch-screen interface for payment, token lookup, and receipt printing.",
    icon: <QrCode className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Camera Streams",
    path: "/dashboard/cameras",
    description: "Live MJPEG streams from all connected cameras with snapshot capabilities.",
    icon: <Camera className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Wallet Management",
    path: "/dashboard/wallet",
    description: "Digital wallet for parking payments with top-up and transfer features.",
    icon: <Wallet className="w-6 h-6 text-green-500" />,
  },
  {
    title: "API Documentation",
    path: "/docs",
    description: "Interactive Swagger documentation for REST and GraphQL-like APIs.",
    icon: <FileText className="w-6 h-6 text-green-500" />,
  },
];

const techStack = [
  { name: "Next.js 16", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "YOLOv8", icon: "🎯" },
  { name: "OpenVINO", icon: "🧠" },
  { name: "Prisma", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Socket.io", icon: "🔌" },
  { name: "Stripe", icon: "💳" },
  { name: "Leaflet.js", icon: "🗺️" },
  { name: "FFmpeg", icon: "🎬" },
];
