import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; // Import necessary icons
import { ContactLinkProps } from '../types'; // Import ContactLinkProps from your central types file

// This component is named ContactLink, and it will be exported as default.
const ContactLink: React.FC<ContactLinkProps> = ({ icon, text, href, target = "_self" }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : ""}
    className="flex flex-col items-center p-6 bg-white/10 rounded-xl shadow-md backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full md:w-auto hover:bg-white/20 text-white"
  >
    <div className="text-white mb-3 flex items-center justify-center rounded-full bg-white text-indigo-600 h-8 w-8">
      {icon}
    </div>
    <span className="text-lg font-medium text-white">{text}</span>
  </a>
);

export default ContactLink; // Exporting ContactLink as the default export

