import { ExternalLink, Briefcase, Code2 } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

import ltimLogo       from '../../assets/ltimindtree_logo.jpeg';
import infosysLogo    from '../../assets/infosys_logo.jpeg';
import tcsLogo        from '../../assets/tata_consultancy_services_logo.jpeg';
import persistentLogo from '../../assets/persistent_systems_logo.jpeg';

const PPO_LOGOS = {
  'LTIMindtree':        ltimLogo,
  'Infosys':            infosysLogo,
  'TCS':                tcsLogo,
  'Persistent Systems': persistentLogo,
};

/* ── Per-platform visual config ───────────────────────────── */
const PLATFORM_CONFIG = {
  LeetCode: {
    Icon: SiLeetcode,
    iconColor:    'text-[#FFA116]',
    iconBg:       'bg-[#FFA116]/10  dark:bg-[#FFA116]/10',
    iconBorder:   'border-[#FFA116]/25 dark:border-[#FFA116]/20',
    cardBorder:   'border-[#FFA116]/20 dark:border-[#FFA116]/15',
    hoverBorder:  'hover:border-[#FFA116]/55 dark:hover:border-[#FFA116]/45',
    hoverShadow:  'hover:shadow-[#FFA116]/8',
  },
};

const fallbackConfig = {
  Icon: Code2,
  iconColor:   'text-cyan-500',
  iconBg:      'bg-cyan-50      dark:bg-cyan-400/10',
  iconBorder:  'border-cyan-200 dark:border-cyan-400/20',
  cardBorder:  'border-gray-200 dark:border-gray-800',
  hoverBorder: 'hover:border-cyan-500/40',
  hoverShadow: 'hover:shadow-cyan-500/5',
};

/* ── Stat pill ─────────────────────────────────────────────── */
function StatPill({ label, value, colour }) {
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-800/70 rounded-lg py-2.5 text-center min-w-0">
      <p className={`font-bold text-base leading-none mb-1 ${colour}`}>{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500">{label}</p>
    </div>
  );
}

/* ── Main component ────────────────────────────────────────── */
export default function CompetitiveProgramming({ data }) {
  const { profiles = [], ppoOffers = [] } = data;
  const total = (s) => (s.easy ?? 0) + (s.medium ?? 0) + (s.hard ?? 0);

  return (
    <SectionWrapper id="competitive" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle
        title="Competitive Programming"
        subtitle="Coding profiles and pre-placement offers"
      />

      {/* ── Coding profiles ── */}
      {profiles.length > 0 && (
        <div className="mb-14">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Coding Profiles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {profiles.map((profile, i) => {
              const cfg = PLATFORM_CONFIG[profile.platform] ?? fallbackConfig;
              const { Icon, iconColor, iconBg, iconBorder, cardBorder, hoverBorder, hoverShadow } = cfg;
              const stats = profile.stats;
              const solved = total(stats);

              return (
                <motion.a
                  key={profile.id}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className={`
                    group relative flex flex-col
                    bg-white dark:bg-gray-900
                    border ${cardBorder} ${hoverBorder}
                    rounded-xl p-6
                    hover:shadow-lg ${hoverShadow}
                    transition-all duration-300
                  `}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-lg ${iconBg} border ${iconBorder}`}>
                      <Icon size={22} className={iconColor} />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 group-hover:text-cyan-500 transition-colors">
                      Visit profile <ExternalLink size={12} />
                    </span>
                  </div>

                  {/* Platform + username */}
                  <h3 className="font-bold text-gray-900 dark:text-gray-50 text-base mb-0.5">
                    {profile.platform}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-mono mb-5">
                    @{profile.username}
                  </p>

                  {/* Total solved badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-extrabold text-gray-900 dark:text-gray-50">
                      {solved}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 leading-tight">
                      problems<br />solved
                    </span>
                  </div>

                  {/* Easy / Medium / Hard breakdown */}
                  <div className="flex gap-2 mt-auto">
                    <StatPill label="Easy"   value={stats.easy}   colour="text-emerald-500 dark:text-emerald-400" />
                    <StatPill label="Medium" value={stats.medium} colour="text-amber-500   dark:text-amber-400"   />
                    <StatPill label="Hard"   value={stats.hard}   colour="text-rose-500    dark:text-rose-400"    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      )}

      {/* ── PPO Offers ── */}
      {ppoOffers.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Pre-Placement Offers
          </p>

          <div className="flex flex-col gap-4">
            {ppoOffers.map((ppo, i) => {
              const logo = PPO_LOGOS[ppo.company];

              return (
                <motion.div
                  key={ppo.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 md:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-cyan-500/40 transition-all duration-300"
                >
                  {/* Company logo or fallback icon */}
                  {logo ? (
                    <div className="w-11 h-11 rounded-xl flex-shrink-0 bg-white border border-gray-200 dark:border-gray-700 mt-0.5 overflow-hidden">
                      <img
                        src={logo}
                        alt={`${ppo.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 flex-shrink-0 mt-0.5">
                      <Briefcase size={20} className="text-cyan-600 dark:text-cyan-400" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1">
                      <h3 className="text-gray-900 dark:text-gray-50 font-bold text-base">
                        {ppo.role}
                      </h3>

                      {/* Year badge */}
                      <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 px-2 py-0.5 rounded-full">
                        {ppo.year}
                      </span>

                      {/* Package badge (optional) */}
                      {ppo.package && (
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 px-2 py-0.5 rounded-full">
                          {ppo.package}
                        </span>
                      )}
                    </div>

                    <p className="text-cyan-600/80 dark:text-cyan-400/80 text-sm font-medium mb-1.5">
                      {ppo.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {ppo.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
