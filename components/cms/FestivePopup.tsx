'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CMSPopup } from '@/lib/cms/types';
import { getActivePopups } from '@/lib/cms/data';
import { initializeCMS } from '@/lib/cms/sample-data';
import Image from 'next/image';

export default function FestivePopup() {
  const [popup, setPopup] = useState<CMSPopup | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize CMS with sample data if first time
    initializeCMS();

    // Check for active popups
    const activePopups = getActivePopups();
    if (activePopups.length > 0) {
      const popupToShow = activePopups[0]; // Show first active popup

      // Check if user has dismissed this popup recently
      const dismissedPopups = JSON.parse(
        localStorage.getItem('dismissed_popups') || '[]'
      );

      const isDismissed = dismissedPopups.some(
        (p: { id: string; timestamp: number }) =>
          p.id === popupToShow.id &&
          Date.now() - p.timestamp < 24 * 60 * 60 * 1000 // 24 hours
      );

      if (!isDismissed) {
        setPopup(popupToShow);
        // Show popup after a short delay
        setTimeout(() => setIsVisible(true), 1000);
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setPopup(null), 300); // Wait for animation

    if (popup) {
      // Save dismissal to localStorage
      const dismissedPopups = JSON.parse(
        localStorage.getItem('dismissed_popups') || '[]'
      );
      dismissedPopups.push({
        id: popup.id,
        timestamp: Date.now(),
      });
      localStorage.setItem('dismissed_popups', JSON.stringify(dismissedPopups));
    }
  };

  if (!popup) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div
          className="relative rounded-2xl shadow-2xl overflow-hidden"
          style={{
            backgroundColor: popup.backgroundColor || '#fff',
            color: popup.textColor || '#000',
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            aria-label="Close"
          >
            <X size={20} className="text-white" />
          </button>

          {/* Image */}
          {popup.image && (
            <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5">
              <Image
                src={popup.image.src}
                alt={popup.image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{popup.title}</h2>
            <p className="text-base md:text-lg mb-6 opacity-90">{popup.message}</p>

            {/* CTA Button */}
            {popup.ctaText && popup.ctaLink && (
              <a
                href={popup.ctaLink}
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                onClick={handleClose}
              >
                {popup.ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
