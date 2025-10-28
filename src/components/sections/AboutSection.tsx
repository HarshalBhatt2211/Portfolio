import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Download, Car, Gauge, School, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed bg-center opacity-10"></div>
      <div className="container relative mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about advancing automotive technology"
        />
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Motivated and detail-oriented sustainability and automobile
engineer with a solid foundation in
manufacturing processes and design principles.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I specialize in production planning, defect reduction  and vehicle dynamics, with a strong focus on electric and hybrid systems. My work combines innovative engineering solutions with practical implementation to create efficient, safe, and high-performance vehicles.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Currently actively looking for opportunities in the automotive and production industries.
            </p>
            
            <div className="pt-4">
              <Button href="src\img\CV Oct 25.pdf" variant="primary" className="inline-flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </Button> 
            </div>
          </div>
          
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-white/80 p-6 shadow-md transition-all hover:shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  <Car size={24} />
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing and developing advanced automotive systems and simplifying production.
                </p>
              </div>
              
              <div className="rounded-lg bg-white/80 p-6 shadow-md transition-all hover:shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                  <Briefcase size={24} />
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  2+ years working with major automotive and industrial equipments manufacturers.
                </p>
              </div>
              
              <div className="rounded-lg bg-white/80 p-6 shadow-md transition-all hover:shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400">
                  <School size={24} />
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Education</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Persueing master's in Sustainable Technology Management with extensive courses on AI and ML.
                </p>
              </div>
              
              <div className="rounded-lg bg-white/80 p-6 shadow-md transition-all hover:shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400">
                  <Gauge size={24} />
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Hobbies</h4>
                <p className="text-gray-600 dark:text-gray-300">
                Cricket,
                Chess,
                Fitness,
                Debates, Designing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};