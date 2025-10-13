import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp, FaCode } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/abhey-afk', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abhey-mishra-841023230/', color: 'hover:text-blue-400' },
    { icon: FaInstagram, url: 'https://www.instagram.com/all.about.abhey/', color: 'hover:text-pink-400' },
    { icon: FaEnvelope, url: 'mailto:ab852759@gmail.com', color: 'hover:text-cyan-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text">Abhey Mishra</h3>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Full Stack Web Developer passionate about creating innovative solutions and beautiful user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="inline-block"
                    >
                      → {link.name}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <motion.p 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-primary" />
                <a href="mailto:ab852759@gmail.com" className="hover:text-primary transition-colors">
                  ab852759@gmail.com
                </a>
              </motion.p>
              <motion.p 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <span className="text-primary">📍</span>
                <span>New Delhi, India</span>
              </motion.p>
              <motion.div
                className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs text-gray-500 mb-2">Available for freelance work</p>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Built with</span>
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abhey Mishra. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button - Responsive positioning */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp className="text-sm sm:text-base" />
      </motion.button>
    </footer>
  );
};

export default Footer;
