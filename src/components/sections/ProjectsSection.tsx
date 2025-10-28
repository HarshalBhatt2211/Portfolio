import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = filter ? projects.filter(project => project.tags.includes(filter)) : projects;

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed bg-center opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="Innovative automotive engineering solutions"
        />
        
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-white text-black'
                : 'bg-black text-white border border-white/20 hover:bg-white/10'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-white text-black'
                  : 'bg-black text-white border border-white/20 hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};