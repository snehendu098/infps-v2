'use client';

import { useEffect, useRef, useState } from 'react';

interface LiquidEtherProps {
  desktopParticleCount?: number;
  tabletParticleCount?: number;
  mobileParticleCount?: number;
  primaryColor?: { h: number; s: number; l: number };
  secondaryColor?: { h: number; s: number; l: number };
  desktopBlur?: number;
  tabletBlur?: number;
  mobileBlur?: number;
}

export default function LiquidEther({
  desktopParticleCount = 50,
  tabletParticleCount = 35,
  mobileParticleCount = 20,
  primaryColor = { h: 20, s: 100, l: 70 },
  secondaryColor = { h: 15, s: 100, l: 60 },
  desktopBlur = 40,
  tabletBlur = 30,
  mobileBlur = 20,
}: LiquidEtherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkDeviceType();

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      checkDeviceType();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Liquid ether particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    // Responsive particle count and size - using props
    const getParticleConfig = () => {
      if (isMobile) {
        return { count: mobileParticleCount, minSize: 30, maxSize: 60 };
      } else if (isTablet) {
        return { count: tabletParticleCount, minSize: 40, maxSize: 80 };
      } else {
        return { count: desktopParticleCount, minSize: 50, maxSize: 100 };
      }
    };

    const config = getParticleConfig();
    const particleCount = config.count;

    const colors = {
      primary: primaryColor,
      secondary: secondaryColor,
    };

    // Initialize particles with responsive sizing
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() > 0.5 ? colors.primary.h : colors.secondary.h,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;

      particles.forEach((particle, i) => {
        // Different motion patterns based on device type
        if (isMobile) {
          // Horizontal flow on mobile with looping
          particle.x += 1.5; // Steady horizontal movement
          particle.y += Math.sin(time + i * 0.2) * 0.5; // Gentle vertical wave

          // Loop horizontally
          if (particle.x > canvas.width + particle.size) {
            particle.x = -particle.size;
            particle.y = Math.random() * canvas.height; // Randomize Y position on loop
          }
        } else {
          // Original fluid motion for desktop/tablet
          particle.x += particle.vx + Math.sin(time + i * 0.1) * 0.3;
          particle.y += particle.vy + Math.cos(time + i * 0.1) * 0.3;
        }

        // Wrap around screen for desktop/tablet
        if (!isMobile) {
          if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
          if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
          if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
          if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        } else {
          // Vertical bounds for mobile
          if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
          if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        }

        // Pulsing opacity
        const pulseOpacity = particle.opacity + Math.sin(time * 2 + i) * 0.1;

        // Create gradient for liquid effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size
        );

        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${pulseOpacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 60%, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isTablet]);

  // Responsive blur amount - using props
  const getBlurAmount = () => {
    if (isMobile) return `${mobileBlur}px`;
    if (isTablet) return `${tabletBlur}px`;
    return `${desktopBlur}px`;
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: `blur(${getBlurAmount()})` }}
    />
  );
}
