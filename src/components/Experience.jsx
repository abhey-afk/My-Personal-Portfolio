import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Traincape Technology Pvt Ltd.',
      location: 'New Delhi',
      period: 'February 2025 - May 2025',
      type: 'work',
      responsibilities: [
        'Developed and maintained code for client websites using HTML, CSS, JavaScript, Node.js, and React.js',
        'Collaborated effectively with a 4-member development team, demonstrating strong teamwork and communication skills',
        'Implemented API integration and developed system functionality using RESTful APIs',
        'Gained comprehensive practical experience in full-stack development lifecycle',
        'Delivered projects on time while maintaining high code quality standards',
      ],
    },
    {
      title: 'Cooperative Intern',
      company: 'Ministry of Cooperation',
      location: 'New Delhi',
      period: 'November 2022 - January 2023',
      type: 'work',
      responsibilities: [
        'Enhanced operational efficiency by 20% through creation and maintenance of new reporting systems',
        'Proposed and implemented innovative manufacturing process improvements, reducing production time by 15 minutes per unit',
        'Collaborated with government stakeholders to streamline administrative processes',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Web Developer',
      organization: 'Udemy Foundation',
      period: 'July 2023 - August 2023',
    },
    {
      title: 'Python Development Course',
      organization: 'GUVI Networks',
      period: 'April 2023 - June 2023',
    },
    {
      title: 'Data Structures and Algorithms',
      organization: 'Great Learning',
      period: 'January 2024 - February 2024',
    },
    {
      title: 'Introduction to Generative AI',
      organization: 'Google Cloud Skills',
      period: 'September 2024 - October 2024',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className={`w-full ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'}`}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : ''}`}>
            Experience & <span className="gradient-text">Certifications</span>
          </h2>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <FaBriefcase className="mr-3 text-primary" />
            Professional Experience
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl card-hover border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h4>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600">
                    <p className="font-medium">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                    >
                      <span className="text-primary mr-2 mt-1">▹</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <FaGraduationCap className="mr-3 text-primary" />
            Certifications & Training
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg card-hover border-t-4 border-secondary"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-primary font-semibold mb-1">{cert.organization}</p>
                <p className="text-gray-600 text-sm">{cert.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
