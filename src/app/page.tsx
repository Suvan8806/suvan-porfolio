'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Award, MapPin } from 'lucide-react';

// Import data from lib/data.ts
import { personalInfo, experiences, projects, skills } from '@/lib/data';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Rotating tagline effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    ['home', 'experience', 'projects', 'skills'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SK
          </motion.div>
          
          <div className="flex gap-8">
            {['Home', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-indigo-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl"
          style={{ opacity }}
        >
          {/* US Citizen Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-900/50 border border-cyan-500/30 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">{personalInfo.citizenship}</span>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-50 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            className="h-20 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                className="text-2xl lg:text-3xl text-cyan-400 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {personalInfo.taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="space-y-3 text-lg text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href={`https://${personalInfo.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg font-medium hover:border-cyan-500/50 transition-all backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5" />
              View Research
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-slate-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-slate-400 text-lg mb-16">Building AI systems at the cutting edge</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all ${
                  exp.featured
                    ? 'bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-indigo-500/10 border-2 border-cyan-500/30'
                    : 'bg-slate-900/50 border border-slate-800'
                }`}
              >
                {exp.featured && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-2">{exp.role}</h3>
                    <p className="text-xl text-cyan-400 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span>{exp.dateRange}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <div className="flex-1">
                        <p
                          className="text-slate-300 leading-relaxed mb-2"
                          dangerouslySetInnerHTML={{
                            __html: achievement.text.replace(/\*\*(.*?)\*\*/g, '<span class="text-cyan-400 font-semibold">$1</span>')
                          }}
                        />
                        {achievement.metrics && achievement.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {achievement.metrics.map((metric, mi) => (
                              <span key={mi} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-300">
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {achievement.tags.map((tag, ti) => (
                            <span key={ti} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400 font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-slate-400 text-lg mb-16">Innovative solutions leveraging AI/ML and modern web technologies</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl backdrop-blur-sm border transition-all hover:scale-[1.02] ${
                  project.featured
                    ? 'lg:col-span-2 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-indigo-500/10 border-cyan-500/30'
                    : 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-2">{project.title}</h3>
                    <p className="text-cyan-400 mb-3">{project.tagline}</p>
                    <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs font-semibold text-indigo-300">
                      {project.category}
                    </span>
                  </div>
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/50 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700 transition-all group-hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, mi) => (
                      <span key={mi} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-300">
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                <div className="space-y-3 mb-6">
                  {project.achievements.map((achievement, ai) => (
                    <p
                      key={ai}
                      className="text-slate-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: achievement.replace(/\*\*(.*?)\*\*/g, '<span class="text-cyan-400 font-semibold">$1</span>')
                      }}
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, ti) => (
                    <span key={ti} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-slate-400 text-lg mb-16">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={si}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-cyan-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Open to opportunities in AI/ML Research & Software Engineering
          </p>
          <div className="flex gap-6 justify-center text-slate-400">
            <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-cyan-400 transition-colors">
              {personalInfo.contact.email}
            </a>
            <span>•</span>
            <a href={`https://${personalInfo.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}