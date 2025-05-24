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
  
  const achievements: Achievement[] = [
    {
      title: "Query Performance Optimization",
      description: "Optimized critical database queries in a high-traffic financial system",
      metrics: "Reduced average query execution time from 20s to 2s, improving overall system response by 90%",
      technologies: ["PostgreSQL", "Redis", "Query Optimization"]
    },
    {
      title: "Microservices Architecture",
      description: "Led the migration from monolithic to microservices architecture",
      metrics: "Reduced deployment time by 75% and improved system reliability by 99.9%",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS"]
    },
    {
      title: "Real-time Data Processing",
      description: "Designed and implemented real-time data processing pipeline",
      metrics: "Successfully processing 1M+ events per second with sub-100ms latency",
      technologies: ["Kafka", "Elasticsearch", "Python"]
    },
    {
      title: "API Gateway Implementation",
      description: "Developed centralized API gateway for microservices",
      metrics: "Reduced API response time by 60% and implemented rate limiting reducing server load by 40%",
      technologies: ["Node.js", "Redis", "Kong", "GraphQL"]
    },
    {
      title: "Database Sharding",
      description: "Implemented database sharding strategy for scaling",
      metrics: "Handled 10x data growth while maintaining sub-50ms query response times",
      technologies: ["MongoDB", "Sharding", "Load Balancing"]
    },
    {
      title: "Security Enhancement",
      description: "Implemented comprehensive security measures",
      metrics: "Achieved SOC2 compliance and reduced security incidents by 95%",
      technologies: ["OAuth2", "JWT", "Encryption", "Security Auditing"]
    }
  ];

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
            <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              Rust
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              WebAssembly
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              gRPC
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              Blockchain
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              Machine Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;