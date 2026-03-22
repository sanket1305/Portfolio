import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

export default function Education({ data }) {
  return (
    <SectionWrapper id="education" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Education" subtitle="Academic background and qualifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="h-full bg-gradient-to-br from-cyan-800 to-indigo-900 dark:from-cyan-900 dark:to-indigo-950 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 flex-shrink-0">
                  <GraduationCap size={20} className="text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-base leading-snug">{edu.institution}</h3>
                  <p className="text-cyan-200 text-sm font-medium mt-0.5">{edu.degree}</p>
                  <p className="text-white/70 text-sm">{edu.field}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-xs text-white/60">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{edu.duration}</span>
                </div>
                {edu.gpa && (
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white/70">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>

              {edu.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
