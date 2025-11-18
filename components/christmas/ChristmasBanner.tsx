'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function ChristmasBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[10000] max-w-sm">
      <div className="relative bg-gradient-to-r from-red-600 via-green-600 to-red-600 p-1 rounded-2xl shadow-2xl animate-gradient">
        <div className="bg-background rounded-xl p-6 relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>

          {/* Banner content */}
          <div className="text-center">
            <div className="text-4xl mb-2">🎄</div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              Happy Holidays!
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Wishing you joy and success this festive season
            </p>
            <div className="flex justify-center gap-2 text-2xl">
              ❄️ 🎅 🎁 ⛄
            </div>
          </div>

          {/* Decorative stars */}
          <div className="absolute -top-2 -left-2 text-yellow-400 animate-pulse">✨</div>
          <div className="absolute -bottom-2 -right-2 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
