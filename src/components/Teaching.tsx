import React from 'react';

const courses = [
  "Calculus and Linear Algebra",
  "Probability and Queueing Theory",
  "Discrete Mathematics",
  "Numerical Methods and Analysis",
  "Probability and Random Process",
  "Engineering Mathematics",
  "Probability and Statistics"
];

const Teaching: React.FC = () => {
  return (
    <section id="teaching" className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="border-b-4 border-blue-500 pb-2">Teaching</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Courses Taught</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full mr-4 flex-shrink-0">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-300 italic">
                "Teaching mathematics is not just about formulas and procedures, but about 
                fostering critical thinking and problem-solving abilities in students."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;