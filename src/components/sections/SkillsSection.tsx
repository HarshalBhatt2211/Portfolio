import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillBar } from '../ui/SkillBar';
import { skills } from '../../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const categories: { value: SkillCategory; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Production planning' },
    { value: 'backend', label: 'Testing' },
    { value: 'design', label: 'Design' },
    { value: 'other', label: 'Management' },
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3846135/pexels-photo-3846135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed bg-center opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Expertise in automotive engineering and system design"
        />
        
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-lg px-6 py-3 text-base font-medium transition-colors ${
                activeCategory === category.value
                  ? 'bg-white text-black'
                  : 'bg-black text-white border border-white/20 hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12">
          {filteredSkills.map(skill => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};