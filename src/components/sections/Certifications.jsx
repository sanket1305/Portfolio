import { BadgeCheck, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

export default function Certifications({ data }) {
  return (
    <SectionWrapper id="certifications" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Certifications" subtitle="Verified professional credentials" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 flex-shrink-0 mt-0.5">
                <BadgeCheck size={20} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-gray-900 dark:text-gray-50 font-semibold text-sm leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                    {cert.name}
                  </h3>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label="View credential"
                      className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 flex-shrink-0">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-cyan-600/80 dark:text-cyan-400/80 text-xs font-medium mt-0.5">{cert.issuer}</p>
                <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-400 dark:text-gray-500">
                  <Calendar size={11} /><span>{cert.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
