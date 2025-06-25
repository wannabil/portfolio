import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Import necessary icons

// Define Prop Types for SocialIcon component
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-indigo-400 transform hover:scale-110 transition-transform duration-200"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

export default SocialIcon;

