import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Sample of publications (shortened for this component)
const publicationsData = [
  {
    year: 2024,
    papers: [
      {
        title: "Global Mittag-Leffler stability and synchronization of fractional-order Clifford-valued delayed neural networks with reaction-diffusion terms and its application to image encryption",
        authors: "N. Manoj, R. Sriraman",
        journal: "Information Sciences",
        details: "vol. 698, Dec. 2024, pp. 121773",
        doi: "10.1016/j.ins.2024.121773",
        impact: "SCI, Elsevier Publication, IF: 8.1, Journal quartile: Q1"
      },
      {
        title: "Global exponential synchronization of delayed quaternion-valued neural networks via decomposition and non-decomposition methods and its application to image encryption",
        authors: "R. Sriraman, Oh-Min Kwon",
        journal: "Mathematics",
        details: "vol. 12, Mar. 2024, pp. 3345",
        doi: "10.3390/math12213345",
        impact: "SCIE, MDPI Publication, IF: 2.3, Journal quartile: Q1"
      },
      {
        title: "Exponential stability of gene regulatory networks with distributed delays",
        authors: "S. Logeswari, R. Sriraman",
        journal: "Journal of Mathematics and Computer Science",
        details: "vol. 38, Dec. 2024, pp. 252-262",
        doi: "10.22436/jmcs.038.02.0",
        impact: "SCI, International Scientific Research Publications, IF: 2, Journal quartile: Q2"
      }
    ]
  },
  {
    year: 2023,
    papers: [
      {
        title: "System decomposition method-based exponential stability of Clifford-valued BAM delayed neural networks",
        authors: "R. Sriraman, P. Balaji, R. Veerasivaji",
        journal: "IEEE Access",
        details: "Jul. 2023",
        doi: "10.1109/ACCESS.2023.3295420",
        impact: "SCI, IEEE, IF: 3.9, Journal quartile: Q1"
      },
      {
        title: "System decomposition method-based global stability criteria for T-S fuzzy Clifford-valued delayed neural networks with impulses and leakage term",
        authors: "A. M. Alanazi, R. Sriraman, R. Gurusamy, S. Athithan, P. Vignesh, Z. Bassfar, A. R. Alharbi, A. Aljaedi",
        journal: "AIMS Mathematics",
        details: "vol. 8, no. 7, Apr. 2023, pp. 15166-15188",
        doi: "10.3934/math.2023774",
        impact: "SCIE, AIMS Press, IF: 2.2, Journal quartile: Q2"
      }
    ]
  },
  {
    year: 2022,
    papers: [
      {
        title: "Global stability of Clifford-valued T-S fuzzy neural networks with time-varying delays and impulses",
        authors: "R. Sriraman, N.Asha",
        journal: "Kybernetika",
        details: "",
        doi: "10.14736/kyb-2022-4-049",
        impact: "SCI, Czech Academy of Sciences, IF: 0.892, Journal quartile: Q3"
      },
      {
        title: "A sampling load frequency control scheme for power systems with time delays",
        authors: "R. Sriraman, J. A. Younis, C.P. Lim, G. Rajchakit, N. Boonsatit",
        journal: "Complexity",
        details: "vol. 2022, Jun 2022, Article ID 3878321",
        doi: "10.1155/2022/3878321",
        impact: "SCI, Hindawi, IF: 2.833, Journal quartile: Q1"
      }
    ]
  }
];

interface PaperProps {
  paper: {
    title: string;
    authors: string;
    journal: string;
    details: string;
    doi: string;
    impact: string;
  };
}

const Paper: React.FC<PaperProps> = ({ paper }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 hover:shadow-md transition-shadow duration-300">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{paper.title}</h4>
      <p className="text-gray-700 mb-2">{paper.authors}</p>
      <p className="text-gray-600 italic mb-2">{paper.journal}, {paper.details}</p>
      <p className="text-sm text-gray-500">DOI: {paper.doi}</p>
      <p className="text-sm text-blue-600 mt-2">{paper.impact}</p>
    </div>
  );
};

interface YearSectionProps {
  year: number;
  papers: {
    title: string;
    authors: string;
    journal: string;
    details: string;
    doi: string;
    impact: string;
  }[];
}

const YearSection: React.FC<YearSectionProps> = ({ year, papers }) => {
  const [isOpen, setIsOpen] = useState(year === 2024); // Only open the most recent year by default

  return (
    <div className="mb-8">
      <button 
        className="w-full flex justify-between items-center bg-gray-200 p-3 rounded-lg font-bold text-gray-800 hover:bg-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Publications in {year} ({papers.length})</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="mt-4 pl-2">
          {papers.map((paper, index) => (
            <Paper key={index} paper={paper} />
          ))}
        </div>
      )}
    </div>
  );
};

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="border-b-4 border-blue-600 pb-2">Research Publications</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Selected publications in peer-reviewed journals
        </p>
        
        <div className="max-w-4xl mx-auto">
          {publicationsData.map((yearData, index) => (
            <YearSection 
              key={index} 
              year={yearData.year} 
              papers={yearData.papers} 
            />
          ))}
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Displaying recent selections. 
              <span className="ml-1 text-blue-600 font-medium">
                Total publications: 40+
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;