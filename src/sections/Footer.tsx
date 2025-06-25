import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// Import types from the central types file
import { SocialIconProps } from '../types'; // Corrected import path for types

// Import the SocialIcon component
import SocialIcon from '../components/SocialIcon'; // Assuming SocialIcon is now in src/components/SocialIcon.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <SocialIcon href="https://github.com/yourusername" icon={<Github size={24} />} ariaLabel="GitHub" />
          <SocialIcon href="https://linkedin.com/in/yourprofile" icon={<Linkedin size={24} />} ariaLabel="LinkedIn" />
          <SocialIcon href="mailto:your.email@example.com" icon={<Mail size={24} />} ariaLabel="Email" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

