
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'Muthayammal Engineering College',
      period: '2022 - 2026',
      description: 'Currently pursuing Bachelor of Technology with focus on software development and emerging technologies.',
    },
    {
      degree: '12th Grade',
      institution: 'Vedhha Vikass Higher Secondary School',
      period: '2021 - 2022',
      description: 'Completed Higher Secondary Education in Computer Science with 89% aggregate, demonstrating strong academic performance and subject proficiency.',
    },
    {
      degree: '10th Grade',
      institution: 'JVM matriculation Higher Secondary School',
      period: '2019 - 2020',
      description: 'Completed Secondary Education with 94% aggregate, building a strong foundation in Mathematics and Science.',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">{edu.institution}</h4>
              
              <div className="flex items-center mb-4 text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{edu.period}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
