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
            className="hack-flip-card h-72"
            style={{ perspective: '1000px' }}
          >
            <div
              className="hack-flip-inner relative w-full h-full transition-transform duration-700"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${hack.image}`}
                  alt={hack.event}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Result badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${resultColorMap(hack.result)}`}>
                    <Trophy size={10} />
                    {hack.result}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-base leading-snug mb-2">
                    {hack.event}
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
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-cyan-600 dark:text-cyan-300 font-bold text-sm leading-snug flex-1 pr-2">
                    {hack.event}
                  </h3>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border shrink-0 ${resultColorMap(hack.result)}`}>
                    <Trophy size={9} />
                    {hack.result}
                  </span>
                </div>

                <p className="text-cyan-500 dark:text-cyan-400 text-xs font-medium mb-1">{hack.project}</p>

                <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-2">
                  <div className="flex items-center gap-1"><Calendar size={11} /><span>{hack.date}</span></div>
                  <div className="flex items-center gap-1"><Users size={11} /><span>Team of {hack.team}</span></div>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-1 mb-3 overflow-hidden line-clamp-3">
                  {hack.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {hack.tech.map((t) => (<Badge key={t}>{t}</Badge>))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .hack-flip-card:hover .hack-flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </SectionWrapper>
  );
}
