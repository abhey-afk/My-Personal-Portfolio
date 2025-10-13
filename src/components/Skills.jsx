import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiSocketdotio,
  SiVite,
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML/CSS', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'React.js', icon: FaReact, color: 'text-cyan-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
        { name: 'Django', icon: SiDjango, color: 'text-green-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'RESTful APIs', icon: FaNodeJs, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
        { name: 'Socket.io', icon: SiSocketdotio, color: 'text-gray-700' },
        { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className={`w-full ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : ''}`}>
            Technical <span className="gradient-text">Skills</span>
          </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-xl card-hover"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 + index * 0.05 }}
                  >
                    <skill.icon className={`text-3xl ${skill.color}`} />
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
