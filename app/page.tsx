import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WorkProcess from "@/components/home/WorkProcess";
import ProductsPreview from "@/components/home/ProductsPreview";
import HomepageCTA from "@/components/home/HomepageCTA";
import { getServices, getPortfolioItems, getWorkProcess, getProducts } from "@/lib/sanity/fetch";

export default async function Home() {
  // Fetch all data in parallel
  const [services, portfolioItems, workProcess, products] = await Promise.all([
    getServices(),
    getPortfolioItems(),
    getWorkProcess(),
    getProducts(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview services={services} />
      <ProductsPreview products={products} />
      <PortfolioPreview portfolioItems={portfolioItems} />
      <WorkProcess workProcess={workProcess} />
      <HomepageCTA />
    </>
  );
}