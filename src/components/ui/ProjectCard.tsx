import React from 'react';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/5 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100" />
      </div>
      
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-gray-300">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
            >
              <ExternalLink size={16} />
              View Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
};