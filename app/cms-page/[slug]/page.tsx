'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CMSPage } from '@/lib/cms/section-types';
import { SectionRenderer } from '@/components/cms/SectionRenderer';

export default function CMSPageRenderer() {
  const params = useParams();
  const slug = params.slug as string;
  const [page, setPage] = useState<CMSPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('cms_pages');
    if (stored) {
      const pages: CMSPage[] = JSON.parse(stored);
      const foundPage = pages.find((p) => p.slug === `/${slug}` && p.published);
      setPage(foundPage || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Render all sections in order */}
      {page.sections
        .sort((a, b) => a.order - b.order)
        .map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
    </div>
  );
}
