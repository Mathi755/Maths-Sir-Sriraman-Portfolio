import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Dr. Sriraman R
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
              Assistant Professor
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Expert in Stability Analysis of Neural Networks with 4.5 years of experience.
              Specializing in Neural Networks, Time-Delay Systems, Control Theory, 
              Stability Theory, and Image Encryption.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:sriramar@srmist.edu.in" className="text-blue-400 hover:underline">
                  sriramar@srmist.edu.in
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold w-24">Campus:</span>
                <span>Department of Mathematics, Faculty of Engineering & Technology, Kattankulathur - Chennai</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold w-24">Experience:</span>
                <span>4.5 years of experience</span>
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-gray-700 shadow-xl">
                <img
                  src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/04/DSC_5360.jpg"
                  alt="Dr. Sriraman R"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-900 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;