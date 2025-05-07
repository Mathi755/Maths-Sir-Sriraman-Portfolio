import React from 'react';

const educationData = [
  {
    degree: 'Ph.D',
    institute: 'Thiruvalluvar University',
    specialization: 'Mathematics',
    year: '2020'
  },
  {
    degree: 'M.Phil',
    institute: 'Thiruvalluvar University',
    specialization: 'Mathematics',
    year: '2016'
  },
  {
    degree: 'M.Sc',
    institute: 'Periyar University',
    specialization: 'Mathematics',
    year: '2014'
  },
  {
    degree: 'B.Ed',
    institute: 'Annamalai University',
    specialization: 'Mathematics',
    year: '2012'
  },
  {
    degree: 'B.Sc',
    institute: 'Bharathiar University',
    specialization: 'Mathematics',
    year: '2011'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          <span className="border-b-4 border-blue-600 pb-2">Educational Background</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.specialization}</p>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700">{edu.institute}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Year of Passing:</span> {edu.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;