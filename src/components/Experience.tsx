import React from 'react';

const experiences = [
  {
    period: "2022-Present",
    position: "Assistant Professor",
    institution: "Department of Mathematics, College of Engineering and Technology, SRM Institute of Science and Technology",
    location: "Kattankulathur, Chengalpattu, Tamilnadu-603203, India"
  },
  {
    period: "2021-2022",
    position: "Assistant Professor",
    institution: "Department of Mathematics, School of Advanced Sciences, Kalasalingam Academy of Research and Education",
    location: "Krishnankoil, Tamil Nadu – 626128, India"
  },
  {
    period: "2019-2020",
    position: "Assistant Professor",
    institution: "Department of Science and Humanities, Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College",
    location: "Avadi, Chennai, Tamil Nadu – 600062, India"
  }
];

const memberships = [
  {
    organization: "The Indian Mathematical Society",
    id: "Membership No: L/2023/075"
  },
  {
    organization: "Ramanujan Mathematical Society",
    id: "Membership No: 1886"
  },
  {
    organization: "International Association of Engineers",
    id: "Membership No: 323045"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-600 pb-2">Professional Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Academic Experience</h3>
            
            <div className="relative pl-8 border-l-2 border-gray-300 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] mt-1.5 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <div className="text-sm font-semibold text-blue-600 mb-1">{exp.period}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.position}</h4>
                    <p className="text-gray-700 mb-1">{exp.institution}</p>
                    <p className="text-gray-600 text-sm">{exp.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Memberships</h3>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              {memberships.map((membership, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                  <p className="font-semibold text-gray-800">{membership.organization}</p>
                  <p className="text-gray-600 text-sm">{membership.id}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Projects & Grants</h3>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">SERB Funded Project</h4>
                <p className="text-gray-700 mb-1">Design and Analysis of Fractional-order Clifford-valued Neural Networks and its Application to Image Encryption</p>
                <div className="text-sm text-gray-600 space-y-1 mt-3">
                  <p><span className="font-semibold">File Number:</span> EEQ/2023/000513</p>
                  <p><span className="font-semibold">Budget:</span> INR 1,932,832</p>
                  <p><span className="font-semibold">Duration:</span> 3 years</p>
                  <p><span className="font-semibold">Status:</span> Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;