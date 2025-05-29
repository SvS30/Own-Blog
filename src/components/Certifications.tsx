import React from 'react';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  credential?: string;
  link?: string;
}

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const certifications: Certification[] = [
    {
      title: "Ingeniería en Desarrollo de Software",
      issuer: "Universidad Politécnica de Chiapas",
      date: "2018-2021",
      imageUrl: "https://universidadesdemexico.mx/logos/original/logo-universidad-politecnica-de-chiapas.webp",
      credential: "",
      link: "https://www.upchiapas.edu.mx/"
    },
    {
      title: "Scrum Certified",
      issuer: "SCRUMStudy",
      date: "January 2022",
      imageUrl: "https://www.scrumstudy.com/Scrum-Images/logo-64.png",
      credential: "895047",
      link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-SalimVazquezSolis.-895047.pdf"
    },
    {
      title: "MongoDB",
      issuer: "MongoDB University",
      date: "Febrero 2025",
      imageUrl: "https://d36ai2hkxl16us.cloudfront.net/course-uploads/7985c085-3b6a-42d5-b668-e41cb6eedeb0/4gnbpsehb9ih-credlybadge-associatedeveloper2.png",
      credential: "MDB7ffhdpw6ol",
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/389abd47-b516-4ee9-8a1e-08647fe6d8ae-salim-vazquez-solis-4369fa7f-c6e6-42c4-9056-94dd7179070b-certificate.pdf"
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
                  href={cert.link} target='_blank' rel='noopener noreferrer'
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