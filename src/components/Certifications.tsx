import React from 'react';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credential: string;
}

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const certifications: Certification[] = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "July 2023",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credential: "AWSP-1234567890"
    },
    {
      title: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "March 2022",
      imageUrl: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credential: "GCP-9876543210"
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "November 2021",
      imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credential: "MS-1357924680"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "August 2021",
      imageUrl: "https://images.pexels.com/photos/7792811/pexels-photo-7792811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credential: "CKA-2468013579"
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "May 2020",
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credential: "MDB-1122334455"
    },
    {
      title: "Oracle Certified Professional, Java SE 11 Developer",
      issuer: "Oracle",
      date: "January 2020",
      imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      credential: "OCP-6677889900"
    }
  ];

  return (
    <section 
      id="certifications" 
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            { t('certifications.title') }
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            { t('certifications.description') }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-xl ${
                darkMode ? 'bg-slate-800 shadow-lg' : 'bg-white shadow-md'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center mb-2">
                    <Award size={16} className="text-emerald-400 mr-2" />
                    <span className="text-white text-sm font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-bold line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-emerald-500 mr-2" />
                    <span className={`text-sm font-medium transition-colors ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      { t('certifications.issued') }: {cert.date}
                    </span>
                  </div>
                </div>
                
                <div className={`mb-4 transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <p className="text-sm">
                    <strong>Credential ID:</strong> {cert.credential}
                  </p>
                </div>
                
                <a 
                  href="#verify" 
                  className={`flex items-center text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'text-emerald-400 hover:text-emerald-300' 
                      : 'text-emerald-600 hover:text-emerald-700'
                  }`}
                >
                  <ExternalLink size={16} className="mr-2" />
                  { t('certifications.verify') }
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;