import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

export default function Awards({ data }) {
  return (
    <SectionWrapper id="awards" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Awards" subtitle="Recognition and honours" />

      <div className="flex flex-col gap-4">
        {data.map((award, i) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 md:p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 flex-shrink-0 mt-0.5">
              <Award size={20} className="text-amber-500 dark:text-amber-400" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                <h3 className="text-gray-900 dark:text-gray-50 font-bold text-base">{award.title}</h3>
                <span className="text-xs text-amber-600 dark:text-amber-400/80 font-mono bg-amber-50 dark:bg-amber-400/10 px-2 py-0.5 rounded-full self-start sm:self-auto">
                  {award.year}
                </span>
              </div>
              <p className="text-cyan-600/80 dark:text-cyan-400/80 text-sm font-medium mb-1">{award.organisation}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
