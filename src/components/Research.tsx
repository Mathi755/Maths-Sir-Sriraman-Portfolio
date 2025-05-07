import React from 'react';

const researchInterests = [
  { 
    name: 'Neural Networks', 
    description: 'Focusing on stability analysis and synchronization of various neural network models.',
    icon: '🧠'
  },
  { 
    name: 'Time-Delay Systems', 
    description: 'Investigating the effects of time delays on system stability and performance.',
    icon: '⏱️'
  },
  { 
    name: 'Control Theory', 
    description: 'Developing control strategies for complex systems with uncertainties.',
    icon: '🎮'
  },
  { 
    name: 'Stability Theory', 
    description: 'Analyzing the stability of nonlinear systems using Lyapunov methods.',
    icon: '📊'
  },
  { 
    name: 'Image Encryption', 
    description: 'Applying neural network models for secure image encryption applications.',
    icon: '🔐'
  }
];

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="border-b-4 border-blue-500 pb-2">Research Interests</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          My research primarily focuses on mathematical modeling and stability analysis of various types of neural networks, with applications in control systems and image encryption.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchInterests.map((interest, index) => (
            <div 
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{interest.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">{interest.name}</h3>
              <p className="text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;