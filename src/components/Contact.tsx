import React from 'react';
import { Mail, MapPin, Phone, FileText, Award } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-600 pb-2">Contact Information</span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 md:w-1/3">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Dr. Sriraman R</h3>
                  <p className="text-gray-300 mb-2">Assistant Professor</p>
                  <p className="text-gray-400 text-sm">Department of Mathematics</p>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Ph.D in Mathematics</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FileText className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">40+ Research Publications</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:w-2/3">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <a href="mailto:sriramar@srmist.edu.in" className="text-gray-800 hover:text-blue-600">
                      sriramar@srmist.edu.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-gray-800">
                      Department of Mathematics, Faculty of Engineering & Technology,<br />
                      SRM Institute of Science and Technology,<br />
                      Kattankulathur, Chennai, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  For research collaborations, guest lectures, or academic inquiries, 
                  please feel free to get in touch via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;