import { ArrowRight, Hospital, Users, Stethoscope, FlaskConical, Pill, Bed, Calendar, CreditCard, BarChart3, Shield, Building2, Fingerprint, FileText, Heart, Ambulance, ClipboardList } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Hospital ERP - Complete Hospital Management System | Infiniti Tech Partners",
  description: "Enterprise hospital management system with EMR/EHR, patient registration, OPD/IPD management, pharmacy, laboratory, radiology, billing, and multi-branch support.",
};

export default function HospitalERPProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-600/20 via-rose-500/20 to-red-700/20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              Hospital ERP
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Complete Hospital Management System
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Enterprise-grade HMS with EMR/EHR, patient management, diagnostics, pharmacy, billing, and multi-branch support—designed for NABH/JCI compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://hospital-vnyb.vercel.app/"
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
              Comprehensive Healthcare Features
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern hospital or clinic
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

      {/* Clinical Modules */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Clinical & EMR Modules
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete electronic medical records and clinical workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalModules.map((module, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-red-500/20 to-rose-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-red-600 font-medium mb-4">{module.type}</p>
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
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

      {/* Diagnostics & Support */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Diagnostics & Support Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Integrated laboratory, radiology, pharmacy, and support modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticsModules.map((module, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all hover:scale-105"
              >
                <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {module.icon}
                </div>
                <h4 className="font-bold mb-2">{module.title}</h4>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance & Operations */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Finance & Operations
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete revenue cycle and operational management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeModules.map((module, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    {module.icon}
                  </div>
                  <h4 className="font-bold text-lg">{module.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Compliance */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Integration & Compliance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Standards-compliant with extensive integration capabilities
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
                <p className="text-muted-foreground mb-4">{integration.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {integration.standards.map((standard, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-600 font-medium"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
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
              Enterprise-grade healthcare technology stack
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
      <section className="py-20 bg-gradient-to-r from-red-600/40 to-rose-500/40 relative">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience the power of Hospital ERP today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://hospital-vnyb.vercel.app/"
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
    title: "Patient Registration",
    description: "Unique MRN generation, multi-ID support (govt ID, insurance, corporate), biometric identification, family linking, and document management.",
    icon: <Users className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Appointment & Scheduling",
    description: "Doctor and department-wise slots, teleconsultation support, online booking ready, no-show tracking, and automated SMS/WhatsApp reminders.",
    icon: <Calendar className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Queue Management",
    description: "Token generation, real-time display boards, priority tagging for emergency/VIP patients, and department-wise queue tracking.",
    icon: <ClipboardList className="w-8 h-8 text-red-500" />,
  },
  {
    title: "OPD/IPD Management",
    description: "Complete outpatient and inpatient workflows with admission, transfer, discharge, bed management, and ward-based tariffs.",
    icon: <Stethoscope className="w-8 h-8 text-red-500" />,
  },
  {
    title: "EMR/EHR",
    description: "SOAP notes, clinical templates by specialty, e-prescriptions, vitals charting, allergies, and complete medical history.",
    icon: <FileText className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Multi-Branch Support",
    description: "Manage multiple hospitals, clinics, and diagnostic centers with centralized or branch-specific configurations.",
    icon: <Building2 className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Biometric Integration",
    description: "Staff attendance, patient identification, clinical sign-offs, and access control for sensitive areas like ICU and OT.",
    icon: <Fingerprint className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Analytics & Dashboards",
    description: "Operational, financial, and clinical dashboards with occupancy rates, revenue by department, and quality metrics.",
    icon: <BarChart3 className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Compliance Ready",
    description: "NABH/JCI-friendly reports, incident reporting, consent management, MLC handling, and complete audit trails.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
  },
];

const clinicalModules = [
  {
    title: "OPD EMR",
    type: "Outpatient Module",
    description: "Complete outpatient electronic medical records",
    icon: <Stethoscope className="w-10 h-10 text-red-500" />,
    features: [
      "SOAP notes documentation",
      "Chief complaints & history",
      "Vitals & BMI tracking",
      "e-Prescription with drug database",
      "Lab & radiology orders",
      "Follow-up scheduling",
    ],
  },
  {
    title: "IPD Management",
    type: "Inpatient Module",
    description: "Comprehensive inpatient care management",
    icon: <Bed className="w-10 h-10 text-red-500" />,
    features: [
      "Admission/Transfer/Discharge",
      "Bed allocation & management",
      "Progress & nursing notes",
      "Medication administration (eMAR)",
      "Ward-based tariffs",
      "Specialty consultations",
    ],
  },
  {
    title: "OT Management",
    type: "Surgical Module",
    description: "Operating theater scheduling and management",
    icon: <Heart className="w-10 h-10 text-red-500" />,
    features: [
      "OT scheduling with team",
      "Pre-op checklists & consents",
      "Implant/consumable tracking",
      "OT utilization reports",
      "Post-op notes & recovery",
      "Auto-billing integration",
    ],
  },
  {
    title: "ICU Module",
    type: "Critical Care",
    description: "Specialized intensive care unit workflows",
    icon: <Heart className="w-10 h-10 text-red-500" />,
    features: [
      "Frequent vitals charting",
      "Ventilator parameters",
      "Critical care checklists",
      "Sepsis & risk alerts",
      "Device integration ready",
      "Specialized ICU flows",
    ],
  },
  {
    title: "Emergency/Casualty",
    type: "ER Module",
    description: "Quick registration and triage management",
    icon: <Ambulance className="w-10 h-10 text-red-500" />,
    features: [
      "Quick registration",
      "Triage categories (Red/Yellow/Green)",
      "MLC flagging & reporting",
      "Emergency treatment notes",
      "IP/OP conversion",
      "Priority handling",
    ],
  },
  {
    title: "Nursing Station",
    type: "Care Module",
    description: "Nursing workflows and care plans",
    icon: <ClipboardList className="w-10 h-10 text-red-500" />,
    features: [
      "Care plan management",
      "Vitals charting",
      "Intake/output tracking",
      "Medication schedules",
      "Procedure logs",
      "Shift handover notes",
    ],
  },
];

const diagnosticsModules = [
  {
    title: "Laboratory (LIS)",
    description: "Test catalog, sample tracking, barcode generation, machine integration, result validation",
    icon: <FlaskConical className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Radiology (RIS/PACS)",
    description: "Modality scheduling, PACS integration, reporting templates, second opinions",
    icon: <FileText className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Pharmacy",
    description: "Drug formulary, inpatient/retail billing, stock management, expiry tracking",
    icon: <Pill className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Blood Bank",
    description: "Donor management, blood collection, component separation, cross-matching",
    icon: <Heart className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Inventory",
    description: "Purchase orders, GRN, vendor management, batch tracking, reorder levels",
    icon: <ClipboardList className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Asset Management",
    description: "Equipment registry, AMC/CMC tracking, maintenance schedules, downtime logs",
    icon: <Building2 className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Diet & Kitchen",
    description: "Diet orders, meal plans, kitchen production, food distribution tracking",
    icon: <Hospital className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Transport",
    description: "Ambulance booking, dispatch, trip logs, charges tracking",
    icon: <Ambulance className="w-6 h-6 text-red-500" />,
  },
];

const financeModules = [
  {
    title: "Billing & Tariffs",
    description: "OP/IP billing, package billing, split billing for patient + insurer + corporate, multiple payers per bill.",
    icon: <CreditCard className="w-6 h-6 text-red-500" />,
  },
  {
    title: "TPA & Insurance",
    description: "TPA master contracts, cashless pre-authorization, claims preparation, denial tracking.",
    icon: <Shield className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Cash & Payments",
    description: "Multiple payment modes (cash, card, UPI), advances, refunds, daily cash closure.",
    icon: <CreditCard className="w-6 h-6 text-red-500" />,
  },
  {
    title: "HR & Attendance",
    description: "Staff profiles, shift rosters, leave management, biometric attendance, overtime calculation.",
    icon: <Users className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Accounting Interface",
    description: "Chart of accounts mapping, Tally/ERP export, revenue recognition by department.",
    icon: <BarChart3 className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Reports & Analytics",
    description: "Custom report builder, scheduled reports, multi-branch comparison, KPI benchmarking.",
    icon: <FileText className="w-6 h-6 text-red-500" />,
  },
];

const integrations = [
  {
    name: "Healthcare Standards",
    icon: "🏥",
    description: "Ready for healthcare interoperability standards",
    standards: ["HL7", "FHIR", "DICOM", "ICD-10"],
  },
  {
    name: "External Systems",
    icon: "🔗",
    description: "Connect with existing systems and services",
    standards: ["Tally/SAP", "Payment Gateways", "SMS/WhatsApp", "Email"],
  },
  {
    name: "Compliance",
    icon: "✅",
    description: "Built for regulatory compliance",
    standards: ["NABH", "JCI", "HIPAA Ready", "Audit Logs"],
  },
];

const techStack = [
  { name: "React 18", icon: "⚛️" },
  { name: "Vite", icon: "⚡" },
  { name: "Express.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "Prisma", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Ant Design", icon: "🐜" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Recharts", icon: "📊" },
  { name: "JWT Auth", icon: "🔐" },
];
