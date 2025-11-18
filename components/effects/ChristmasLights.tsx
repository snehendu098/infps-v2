'use client';

import { useEffect, useRef, useState } from 'react';

export default function ChristmasLights() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Visible by default
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide lights while scrolling
      setIsScrolling(true);
      setIsVisible(false);

      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Show lights again when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true);
      }, 150); // Small delay to detect scroll stop
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200; // Just for the top of the page
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Light colors
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];

    // Light positions
    const lights: Array<{ x: number; color: string; offset: number }> = [];
    const spacing = 60;
    const numLights = Math.ceil(canvas.width / spacing);

    for (let i = 0; i < numLights; i++) {
      lights.push({
        x: i * spacing + 30,
        color: colors[i % colors.length],
        offset: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02; // Slower for smoother dimming/brightening

      // Draw wire
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < canvas.width; i++) {
        const y = 30 + Math.sin(i * 0.05) * 10;
        if (i === 0) {
          ctx.moveTo(i, y);
        } else {
          ctx.lineTo(i, y);
        }
      }
      ctx.stroke();

      // Draw lights with enhanced dimming/brightening
      lights.forEach((light) => {
        const y = 30 + Math.sin(light.x * 0.05) * 10;

        // Enhanced pulse effect - dims from 0.3 to 1.0
        const pulse = Math.sin(time + light.offset) * 0.35 + 0.65;

        // Glow effect with pulsing intensity
        const glowRadius = 15 + Math.sin(time + light.offset) * 3;
        const gradient = ctx.createRadialGradient(light.x, y, 0, light.x, y, glowRadius);
        gradient.addColorStop(0, light.color);
        gradient.addColorStop(0.4, `${light.color}80`);
        gradient.addColorStop(0.7, `${light.color}40`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.globalAlpha = pulse * 0.8;
        ctx.beginPath();
        ctx.arc(light.x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Light bulb with pulsing brightness
        ctx.globalAlpha = pulse;
        ctx.fillStyle = light.color;
        ctx.beginPath();
        ctx.arc(light.x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Highlight with pulsing effect
        ctx.globalAlpha = pulse;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(light.x - 1, y - 1, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full pointer-events-none z-[9997] transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ height: '200px' }}
    />
  );
}
