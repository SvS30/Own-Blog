import React, { useRef, useState, useEffect } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);
    setEmailStatus('');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL.PUBLIC_KEY
      );
      setEmailStatus(t('contact.form.success'));
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error(`Error al enviar: ${error?.text || error}`);
      setEmailStatus(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (emailStatus) {
      const timer = setTimeout(() => setEmailStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [emailStatus]);


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "salimvzqz@gmail.com",
      link: "mailto:salimvzqz@gmail.com"
    }
  ];

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className={`rounded-lg p-8 h-full transition-colors ${darkMode ? 'bg-slate-900' : 'bg-white'
              } shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                {t('contact.info.title')}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-start p-4 rounded-lg transition-all ${darkMode
                      ? 'hover:bg-slate-800 text-slate-300 hover:text-white'
                      : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                      }`}
                  >
                    <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg font-medium mb-1 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        {info.title}
                      </h4>
                      <p className={`transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className={`text-lg font-medium mb-4 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  {t('contact.info.connect')}
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/SvS30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all transform hover:scale-110 ${darkMode
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/salim-vazquez-solis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all transform hover:scale-110 ${darkMode
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className={`rounded-lg p-8 h-full transition-colors ${darkMode ? 'bg-slate-900' : 'bg-white'
              } shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                {t('contact.form.send')}
              </h3>

              {(isSubmitting || emailStatus) ? (
                <div className={`rounded-lg p-6 mb-6 flex items-center ${darkMode ? 'bg-emerald-900/20 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
                  }`}>
                  <MessageSquare size={24} className="mr-3" />
                  <p className="font-medium">
                    {isSubmitting && !emailStatus
                      ? t('contact.form.sending')
                      : emailStatus}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} ref={form} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}
                      >
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg transition-colors ${darkMode
                          ? 'bg-slate-800 text-white border-slate-700 focus:border-emerald-500'
                          : 'bg-slate-50 text-slate-900 border-slate-200 focus:border-emerald-500'
                          } border focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}
                      >
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg transition-colors ${darkMode
                          ? 'bg-slate-800 text-white border-slate-700 focus:border-emerald-500'
                          : 'bg-slate-50 text-slate-900 border-slate-200 focus:border-emerald-500'
                          } border focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                    >
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-colors ${darkMode
                        ? 'bg-slate-800 text-white border-slate-700 focus:border-emerald-500'
                        : 'bg-slate-50 text-slate-900 border-slate-200 focus:border-emerald-500'
                        } border focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
                      placeholder="Project | Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg transition-colors ${darkMode
                        ? 'bg-slate-800 text-white border-slate-700 focus:border-emerald-500'
                        : 'bg-slate-50 text-slate-900 border-slate-200 focus:border-emerald-500'
                        } border focus:ring-1 focus:ring-emerald-500 focus:outline-none`}
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg transition-all transform hover:translate-y-[-2px] hover:bg-emerald-600 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
