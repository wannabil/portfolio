// src/types.ts

// Define Prop Types for NavLink component
export interface NavLinkProps {
  sectionId: string;
  icon: React.ReactNode;
  text: string;
  onClick: (sectionId: string) => void;
  hideText?: boolean;
}

// Define Prop Types for Header component
export interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  mouseY: number | null;
}

// Define Prop Types for Hero section
export interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

// Define structure for a Project object
export interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  repoLink: string;
  tech: string[];
}

// Define Prop Types for ProjectCard component
export interface ProjectCardProps {
  project: Project;
}

// Define Prop Types for SkillPill component
export interface SkillPillProps {
  icon: React.ReactNode;
  text: string;
}

// Define Prop Types for ContactLink component
export interface ContactLinkProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  target?: '_self' | '_blank';
}

// Define Prop Types for SocialIcon component
export interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

