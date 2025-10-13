<div align="center">

# 🚀 Abhey Mishra - Personal Portfolio

### A Modern, Interactive & Fully Responsive Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Demo](https://your-portfolio-url.com) • [Report Bug](https://github.com/abhey-afk/My-Personal-Portfolio/issues) • [Request Feature](https://github.com/abhey-afk/My-Personal-Portfolio/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

A stunning, feature-rich personal portfolio website showcasing my journey as a Full Stack Developer. Built with modern web technologies, this portfolio demonstrates my skills in creating responsive, animated, and user-friendly web applications.

### ✨ Highlights

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Interactive Animations** - Engaging user experience with Framer Motion
- 🌓 **Dark/Light Mode** - Theme toggle for user preference
- 📧 **Contact Form** - Functional contact form with EmailJS integration
- 🎯 **SEO Optimized** - Better visibility on search engines

---

## 🚀 Features

### 🏠 Hero Section
- Dynamic typing animation showcasing multiple roles
- Animated avatar with pulsing effects
- Social media links with hover animations
- Call-to-action buttons with smooth transitions

### 👨‍💻 About Section
- Professional summary with gradient card design
- Education details with university logo
- Location and contact information cards
- Animated achievements section with trophy icon

### 💼 Skills Section
- Categorized skill display (Frontend, Backend, Tools)
- Interactive skill cards with hover effects
- Progress indicators for skill proficiency
- Animated skill icons

### 🎨 Projects Section
- Project showcase with live demo and GitHub links
- Technology tags for each project
- Hover effects revealing project details
- Responsive grid layout

### 📊 Experience Section
- Timeline view of work experience
- Company details with descriptions
- Animated entry on scroll
- Professional layout

### 📈 Stats Section
- Animated counters for achievements
- Real-time number animations
- Eye-catching gradient backgrounds

### 📞 Contact Section
- Functional contact form with EmailJS
- Form validation
- Social media links
- Smooth submission feedback

### 🎯 Additional Features
- **Cursor Trail Effect** - Custom animated cursor trail
- **Smooth Scrolling** - Seamless navigation between sections
- **Scroll-to-Top Button** - Easy navigation back to top
- **Active Section Highlighting** - Visual feedback in navigation
- **Responsive Navigation** - Mobile-friendly hamburger menu

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library for building component-based interfaces
- **Vite 5.4.2** - Next-generation frontend build tool
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Framer Motion 12.23.22** - Production-ready animation library

### Additional Libraries
- **React Icons 5.5.0** - Popular icon library
- **EmailJS 4.4.1** - Email service for contact form
- **React Context API** - State management for theme

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

---

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhey-afk/My-Personal-Portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd My-Personal-Portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
My-Personal-Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, resume
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── CursorTrail.jsx # Custom cursor effect
│   │   ├── Experience.jsx # Work experience
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero/Landing section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Skills.jsx     # Skills display
│   │   ├── Stats.jsx      # Statistics section
│   │   ├── Timeline.jsx   # Timeline component
│   │   └── TypingAnimation.jsx # Typing effect
│   ├── context/           # React Context
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── README.md              # Project documentation
```

---

## 🔑 Key Components

### 🎨 Hero Component
Dynamic landing page with typing animation, social links, and CTA buttons.

### 📊 Stats Component
Animated counter displaying achievements and milestones.

### 🎯 TypingAnimation Component
Reusable typing effect for dynamic text display.

### 🖱️ CursorTrail Component
Custom animated cursor trail for enhanced user experience.

### 🌓 ThemeContext
Global theme management for dark/light mode switching.

---

## 🎨 Customization

### Update Personal Information

1. **Edit Hero Section** (`src/components/Hero.jsx`)
   - Update name, roles, and description
   - Change social media links

2. **Update About Section** (`src/components/About.jsx`)
   - Modify professional summary
   - Update education details
   - Change contact information

3. **Update Projects** (`src/components/Projects.jsx`)
   - Add/remove projects
   - Update project details and links

4. **Update Skills** (`src/components/Skills.jsx`)
   - Modify skill categories
   - Add/remove skills

### Customize Colors

Edit `src/index.css` to change the color scheme:
```css
@theme {
  --color-primary: #0ea5e9;    /* Change primary color */
  --color-secondary: #06b6d4;  /* Change secondary color */
}
```

### Add Resume

Place your resume PDF in `src/assets/` and update the path in `Hero.jsx`.

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

---

## 📞 Contact

**Abhey Mishra** - Full Stack Developer

- 📧 Email: [ab852759@gmail.com](mailto:ab852759@gmail.com)
- 📱 Phone: +91 9625806295
- 🔗 LinkedIn: [Abhey Mishra](https://www.linkedin.com/in/abhey-mishra-841023230/)
- 💻 GitHub: [@abhey-afk](https://github.com/abhey-afk)
- 📍 Location: New Delhi, India

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
- [Vite](https://vitejs.dev/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ by [Abhey Mishra](https://github.com/abhey-afk)

</div>
