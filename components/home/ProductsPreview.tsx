'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Store, Calculator, GraduationCap, Truck, Package, type LucideIcon } from 'lucide-react';
import type { Product } from '@/lib/sanity/types';

// Icon mapping for products
const ICON_MAP: Record<string, LucideIcon> = {
  Store,
  Calculator,
  GraduationCap,
  Truck,
  Package,
};

// Fallback data if Sanity fetch fails
const FALLBACK_PRODUCTS = [
  {
    _id: '1',
    name: 'Marketplace',
    tagline: 'B2B Commodity Trading',
    slug: 'marketplace',
    icon: 'Store',
    gradient: 'linear-gradient(135deg, #10b981, #047857)',
    screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070',
    shortDescription: 'Enterprise B2B marketplace with tokenization, escrow payments, and blockchain integration.',
  },
  {
    _id: '2',
    name: 'Accubooks',
    tagline: 'Enterprise Accounting',
    slug: 'accubooks',
    icon: 'Calculator',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    screenshot: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011',
    shortDescription: 'Multi-tenant accounting with double-entry bookkeeping, inventory, HR & payroll.',
  },
  {
    _id: '3',
    name: 'School ERP',
    tagline: 'School Management',
    slug: 'school-erp',
    icon: 'GraduationCap',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    screenshot: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032',
    shortDescription: 'Complete school management covering admissions, academics, fees, and transport.',
  },
  {
    _id: '4',
    name: 'Fleet Management',
    tagline: 'Enterprise Telematics',
    slug: 'fleet-management',
    icon: 'Truck',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    screenshot: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
    shortDescription: 'Real-time GPS tracking, ELD compliance, driver management, and analytics.',
  },
];

interface ProductsPreviewProps {
  products?: Product[];
}

export default function ProductsPreview({ products }: ProductsPreviewProps) {
  const displayProducts = products && products.length > 0 ? products : FALLBACK_PRODUCTS;

  return (
    <section className="py-32 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready enterprise solutions built with modern technologies
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProducts.map((product, index) => {
            const iconName = product.icon || 'Package';
            const Icon = ICON_MAP[iconName] || Package;
            const slug = typeof product.slug === 'string' ? product.slug : (product.slug as { current: string })?.current;
            const screenshotData = product.screenshot as { asset?: { url?: string } } | string | undefined;
            const imageUrl = typeof screenshotData === 'string' ? screenshotData : screenshotData?.asset?.url;
            return (
              <Link
                key={product._id || index}
                href={`/products/${slug}`}
                className="group rounded-2xl overflow-hidden bg-background border-2 border-muted hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Product Image */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10 group-hover:from-black/30 group-hover:to-black/50 transition-all" />
                  <Image
                    src={imageUrl || '/placeholder.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: product.gradient || 'linear-gradient(135deg, #FF9966, #FF6B35)' }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary/80 font-semibold mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
