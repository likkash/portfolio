
import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-blue-500/20 animate-scale-in">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            I’m an enthusiastic and creative developer, currently pursuing a B.Tech in Information Technology. With hands-on experience in both frontend and backend development, I enjoy crafting responsive, impactful web applications. My passion lies in exploring new technologies, building real-world solutions, and constantly improving my skills. I thrive on turning challenges into opportunities and coding ideas into meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
