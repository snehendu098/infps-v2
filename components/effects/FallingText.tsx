'use client';

import { useEffect, useRef } from 'react';

interface FallingTextProps {
  text: string;
  className?: string;
}

export default function FallingText({ text, className = '' }: FallingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = text.split('');
    const container = containerRef.current;
    container.innerHTML = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(-100px)';
      span.style.animation = `fallIn 0.8s ease-out forwards`;
      span.style.animationDelay = `${index * 0.05}s`;
      span.style.willChange = 'transform, opacity';
      container.appendChild(span);
    });
  }, [text]);

  return (
    <>
      <style>{`
        @keyframes fallIn {
          0% {
            opacity: 0;
            transform: translateY(-100px) rotate(-10deg);
          }
          60% {
            opacity: 1;
            transform: translateY(10px) rotate(2deg);
          }
          80% {
            transform: translateY(-5px) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        className={className}
        style={{
          display: 'block',
          minHeight: '1em'
        }}
      />
    </>
  );
}
