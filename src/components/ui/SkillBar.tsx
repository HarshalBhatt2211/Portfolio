import React from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="mb-1 flex justify-between">
        <span className="text-sm font-medium text-white">{skill.name}</span>
        <span className="text-sm font-medium text-white/80">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div 
          className="h-full rounded-full bg-white transition-all duration-1000 ease-out" 
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};