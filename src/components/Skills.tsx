import React from 'react';
import { useTranslation } from 'react-i18next';

interface Achievement {
  title: string;
  description: string;
  metrics: string;
  technologies: string[];
}

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  
  const achievements: Achievement[] = t('skills.achievements', { returnObjects: true }) as Achievement[];
  const exploring: string[] = [
    'Spring Boot', 'Next.js', 'GraphQL', 'Kafka', 'Terraform', 'gRPC'
  ]

  return (
    <section 
      id="skills" 
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {t('skills.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-5px] ${
                darkMode 
                  ? 'bg-slate-900 hover:bg-slate-800' 
                  : 'bg-white hover:bg-slate-50'
              } shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-3 transition-colors ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {achievement.title}
              </h3>
              
              <p className={`mb-4 transition-colors ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {achievement.description}
              </p>
              
              <div className={`mb-4 p-4 rounded-lg ${
                darkMode ? 'bg-slate-800' : 'bg-emerald-50'
              }`}>
                <p className={`font-medium ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  {achievement.metrics}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {achievement.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-slate-800 text-slate-300' 
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 p-8 rounded-lg shadow-lg transition-colors ${
          darkMode ? 'bg-slate-900' : 'bg-white'
        }`}>
          <h3 className={`text-xl font-bold mb-4 transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t('skills.exploring')}
          </h3>
          <div className="flex flex-wrap gap-3">
            { exploring.map((tech, index) => (
              <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${ darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700' }`} key={index}>
                { tech }
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;