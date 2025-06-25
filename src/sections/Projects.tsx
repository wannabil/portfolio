import React, { useEffect, useRef } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

// Import types from the central types file
import { Project, ProjectCardProps } from '../types'; // Corrected import path for types

// Import the ProjectCard component
import ProjectCard from '../components/ProjectCard'; // Assuming ProjectCard is now in src/components/ProjectCard.tsx

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for analyzing large datasets, featuring dynamic charts and filters.",
      image: "https://placehold.co/400x250/4E5FFD/FFFFFF?text=Project+1",
      demoLink: "#",
      repoLink: "#",
      tech: ["React", "D3.js", "Express.js", "PostgreSQL"],
    },
    {
      title: "Real-time Chat Application",
      description: "A secure and scalable chat application with real-time messaging and user authentication.",
      image: "https://placehold.co/400x250/4E5FFD/FFFFFF?text=Project+2",
      demoLink: "#",
      repoLink: "#",
      tech: ["Node.js", "Socket.io", "MongoDB", "React"],
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with product management, shopping cart, and payment integration.",
      image: "https://placehold.co/400x250/4E5FFD/FFFFFF?text=Project+3",
      demoLink: "#",
      repoLink: "#",
      tech: ["Next.js", "Stripe API", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Task Management Tool",
      description: "A collaborative task manager with drag-and-drop functionality and user roles.",
      image: "https://placehold.co/400x250/4E5FFD/FFFFFF?text=Project+4",
      demoLink: "#",
      repoLink: "#",
      tech: ["Vue.js", "Node.js", "GraphQL", "PostgreSQL"],
    },
    {
      title: "AI-Powered Recommender",
      description: "Developed a recommendation engine using machine learning algorithms and user behavior data.",
      image: "https://placehold.co/400x250/4E5FFD/FFFFFF?text=Project+5",
      demoLink: "#",
      repoLink: "#",
      tech: ["Python", "TensorFlow", "Django"],
    },
    {
      title: "Decentralized Voting App",
      description: "A blockchain-based secure and transparent voting application.",
      image: "https://placehold.co/400x250/4E5FFD/FFFFFF?text=Project+6",
      demoLink: "#",
      repoLink: "#",
      tech: ["Solidity", "React", "Web3.js"],
    },
  ];

  // Duplicate projects for seamless endless scrolling effect (two sets are enough for this technique)
  const repeatedProjects = [...projects, ...projects];

  // Ref to the carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    const container = carouselRef.current;

    if (!container) return;

    // Helper to get actual card width including margin (tailwind space-x-8 is 2rem = 32px)
    const getCardWidth = () => {
      const firstCard = container.children[0] as HTMLElement;
      return firstCard ? firstCard.offsetWidth + 32 : 0;
    };

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const cardWidth = getCardWidth();
        if (cardWidth === 0) return;

        const totalWidthOfOneSet = projects.length * cardWidth;

        // If we are past the first set of projects (i.e., displaying the duplicated set),
        // instantly snap back to the equivalent position in the first set without animation.
        // This creates the seamless loop.
        if (container.scrollLeft >= totalWidthOfOneSet) {
          container.scrollLeft = container.scrollLeft - totalWidthOfOneSet;
        }

        // Smoothly scroll to the next position
        container.scrollTo({
          left: container.scrollLeft + cardWidth,
          behavior: 'smooth',
        });

      }, 3000); // Move every 3 seconds
    };

    const handleMouseEnter = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = undefined; // Clear the interval when mouse enters
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    // Add event listeners for pausing/resuming on hover
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Start auto-scroll initially
    startAutoScroll();

    // Cleanup function
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [projects.length]); // Re-run effect if the number of projects changes

  return (
    <section id="projects" className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto px-6 max-w-6xl overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        {/* Project Cards Carousel */}
        {/* Using `flex-nowrap` to ensure all items stay in one row */}
        {/* `overflow-x-hidden` to prevent manual horizontal scrolling by user */}
        <div ref={carouselRef} className="flex flex-nowrap space-x-8 pb-4 overflow-x-hidden scrollbar-hide">
          {repeatedProjects.map((project, index) => (
            // Ensure a unique key for each duplicated item
            <div key={`${project.title}-${index}`} className="flex-shrink-0 w-80 md:w-96">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

