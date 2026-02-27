import { Trophy, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

const resultColorMap = (result) => {
  const r = result.toLowerCase();
  if (r.includes('1st') || r.includes('winner')) return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 border-amber-200 dark:border-amber-400/20';
  if (r.includes('2nd') || r.includes('finalist')) return 'text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-400/10 border-gray-300 dark:border-gray-400/20';
  if (r.includes('3rd')) return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-400/10 border-orange-200 dark:border-orange-400/20';
  return 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border-cyan-200 dark:border-cyan-400/20';
};

export default function Hackathons({ data }) {
  return (
    <SectionWrapper id="hackathons" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Hackathons" subtitle="Competing, building, and winning" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((hack, i) => (
          <motion.div
            key={hack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
          >
            <span className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 text-xs font-semibold rounded-full border mb-4 ${resultColorMap(hack.result)}`}>
              <Trophy size={11} />
              {hack.result}
            </span>

            <h3 className="text-gray-900 dark:text-gray-50 font-bold text-base mb-1">{hack.event}</h3>
            <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-2">{hack.project}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">{hack.description}</p>

            <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <div className="flex items-center gap-1"><Calendar size={12} /><span>{hack.date}</span></div>
              <div className="flex items-center gap-1"><Users size={12} /><span>Team of {hack.team}</span></div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {hack.tech.map((t) => (<Badge key={t}>{t}</Badge>))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
