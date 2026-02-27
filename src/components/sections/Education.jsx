import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

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
            <Card className="h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 flex-shrink-0">
                  <GraduationCap size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 dark:text-gray-50 text-base leading-snug">{edu.institution}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mt-0.5">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.field}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-xs text-gray-400 dark:text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{edu.duration}</span>
                </div>
                {edu.gpa && (
                  <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>

              {edu.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
