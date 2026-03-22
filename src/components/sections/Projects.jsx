import { Github, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-72"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Inner wrapper that actually flips */}
        <div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s ease' }}
        >
          <style>{`
            .flip-card:hover .flip-inner {
              transform: rotateY(180deg);
            }
          `}</style>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ data }) {
  return (
    <SectionWrapper id="projects" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Projects" subtitle="Things I've built" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flip-card h-72"
            style={{ perspective: '1000px' }}
          >
            <div
              className="flip-inner relative w-full h-full transition-transform duration-700"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 text-xs text-amber-400 bg-amber-400/20 border border-amber-400/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      <Star size={10} /> Featured
                    </span>
                  </div>
                )}

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-base leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cyan-300 text-xs font-medium tracking-wide animate-pulse">
                    Hover for more details →
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 flex flex-col"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-gray-50 font-bold text-sm leading-snug flex-1 pr-2 text-cyan-600 dark:text-cyan-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                        className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-1 mb-3 overflow-hidden line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </SectionWrapper>
  );
}
