'use client';
import { motion } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const projects = [
  {
    name: 'Stock Market Tracker',
    url: 'https://github.com/james4-daf/stockMarketApi-next-firebase',
    live: 'https://stocktracker.example.com',
    description: 'Real-time financial dashboard.',
    image: '/previews/stockmarket.png',
  },
  {
    name: 'Coding Notes App',
    url: 'https://github.com/james4-daf/coding-notes-firebase-app',
    live: 'https://codingnotes.example.com',
    description: 'Markdown note-taking with real-time sync.',
    image: '/previews/codingnotes.png',
  },
  {
    name: 'Todo MacPWA',
    url: 'https://github.com/james4-daf/Todo-MacPWA',
    live: 'https://todomacpwa.example.com',
    description: 'Cross-platform PWA with native Mac-like UI.',
    image: '/previews/todoapp.png',
  },
];

export default function PortfolioLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const navItems = ['About', 'Tech', 'Projects', 'Contact'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowIndicator(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center transition ${
          scrolled ? 'bg-white/80 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="text-2xl font-bold text-gray-900">
          Daf<span className="text-blue-600">.</span>
        </div>
        <ul className="hidden md:flex gap-8 text-gray-800">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
        <motion.button
          className="md:hidden p-2 text-gray-800"
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>

      {/* Full-page Scroll Container */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Hero Slide */}
        <section className="snap-start h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-center leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting <span className="text-blue-600">Digital</span>
            <br /> Experiences
          </motion.h1>
          <motion.p
            className="mt-6 text-xl max-w-xl text-center text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I’m Daf, a Front-End Engineer specializing in React, TypeScript &
            modern UI design.
          </motion.p>

          {/* Delayed Scroll Indicator */}
          {showIndicator && (
            <motion.div
              className="absolute bottom-4 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mt-2 text-gray-600 font-bold text-lg tracking-wide uppercase">
                My projects
              </span>
              <ChevronDown className="w-8 h-8 text-gray-500 opacity-80" />
            </motion.div>
          )}
        </section>

        {/* Project Slides */}
        {projects.map((project) => (
          <section
            key={project.name}
            className="snap-start h-screen relative flex items-center justify-center bg-white px-6"
          >
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded text-gray-900 font-medium transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
