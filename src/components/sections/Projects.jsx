import { Github, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

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
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-400/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded bg-cyan-500/60 dark:bg-cyan-400/60" />
              </div>
              <div className="flex items-center gap-2">
                {project.featured && (
                  <span className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 px-2 py-0.5 rounded-full">
                    <Star size={10} /> Featured
                  </span>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
                    <Github size={18} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                    className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-gray-900 dark:text-gray-50 font-bold text-base mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
