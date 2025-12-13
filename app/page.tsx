import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WorkProcess from "@/components/home/WorkProcess";
import ProductsPreview from "@/components/home/ProductsPreview";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProductsPreview />
      <PortfolioPreview />
      <WorkProcess />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-r from-primary/40 to-secondary/40 text-white relative z-10">
        {/* Blackish overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-95">
            Let's discuss your project and bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-primary px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl touch-manipulation"
          >
            Get in Touch
            <ArrowRight size={20} className="hidden sm:block" />
          </Link>
        </div>
      </section>
    </>
  );
}