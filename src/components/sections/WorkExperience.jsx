import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

import ufitLogo       from '../../assets/uf_information_technology_logo.jpeg';
import ltimLogo       from '../../assets/ltimindtree_logo.jpeg';
import sequelLogo     from '../../assets/sequelstring_solutions_and_consultancy_pvt_ltd_logo.jpeg';
import csiDbitLogo    from '../../assets/csi_dbit_logo.jpeg';

const COMPANY_LOGOS = {
  'UFIT — University of Florida': ufitLogo,
  'LTIMindtree':                  ltimLogo,
  'Sequelstring Pvt Ltd':         sequelLogo,
  'CSI-DBIT':                     csiDbitLogo,
};

export default function WorkExperience({ data }) {
  return (
    <SectionWrapper id="experience" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Work Experience" subtitle="Where I've contributed professionally" />

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="flex flex-col gap-10">
          {data.map((job, i) => {
            const logo = COMPANY_LOGOS[job.company];

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 md:p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">

                    {/* Left — role + company (with logo) */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-50">{job.role}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        {logo ? (
                          <div className="w-5 h-5 rounded flex-shrink-0 bg-white border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <img
                              src={logo}
                              alt={`${job.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <Briefcase size={14} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                        )}
                        <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">{job.company}</span>
                      </div>
                    </div>

                    {/* Right — date + location */}
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-400 dark:text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary — visually distinct from the bullet list below */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-cyan-500/40 dark:border-cyan-400/30 pl-3 mb-5">
                    {job.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
