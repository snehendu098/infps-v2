'use client';

import { useEffect, useRef } from 'react';

export default function LiquidEther() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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

    const particleCount = 50;
    const colors = {
      primary: { h: 20, s: 100, l: 70 }, // #FF9966 (coral)
      secondary: { h: 15, s: 100, l: 60 }, // #FF6B35 (orange)
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 100 + 50,
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
        // Update position with sine wave motion for fluid effect
        particle.x += particle.vx + Math.sin(time + i * 0.1) * 0.3;
        particle.y += particle.vy + Math.cos(time + i * 0.1) * 0.3;

        // Wrap around screen
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(40px)' }}
    />
  );
}
