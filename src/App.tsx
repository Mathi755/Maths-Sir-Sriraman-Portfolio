import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Dr. Sriraman R - Mathematics Professor";
    
    // Add smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Education />
      <Research />
      <Publications />
      <Teaching />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;