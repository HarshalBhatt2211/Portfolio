import React from 'react';
import { Button } from '../ui/Button';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat pt-16">
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gray-200">Harshal Bhatt:</span>
              <span className="block mt-2 text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-300">
  Masters student in Sustainable Technology Management with a focus on Automobile and mobility
</span>

            </h1>
            
            <p className="mb-8 max-w-2xl text-xl text-gray-300">
              Specializing in advanced battery systems, supply chain and vehicle dynamics. Creating the future of automotive technology through innovative engineering solutions.
            </p>
            
            <div className="mb-10 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary" size="lg" className="border border-white text-white hover:bg-white/10">
  View My Projects
</Button>

<Button href="#contact" variant="primary" size="lg" className="border border-white text-white hover:bg-white/10">
  Get In Touch
</Button>
            </div>
            
            <div className="flex space-x-5">
              {socialLinks.map((link) => {
                const IconComponent = {
                  'Github': Github,
                  'Linkedin': Linkedin,
                  'Twitter': Twitter,
                  'Mail': Mail,
                }[link.icon];
                
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label={link.name}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="hidden md:col-span-2 md:block">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white/5 shadow-xl backdrop-blur-sm">
                <img
                  src="src\img\WhatsApp Image 2024-01-05 at 19.45.19_ab57605e.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover brightness-110 contrast-125"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-white/10 backdrop-blur-md"></div>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-xl bg-white/10 backdrop-blur-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white/10 shadow-md transition-transform hover:-translate-y-1 backdrop-blur-sm hover:bg-white/20"
      >
        <ArrowDown className="text-white" size={20} />
      </a>
    </section>
  );
};