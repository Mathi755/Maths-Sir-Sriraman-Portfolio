import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dr. Sriraman R</h3>
            <p className="text-gray-400 text-sm mt-1">Assistant Professor, SRM Institute of Science and Technology</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} All Rights Reserved</p>
            <p className="mt-1">Academic Portfolio</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Department of Mathematics, Faculty of Engineering & Technology, Kattankulathur - Chennai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;