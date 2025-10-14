import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  const projects = [
    {
      title: 'Learning Management System',
      description:
        'A comprehensive full-stack LMS built with MERN stack featuring course creation, secure payment processing via Stripe, and video content delivery through Cloudinary. Includes user authentication with JWT, progress tracking, and separate dashboards for students and instructors.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'Cloudinary', 'TailwindCSS'],
      liveUrl: 'https://learning-management-system-72cf.onrender.com',
      githubUrl: 'https://github.com/abhey-afk/Learning-Management-System',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/LMS.png'
    },
    {
      title: 'Real-time Collaborative Code Editor',
      description:
        'A sophisticated real-time code editor featuring instant synchronization of code changes across multiple users. Includes built-in code compiler supporting multiple programming languages, enabling seamless team collaboration and code execution in a shared environment.',
      tech: ['React.js', 'Node.js', 'Socket.io', 'Express.js', 'CodeMirror'],
      liveUrl: 'https://realtime-collaborative-code-editor-az0d.onrender.com',
      githubUrl: 'https://github.com/abhey-afk/Realtime-Collaborative-Code-Editor',
      gradient: 'from-purple-500 to-pink-500',
      image: '/Code-Editor.png',
    },
    {
      title: 'Video and Audio Web Application',
      description:
        'A dynamic video calling application enabling real-time communication globally. Features include secure peer-to-peer connections, responsive design, and seamless user experience across devices.',
      tech: ['React.js', 'MongoDB', 'Node.js', 'WebRTC', 'Socket.io'],
      liveUrl: 'https://morning-escarpment-67980.onrender.com',
      githubUrl: 'https://github.com/abhey-afk/Video-calling-web-application',
      gradient: 'from-green-500 to-teal-500',
      image: '/Video-app.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : ''}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100 relative group"
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {/* Animated Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              />
              
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={`hidden h-full bg-gradient-to-br ${project.gradient} items-center justify-center`}>
                  <motion.div
                    className="text-white text-6xl font-bold"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-primary text-xs font-medium rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaExternalLinkAlt />
                    <span className="font-medium">Live Demo</span>
                  </motion.a>
                  {project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub />
                      <span className="font-medium">Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
