'use client';

import { useEffect, useState, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface Trail {
  x: number;
  y: number;
  id: number;
}

interface SplashCursorProps {
  dotSize?: number;
  primaryColor?: string;
  secondaryColor?: string;
  trailThrottle?: number;
  trailDuration?: number;
  rippleDuration?: number;
}

export default function SplashCursor({
  dotSize = 12,
  primaryColor = '#FF9966',
  secondaryColor = '#FF6B35',
  trailThrottle = 50,
  trailDuration = 600,
  rippleDuration = 1200,
}: SplashCursorProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lastTrailTime = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, rippleDuration);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create trail effect (throttled)
      const now = Date.now();
      if (now - lastTrailTime.current > trailThrottle) {
        const newTrail: Trail = {
          x: e.clientX,
          y: e.clientY,
          id: now + Math.random(),
        };

        setTrails((prev) => [...prev, newTrail]);
        lastTrailTime.current = now;

        // Remove trail after animation
        setTimeout(() => {
          setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
        }, trailDuration);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen transition-transform duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        }}
      />

      {/* Mouse trail particles */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: 'translate(-50%, -50%)',
            animation: `fadeOut ${trailDuration / 1000}s ease-out forwards`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: `linear-gradient(to right, ${primaryColor}66, ${secondaryColor}66)` }}
          />
        </div>
      ))}

      {/* Splash ripples on click */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Outer ring */}
          <div
            className="w-16 h-16 rounded-full border-2 animate-ping"
            style={{
              borderColor: primaryColor,
              animationDuration: `${rippleDuration / 1000}s`,
              animationIterationCount: '1',
            }}
          />
          {/* Middle ring */}
          <div
            className="absolute inset-0 w-16 h-16 rounded-full border-2 animate-ping"
            style={{
              borderColor: `${secondaryColor}99`,
              animationDuration: `${rippleDuration / 1200}s`,
              animationIterationCount: '1',
              animationDelay: '0.1s',
            }}
          />
          {/* Inner splash */}
          <div
            className="absolute inset-0 w-16 h-16 rounded-full animate-ping"
            style={{
              background: `linear-gradient(to right, ${primaryColor}4D, ${secondaryColor}4D)`,
              animationDuration: `${rippleDuration / 1500}s`,
              animationIterationCount: '1',
            }}
          />
        </div>
      ))}
    </>
  );
}
