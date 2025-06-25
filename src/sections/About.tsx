import React from 'react';
import { User } from 'lucide-react';

// Import types from the central types file
import { SkillPillProps } from '../types'; // Corrected import path for types

const About: React.FC = () => {
  // Define skillset logos with their paths
  const skillsetLogos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Python_logo.svg", alt: "Python" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_logo.svg", alt: "Electron.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "Express.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/29/PostgreSQL_logo.svg", alt: "PostgreSQL" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", alt: "Git/GitHub" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", alt: "TypeScript" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/47/Nextjs-logo.svg", alt: "Next.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", alt: "Vue.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", alt: "SQL" },
  ];

  // Duplicate logos for seamless endless scrolling effect
  const repeatedLogos = [...skillsetLogos, ...skillsetLogos, ...skillsetLogos]; // Repeat 3 times

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Avatar */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img
              src="https://placehold.co/200x200/4E5FFD/FFFFFF?text=Avatar" // Placeholder with gradient matching colors
              alt="Your Avatar"
              className="rounded-full w-48 h-48 object-cover border-4 border-indigo-600 shadow-xl animate-fade-in"
              style={{ background: 'linear-gradient(45deg, #4E5FFD, #764ba2)' }}
            />
          </div>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6 animate-fade-in delay-200">
            <p>
              I'm a dedicated Software Engineer with a passion for building scalable and efficient web applications.
              My expertise lies in crafting robust back-end systems and intuitive front-end interfaces, always with a
              focus on performance and user experience.
            </p>
            <p>
              I thrive on tackling complex challenges and transforming ideas into tangible, high-quality software.
              With a strong foundation in modern web technologies and a keen eye for detail, I aim to deliver solutions
              that are not just functional, but also maintainable and enjoyable to use.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or delving into the world of data analytics. Let's build something amazing together!
            </p>
          </div>
        </div>
        <div className="mt-16 text-center overflow-hidden relative py-8">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800">
            My Skillset
          </h3>
          {/* Skillset Logo Carousel */}
          <div className="flex items-center space-x-12 animate-scroll-left w-max">
            {repeatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 w-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer transform hover:scale-150"
                  title={logo.alt}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/70x70/666/EEE?text=?" }}
                />
              </div>
            ))}
          </div>
          {/* Fading edges for the skill logos */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

