import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const BASE = import.meta.env.BASE_URL;

const COMPANY_LOGOS = {
  'UFIT — University of Florida': `${BASE}images/companies/uf_information_technology_logo.jpeg`,
  'University of Florida':        `${BASE}images/companies/university_of_florida_logo.jpeg`,
  'LTIMindtree':                  `${BASE}images/companies/ltimindtree_logo.jpeg`,
  'Sequelstring Pvt Ltd':         `${BASE}images/companies/sequelstring_solutions_and_consultancy_pvt_ltd_logo.jpeg`,
  'CSI-DBIT':                     `${BASE}images/companies/csi_dbit_logo.jpeg`,
};

/* ── Reusable card content ───────────────────────────────────── */
function CardContent({ job, logo }) {
  return (
    <div className="relative z-10">
      <h3 className="text-lg font-bold text-white leading-snug mb-0.5">{job.role}</h3>

      <div className="flex items-center gap-1.5 mb-1">
        {logo && (
          <div className="w-4 h-4 rounded overflow-hidden bg-white/90 flex-shrink-0">
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </div>
        )}
        <p className="text-cyan-50 text-sm font-medium">{job.company}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-[11px] text-cyan-100/80 mb-4">
        <span className="flex items-center gap-1"><Calendar size={11} />{job.duration}</span>
        <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
      </div>

      <p className="text-sm text-white/80 leading-relaxed border-l-2 border-white/30 pl-3 mb-4">
        {job.description}
      </p>

      <ul className="space-y-2 mb-4">
        {job.bullets.map((b, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-white/80 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-200 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {job.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-0.5 rounded-lg bg-white/15 border border-white/20 text-white font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Timeline node ───────────────────────────────────────────── */
function TimelineNode({ size = 'lg' }) {
  if (size === 'sm') {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-950 border-2 border-gray-500 dark:border-gray-600 flex items-center justify-center shadow-md flex-shrink-0">
        <Briefcase size={15} className="text-cyan-200" />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-950 border-[3px] border-gray-500 dark:border-gray-600 flex items-center justify-center shadow-lg flex-shrink-0">
      <Briefcase size={18} className="text-cyan-200" />
    </div>
  );
}

/* ── Card with directional arrow ─────────────────────────────── */
function JobCard({ job, logo, direction, animDir, delay }) {
  // direction: 'left' (arrow points right →) | 'right' (arrow points left ←)
  return (
    <motion.div
      initial={{ opacity: 0, x: animDir }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-gradient-to-br from-cyan-800 to-indigo-900 dark:from-cyan-900 dark:to-indigo-950 rounded-xl p-5 w-full"
    >
      {/* Rotated-square arrow — half pokes out toward center line */}
      {direction === 'right' && (
        <div className="absolute -left-[7px] top-6 w-[14px] h-[14px] bg-cyan-800 dark:bg-cyan-900 rotate-45 z-0" />
      )}
      {direction === 'left' && (
        <div className="absolute -right-[7px] top-6 w-[14px] h-[14px] bg-cyan-800 dark:bg-cyan-900 rotate-45 z-0" />
      )}
      <CardContent job={job} logo={logo} />
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────── */
export default function WorkExperience({ data }) {
  return (
    <SectionWrapper id="experience" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Work Experience" subtitle="Where I've contributed professionally" />

      <div className="relative">

        {/* ════ DESKTOP: alternating left-right timeline ════ */}
        <div className="hidden md:block">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

          <div className="flex flex-col gap-14">
            {data.map((job, i) => {
              const logo = COMPANY_LOGOS[job.company];
              const cardOnRight = i % 2 === 0;

              return (
                <div key={job.id} className="relative grid grid-cols-2 items-start">

                  {/* ── Left column ── */}
                  <div className="pr-12 flex justify-end items-start">
                    {cardOnRight ? (
                      /* Date label — left side */
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="text-sm text-gray-500 dark:text-gray-400 font-mono text-right pt-3"
                      >
                        {job.duration}
                      </motion.p>
                    ) : (
                      /* Job card — left side, arrow points right → */
                      <JobCard job={job} logo={logo} direction="left" animDir={-40} delay={i * 0.1} />
                    )}
                  </div>

                  {/* ── Center node ── */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-3 z-10">
                    <TimelineNode />
                  </div>

                  {/* ── Right column ── */}
                  <div className="pl-12 flex justify-start items-start">
                    {cardOnRight ? (
                      /* Job card — right side, arrow points left ← */
                      <JobCard job={job} logo={logo} direction="right" animDir={40} delay={i * 0.1} />
                    ) : (
                      /* Date label — right side */
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="text-sm text-gray-500 dark:text-gray-400 font-mono text-left pt-3"
                      >
                        {job.duration}
                      </motion.p>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ════ MOBILE: left-aligned timeline ════ */}
        <div className="md:hidden">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
          <div className="flex flex-col gap-8">
            {data.map((job, i) => {
              const logo = COMPANY_LOGOS[job.company];
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-2">
                    <TimelineNode size="sm" />
                  </div>
                  <div className="relative bg-gradient-to-br from-cyan-800 to-indigo-900 dark:from-cyan-900 dark:to-indigo-950 rounded-xl p-4">
                    {/* Arrow pointing left toward the node */}
                    <div className="absolute -left-[7px] top-5 w-[14px] h-[14px] bg-cyan-800 dark:bg-cyan-900 rotate-45 z-0" />
                    <CardContent job={job} logo={logo} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
