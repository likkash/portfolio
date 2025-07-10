import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
      title: 'Protospace',
      issuer: 'Knowledge Institute of Technology',
      image: '/knowledge.jpg',
      description: 'Won 1st prize in Protospace at KIOT for developing a Biometric Voting System that ensures secure, fraud-free digital elections using fingerprint authentication.'
    },
    {
      title: 'Quiz Competition',
      issuer: 'Muthayammal Engineering College',
      image: '/muthayammal.jpg',
      description: 'Secured 1st prize in a Technology Quiz Competition at Muthayammal Engineering College, showcasing strong technical knowledge and quick thinking.'
    },
    {
      title: 'Hackathon-24',
      issuer: 'M.Kumarasamy College of Engineering',
      image: '/kumarasamy.jpg',
      description: 'Participated in my first 24-hour hackathon at Kumarasamy College of Engineering, gaining hands-on experience in rapid problem-solving and team collaboration.'
    },
    {
      title: 'MERN stack Developer',
      issuer: 'Zealous Tech Corp',
      image: '/zealous.jpg',
      description: 'Completed a MERN Stack internship at Zealous Tech Corp, where I developed a full-stack Expense Tracker web application as part of the project.'
    },
    {
      title: 'IV',
      issuer: 'Technotut',
      image: '/technotut.jpg',
      description: 'Attended an Industrial Visit and actively participated in a session at Technotut Solutions, exploring insights into the advanced technology sector and its real-world applications.'
    },
    {
      title: 'Java',
      issuer: 'Odugaatech',
      image: '/odugaa.jpg',
      description: 'Completed a Java internship at OdugaaTech, where I gained practical experience in core Java concepts and application development.'
    },
    {
      title: 'HackIndia 2025',
      issuer: 'Muthayammal Engineering College',
      image: '/hackindia.jpg',
      description: 'Participated in HackIndia 2025 held at Muthayammal Engineering College and advanced up to Round 3, gaining valuable exposure to competitive coding and innovation.'
    },
    {
      title: 'Docker & kubernetes',
      issuer: 'Crescent CedTech',
      image: '/DK.jpg',
      description: 'Attended a 2-day workshop on Docker and Kubernetes conducted by Crescent CedTech, gaining foundational knowledge in containerization and orchestration tools.'
    },
    {
      title: 'Software Testing',
      issuer: 'NPTEL - IIT Kharagpur',
      image: '/nptel_st.jpg',
      description: 'Earned an NPTEL certification in Software Testing with a score of 63%, demonstrating understanding of testing methodologies and quality assurance concepts.'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL - IIT Kharagpur',
      image: '/nptel_cc.jpg',
      description: 'Achieved an NPTEL certification in Cloud Computing with a score of 80%, showcasing strong knowledge in cloud architecture, services, and deployment models.'
    },
    {
      title: 'Foundation of Cloud IoT Edge ML',
      issuer: 'NPTEL - IIT Kharagpur',
      image: '/nptel_iot.jpg',
      description: 'Secured an NPTEL certification in Foundations of Cloud, IoT, Edge, and ML with 82%, reflecting solid understanding of integrated intelligent systems and emerging technologies.'
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

  const toggleZoom = (image: string) => {
    setZoomedImage(zoomedImage === image ? null : image);
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
              <span className="text-white font-medium">
                {currentProject + 1}/{projects.length}
              </span>
              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="cursor-pointer" onClick={() => toggleZoom(projects[currentProject].image)}>
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
              <span className="text-white font-medium">
                {currentCertificate + 1}/{certificates.length}
              </span>
              <button
                onClick={nextCertificate}
                className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="cursor-pointer" onClick={() => toggleZoom(certificates[currentCertificate].image)}>
                <img
                  src={certificates[currentCertificate].image}
                  alt={certificates[currentCertificate].title}
                  className="w-full h-64 object-contain rounded-lg mx-auto mb-4"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">{certificates[currentCertificate].title}</h4>
                <p className="text-gray-300 mb-4">{certificates[currentCertificate].description}</p>
                <p className="text-emerald-400">{certificates[currentCertificate].issuer}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Zoomed Image Modal */}
        {zoomedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={zoomedImage}
                alt="Zoomed View"
                className="w-full h-auto max-h-screen object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};