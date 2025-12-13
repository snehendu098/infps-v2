'use client';

import Link from 'next/link';
import { ArrowRight, Users, Clock, DollarSign, TrendingUp } from 'lucide-react';

export default function ProductsPreview() {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use software solutions designed for modern businesses
          </p>
        </div>

        {/* HRMS Product Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 p-1 rounded-3xl">
            <div className="bg-background p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Now Available
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    HRMS Platform
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Complete Human Resource Management System for employee management,
                    attendance tracking, payroll processing, and more. Built with modern
                    technology for reliability and performance.
                  </p>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Users size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Employee Mgmt</h4>
                        <p className="text-xs text-muted-foreground">Full profiles & KYC</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Attendance</h4>
                        <p className="text-xs text-muted-foreground">Track & leaves</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <DollarSign size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Payroll</h4>
                        <p className="text-xs text-muted-foreground">Auto processing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Projects</h4>
                        <p className="text-xs text-muted-foreground">Task tracking</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/products/hrms"
                      className="inline-flex items-center justify-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      href="https://hrms1.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold transition-all hover:bg-primary hover:text-white"
                    >
                      Launch HRMS
                    </Link>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                        <div className="text-6xl font-bold text-primary mb-4">HRMS</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Admin Dashboard
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Manager Portal
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            Employee Portal
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
