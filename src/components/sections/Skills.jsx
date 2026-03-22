import { motion } from 'framer-motion';
import {
  SiPython, SiGo, SiJavascript, SiCplusplus,
  SiLangchain, SiN8N,
  SiPytorch, SiScikitlearn, SiHuggingface,
  SiApachespark, SiApachekafka, SiApacheairflow, SiDbt, SiApachehive, SiApachehadoop,
  SiPostgresql, SiMysql, SiMongodb, SiSnowflake, SiSqlite, SiFirebase,
  SiAmazonwebservices, SiGooglecloud,
  SiSpringboot, SiReact, SiNodedotjs, SiDjango, SiAngular,
  SiPandas, SiNumpy, SiPlotly, SiStreamlit, SiWeb3Dotjs,
  SiTableau,
  SiGit, SiDocker, SiLinux, SiJenkins, SiJira, SiPostman, SiBitbucket, SiApachemaven,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { TbBrandAzure, TbSql, TbBrain, TbNetwork, TbCpu, TbChartHistogram, TbGitBranch } from 'react-icons/tb';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

// Fallback icon shown when no specific icon is found (also used for conceptual skills)
const DEFAULT_ICON = FaCode;

const categoryIcons = {
  'Languages':             '{ }',
  'Agentic AI':            '⬡',
  'AI / ML':               '◈',
  'Data Engineering':      '⚙',
  'Databases & Cloud':     '☁',
  'Frameworks & Libraries':'⚒',
  'Data Visualization':    '▣',
  'DevOps & Tools':        '⛭',
};

const skillIcons = {
  // Languages
  'Python':       SiPython,
  'Java':         FaJava,
  'Go':           SiGo,
  'JavaScript':   SiJavascript,
  'C/C++':        SiCplusplus,
  'SQL':          TbSql,

  // Agentic AI
  'LangChain':                  SiLangchain,
  'LangGraph':                  TbNetwork,
  'Model Context Protocol (MCP)': TbCpu,
  'Agent-to-Agent (A2A)':       TbNetwork,
  'Google ADK':                 TbCpu,
  'RAG Pipelines':              FaProjectDiagram,
  'Prompt Engineering':         FaCode,
  'LLM Fine-tuning':            TbBrain,
  'n8n':                        SiN8N,
  'Langflow':                   FaProjectDiagram,
  'LLM Orchestration':          TbBrain,

  // AI / ML
  'PyTorch':             SiPytorch,
  'Scikit-learn':        SiScikitlearn,
  'XGBoost':             TbChartHistogram,
  'Random Forest':       TbChartHistogram,
  'HDBSCAN':             TbChartHistogram,
  'LoRA Fine-Tuning':    TbBrain,
  'Sentence Transformers': TbBrain,
  'XLM-Roberta':         TbBrain,
  'HuggingFace':         SiHuggingface,
  'VADER':               TbBrain,
  'FAISS':               FaDatabase,

  // Data Engineering
  'Apache Spark':       SiApachespark,
  'Apache Kafka':       SiApachekafka,
  'Apache Airflow':     SiApacheairflow,
  'dbt':                SiDbt,
  'Hive':               SiApachehive,
  'HDFS':               SiApachehadoop,
  'Sqoop':              FaDatabase,
  'ETL Pipelines':      FaProjectDiagram,
  'Distributed Systems': TbNetwork,

  // Databases & Cloud
  'PostgreSQL':             SiPostgresql,
  'MySQL':                  SiMysql,
  'MongoDB':                SiMongodb,
  'Snowflake':              SiSnowflake,
  'SQLite':                 SiSqlite,
  'Firebase':               SiFirebase,
  'AWS (S3, Glue, Lambda)': SiAmazonwebservices,
  'GCP':                    SiGooglecloud,
  'Azure':                  TbBrandAzure,

  // Frameworks & Libraries
  'Spring Boot': SiSpringboot,
  'React.js':    SiReact,
  'Node.js':     SiNodedotjs,
  'Django':      SiDjango,
  'AngularJS':   SiAngular,
  'Pandas':      SiPandas,
  'NumPy':       SiNumpy,
  'Plotly':      SiPlotly,
  'Streamlit':   SiStreamlit,
  'Web3.js':     SiWeb3Dotjs,

  // Data Visualization
  'Tableau':    SiTableau,
  'Power BI':   TbChartHistogram,
  'Matplotlib': TbChartHistogram,

  // DevOps & Tools
  'Git':            SiGit,
  'Docker':         SiDocker,
  'Linux':          SiLinux,
  'Jenkins':        SiJenkins,
  'CI/CD Pipelines': TbGitBranch,
  'Jira':           SiJira,
  'Postman':        SiPostman,
  'Bitbucket':      SiBitbucket,
  'Maven':          SiApachemaven,
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
            className="bg-gradient-to-br from-cyan-800 to-indigo-900 dark:from-cyan-900 dark:to-indigo-950 rounded-xl p-5 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cyan-300 font-mono text-base select-none">
                {categoryIcons[category] ?? '#'}
              </span>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                // Use specific icon → semantic generic → DEFAULT_ICON as final fallback
                const Icon = skillIcons[skill] ?? DEFAULT_ICON;
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:border-white/30 transition-colors duration-200 cursor-default"
                  >
                    <Icon className="shrink-0" size={13} />
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
