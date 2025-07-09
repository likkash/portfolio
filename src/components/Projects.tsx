
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const projects = [
    {
      title: 'Expense Tracker',
      description: 'A MERN stack web app built during my Zealous internship to manage daily expenses with features like CRUD operations, user login, and date-wise filtering.',
      image: '/expense.png',
      technologies: [ 'MongoDB', 'Express','React', 'Node.js',]
    },
    {
      title: 'Optimal Flight Route Finder',
      description: 'A React and Vite-based web app developed during Hack India to find the best flight routes using frontend logic and APIs, excluding backend integration.',
      image: '/flight.png',
      technologies: ['React', 'vite', 'Material-UI']
    },
  ];

  const certificates = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      image: '/placeholder.svg',
    },
    {
      title: 'Java Programming Certification',
      issuer: 'Oracle',
      image: '/placeholder.svg',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      image: '/placeholder.svg',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Projects & Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-emerald-500/20">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevProject}
                className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">{projects[currentProject].title}</h4>
                <p className="text-gray-300 mb-4">{projects[currentProject].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[currentProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="https://github.com/likkash?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Github size={20} />
                View All Projects
              </a>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certificates</h3>
          <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-green-500/20">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevCertificate}
                className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              <button
                onClick={nextCertificate}
                className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            <div className="text-center">
              <img
                src={certificates[currentCertificate].image}
                alt={certificates[currentCertificate].title}
                className="w-64 h-48 object-cover rounded-lg mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-white mb-2">{certificates[currentCertificate].title}</h4>
              <p className="text-emerald-400">{certificates[currentCertificate].issuer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
