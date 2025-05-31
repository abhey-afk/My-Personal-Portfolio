import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  username: "Abhey Mishra",
  title: "Hi all, I'm Abhey 👋",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 specializing in building scalable web applications with modern technologies. Experienced in developing end-to-end solutions using the MERN stack, with a strong focus on performance optimization and user experience. Proficient in DSA and committed to writing clean, maintainable code."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h2XKApaQz2BjuS1FEUuJjfIPZRY1w66P/view?usp=sharing",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/abhey-afk",
  linkedin: "https://www.linkedin.com/in/abhey-mishra-841023230/",
  gmail: "ab852759@gmail.com",
  instagram: "https://www.instagram.com/all.about.abhey/",
  display: true,
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING INNOVATIVE SOLUTIONS",
  skills: [
    emoji("⚡ Develop responsive and performant web applications using modern frameworks"),
    emoji("⚡ Design and implement scalable backend architectures with microservices"),
    emoji("⚡ Create real-time applications with WebSocket and state-of-the-art technologies"),
    emoji("⚡ Implement secure authentication and payment systems"),
    emoji("⚡ Optimize application performance and implement best practices"),
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NextJS", fontAwesomeClassname: "fas fa-code" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express", fontAwesomeClassname: "fas fa-server" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress" },
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "HMR Institute of Technology and Management",
      logo: require("./assets/images/HMR Logo.png"), 
      subHeader: "B.Tech in Computer Science",
      duration: "2021 - 2025",
      desc: "Affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi. Studied core CS subjects and developed various full stack projects.",
      descBullets: [
        "Coursework: Algorithms, AI, Computer Security, NLP",
        "Built a project management learning environment for C",
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "80%" },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Web Developer",
      company: "Traincape Technology Pvt Ltd",
      companylogo: require("./assets/images/Traincape logo.jpg"), 
      date: "Feb 2025 – May 2025",
      desc: "Led development of client websites using MERN stack, improving performance and user experience.",
      descBullets: [
        "Developed and optimized RESTful APIs reducing response time by 40%",
        "Implemented real-time features using Socket.io increasing user engagement by 25%",
        "Led a team of 4 developers and mentored 2 junior developers",
        "Integrated payment gateways and authentication systems with 99.9% uptime",
        "Improved website load time by 60% through code optimization and lazy loading"
      ],
    },
    {
      role: "Cooperative Intern",
      company: "Ministry of Cooperation",
      companylogo: require("./assets/images/MOC Logo.jpg"), 
      date: "Nov 2022 – Jan 2023",
      desc: "Enhanced manufacturing processes and reporting systems through innovative solutions.",
      descBullets: [
        "Reduced manufacturing time per unit by 15 minutes through process optimization",
        "Developed automated reporting system reducing manual work by 70%",
        "Collaborated with cross-functional teams to implement efficiency improvements",
        "Created documentation and standard operating procedures for future reference"
      ]
    },
  ],
};

const openSource = {
  showGithubProfile: "true",
  display: true,
};

const bigProjects = {
  title: "Projects",
  subtitle: "INNOVATIVE SOLUTIONS WITH MODERN TECHNOLOGIES",
  projects: [
    {
      image: require("./assets/images/LMS.png"),
      projectName: "Learning Management System",
      projectDesc: "Full-stack MERN LMS featuring secure payment processing, video streaming, and advanced user management. Implemented JWT authentication, Stripe integration, and Cloudinary CDN for optimal performance.",
      footerLink: [
        { name: "Live Demo", url: "https://learning-management-system-72cf.onrender.com/" },
        { name: "GitHub", url: "https://github.com/abhey-afk/Learning-Management-System" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Cloudinary"]
    },
    {
      image: require("./assets/images/Code Editor.png"),
      projectName: "Collaborative Code Editor",
      projectDesc: "Real-time collaborative code editor with integrated compiler. Features live code synchronization, multiple programming language support, and instant code execution.",
      footerLink: [
        { name: "Live Demo", url: "https://realtime-collaborative-code-editor-az0d.onrender.com/" },
        { name: "GitHub", url: "https://github.com/abhey-afk/collaborative-code-editor" }
      ],
      technologies: ["Socket.io", "React", "Node.js", "Express", "CodeMirror"]
    },
    {
      image: require("./assets/images/Video Call.png"),
      projectName: "Video & Audio App",
      projectDesc: "WebRTC-based video calling application with real-time chat, screen sharing, and room creation capabilities. Implemented using modern web technologies for seamless communication.",
      footerLink: [
        { name: "Live Demo", url: "https://morning-escarpment-67980.onrender.com/" },
        { name: "GitHub", url: "https://github.com/abhey-afk/video-call-app" }
      ],
      technologies: ["WebRTC", "Socket.io", "React", "Node.js", "Express"]
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Awards and Open Source Contributions",
  achievementsCards: [
    {
      title: "Hacktoberfest Winner 2024",
      subtitle: "Successfully completed required pull requests as part of Hacktoberfest.",
      image: require("./assets/images/Hacktoberfest.jpg"),
      imageAlt: "Hacktoberfest",
      footerLink: [
        { name: "Holopin Badge", url: "https://holopin.io/@abheyafk" },
      ],
    },
  ],
  display: true,
};

const blogSection = {
  title: "Blogs",
  subtitle: "Coming soon: Sharing what I learn through writing.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false,
};

const talkSection = {
  title: "Talks",
  subtitle: "Sharing knowledge, soon!",
  talks: [],
  display: false,
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's collaborate or chat!",
  number: "9625806295",
  email_address: "ab852759@gmail.com",
};

const twitterDetails = {
  userName: "",
  display: false,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
