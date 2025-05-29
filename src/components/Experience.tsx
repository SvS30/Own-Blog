import React, { useState } from 'react';
import { Building, Calendar, ChevronDown, ChevronUp, FileBadge2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Job {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);
  const { t } = useTranslation();

  const toggleJob = (index: number) => {
    if (expandedJob === index) {
      setExpandedJob(null);
    } else {
      setExpandedJob(index);
    }
  };

  const jobs: Job[] = t('experience.jobs', { returnObjects: true }) as Job[];


  return (
    <section
      id="experience"
      className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-slate-900' : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
            {t('experience.description')}
          </p>
        </div>
        <div className="flex justify-end mb-8">
          <a 
            href="https://l.linklyhq.com/l/pUvf"
            target='_blank'
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-all transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
          >
            <FileBadge2 size={16} className="inline mr-2" />
            {t('experience.CV')}
          </a>
        </div>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${darkMode
                  ? 'bg-slate-800 hover:bg-slate-750'
                  : 'bg-slate-50 hover:bg-slate-100'
                } ${expandedJob === index ? 'shadow-lg' : 'shadow'}`}
            >
              <div
                className="px-6 py-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggleJob(index)}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <h3 className={`text-xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                      {job.role}
                    </h3>
                    <span className="ml-3 px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
                      {job.date}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Building size={16} className={darkMode ? 'text-slate-400' : 'text-slate-600'} />
                    <span className={`ml-2 text-sm transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                      {job.company}
                    </span>
                    <span className="mx-2 text-slate-400">•</span>
                    <Calendar size={16} className={darkMode ? 'text-slate-400' : 'text-slate-600'} />
                    <span className={`ml-2 text-sm transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                      {job.location}
                    </span>
                  </div>
                </div>
                <div>
                  {expandedJob === index ? (
                    <ChevronUp size={20} className={darkMode ? 'text-slate-300' : 'text-slate-700'} />
                  ) : (
                    <ChevronDown size={20} className={darkMode ? 'text-slate-300' : 'text-slate-700'} />
                  )}
                </div>
              </div>

              {expandedJob === index && (
                <div className={`px-6 py-5 border-t transition-colors ${darkMode ? 'border-slate-700' : 'border-slate-200'
                  }`}>
                  <p className={`mb-4 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                    {job.description}
                  </p>

                  <h4 className={`text-lg font-semibold mb-3 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                    {t('experience.achievements')}:
                  </h4>
                  <ul className="list-disc pl-5 mb-5 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <h4 className={`text-lg font-semibold mb-3 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                    {t('experience.technologies')}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                            ? 'bg-slate-700 text-slate-300'
                            : 'bg-slate-200 text-slate-700'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;