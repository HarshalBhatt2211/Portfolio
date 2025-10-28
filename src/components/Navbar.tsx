import React, { useEffect, useState } from 'react';
import { navItems } from '../constants/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Code } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 py-3 shadow backdrop-blur dark:bg-gray-900 dark:bg-opacity-90' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a 
          href="#home" 
          className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"
        >
          <Code size={24} className="text-blue-600" />
          <span>Harshal Bhatt</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            className="ml-4 flex h-10 w-10 items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block h-0.5 w-8 bg-gray-800 transition-all dark:bg-gray-200 ${isMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-8 bg-gray-800 transition-all dark:bg-gray-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-8 bg-gray-800 transition-all dark:bg-gray-200 ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-white py-4 shadow-lg dark:bg-gray-900 md:hidden">
            <ul className="container mx-auto flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block text-lg font-medium ${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};