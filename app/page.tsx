'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, Menu } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const projects = [
  {
    name: 'Informium',
    url: 'https://github.com/james4-daf/stockMarketApi-next-firebase',
    live: 'https://informium.co.uk',
    description: 'Real-time financial dashboard.',
    image: '/iphone.png',
    device: 'iphone',
  },
  {
    name: 'Notes App',
    url: 'https://github.com/james4-daf/coding-notes-firebase-app',
    live: 'https://codingnotes.example.com',
    description: 'Markdown note-taking with real-time sync.',
    image: '/notes.png',
    device: 'macbook',
  },
  {
    name: 'AI Todo',
    url: 'https://github.com/james4-daf/Todo-MacPWA',
    live: 'https://todomacpwa.example.com',
    description: 'Cross-platform PWA with native Mac-like UI.',
    image: '/todo.png',
    device: 'iphone',
  },
];

export default function PortfolioLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    'About Me',
    'Professional Experience',
    'Projects',
    'Contact',
  ];
  const notify = () => {
    navigator.clipboard.writeText('dafjwork@gmail.com');
    toast.info('dafjwork@gmail.com has been copied.', {
      position: 'bottom-right',
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (section: string) => {
    const id = section.toLowerCase().replace(/ /g, '-');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center transition ${
          scrolled ? 'bg-white/80 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="text-2xl font-bold text-gray-900">
          Dafydd James<span className="text-blue-600">.</span>
        </div>
        <ul className="hidden md:flex gap-8 text-gray-800">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 cursor-pointer transition"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <motion.button
          className="md:hidden p-2 text-gray-800"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>

      {/* Full-page Scroll Container */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Hero Slide */}
        <section className="snap-start h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 px-4">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-center leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting <span className="text-blue-600">Digital</span>
            <br /> Experiences
          </motion.h1>
          <motion.p
            className="mt-6 text-xl max-w-xl text-center text-gray-700 px-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I&apos;m Daf, a Front-End Engineer specializing in React, TypeScript
            & modern UI design.
          </motion.p>

          {/* Delayed Scroll Indicator */}
        </section>

        <section id="about-me">
          <div className="snap-start h-screen flex flex-col justify-center bg-white px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 ">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12 max-w-4xl mx-auto">
              {/* Left: Bio */}
              <div className="md:w-1/2 space-y-4 text-gray-700">
                <p>
                  I&apos;m a passionate Front-End Engineer with 4+ years at
                  Elsevier, building user-focused React & TypeScript
                  applications and tooling.
                </p>
                <p>
                  I excel at crafting clean, performant UIs and mentoring junior
                  devs.
                </p>
              </div>
              {/* Right: Tech Stack */}
              <div className="md:w-1/2 sm:mb-12">
                <h3 className="text-2xl font-semibold text-center md:text-left mb-4 text-blue-600">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label="React">
                      🚀
                    </span>
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label="TypeScript"
                    >
                      📘
                    </span>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label="Node.js">
                      🎨
                    </span>
                    <span>TailwindCSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label="JavaScript"
                    >
                      💛
                    </span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Professional Experience */}
        <section
          className="snap-start h-screen flex flex-col items-center justify-center bg-gray-50 px-6"
          id="professional-experience"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center mt-16 md:mt-16">
            Professional Experience
          </h2>

          {/* Desktop: full expanded list */}
          <div className="hidden md:block max-w-4xl w-full space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 ml-4">
                Elsevier Ltd
              </h3>
              <p className="text-gray-700 ml-4 font-semibold">
                Software Engineer III | Jan 2024 – Dec 2024
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-6">
                <li>
                  Led a full redesign of a high-traffic service (100K+
                  users/month), improving engagement by 11%.
                </li>
                <li>
                  Partnered with designers to implement responsive UI updates.
                </li>
                <li>Mentored junior devs and streamlined their onboarding.</li>
              </ul>

              <p className="text-gray-700 ml-4 font-semibold">
                Software Engineer II | Sep 2021 – Dec 2023
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-6">
                <li>Spearheaded a large cross-squad codebase migration.</li>
                <li>Built intuitive UIs based on business requirements.</li>
                <li>Maintained comprehensive test coverage.</li>
              </ul>

              <p className="text-gray-700 ml-4 font-semibold">
                Software Engineer I | Jan 2021 – Dec 2021
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-6">
                <li>Delivered a stakeholder dashboard.</li>
                <li>
                  Identified and remedied 4 security risks, leading to improved
                  system reliability.
                </li>
                <li>
                  Implemented a robust JavaScript codebase with bug monitoring.
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile: accordion (collapse/expand) */}
          <div className="flex-1 w-full overflow-y-auto">
            <div className="md:hidden max-w-4xl w-full space-y-4">
              {/* Role 1 */}
              <h1 className="text-2xl font-semibold text-blue-600 mb-2 text-center ml-4">
                Elsevier Ltd
              </h1>
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <summary className="px-6 py-4 flex   justify-between items-center cursor-pointer">
                  <span className="sm:flex sm:items-center sm:gap-2">
                    <span className="font-semibold text-lg ">
                      Software Engineer III
                    </span>{' '}
                    <span className="text-gray-600 text-sm">
                      | Jan 2024 – Dec 2024
                    </span>
                  </span>
                  <span className="text-gray-500">▸</span>
                </summary>
                <div className="px-6 pb-4 space-y-2 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Led a full redesign of a high-traffic service (100K+
                      users/month), improving engagement by 11%.
                    </li>
                    <li>
                      Partnered with designers to implement responsive UI
                      updates.
                    </li>
                    <li>
                      Mentored junior devs and streamlined their onboarding.
                    </li>
                  </ul>
                </div>
              </details>

              {/* Role 2 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <summary className="px-6 py-4 flex justify-between items-center cursor-pointer">
                  <span className="sm:flex sm:items-center sm:gap-2">
                    <span className="font-semibold text-lg ">
                      Software Engineer II
                    </span>{' '}
                    <span className="text-gray-600 text-sm">
                      | Sep 2021 – Dec 2023
                    </span>
                  </span>
                  <span className="text-gray-500">▸</span>
                </summary>
                <div className="px-6 pb-4 space-y-2 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Spearheaded a large cross-squad codebase migration.</li>
                    <li>Built intuitive UIs based on business requirements.</li>
                    <li>Maintained comprehensive test coverage.</li>
                  </ul>
                </div>
              </details>

              {/* Role 3 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <summary className="px-6 py-4 flex justify-between items-center cursor-pointer">
                  <span className=" sm:flex sm:items-center gap-2 ">
                    <span className="font-semibold text-lg ">
                      Software Engineer I
                    </span>{' '}
                    <span className="text-gray-600 text-sm">
                      | Jan 2021 – Dec 2021
                    </span>
                  </span>
                  <span className="text-gray-500">▸</span>
                </summary>
                <div className="px-6 pb-4 space-y-2 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Delivered a stakeholder dashboard.</li>
                    <li>
                      Identified and remedied 4 security risks, leading to
                      improved system reliability.
                    </li>
                    <li>
                      Implemented a robust JavaScript codebase with bug
                      monitoring.
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Project Slides */}
        <div id="projects">
          {projects.map((project) => (
            <section
              key={project.name}
              className="snap-start h-screen relative flex items-center justify-center bg-white px-6"
            >
              <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {project.device === 'iphone' ? (
                  <>
                    {/* Mobile view */}
                    <div className="block md:hidden p-2 mx-auto mt-8">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={200}
                        height={400}
                        className="rounded-[2rem] border-[6px] border-gray-800 dark:border-gray-800 bg-gray-800"
                      />
                    </div>
                    {/* Tablet/Desktop view */}
                    <div className="hidden md:block relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                        <Image
                          src={project.image}
                          width={272}
                          height={572}
                          className="dark:hidden w-[272px] h-[572px] p-4 object-contain"
                          alt={project.name}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[4px] rounded-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-md overflow-hidden h-[156px] md:h-[282px] bg-white dark:bg-gray-800">
                      <Image
                        src={project.image}
                        width={301}
                        height={282}
                        className="dark:hidden h-[156px] md:h-[282px] w-full rounded-lg"
                        alt={project.name}
                      />
                    </div>
                  </div>
                )}
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
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live</span>
                      </div>
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded text-gray-900 font-medium transition"
                    >
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section
          className="snap-start h-screen flex flex-col items-center justify-center gap-4"
          id="contact"
        >
          <h2 className="text-3xl xl:text-5xl font-bold">
            Let&apos;s Work <span className="text-blue-600">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground   max-w-2xl px-6">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={notify}
                className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded text-gray-900 font-medium transition"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email me</span>
                </div>
              </button>
              <a
                href="https://www.linkedin.com/in/dafyddjames/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded text-gray-900 font-medium transition"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 flex flex-col items-center justify-center gap-8 md:hidden transition">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
              onClick={() => {
                scrollToSection(item);
                setMobileMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
