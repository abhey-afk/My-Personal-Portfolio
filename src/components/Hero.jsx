import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const { theme } = useTheme();

  const handleDownloadResume = () => {
    const driveFileId = '1HVLdczxS8_vvua2_gA_wvef5HFc0gRcK';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    window.open(downloadUrl, '_blank');
  };

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
    <section id="home" className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden`}>
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8 relative">
            {/* Floating Code Symbols - Hidden on small screens */}
            <motion.div
              className="absolute -top-4 -left-8 text-3xl sm:text-4xl hidden sm:block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-8 text-3xl sm:text-4xl hidden sm:block"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              🚀
            </motion.div>
            <motion.div
              className="absolute -bottom-4 left-4 text-2xl sm:text-3xl hidden sm:block"
              animate={{
                y: [0, 10, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ⚡
            </motion.div>
            
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 w-40 h-40 mx-auto rounded-full border-4 border-primary/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            <motion.div
              className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold shadow-2xl relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                boxShadow: [
                  "0 25px 50px -12px rgba(14, 165, 233, 0.25)",
                  "0 25px 50px -12px rgba(6, 182, 212, 0.5)",
                  "0 25px 50px -12px rgba(14, 165, 233, 0.25)",
                ],
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              AM
              {/* Animated Emoji */}
              <motion.div
                className="absolute -bottom-2 -right-2 text-3xl"
                animate={{
                  rotate: [0, 20, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="gradient-text">Abhey Mishra</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className={`text-2xl md:text-3xl lg:text-4xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 flex justify-center items-center flex-wrap`}
          >
            <span className="mr-2">I'm a</span>
            <TypingAnimation 
              texts={[
                'Full Stack Developer',
                'MERN Stack Expert',
                'Problem Solver',
                'Open Source Contributor',
                'Tech Enthusiast'
              ]}
            />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}
          >
            Results-driven developer specializing in MERN stack with a passion for creating
            innovative web solutions. Completed B.Tech in Computer Science.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href="https://github.com/abhey-afk"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abhey-mishra-841023230/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:ab852759@gmail.com"
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaEnvelope size={32} />
            </motion.a>
            <motion.a
              href="tel:9625806295"
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaPhone size={32} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-xs sm:text-sm" />
              <span>Download Resume</span>
            </motion.button>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
