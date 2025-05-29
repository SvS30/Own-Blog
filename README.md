# Salim Vazquez Solis – Portfolio

[![CI/CD](https://github.com/SvS30/Own-Blog/workflows/CI/CD/badge.svg)](https://github.com/SvS30/Own-Blog/actions)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cfe185e9-9d2e-4d0b-b1bc-17f0a13256bb/deploy-status)](https://app.netlify.com/projects/salimv/deploys)

Welcome to my personal portfolio!  
This site showcases my experience, projects, certifications, and skills as a backend developer.

## 🚀 Tech Stack

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization:** [react-i18next](https://react.i18next.com/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Email Service:** [EmailJS](https://www.emailjs.com/) (API key required)
- **CI/CD:** GitHub Actions ([`.github/workflows/CI-CD.yml`](.github/workflows/CI-CD.yml))
- **Deployment:** [Netlify](https://www.netlify.com/)

## 🌐 Live Demo

[https://salimv.netlify.app](https://salimv.netlify.app)

## 🛠️ Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SvS30/own-blog.git
   cd own-blog
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment**:
   - Copy `.env.example` to `.env` and add your [EmailJS](https://dashboard.emailjs.com/) API KEY:
      ```
      VITE_RESEND_API_KEY=your_resend_api_key_here
      ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

## 🧪 Available Scripts
- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## ⚙️ CI/CD & Deployment
- **CI/CD**: Automated with GitHub Actions on pull requests to the prod branch.
- **Deployment**: The site is automatically deployed to Netlify.

## 📚 Features

- **Multilingual Support:** Switch between languages seamlessly.
- **Dark/Light Mode:** Toggle between dark and light themes.
- **Responsive Design:** Looks great on both desktop and mobile devices.
- **Smooth Animations:** Enjoy subtle animations throughout the site.

## 📫 Contact

- **Email:** [salimvzqz@gmail.com](mailto:salimvzqz@gmail.com)
- **LinkedIn:** [Salim Vazquez Solis](https://www.linkedin.com/in/salim-vazquez-solis/)
- **GitHub:** [SvS30](https://github.com/SvS30)

Thank you for visiting my portfolio! Feel free to reach out if you have any questions or just want to connect.