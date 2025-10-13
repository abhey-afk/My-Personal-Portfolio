import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  return (
    <section id="about" className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden`}>
      {/* Decorative Floating Elements - Hidden on mobile */}
      <motion.div
        className="absolute top-10 right-10 text-4xl sm:text-5xl md:text-6xl opacity-10 hidden md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        👨‍💻
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-3xl sm:text-4xl md:text-5xl opacity-10 hidden md:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎯
      </motion.div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : ''}`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-2xl">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Results-driven Full Stack Web Developer and Graduated B.Tech Computer Science
                  with demonstrated expertise in MERN stack development. Proven track record
                  of developing and maintaining enterprise-level applications, including a comprehensive
                  Learning Management System with integrated payment processing.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div 
              className={`${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-r from-blue-50 to-cyan-50'} p-6 rounded-xl shadow-lg card-hover relative overflow-hidden`}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -top-4 -right-4 text-4xl opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🎓
              </motion.div>
              
              {/* University Logo and Title */}
              <div className="flex items-start space-x-4 mb-3 relative z-10">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* University Logo - Replace with actual logo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    <img src="src/assets/ggsipu logo.png" alt="GGSIPU Logo" className="w-full h-full object-contain" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary">Education</h4>
                  <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Bachelor of Technology</p>
                </div>
              </div>
              
              <div className="relative z-10 space-y-1">
                <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Computer Science & Engineering</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>HMRITM ,Guru Gobind Singh Indraprastha University</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} flex items-center space-x-2`}>
                  <span>📅</span>
                  <span>2021 - 2025 | New Delhi, IN</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              className={`${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-r from-blue-50 to-cyan-50'} p-6 rounded-xl shadow-lg card-hover relative overflow-hidden`}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -top-4 -right-4 text-4xl opacity-20"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                📍
              </motion.div>
              <h4 className="text-xl font-bold mb-2 text-primary relative z-10">Location</h4>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>New Delhi, India</p>
            </motion.div>

            <motion.div 
              className={`${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-r from-blue-50 to-cyan-50'} p-6 rounded-xl shadow-lg card-hover relative overflow-hidden`}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -top-4 -right-4 text-4xl opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                📧
              </motion.div>
              <h4 className="text-xl font-bold mb-2 text-primary relative z-10">Contact</h4>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>ab852759@gmail.com</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>+91 9625806295</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl relative"
          whileHover={{ scale: 1.02 }}
        >
          {/* Trophy Icon - Responsive sizing */}
          <motion.div
            className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🏆
          </motion.div>
          
          <div className="bg-white p-8 rounded-2xl relative overflow-hidden">
            {/* Sparkle Effects */}
            <motion.div
              className="absolute top-4 right-4 text-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ⭐
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-4 gradient-text text-center relative z-10">Achievements</h3>
            <div className="text-center relative z-10">
              <motion.p 
                className="text-xl font-semibold mb-2 text-gray-900"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                Hacktoberfest Participant and Winner 2024
              </motion.p>
              <p className="text-gray-700">
                Successfully contributed to open-source projects, demonstrating collaboration skills,
                coding expertise, and commitment to the open-source community.
              </p>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
