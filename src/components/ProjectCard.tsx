import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react'; // Import necessary icons

// Define Prop Types for Project
interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  repoLink: string;
  tech: string[];
}

// Define Prop Types for ProjectCard component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl h-[400px] flex flex-col"
    >
      {/* Original content layer */}
      <div className="project-card-content absolute inset-0 flex flex-col">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover object-center"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/4E5FFD/FFFFFF?text=Image+Unavailable" }}
        />
        <div className="p-6 flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-gray-600 text-base mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full border border-indigo-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 flex justify-end space-x-4">
            {project.demoLink !== "#" && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-md hover:translate-y-[-2px] transition-all duration-200 flex items-center space-x-1"
                >
                  <ArrowUpRight size={16} /> <span>Live Demo</span>
                </a>
            )}
            {project.repoLink !== "#" && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-indigo-600 text-indigo-700 rounded-md hover:bg-indigo-600 hover:text-white hover:translate-y-[-2px] transition-all duration-200 flex items-center space-x-1"
                >
                  <Github size={16} /> <span>GitHub Repo</span>
                </a>
            )}
        </div>
      </div>

      {/* Hover overlay layer - slides up from bottom */}
      <div className="project-card-hover-overlay absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-4">
        <img
          src={project.image}
          alt={`Full view of ${project.title}`}
          className="w-full h-full object-cover absolute inset-0 transition-all duration-300 opacity-20"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/400x250/4E5FFD/FFFFFF?text=Image+Unavailable" }}
        />
        <div className="relative z-10 text-white text-center p-4 bg-gray-950 bg-opacity-50 rounded-lg">
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <p className="mt-2 text-lg">{project.description}</p>
          <div className="flex justify-center space-x-4 mt-4">
            {project.demoLink !== "#" && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-1"
                >
                  <ArrowUpRight size={16} /> <span>Demo</span>
                </a>
            )}
            {project.repoLink !== "#" && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-indigo-600 transition-colors duration-200 flex items-center space-x-1"
                >
                  <Github size={16} /> <span>Repo</span>
                </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

