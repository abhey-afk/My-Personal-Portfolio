import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  const timelineData = [
    {
      year: '2021',
      title: 'Started B.Tech Journey',
      description: 'Began Computer Science Engineering at HMRITM, GGSIPU',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2022',
      title: 'First Web Project',
      description: 'Built my first full-stack web application using MERN stack',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2023',
      title: 'Open Source Contributor',
      description: 'Started contributing to open-source projects on GitHub',
      icon: '🚀',
      color: 'from-green-500 to-teal-500',
    },
    {
      year: '2024',
      title: 'Hacktoberfest Winner',
      description: 'Successfully participated and won Hacktoberfest 2024',
      icon: '🏆',
      color: 'from-orange-500 to-red-500',
    },
    {
      year: '2025',
      title: 'Graduation & Beyond',
      description: 'Completing B.Tech and ready for new opportunities',
      icon: '🎯',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-20 relative overflow-hidden`}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A timeline of my growth and achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <motion.div
                  className={`${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                  } p-6 rounded-2xl shadow-lg border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
                  } relative`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl`} />

                  <div className="relative z-10">
                    <motion.div
                      className={`inline-block px-4 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-bold mb-3`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    } hidden md:block`}
                  >
                    <div
                      className={`w-4 h-4 bg-gradient-to-br ${item.color} rotate-45 ${
                        index % 2 === 0 ? '' : ''
                      }`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Center icon */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-3xl">{item.icon}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
