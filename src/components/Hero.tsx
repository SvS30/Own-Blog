import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const isHidden = useState(true);
  
  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ 
          zIndex: 0,
          background: darkMode 
            ? 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)' 
            : 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center lg:text-left">
          <div className="animate-fadeIn">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className={`h-1 w-12 mr-4 bg-emerald-500`}></div>
              <p className={`text-lg font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                {t('hero.role')}
              </p>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {t('hero.name')}
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 transition-colors ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-all transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
              >
                {t('hero.contact')}
              </a>
              <a 
                href="#projects" 
                className={`px-6 py-3 border-2 rounded-md font-medium transition-all transform hover:translate-y-[-2px] ${
                  darkMode 
                    ? 'border-slate-700 hover:border-slate-600 text-white' 
                    : 'border-slate-300 hover:border-slate-400 text-slate-900'
                } ${isHidden ? 'hidden' : ''}`}
              >
                {t('hero.viewProjects')}
              </a>
            </div>
            
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/SvS30" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`transform transition-transform hover:scale-110 ${
                  darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/salim-vazquez-solis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`transform transition-transform hover:scale-110 ${
                  darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            darkMode 
              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
              : 'bg-white text-slate-700 hover:bg-slate-100'
          } shadow-md transition-colors`}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;