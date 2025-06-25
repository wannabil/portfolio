import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Import types from the central types file
import { HeroProps } from '../types'; // Corrected import path for types

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      {/* Background Video - Opacity adjusted for light gradient */}
      <video
        className="absolute inset-0 object-cover w-full h-full z-0 opacity-10"
        autoPlay
        loop
        muted
        playsInline
        src="https://www.w3schools.com/tags/movie.mp4"
        poster="https://placehold.co/1920x1080/667eea/764ba2?text=Video+Loading"
        aria-label="Background video showcasing abstract data visualization"
      >
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white animate-fade-in-up">
          Building the Future, <br className="hidden sm:inline" /> <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">One Line of Code at a Time.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 opacity-90 animate-fade-in-up delay-200">
          Innovative solutions, robust systems, and a passion for turning complex data into actionable insights.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <a
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-xl hover:translate-y-[-2px] hover:shadow-indigo-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white cursor-pointer"
          >
            View My Work
          </a>
          <a
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

