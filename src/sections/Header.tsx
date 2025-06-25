import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Mail } from 'lucide-react';

// Import types from the central types file
import { HeaderProps, NavLinkProps } from '../types'; // Corrected import path for types

// Import the NavLink component
import NavLink from '../components/NavLink'; // Assuming NavLink is now in src/components/NavLink.tsx

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, scrollToSection, mouseY }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState<boolean>(false);

  // Define the height of the top "hover zone" in pixels
  const TOP_HOVER_ZONE_HEIGHT = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = !isScrolled || isHeaderHovered || (mouseY !== null && mouseY < TOP_HOVER_ZONE_HEIGHT);

  const headerVisibilityClass = isVisible
    ? 'translate-y-0 opacity-100'
    : '-translate-y-full opacity-0';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'} ${headerVisibilityClass}`}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a onClick={() => scrollToSection('hero')} className="text-3xl font-bold text-indigo-600 hover:scale-105 transition-transform duration-300 cursor-pointer">
          [Your Name]
        </a>

        {/* Desktop Navigation - icons only */}
        <nav className="hidden md:flex space-x-8">
          <NavLink sectionId="about" icon={<User size={24} />} text="About" onClick={scrollToSection} hideText={true} />
          <NavLink sectionId="projects" icon={<Briefcase size={24} />} text="Projects" onClick={scrollToSection} hideText={true} />
          <NavLink sectionId="contact" icon={<Mail size={24} />} text="Contact" onClick={scrollToSection} hideText={true} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {/* Mobile menu will still show text for better usability on small screens */}
          <NavLink sectionId="about" icon={<User size={20} />} text="About" onClick={scrollToSection} />
          <NavLink sectionId="projects" icon={<Briefcase size={20} />} text="Projects" onClick={scrollToSection} />
          <NavLink sectionId="contact" icon={<Mail size={20} />} text="Contact" onClick={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;

