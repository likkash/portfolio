
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { AnimatedBackground } from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
