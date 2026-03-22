import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
const avatarImg = `${import.meta.env.BASE_URL}images/profile/Sanket.png`;
import ResumeModal from '../ui/ResumeModal';

function HexagonAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px]"
    >
      {/* Outer slow-rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon points="160,18 285,88 285,232 160,302 35,232 35,88"
            stroke="url(#ringGrad)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
        </svg>
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4"
      >
        <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="innerRingGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <polygon points="140,14 252,77 252,203 140,266 28,203 28,77"
            stroke="url(#innerRingGrad)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
        </svg>
      </motion.div>

      {/* Main hexagon body with photo */}
      <div className="absolute inset-8">
        <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]">
          <defs>
            <clipPath id="hexClip">
              <polygon points="120,12 216,66 216,174 120,228 24,174 24,66" />
            </clipPath>
            <linearGradient id="hexBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* Photo clipped to hexagon */}
          <image
            href={avatarImg}
            x="0" y="0"
            width="240" height="240"
            clipPath="url(#hexClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Border on top of photo */}
          <polygon points="120,12 216,66 216,174 120,228 24,174 24,66"
            stroke="url(#hexBorder)" strokeWidth="2.5" fill="none" />

          {/* Vertex dots */}
          <circle cx="120" cy="12"  r="3" fill="#22d3ee" opacity="0.9" />
          <circle cx="216" cy="66"  r="3" fill="#22d3ee" opacity="0.9" />
          <circle cx="216" cy="174" r="3" fill="#22d3ee" opacity="0.9" />
          <circle cx="120" cy="228" r="3" fill="#22d3ee" opacity="0.9" />
          <circle cx="24"  cy="174" r="3" fill="#22d3ee" opacity="0.9" />
          <circle cx="24"  cy="66"  r="3" fill="#22d3ee" opacity="0.9" />
        </svg>
      </div>

      {/* Pulse glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-6 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"
      />
    </motion.div>
  );
}

export default function Hero({ personal }) {
  const { name, roles, bio, github, linkedin, email } = personal;
  const [currentRole, setCurrentRole] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentRole((prev) => (prev + 1) % roles.length),
      2500
    );
    return () => clearInterval(timer);
  }, [roles.length]);

  const socials = [
    { icon: Github, href: github, label: 'GitHub' },
    { icon: Linkedin, href: linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-cyan-600 dark:text-cyan-400 text-sm md:text-base mb-4 tracking-widest uppercase"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
            >
              <span className="gradient-text">{name}</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-cyan-600 dark:bg-cyan-400 text-white dark:text-gray-950 font-semibold rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-colors duration-200 text-sm md:text-base"
              >
                View My Work
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400/60 dark:hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 text-sm md:text-base"
              >
                Resume <FileText size={14} />
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-gray-400 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — hexagon avatar */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <HexagonAvatar />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Resume modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
