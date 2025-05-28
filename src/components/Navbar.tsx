import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    // { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.certifications'), href: '#certifications' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-slate-900 shadow-lg shadow-slate-900/20' 
            : 'bg-white shadow-lg shadow-slate-200/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center">
              <span className={`text-xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Salim<span className="text-emerald-500">Dev</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-300 hover:text-emerald-500 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="relative group">
              <button
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-label="Change language"
              >
                <Globe size={20} />
              </button>
              <div className={`absolute right-0 mt-2 py-2 w-32 rounded-lg shadow-lg hidden group-hover:block ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              }`}>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    darkMode ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('es')}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    darkMode ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  Español
                </button>
              </div>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-400' 
                  : 'bg-slate-100 text-slate-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${
                darkMode 
                  ? 'text-white hover:bg-slate-800' 
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Open menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-emerald-500 hover:bg-opacity-10 ${
                darkMode 
                  ? 'text-slate-300 hover:bg-slate-800' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded text-sm ${
                  darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded text-sm ${
                  darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;