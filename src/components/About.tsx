import React from 'react';
import { Server, Database, Cloud, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const stats = [
    { label: t('about.stats.experience'), value: "5+" },
    { label: t('about.stats.projects'), value: "13+" },
    { label: t('about.stats.companies'), value: "5+" },
    { label: t('about.stats.clients'), value: "15+" }
  ];
  const techStack = [
    "Node.js", "Python", "Java", "Php", "Go", "Laravel", "Django", "Express", "Docker", "Kubernetes",
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "Vue", "React", "Flutter", "RESTful APIs"
  ]

  return (
    <section 
      id="about" 
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className={`text-2xl font-bold mb-6 transition-colors ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {t('about.subtitle')}
            </h3>
            
            <div className={`space-y-4 mb-8 transition-colors ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              { t('about.description').split('\n').map((line, index) => (
                <p key={index} className="text-sm">
                  {line}
                </p>
              )) }
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg text-center transition-all transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-slate-800 hover:bg-slate-750' 
                      : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-emerald-500 font-bold text-3xl mb-2">{stat.value}</div>
                  <div className={`text-sm font-medium transition-colors ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              { techStack.map((tech, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${ darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700' }`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg transition-all transform hover:translate-y-[-5px] ${
                darkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-slate-50 hover:bg-slate-100'
              }`}>
                <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Server size={24} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('about.services.backend.title')}
                </h4>
                <p className={`text-sm transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t('about.services.backend.description')}
                </p>
              </div>
              
              <div className={`p-6 rounded-lg transition-all transform hover:translate-y-[-5px] ${
                darkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-slate-50 hover:bg-slate-100'
              }`}>
                <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Database size={24} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('about.services.database.title')}
                </h4>
                <p className={`text-sm transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t('about.services.database.description')}
                </p>
              </div>
              
              <div className={`p-6 rounded-lg transition-all transform hover:translate-y-[-5px] ${
                darkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-slate-50 hover:bg-slate-100'
              }`}>
                <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Cloud size={24} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('about.services.cloud.title')}
                </h4>
                <p className={`text-sm transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t('about.services.cloud.description')}
                </p>
              </div>
              
              <div className={`p-6 rounded-lg transition-all transform hover:translate-y-[-5px] ${
                darkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-slate-50 hover:bg-slate-100'
              }`}>
                <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Lock size={24} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('about.services.security.title')}
                </h4>
                <p className={`text-sm transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t('about.services.security.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
