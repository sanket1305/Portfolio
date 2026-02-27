import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPython, SiGo, SiGnubash,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiRedux,
  SiNodedotjs, SiExpress, SiFastapi, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiMysql, SiElasticsearch,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiGithubactions, SiTerraform,
  SiGit, SiPostman, SiFigma, SiJira, SiLinear,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const categoryIcons = {
  Languages: '{ }',
  Frontend: '⬡',
  Backend: '⚙',
  Databases: '◈',
  'DevOps & Cloud': '☁',
  Tools: '⚒',
};

const skillIcons = {
  // Languages
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'Go': SiGo,
  'Bash': SiGnubash,
  // Frontend
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  'Redux': SiRedux,
  // Backend
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'FastAPI': SiFastapi,
  'GraphQL': SiGraphql,
  // Databases
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'MySQL': SiMysql,
  'Elasticsearch': SiElasticsearch,
  // DevOps & Cloud
  'AWS': SiAmazonwebservices,
  'GCP': SiGooglecloud,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'GitHub Actions': SiGithubactions,
  'Terraform': SiTerraform,
  // Tools
  'Git': SiGit,
  'Postman': SiPostman,
  'Figma': SiFigma,
  'Jira': SiJira,
  'Linear': SiLinear,
  'VSCode': VscVscode,
};

export default function Skills({ data }) {
  const categories = Object.entries(data);

  return (
    <SectionWrapper id="skills" className="border-b border-gray-200/60 dark:border-gray-800/40">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-base select-none">
                {categoryIcons[category] ?? '#'}
              </span>
              <h3 className="text-gray-700 dark:text-gray-200 font-semibold text-sm uppercase tracking-wider">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300 transition-colors duration-200 cursor-default"
                  >
                    {Icon && <Icon className="shrink-0" size={13} />}
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
