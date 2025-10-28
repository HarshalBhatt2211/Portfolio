import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-20 bg-blue-600 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};