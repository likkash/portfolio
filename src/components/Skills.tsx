
import React, { useEffect, useState } from 'react';

export const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skills = [
    { 
      name: 'HTML', 
      percentage: 80, 
      color: 'from-orange-400 to-red-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
        </svg>
      )
    },
    { 
      name: 'CSS', 
      percentage: 30, 
      color: 'from-blue-400 to-cyan-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
        </svg>
      )
    },
    { 
      name: 'JavaScript', 
      percentage: 50, 
      color: 'from-yellow-400 to-orange-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
          <path d="M17.568 19.55c.4.6.964 1.04 1.936 1.04 1.088 0 1.68-.64 1.68-1.52 0-1.04-.68-1.44-1.816-2.04l-.624-.272c-1.808-.768-3.008-1.728-3.008-3.76 0-1.872 1.424-3.296 3.648-3.296 1.584 0 2.72.552 3.536 2l-1.936 1.24c-.424-.76-.88-1.056-1.6-1.056-.728 0-1.192.464-1.192 1.056 0 .736.464 1.04 1.536 1.504l.624.272c2.128.912 3.328 1.84 3.328 3.936 0 2.256-1.776 3.472-4.16 3.472-2.336 0-3.84-1.112-4.576-2.568l2.048-1.176zm-8.52.08c.368.656.704 1.208 1.512 1.208.768 0 1.256-.3 1.256-1.464V10h2.512v9.424c0 2.416-1.416 3.52-3.48 3.52-1.864 0-2.944-.968-3.496-2.136l1.696-1.176z" fill="#000"/>
        </svg>
      )
    },
    { 
      name: 'React', 
      percentage: 80, 
      color: 'from-cyan-400 to-blue-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <path d="M12 1c4.5 0 10 2.28 10 6.5s-5.5 6.5-10 6.5S2 11.72 2 7.5 7.5 1 12 1z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
          <path d="M12 16c4.5 0 10 2.28 10 6.5S16.5 29 12 29s-10-2.28-10-6.5S7.5 16 12 16z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
          <path d="M6.5 9.5c0 4.5 2.5 10 5.5 10s5.5-5.5 5.5-10S15.5-0.5 12-0.5 6.5 5 6.5 9.5z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
          <path d="M17.5 14.5c0-4.5-2.5-10-5.5-10s-5.5 5.5-5.5 10 2.5 10 5.5 10 5.5-5.5 5.5-10z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        </svg>
      )
    },
    { 
      name: 'Java', 
      percentage: 40, 
      color: 'from-red-400 to-pink-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149" fill="#ED8B00"/>
          <path d="M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill="#ED8B00"/>
          <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573" fill="#5382A1"/>
          <path d="M19.33 20.5s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82" fill="#5382A1"/>
        </svg>
      )
    },
    { 
      name: 'SQL', 
      percentage: 60, 
      color: 'from-green-400 to-emerald-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.686 2 6 3.79 6 6v12c0 2.21 2.686 4 6 4s6-1.79 6-4V6c0-2.21-2.686-4-6-4z" stroke="#0078D4" strokeWidth="1.5" fill="none"/>
          <ellipse cx="12" cy="6" rx="6" ry="2" fill="#0078D4"/>
          <ellipse cx="12" cy="18" rx="6" ry="2" fill="#0078D4"/>
          <path d="M6 10c0 1.1 2.686 2 6 2s6-.9 6-2" stroke="#0078D4" strokeWidth="1.5"/>
          <path d="M6 14c0 1.1 2.686 2 6 2s6-.9 6-2" stroke="#0078D4" strokeWidth="1.5"/>
        </svg>
      )
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-blue-500/20 animate-scale-in">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-700"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={animated ? `${2 * Math.PI * 50 * (1 - skill.percentage / 100)}` : `${2 * Math.PI * 50}`}
                      strokeLinecap="round"
                      className="transition-all duration-2000 ease-out"
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Center percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{skill.percentage}%</span>
                  </div>
                </div>
                
                {/* Skill name and logo */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  {skill.logo}
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
