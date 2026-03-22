import { ExternalLink, RefreshCw } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { useLeetCodeStats } from '../../hooks/useLeetCodeStats';

const BASE = import.meta.env.BASE_URL;

/* ── Company logo paths (served from public/) ───────────────── */
const PPO_LOGOS = {
  'LTIMindtree':        `${BASE}images/companies/ltimindtree_logo.jpeg`,
  'Infosys':            `${BASE}images/companies/infosys_logo.jpeg`,
  'TCS':                `${BASE}images/companies/tata_consultancy_services_logo.jpeg`,
  'Persistent Systems': `${BASE}images/companies/persistent_systems_logo.jpeg`,
};

/* ── LeetCode stat pill ─────────────────────────────────────── */
function StatPill({ label, value, colour }) {
  return (
    <div className="flex-1 bg-white/10 rounded-lg py-2.5 text-center min-w-0">
      <p className={`font-bold text-base leading-none mb-1 ${colour}`}>{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-gray-300/70">{label}</p>
    </div>
  );
}

/* ── LeetCode profile card ──────────────────────────────────── */
function LeetCodeCard({ profile, index }) {
  const { stats, loading } = useLeetCodeStats(profile.username, profile.stats);
  const solved = (stats.easy ?? 0) + (stats.medium ?? 0) + (stats.hard ?? 0);

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-[#FFA116]/20 hover:border-[#FFA116]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFA116]/10"
      style={{ height: '300px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-[#FFA116]/10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#FFA116 1px, transparent 1px), linear-gradient(90deg, #FFA116 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Default face — logo + username + total */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 transition-transform duration-300 group-hover:-translate-y-4">
        <div className="w-16 h-16 rounded-2xl bg-[#FFA116]/15 border border-[#FFA116]/30 flex items-center justify-center">
          <SiLeetcode size={36} className="text-[#FFA116]" />
        </div>
        <div className="text-center">
          <p className="font-bold text-white text-lg">LeetCode</p>
          <p className="text-sm text-gray-400 font-mono">@{profile.username}</p>
        </div>
        {loading ? (
          <RefreshCw size={16} className="animate-spin text-[#FFA116]/60" />
        ) : (
          <p className="text-3xl font-extrabold text-white">{solved}
            <span className="text-sm font-normal text-gray-400 ml-1">solved</span>
          </p>
        )}
      </div>

      {/* Hover panel — slides up from bottom with E/M/H breakdown */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur-sm border-t border-[#FFA116]/20 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out">
        <p className="text-[10px] uppercase tracking-widest text-[#FFA116]/70 font-semibold mb-3">
          Breakdown
        </p>
        {loading ? (
          <div className="flex gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex-1 bg-white/5 rounded-lg py-2.5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex gap-2">
            <StatPill label="Easy"   value={stats.easy}   colour="text-emerald-400" />
            <StatPill label="Medium" value={stats.medium} colour="text-amber-400"   />
            <StatPill label="Hard"   value={stats.hard}   colour="text-rose-400"    />
          </div>
        )}
        <p className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-3">
          View profile <ExternalLink size={11} />
        </p>
      </div>
    </motion.a>
  );
}

/* ── PPO offer card ─────────────────────────────────────────── */
function PPOCard({ ppo, index }) {
  const logo = PPO_LOGOS[ppo.company];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
      style={{ height: '300px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800 to-indigo-900 dark:from-cyan-900 dark:to-indigo-950" />

      {/* Default face — logo + competition + company + role */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 transition-transform duration-300 group-hover:-translate-y-3">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 shadow-md overflow-hidden flex items-center justify-center p-2">
          {logo ? (
            <img
              src={logo}
              alt={`${ppo.company} logo`}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-2xl font-black text-white/60">
              {ppo.company.charAt(0)}
            </span>
          )}
        </div>

        {/* Competition + company + role */}
        <div className="text-center">
          {ppo.competition && (
            <p className="font-bold text-white text-base leading-snug">
              {ppo.competition}
            </p>
          )}
          <p className="text-xs text-cyan-200 font-semibold mt-0.5 tracking-wide">
            {ppo.company}
          </p>
          <p className="text-xs text-white/70 font-medium mt-0.5">{ppo.role}</p>
          <span className="inline-block mt-2 text-xs font-mono text-white/60 bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full">
            {ppo.year}
          </span>
        </div>
      </div>

      {/* Hint text */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center group-hover:opacity-0 transition-opacity duration-200">
        <p className="text-[10px] text-cyan-200/70 font-medium tracking-wide animate-pulse">
          Hover to know more →
        </p>
      </div>

      {/* Hover panel — slides up from bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/98 to-cyan-950/95 backdrop-blur-sm border-t border-white/10 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-[10px] uppercase tracking-widest text-cyan-300 font-semibold mb-2">
          How I got it
        </p>
        <p className="text-xs text-white/80 leading-relaxed line-clamp-5">
          {ppo.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function CompetitiveProgramming({ data }) {
  const { profiles = [], ppoOffers = [] } = data;

  return (
    <SectionWrapper id="competitive" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle
        title="Competitive Programming"
        subtitle="Coding profiles and pre-placement offers"
      />

      {/* ── Coding profiles (shown in Hero section) ── */}
      {/* {profiles.length > 0 && (
        <div className="mb-12">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Coding Profiles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {profiles.map((profile, i) => (
              <LeetCodeCard key={profile.id} profile={profile} index={i} />
            ))}
          </div>
        </div>
      )} */}

      {/* ── PPO Offers ── */}
      {ppoOffers.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Pre-Placement Offers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ppoOffers.map((ppo, i) => (
              <PPOCard key={ppo.id} ppo={ppo} index={i} />
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
