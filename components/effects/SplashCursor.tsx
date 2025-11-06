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

export default function SplashCursor() {
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
      }, 1200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create trail effect (throttled)
      const now = Date.now();
      if (now - lastTrailTime.current > 50) {
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
        }, 600);
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
        className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-gradient-to-r from-[#FF9966] to-[#FF6B35] mix-blend-screen transition-transform duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
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
            animation: 'fadeOut 0.6s ease-out forwards',
          }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF9966]/40 to-[#FF6B35]/40" />
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
            className="w-16 h-16 rounded-full border-2 border-[#FF9966] animate-ping"
            style={{
              animationDuration: '1.2s',
              animationIterationCount: '1',
            }}
          />
          {/* Middle ring */}
          <div
            className="absolute inset-0 w-16 h-16 rounded-full border-2 border-[#FF6B35]/60 animate-ping"
            style={{
              animationDuration: '1s',
              animationIterationCount: '1',
              animationDelay: '0.1s',
            }}
          />
          {/* Inner splash */}
          <div
            className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#FF9966]/30 to-[#FF6B35]/30 animate-ping"
            style={{
              animationDuration: '0.8s',
              animationIterationCount: '1',
            }}
          />
        </div>
      ))}
    </>
  );
}
