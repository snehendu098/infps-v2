'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { SiteSettings } from '@/lib/sanity/types';

// Default settings (all effects enabled)
const defaultSettings: SiteSettings = {
  _id: 'default',
  _type: 'siteSettings',
  particleLogo: { enabled: true },
  liquidEther: { enabled: true },
  splashCursor: { enabled: true },
  snowfall: { enabled: true },
  christmasLights: { enabled: true },
  smoothScroll: { enabled: true },
  scrollProgress: { enabled: true },
};

const SiteSettingsContext = createContext<SiteSettings>(defaultSettings);

export function SiteSettingsProvider({
  children,
  settings,
}: {
  children: ReactNode;
  settings: SiteSettings | null;
}) {
  // Use provided settings or fall back to defaults
  const value = settings || defaultSettings;

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
