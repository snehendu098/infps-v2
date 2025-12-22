'use client';

import { useEffect } from 'react';

interface SmoothScrollProps {
  duration?: number;
  navbarOffset?: number;
}

export default function SmoothScroll({
  duration = 1500,
  navbarOffset = 80,
}: SmoothScrollProps) {
  useEffect(() => {
    // Handle anchor link clicks with smooth animated scroll
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset;

        // Smooth scroll with enhanced easing
        smoothScrollTo(targetPosition, duration);
      }
    };

    const smoothScrollTo = (target: number, scrollDuration: number) => {
      const start = window.pageYOffset;
      const distance = target - start;
      const startTime = performance.now();

      // Ultra-smooth easing function
      const easeInOutQuart = (t: number): number => {
        return t < 0.5
          ? 8 * t * t * t * t
          : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const easeProgress = easeInOutQuart(progress);

        window.scrollTo(0, start + distance * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
