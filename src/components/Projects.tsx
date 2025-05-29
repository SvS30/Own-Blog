import React, { useState } from 'react';
import { Github, ExternalLink, Code, Server, Database, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'api' | 'database' | 'microservices' | 'cloud';
  featured: boolean;
}

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isHidden] = useState(true);
  const projects: Project[] = t('projects.projects', { returnObjects: true }) as Project[];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.category === activeFilter);
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'api', label: 'API' },
    { id: 'microservices', label: 'Microservices' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'api':
        return <Code size={18} />;
      case 'microservices':
        return <Server size={18} />;
      case 'database':
        return <Database size={18} />;
      case 'cloud':
        return <Cloud size={18} />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="projects" 
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      } ${isHidden ? 'hidden' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {t('projects.description')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id 
                  ? 'bg-emerald-500 text-white'
                  : darkMode 
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                    : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-xl ${
                darkMode ? 'bg-slate-900 shadow-lg' : 'bg-white shadow-md'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode 
                      ? 'bg-slate-800/80 text-slate-300' 
                      : 'bg-white/90 text-slate-700'
                  }`}>
                    {getCategoryIcon(project.category)}
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {t('projects.filters.featured')}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 line-clamp-3 transition-colors ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        darkMode 
                          ? 'bg-slate-800 text-slate-300' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center transition-colors ${
                        darkMode 
                          ? 'text-slate-300 hover:text-white' 
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center transition-colors ${
                          darkMode 
                            ? 'text-slate-300 hover:text-white' 
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                        aria-label="View Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-medium transition-colors ${
                      darkMode 
                        ? 'text-emerald-400 hover:text-emerald-300' 
                        : 'text-emerald-600 hover:text-emerald-700'
                    }`}
                  >
                    {t('projects.viewProject')}
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/SvS30" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-all transform hover:translate-y-[-2px] ${
              darkMode 
                ? 'bg-slate-800 text-white hover:bg-slate-700' 
                : 'bg-white text-slate-900 hover:bg-slate-50 shadow-md hover:shadow-lg'
            }`}
          >
            <Github size={20} className="mr-2" />
            {t('projects.viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
};

// Import the Cloud icon
const Cloud = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

export default Projects;