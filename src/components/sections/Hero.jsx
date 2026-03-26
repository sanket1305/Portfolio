import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import ResumeModal from '../ui/ResumeModal';
import { useLeetCodeStats } from '../../hooks/useLeetCodeStats';

const avatarImg = `${import.meta.env.BASE_URL}images/profile/Sanket.png`;

// Hexagon polygon points (shared across front/back)
const HEX_POINTS = '120,12 216,66 216,174 120,228 24,174 24,66';

// ─── Coin-flip hexagon avatar ───────────────────────────────────────────────
function HexagonAvatar({ leetcode }) {
  // flipped = false → front (photo) | true → back (LeetCode)
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef(null);

  // Flip to front immediately, cancel any pending auto-flip
  const goToFront = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
    setFlipped(false);
  }, []);

  // Flip to LeetCode side, then auto-flip back after 3 s
  const goToLeetCode = useCallback(() => {
    clearTimeout(timerRef.current);
    setFlipped(true);
    timerRef.current = setTimeout(() => {
      setFlipped(false);
      timerRef.current = null;
    }, 3000);
  }, []);

  // Click → toggle sides
  const handleClick = () => {
    if (flipped) goToFront();
    else goToLeetCode();
  };

  // Initial animation on page load (fires once)
  useEffect(() => {
    const initial = setTimeout(goToLeetCode, 2000);
    return () => {
      clearTimeout(initial);
      clearTimeout(timerRef.current);
    };
  }, [goToLeetCode]);

  const lc = leetcode ?? {};
  const { stats } = useLeetCodeStats(lc.username, lc.stats ?? { easy: 0, medium: 0, hard: 0 });
  const easy   = stats.easy   ?? 0;
  const medium = stats.medium ?? 0;
  const hard   = stats.hard   ?? 0;
  const total  = easy + medium + hard;
  const username = lc.username ?? '';
  const url      = lc.url      ?? '#';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px] cursor-pointer select-none"
      onClick={handleClick}
      title={flipped ? 'Click to flip back' : 'Click to see LeetCode stats'}
    >
      {/* ── Outer slow-rotating ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="50%"  stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon points="160,18 285,88 285,232 160,302 35,232 35,88"
            stroke="url(#ringGrad)" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
        </svg>
      </motion.div>

      {/* ── Counter-rotating inner ring ── */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4"
      >
        <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="innerRingGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <polygon points="140,14 252,77 252,203 140,266 28,203 28,77"
            stroke="url(#innerRingGrad)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
        </svg>
      </motion.div>

      {/* ── Flip card container ── */}
      <div
        className="absolute inset-8"
        style={{ perspective: '800px' }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.7s ease-in-out',
          }}
        >
          {/* ── FRONT: profile photo ── */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <svg
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            >
              <defs>
                <clipPath id="hexClipFront">
                  <polygon points={HEX_POINTS} />
                </clipPath>
                <linearGradient id="hexBorderFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>

              <image
                href={avatarImg}
                x="0" y="0" width="240" height="240"
                clipPath="url(#hexClipFront)"
                preserveAspectRatio="xMidYMid slice"
              />
              <polygon points={HEX_POINTS}
                stroke="url(#hexBorderFront)" strokeWidth="2.5" fill="none" />

              {/* Vertex dots */}
              {[
                [120, 12], [216, 66], [216, 174],
                [120, 228], [24, 174], [24, 66],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3"
                  fill="#22d3ee" opacity="0.9" />
              ))}
            </svg>
          </div>

          {/* ── BACK: LeetCode stats ── */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <svg
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_24px_rgba(255,161,22,0.3)]"
            >
              <defs>
                <clipPath id="hexClipBack">
                  <polygon points={HEX_POINTS} />
                </clipPath>
                <linearGradient id="lcBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#1a1a2e" />
                  <stop offset="100%" stopColor="#0d0d1b" />
                </linearGradient>
                <linearGradient id="lcBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#FFA116" />
                  <stop offset="100%" stopColor="#ff8c00" />
                </linearGradient>
                <linearGradient id="totalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#FFA116" />
                  <stop offset="100%" stopColor="#ffd166" />
                </linearGradient>
              </defs>

              {/* Background fill clipped to hex */}
              <polygon points={HEX_POINTS} fill="url(#lcBg)" clipPath="url(#hexClipBack)" />

              {/* Subtle inner hex glow */}
              <polygon points={HEX_POINTS}
                fill="none" stroke="#FFA116" strokeWidth="0.5" strokeOpacity="0.15"
                clipPath="url(#hexClipBack)" />

              {/* ── LeetCode label ── */}
              <text x="120" y="52"
                textAnchor="middle" fill="#FFA116"
                fontSize="11" fontFamily="'Courier New', monospace" fontWeight="bold"
                letterSpacing="2">
                LeetCode
              </text>

              {/* Thin divider under label */}
              <line x1="80" y1="58" x2="160" y2="58"
                stroke="#FFA116" strokeWidth="0.6" strokeOpacity="0.4" />

              {/* ── Total number ── */}
              <text x="120" y="103"
                textAnchor="middle" fill="url(#totalGrad)"
                fontSize="40" fontFamily="Arial, sans-serif" fontWeight="bold">
                {total}
              </text>
              <text x="120" y="118"
                textAnchor="middle" fill="#6b7280"
                fontSize="8.5" fontFamily="Arial, sans-serif" letterSpacing="1">
                PROBLEMS SOLVED
              </text>

              {/* ── Divider ── */}
              <line x1="60" y1="130" x2="180" y2="130"
                stroke="#374151" strokeWidth="0.8" />

              {/* ── Easy / Medium / Hard ── */}
              {/* Easy */}
              <text x="68" y="148"
                textAnchor="middle" fill="#22c55e"
                fontSize="15" fontFamily="Arial, sans-serif" fontWeight="bold">
                {easy}
              </text>
              <text x="68" y="160"
                textAnchor="middle" fill="#22c55e"
                fontSize="7.5" fontFamily="Arial, sans-serif" letterSpacing="0.5">
                Easy
              </text>

              {/* Medium */}
              <text x="120" y="148"
                textAnchor="middle" fill="#f59e0b"
                fontSize="15" fontFamily="Arial, sans-serif" fontWeight="bold">
                {medium}
              </text>
              <text x="120" y="160"
                textAnchor="middle" fill="#f59e0b"
                fontSize="7.5" fontFamily="Arial, sans-serif" letterSpacing="0.5">
                Med.
              </text>

              {/* Hard */}
              <text x="172" y="148"
                textAnchor="middle" fill="#ef4444"
                fontSize="15" fontFamily="Arial, sans-serif" fontWeight="bold">
                {hard}
              </text>
              <text x="172" y="160"
                textAnchor="middle" fill="#ef4444"
                fontSize="7.5" fontFamily="Arial, sans-serif" letterSpacing="0.5">
                Hard
              </text>

              {/* ── Divider ── */}
              <line x1="60" y1="170" x2="180" y2="170"
                stroke="#374151" strokeWidth="0.8" />

              {/* Border on top */}
              <polygon points={HEX_POINTS}
                stroke="url(#lcBorder)" strokeWidth="2.5" fill="none" />

              {/* Vertex dots — orange */}
              {[
                [120, 12], [216, 66], [216, 174],
                [120, 228], [24, 174], [24, 66],
              ].map(([cx, cy]) => (
                <circle key={`b-${cx}-${cy}`} cx={cx} cy={cy} r="3"
                  fill="#FFA116" opacity="0.9" />
              ))}
            </svg>

            {/* ── "Visit Profile" link — stops propagation so it doesn't trigger flip ── */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                bottom: '22%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                color: '#FFA116',
                fontFamily: 'Arial, sans-serif',
                opacity: 0.85,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                letterSpacing: '0.5px',
              }}
            >
              ↗ Visit Profile
            </a>
          </div>
        </div>
      </div>

      {/* ── Pulse glow — cyan when front, amber when back ── */}
      <motion.div
        animate={{
          opacity:          [0.15, 0.35, 0.15],
          scale:            [1, 1.05, 1],
          backgroundColor: flipped
            ? 'rgba(251,191,36,0.10)'
            : 'rgba(34,211,238,0.10)',
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-6 rounded-full blur-2xl pointer-events-none"
      />
    </motion.div>
  );
}

// ─── Hero section ────────────────────────────────────────────────────────────
export default function Hero({ personal, leetcode }) {
  const { name, roles, bio, github, linkedin, email } = personal;
  const [currentRole, setCurrentRole] = useState(0);
  const [resumeOpen, setResumeOpen]   = useState(false);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentRole((prev) => (prev + 1) % roles.length),
      2500
    );
    return () => clearInterval(timer);
  }, [roles.length]);

  const socials = [
    { icon: Github,   href: github,             label: 'GitHub'   },
    { icon: Linkedin, href: linkedin,            label: 'LinkedIn' },
    { icon: Mail,     href: `mailto:${email}`,   label: 'Email'    },
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
      {/* Radial glows */}
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
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 text-sm md:text-base shadow-md hover:shadow-indigo-500/30"
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

          {/* Right — hexagon avatar (coin-flip) */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <HexagonAvatar leetcode={leetcode} />
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
