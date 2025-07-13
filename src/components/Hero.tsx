
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export const Hero = () => {
  const [typeText, setTypeText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Frontend Developer', 'Java Developer', 'Critical Thinker','Fast Learner'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typeText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setTypeText(currentRole.substring(0, typeText.length + 1));
        }
      } else {
        if (typeText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else {
          setTypeText(currentRole.substring(0, typeText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typeText, currentIndex, isDeleting, roles]);

  const handleResumeDownload = () => {
    // You'll need to add your resume PDF to the public folder
    // For now, this will open a placeholder - replace with your actual resume path
    window.open('/Likkash_IT_22IT042.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 pb-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Likkash R
          </h1>
        </div>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
            <span className="border-r-2 border-cyan-400 pr-2">
              {typeText}
            </span>
            <span className="ml-2 animate-pulse text-cyan-400">|</span>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-blue-500/20 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I’m an enthusiastic and creative developer, currently pursuing a B.Tech in Information Technology. With hands-on experience in both frontend and backend development, I enjoy crafting responsive, impactful web applications. My passion lies in exploring new technologies, building real-world solutions, and constantly improving my skills. I thrive on turning challenges into opportunities and coding ideas into meaningful digital experiences.
            </p>
          </div>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
          </button>
          <button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};
