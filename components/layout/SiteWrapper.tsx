'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SplashCursor from "@/components/effects/SplashCursor";
import LiquidEther from "@/components/effects/LiquidEther";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Snowfall from "@/components/effects/Snowfall";
import ChristmasLights from "@/components/effects/ChristmasLights";
import { useSiteSettings } from "@/lib/context/SiteSettingsContext";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = useSiteSettings();

  // Check if effects are enabled (default to true if not specified)
  const showSnowfall = settings.snowfall?.enabled !== false;
  const showChristmasLights = settings.christmasLights?.enabled !== false;
  const showScrollProgress = settings.scrollProgress?.enabled !== false;
  const showSplashCursor = settings.splashCursor?.enabled !== false;
  const showLiquidEther = settings.liquidEther?.enabled !== false;
  const showSmoothScroll = settings.smoothScroll?.enabled !== false;

  return (
    <>
      {/* Christmas Effects */}
      {showSnowfall && (
        <Snowfall
          snowflakeCount={settings.snowfall?.snowflakeCount}
          minRadius={settings.snowfall?.minRadius}
          maxRadius={settings.snowfall?.maxRadius}
          minSpeed={settings.snowfall?.minSpeed}
          maxSpeed={settings.snowfall?.maxSpeed}
          minOpacity={settings.snowfall?.minOpacity}
          maxOpacity={settings.snowfall?.maxOpacity}
        />
      )}
      {showChristmasLights && (
        <ChristmasLights
          spacing={settings.christmasLights?.spacing}
          colors={settings.christmasLights?.colors}
          pulseSpeed={settings.christmasLights?.pulseSpeed}
          glowRadius={settings.christmasLights?.glowRadius}
        />
      )}

      {/* Scroll Progress Line */}
      {showScrollProgress && (
        <ScrollProgress
          color={settings.scrollProgress?.color}
          height={settings.scrollProgress?.height}
        />
      )}

      {/* Custom Cursor Effects */}
      {showSplashCursor && (
        <SplashCursor
          dotSize={settings.splashCursor?.dotSize}
          primaryColor={settings.splashCursor?.primaryColor}
          secondaryColor={settings.splashCursor?.secondaryColor}
          trailThrottle={settings.splashCursor?.trailThrottle}
          trailDuration={settings.splashCursor?.trailDuration}
          rippleDuration={settings.splashCursor?.rippleDuration}
        />
      )}
      {showLiquidEther && (
        <LiquidEther
          desktopParticleCount={settings.liquidEther?.desktopParticleCount}
          tabletParticleCount={settings.liquidEther?.tabletParticleCount}
          mobileParticleCount={settings.liquidEther?.mobileParticleCount}
          primaryColor={settings.liquidEther?.primaryColor}
          secondaryColor={settings.liquidEther?.secondaryColor}
          desktopBlur={settings.liquidEther?.desktopBlur}
          tabletBlur={settings.liquidEther?.tabletBlur}
          mobileBlur={settings.liquidEther?.mobileBlur}
        />
      )}
      {showSmoothScroll && (
        <SmoothScroll
          duration={settings.smoothScroll?.duration}
          navbarOffset={settings.smoothScroll?.navbarOffset}
        />
      )}

      {/* Content */}
      <div className="relative w-full">
        <Navbar />
        <main className="pt-16 sm:pt-20 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
