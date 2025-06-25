import React, { useState, useEffect } from 'react';
// Import Lucide React icons
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

// Import types from the central types file
// Assuming 'types.ts' is in the same 'src' directory.
// If it's in a 'src/types' folder, adjust the path: './types/types'.
import { HeaderProps, HeroProps, Project, ProjectCardProps, NavLinkProps, SkillPillProps, ContactLinkProps, SocialIconProps } from './types';

// Import components and sections
// Assuming these are in their respective subdirectories within 'src'
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


const App: React.FC = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // State for scroll-to-top button visibility
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  // State to track mouse Y position for header hover detection
  const [mouseY, setMouseY] = useState<number | null>(null);

  // Function to smoothly scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // 'projects' to center, all others (including 'about') to start
      if (sectionId === 'projects') {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  // Effect to handle scroll for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to track mouse Y position for global hover
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-gray-100 font-inter antialiased">
      {/* Tailwind CSS Custom Keyframes for animations */}
      {/* These styles could ideally be in a global CSS file (e.g., src/index.css) */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite; /* Adjust duration for speed */
        }

        .animate-scroll-left:hover {
          animation-play-state: paused; /* Pause on hover */
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Project Card Hover Animation */
        .project-card-hover-overlay {
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.5s ease-out, opacity 0.5s ease-out;
        }

        .group:hover .project-card-hover-overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .project-card-content {
          transition: transform 0.5s ease-out, opacity 0.5s ease-out;
        }

        .group:hover .project-card-content {
          transform: translateY(-100%); /* Or scale/fade out */
          opacity: 0;
        }
      `}</style>

      {/* Header component */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} mouseY={mouseY} />

      <main className="relative z-10">
        {/* Main sections of the portfolio */}
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer component */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpRight className="rotate-[-90deg]" size={24} />
        </button>
      )}
    </div>
  );
};

export default App;

