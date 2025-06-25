import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

import { ContactLinkProps } from '../types';

import ContactLink from '../components/ContactList'; // Corrected component file name

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-white opacity-90 mb-10 leading-relaxed">
          I'm always open to new opportunities, collaborations, and interesting discussions.
          Feel free to reach out through any of the channels below!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
          <ContactLink icon={<Mail size={28} />} text="your.email@example.com" href="mailto:your.email@example.com" />
          <ContactLink icon={<Linkedin size={28} />} text="LinkedIn/YourProfile" href="https://linkedin.com/in/yourprofile" target="_blank" />
          <ContactLink icon={<Github size={28} />} text="GitHub/YourRepo" href="https://github.com/yourusername" target="_blank" />
        </div>

        {/* Removed "Send Me a Message" form as requested */}
      </div>
    </section>
  );
};

export default Contact;

