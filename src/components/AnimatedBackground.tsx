
import React from 'react';

export const AnimatedBackground = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => i);

  const getRandomAnimation = () => {
    const animations = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble}
          className={`absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 ${getRandomAnimation()}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-cyan-900/10" />
    </div>
  );
};
