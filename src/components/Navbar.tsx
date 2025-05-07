import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#education' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-800 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="text-white font-bold text-xl">
              Dr. Sriraman R
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full w-full bg-gray-800 shadow-lg py-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;