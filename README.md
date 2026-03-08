# Kevil Gandhi - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://kevilgandhi.me)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.1-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.35.1-ff69b4)](https://www.framer.com/motion/)

Modern developer portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, GitHub API integration, and responsive design.

## 🌟 Features

- ✨ **Modern UI** - Glassmorphism design with smooth animations
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistence
- 📱 **Fully Responsive** - Mobile-first design approach
- 🚀 **GitHub Integration** - Dynamic stats and repository showcase
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎨 **Gradient Animations** - Eye-catching animated backgrounds
- 📊 **Progress Bars** - Visual skill representation
- 🔗 **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Styling:** Tailwind CSS 4.2.1
- **Animations:** Framer Motion 12.35.1
- **Icons:** React Icons 5.6.0
- **API:** GitHub REST API
- **Deployment:** GitHub Pages

## 📂 Project Structure

```
portfolio-site/
├── public/
│   ├── CNAME                    # Custom domain configuration
│   └── Kevil_Gandhi_Resume.pdf  # Resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with theme toggle
│   │   ├── ScrollProgress.jsx   # Scroll indicator
│   │   ├── Loader.jsx           # Loading animation
│   │   └── Footer.jsx           # Footer section
│   ├── sections/
│   │   ├── Hero.jsx             # Landing section
│   │   ├── About.jsx            # About & Education
│   │   ├── Skills.jsx           # Skills showcase
│   │   ├── Projects.jsx         # Project cards
│   │   ├── GitHub.jsx           # GitHub stats
│   │   ├── Certifications.jsx   # Certificates
│   │   ├── Resume.jsx           # Resume download
│   │   └── Contact.jsx          # Contact form
│   ├── utils/
│   │   └── ThemeContext.jsx     # Theme management
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kevil-Gandhi/kevil-gandhi-portfolio.git
cd kevil-gandhi-portfolio/portfolio-site
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

### Custom Domain Setup

1. Add `CNAME` file in `public/` folder with your domain
2. Configure DNS records at your domain registrar:

**A Records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www -> Kevil-Gandhi.github.io
```

3. Enable HTTPS in GitHub Pages settings

## 🎨 Customization

### Update Personal Information

Edit the following files:
- `src/sections/Hero.jsx` - Name, title, tagline
- `src/sections/About.jsx` - Professional summary, education
- `src/sections/Skills.jsx` - Skills and proficiency levels
- `src/sections/Projects.jsx` - Project details
- `src/sections/Contact.jsx` - Contact information

### Change Colors

Edit `src/index.css`:
```css
@theme {
  --color-primary: #6366f1;    /* Change primary color */
  --color-secondary: #8b5cf6;  /* Change secondary color */
}
```

### Update GitHub Username

Replace `Kevil-Gandhi` with your username in:
- `src/sections/Hero.jsx`
- `src/sections/GitHub.jsx`

## 📱 Sections

1. **Hero** - Landing with profile picture and CTA buttons
2. **About** - Professional summary and education timeline
3. **Skills** - Categorized skills with progress bars
4. **Projects** - Featured projects with tech stack
5. **GitHub** - Live stats and recent repositories
6. **Certifications** - Certificate showcase with links
7. **Resume** - Download resume section
8. **Contact** - Contact form and social links

## 🌐 Live Demo

Visit the live site: [kevilgandhi.me](https://kevilgandhi.me)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kevil Gandhi**

- GitHub: [@Kevil-Gandhi](https://github.com/Kevil-Gandhi)
- Email: kevilmgandhi@gmail.com
- Portfolio: [kevilgandhi.me](https://kevilgandhi.me)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- GitHub for hosting and API

---

⭐ Star this repo if you find it helpful!

Made with ❤️ by Kevil Gandhi
