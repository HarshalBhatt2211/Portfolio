import React from 'react';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { navItems } from '../constants/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <a 
              href="#home" 
              className="mb-4 flex items-center gap-2 text-xl font-bold text-white"
            >
              <Code size={24} className="text-blue-500" />
              <span>Harshal Rajiv Bhatt</span>
            </a>
            <p className="mb-4 text-gray-400">
              Creating a future in and for mobility
            </p>
            <div className="flex space-x-4">
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
                    className="text-gray-400 transition-colors hover:text-blue-400"
                    aria-label={link.name}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
         
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>Berlin, Germany</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <a href="harshal.bhatt2021@gmail.com" className="hover:text-blue-400">
                  harshal.bhatt2021@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" />
                <a href="tel:+4915158373305" className="hover:text-blue-400">
                  +49 151 58373305
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {currentYear} Harshal Rajiv Bhatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Missing imports for MapPin and Phone
import { MapPin, Phone } from 'lucide-react';