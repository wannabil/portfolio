import React from 'react';
import { User, Briefcase, Mail } from 'lucide-react'; // Import necessary icons for NavLink usage in Header

// Define Prop Types for NavLink
interface NavLinkProps {
  sectionId: string;
  icon: React.ReactNode;
  text: string;
  onClick: (sectionId: string) => void;
  hideText?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ sectionId, icon, text, onClick, hideText }) => (
  <a
    onClick={() => onClick(sectionId)}
    // Adjusted styling for icon-only links (larger padding for clickable area)
    className="flex items-center justify-center text-lg text-gray-800 hover:text-indigo-600 transition-all duration-300 font-medium cursor-pointer p-3 rounded-full hover:bg-gray-100"
    aria-label={text} // Added aria-label for accessibility
  >
    {icon}
    {!hideText && <span className="ml-2">{text}</span>} {/* Conditionally render text with margin */}
  </a>
);

export default NavLink;

