import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

function AwardCard({ award, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="award-flip-card h-72"
      style={{ perspective: '1000px' }}
    >
      <div
        className="award-flip-inner relative w-full h-full"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s ease' }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Image */}
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Year badge */}
          <div className="absolute top-3 right-3">
            <span className="text-xs text-amber-400 bg-amber-400/20 border border-amber-400/40 px-2 py-0.5 rounded-full backdrop-blur-sm font-mono">
              {award.year}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-base leading-snug mb-1">
              {award.title}
            </h3>
            <p className="text-amber-300/80 text-xs mb-2">{award.organisation}</p>
            <p className="text-cyan-300 text-xs font-medium tracking-wide animate-pulse">
              Hover for more details →
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🏆</span>
              <span className="text-xs text-amber-500 dark:text-amber-400 font-mono bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 px-2 py-0.5 rounded-full">
                {award.year}
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-gray-50 font-bold text-sm leading-snug mt-2 text-cyan-600 dark:text-cyan-300">
              {award.title}
            </h3>
            <p className="text-cyan-600/70 dark:text-cyan-400/70 text-xs font-medium mt-1">
              {award.organisation}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-3 flex-1 overflow-hidden line-clamp-6">
            {award.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Awards({ data }) {
  return (
    <SectionWrapper id="awards" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Awards" subtitle="Recognition and honours" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((award, i) => (
          <AwardCard key={award.id} award={award} index={i} />
        ))}
      </div>

      <style>{`
        .award-flip-card:hover .award-flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </SectionWrapper>
  );
}
