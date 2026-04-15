import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a mailto link with the form data
    const mailtoLink = `mailto:mustafsafdar87@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <AnimatedBackground>
      <section id="contact" ref={ref} className="section-padding pt-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-8 text-center lg:text-left"
            >
              <div className="hidden sm:block">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:mustafsafdar87@gmail.com"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                    >
                      mustafsafdar87@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Github className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">GitHub</p>
                    <a
                      href="https://github.com/mustafasafdar1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                    >
                      github.com/mustafasafdar1
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/mustafa-safdar-2350b9380/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                    >
                      linkedin.com/in/mustafa-safdar-2350b9380
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-700/50"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-4 py-4 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white text-base sm:text-base focus:scale-105 transition-all duration-200 min-h-[48px]"
                      placeholder="Your Name"
                      autoComplete='name'
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-4 py-4 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white text-base sm:text-base focus:scale-105 transition-all duration-200 min-h-[48px]"
                      placeholder="your.email@example.com"
                      autoComplete='email'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-4 py-4 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white text-base sm:text-base focus:scale-105 transition-all duration-200 min-h-[48px]"
                    placeholder="What's this about?"
                    autoComplete='subject'
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-4 py-4 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white resize-none text-base sm:text-base focus:scale-105 transition-all duration-200 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    autoComplete='off'
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-base sm:text-base py-4 sm:py-3 min-h-[48px] focus:scale-105 transition-all duration-200"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Contact;
