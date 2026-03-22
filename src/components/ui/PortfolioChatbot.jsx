import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Intent definitions ─────────────────────────────────────── */
const INTENTS = [
  {
    patterns: ['hello', 'hi', 'hey', 'howdy', 'greetings', "what's up", 'sup', 'yo'],
    response: () => ({
      text: "Hey there! 👋 I'm **Sanket's portfolio assistant**.\n\nI can tell you about his skills, experience, projects, and more — or jump you straight to any section!\n\nWhat are you curious about?",
      quickReplies: ['About Sanket', 'Work Experience', 'Skills', 'Projects', 'Contact'],
    }),
  },
  {
    patterns: ['about', 'who is', 'who are', 'introduce', 'tell me', 'background', 'summary', 'overview'],
    response: () => ({
      text: "Sanket Sunil Deshmukh is a **Data Engineer & Agentic AI Engineer** with 3+ years of industry experience 🚀\n\nHe's pursuing an **MS in Computer Science at the University of Florida** (GPA: 3.92) while interning as an Agentic AI Engineer at UFIT.\n\nPreviously he spent 3 years at **LTIMindtree** as a Senior Data Engineer, building production ETL pipelines for global banking clients.",
      quickReplies: ['His Skills', 'Work History', 'Education', 'Get in Touch'],
    }),
  },
  {
    patterns: ['experience', 'work', 'job', 'career', 'company', 'ltimindtree', 'ufit', 'intern', 'employment', 'history', 'worked'],
    response: () => ({
      text: "Sanket has worked across **4 companies** spanning AI, data engineering, blockchain & mobile:\n\n🏛️ **UFIT — Univ. of Florida** — Agentic AI Intern *(Jan 2026 – Present)*\n🏢 **LTIMindtree** — Senior Data Engineer *(2021 – 2024)*\n⛓️ **Sequelstring** — Blockchain Developer Intern\n📱 **CSI-DBIT** — Android App Developer Intern",
      quickReplies: ['View Timeline', 'His Skills', 'Contact Him'],
      navigate: '#experience',
      navigateLabel: '↓ View Full Timeline',
    }),
  },
  {
    patterns: ['skill', 'tech', 'technology', 'stack', 'know', 'language', 'framework', 'tools', 'proficient', 'expertise'],
    response: () => ({
      text: "Sanket has a wide tech stack! Highlights:\n\n⚡ **Languages:** Python, Java, Go, SQL, JavaScript\n🤖 **Agentic AI:** LangChain, LangGraph, RAG, MCP, n8n\n📊 **Data Eng:** Apache Spark, Kafka, Airflow, dbt\n☁️ **Cloud:** AWS, GCP, Azure\n🗄️ **Databases:** PostgreSQL, MongoDB, Snowflake",
      quickReplies: ['See All Skills', 'Work Experience', 'Projects'],
      navigate: '#skills',
      navigateLabel: '↓ See All Skills',
    }),
  },
  {
    patterns: ['education', 'study', 'degree', 'university', 'college', 'school', 'gpa', 'academic', 'uf', 'florida', 'mumbai', 'ms ', 'masters', 'bachelor'],
    response: () => ({
      text: "Sanket's academic journey:\n\n🎓 **MS Computer Science** — University of Florida *(2024–2026)*\n   GPA: **3.92 / 4.0**\n\n🎓 **BE Information Technology** — University of Mumbai *(2017–2021)*\n   GPA: **3.63 / 4.0** | 🏆 Won **Smart India Hackathon 2020**",
      quickReplies: ['View Education', 'Certifications', 'Work Experience'],
      navigate: '#education',
      navigateLabel: '↓ View Education',
    }),
  },
  {
    patterns: ['project', 'build', 'built', 'made', 'developed', 'side project', 'app', 'application', 'product', 'portfolio project'],
    response: () => ({
      text: "Sanket has built some impressive projects! From **LLM-powered agents** to **large-scale data pipelines** and **blockchain systems** 🛠️\n\nEach project card shows the tech stack, live demo links, and GitHub repos. Head over to explore!",
      quickReplies: ['View Projects', 'Hackathons', 'Skills'],
      navigate: '#projects',
      navigateLabel: '↓ View Projects',
    }),
  },
  {
    patterns: ['hackathon', 'hack', 'sih', 'hacklytics', 'competition', 'contest'],
    response: () => ({
      text: "Sanket loves hackathons! 🏆\n\n🥇 **Smart India Hackathon (SIH) 2020** — 1st Prize, Ministry of Education, Govt. of India\n🔬 **Hacklytics 2026** — Georgia Tech's premier data science hackathon\n\nCheck out the Hackathons section for full details and what was built!",
      quickReplies: ['View Hackathons', 'Awards', 'Projects'],
      navigate: '#hackathons',
      navigateLabel: '↓ View Hackathons',
    }),
  },
  {
    patterns: ['award', 'achievement', 'recognition', 'win', 'won', 'prize', 'honor', 'accolade', 'nordea'],
    response: () => ({
      text: "Sanket has earned some great recognitions throughout his career! 🌟\n\nFrom academic excellence to professional achievement awards — head to the Awards section to see them all.",
      quickReplies: ['View Awards', 'Hackathons', 'Certifications'],
      navigate: '#awards',
      navigateLabel: '↓ View Awards',
    }),
  },
  {
    patterns: ['contact', 'email', 'reach', 'hire', 'connect', 'message', 'available', 'opportunity', 'open to', 'recruiter', 'collaborate'],
    response: () => ({
      text: "Sanket is open to exciting opportunities! 😊\n\n📧 **Email:** meetsanket24@gmail.com\n💼 **LinkedIn:** linkedin.com/in/deshmukh-sanket\n🐙 **GitHub:** github.com/sanket1305\n\nOr drop a message directly from the Contact section!",
      quickReplies: ['Go to Contact', 'View Resume', 'About Sanket'],
      navigate: '#contact',
      navigateLabel: '↓ Go to Contact',
    }),
  },
  {
    patterns: ['resume', 'cv', 'download', 'pdf', 'document'],
    response: () => ({
      text: "You can view Sanket's full resume on Google Drive 📄\n\nIt covers his work history, skills, education, certifications, and achievements.",
      quickReplies: ['Contact Him', 'Work Experience', 'Skills'],
      externalLink: 'https://drive.google.com/file/d/1EpidHsMcctQBgEUW6VsYQ4cSYGuQhjeo/view?usp=sharing',
      externalLinkLabel: '↗ View Resume',
    }),
  },
  {
    patterns: ['certification', 'certified', 'cert', 'credential', 'course', 'badge'],
    response: () => ({
      text: "Sanket holds several professional certifications validating his expertise in cloud, data, and AI domains 📜\n\nHead to the Certifications section to see them all with credential links!",
      quickReplies: ['View Certifications', 'Skills', 'Education'],
      navigate: '#certifications',
      navigateLabel: '↓ View Certifications',
    }),
  },
  {
    patterns: ['leetcode', 'competitive', 'coding', 'dsa', 'algorithm', 'problem solving', 'ppo', 'placement', 'codevita', 'hackwithinfy', 'icc'],
    response: () => ({
      text: "Sanket is an active competitive programmer! 💻\n\nHe received **Pre-Placement Offers (PPOs)** from top companies through coding challenges:\n\n🏆 **Infinity Coding Challenge** → LTIMindtree PPO\n🏆 **HackWithInfy** → Infosys PPO\n🏆 **CodeVita** → TCS PPO\n🏆 **Smart India Hackathon** → Persistent Systems PPO",
      quickReplies: ['View CP Section', 'Work Experience', 'Hackathons'],
      navigate: '#competitive',
      navigateLabel: '↓ View CP Section',
    }),
  },
  {
    patterns: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'llm', 'agent', 'langchain', 'langgraph', 'rag', 'gpt', 'agentic', 'mcp', 'n8n'],
    response: () => ({
      text: "AI & Agentic systems are Sanket's passion! 🤖\n\nHe specializes in building **autonomous multi-agent systems** using LangChain, LangGraph, MCP (Model Context Protocol), and RAG pipelines.\n\nAt UFIT, he's currently automating university workflows with LLM-based agents and building reusable prompt libraries.",
      quickReplies: ['See AI Skills', 'Projects', 'Work Experience'],
      navigate: '#skills',
      navigateLabel: '↓ See AI Skills',
    }),
  },
  {
    patterns: ['data', 'spark', 'kafka', 'pipeline', 'etl', 'data engineer', 'snowflake', 'airflow', 'hive', 'hadoop', 'dbt'],
    response: () => ({
      text: "Data Engineering is Sanket's core strength! 📊\n\nAt LTIMindtree he built production ETL pipelines processing **1M+ records daily** for a global banking client — using Apache Spark, Hive, Kafka, Airflow, and Spring Boot.\n\nHe also works with Snowflake, dbt, and cloud platforms (AWS, GCP, Azure).",
      quickReplies: ['Work Experience', 'See All Skills', 'Projects'],
      navigate: '#experience',
      navigateLabel: '↓ Work Experience',
    }),
  },
  {
    patterns: ['blockchain', 'solidity', 'web3', 'smart contract', 'ipfs', 'ethereum'],
    response: () => ({
      text: "Sanket also has blockchain experience! ⛓️\n\nDuring his internship at Sequelstring, he built a **multi-party contract management system** using Solidity smart contracts, Web3.js, and IPFS — with AES-256 and RSA-2048 encryption for security.",
      quickReplies: ['Work Experience', 'Projects', 'Skills'],
      navigate: '#experience',
      navigateLabel: '↓ View Work Timeline',
    }),
  },
  {
    patterns: ['location', 'where', 'city', 'state', 'country', 'based', 'live', 'from', 'reside'],
    response: () => ({
      text: "Sanket is currently based in **Gainesville, FL, USA** 📍\n\nHe's pursuing his MS at the University of Florida and working as an Agentic AI Intern at UFIT.",
      quickReplies: ['About Sanket', 'Contact Him', 'Education'],
    }),
  },
  {
    patterns: ['github', 'linkedin', 'twitter', 'social', 'profile', 'link'],
    response: () => ({
      text: "Find Sanket across the web:\n\n🐙 **GitHub:** github.com/sanket1305\n💼 **LinkedIn:** linkedin.com/in/deshmukh-sanket\n🐦 **Twitter:** @deshmukhsankett",
      quickReplies: ['Contact Him', 'Projects', 'Work Experience'],
      navigate: '#contact',
      navigateLabel: '↓ Go to Contact',
    }),
  },
  {
    patterns: ['thank', 'thanks', 'awesome', 'cool', 'great', 'nice', 'good', 'helpful', 'appreciate', 'perfect', 'wonderful'],
    response: () => ({
      text: "You're welcome! 😊 Is there anything else you'd like to know about Sanket?",
      quickReplies: ['Work Experience', 'Skills', 'Contact Him'],
    }),
  },
  {
    patterns: ['bye', 'goodbye', 'see you', 'later', 'cya', 'take care', 'farewell'],
    response: () => ({
      text: "Goodbye! 👋 Feel free to come back anytime. Don't forget to explore Sanket's work — there's a lot to discover!",
      quickReplies: [],
    }),
  },
];

const DEFAULT_RESPONSE = {
  text: "Hmm, I'm not sure about that! 🤔 But I can help you explore Sanket's portfolio. Here's what I can tell you about:",
  quickReplies: ['About Sanket', 'Work Experience', 'Skills', 'Projects', 'Contact'],
};

const WELCOME_MESSAGE = {
  id: 'welcome',
  from: 'bot',
  text: "👋 Hi! I'm **Sanket's portfolio assistant**.\n\nI can answer questions about his experience, skills, projects, education, and more — or take you to any section instantly.\n\nWhat would you like to explore?",
  quickReplies: ['About Sanket', 'Work Experience', 'Skills', 'Projects', 'Contact'],
  time: new Date(),
};

/* ── Intent matcher ─────────────────────────────────────────── */
function matchIntent(input) {
  const lower = input.toLowerCase();
  for (const intent of INTENTS) {
    if (intent.patterns.some((p) => lower.includes(p))) {
      return intent.response();
    }
  }
  return DEFAULT_RESPONSE;
}

/* ── Smooth scroll ──────────────────────────────────────────── */
function scrollToSection(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Typing indicator ───────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-cyan-400"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

/* ── Bold markdown parser ───────────────────────────────────── */
function FormattedText({ text }) {
  return (
    <>
      {text.split('\n').map((line, li, arr) => (
        <span key={li}>
          {line.split(/(\*\*[^*]+\*\*)/).map((part, pi) =>
            part.startsWith('**') ? (
              <strong key={pi}>{part.slice(2, -2)}</strong>
            ) : (
              part
            )
          )}
          {li < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

/* ── Message bubble ─────────────────────────────────────────── */
function MessageBubble({ msg, onQuickReply, onNavigate, isLatest }) {
  const isBot = msg.from === 'bot';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} gap-1.5`}
    >
      <div
        className={`max-w-[88%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? 'bg-gradient-to-br from-cyan-800/90 to-indigo-900/90 text-white rounded-tl-sm'
            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tr-sm border border-gray-200 dark:border-gray-700'
        }`}
      >
        <FormattedText text={msg.text} />
      </div>

      {/* Quick reply chips — only show on latest bot message */}
      {isBot && isLatest && msg.quickReplies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 max-w-[90%]">
          {msg.quickReplies.map((qr) => (
            <button
              key={qr}
              onClick={() => onQuickReply(qr)}
              className="text-xs px-3 py-1 rounded-full border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/15 transition-colors duration-150"
            >
              {qr}
            </button>
          ))}
        </div>
      )}

      {/* Navigate CTA */}
      {isBot && isLatest && msg.navigate && (
        <button
          onClick={() => onNavigate(msg.navigate)}
          className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-medium transition-all duration-150 shadow-md"
        >
          {msg.navigateLabel ?? '↓ Go there'}
        </button>
      )}

      {/* External link CTA */}
      {isBot && isLatest && msg.externalLink && (
        <a
          href={msg.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-medium transition-all duration-150 shadow-md"
        >
          {msg.externalLinkLabel ?? '↗ Open Link'}
        </a>
      )}
    </motion.div>
  );
}

/* ── Main chatbot ───────────────────────────────────────────── */
export default function PortfolioChatbot() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput]     = useState('');
  const [typing, setTyping]   = useState(false);
  const [unread, setUnread]   = useState(0);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  /* Auto-scroll on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  /* Focus input & clear unread when opened */
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const pushBotMessage = (response) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), from: 'bot', time: new Date(), ...response },
      ]);
      if (!open) setUnread((n) => n + 1);
    }, 700 + Math.random() * 500);
  };

  const handleSend = (text = input.trim()) => {
    if (!text) return;
    setInput('');
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'user', text, time: new Date() },
    ]);
    pushBotMessage(matchIntent(text));
  };

  const handleNavigate = (hash) => {
    scrollToSection(hash);
    setOpen(false);
  };

  const lastBotIndex = messages.reduce((acc, m, i) => (m.from === 'bot' ? i : acc), -1);

  return (
    <>
      {/* ── Floating button ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!open && unread > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center z-10 pointer-events-none"
            >
              {unread}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle chat"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg shadow-indigo-500/40 flex items-center justify-center text-white"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <MessageCircle size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/50 flex flex-col border border-white/10"
            style={{ maxHeight: '540px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-800 to-indigo-900 px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-cyan-200" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-none">Portfolio Assistant</p>
                <p className="text-cyan-300/70 text-[11px] mt-0.5">Ask me anything about Sanket</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-emerald-300/80">Online</span>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto bg-gray-950 px-4 py-4 flex flex-col gap-3 min-h-0">
              {messages.map((msg, idx) => (
                <MessageBubble
                  key={msg.id}
                  msg={msg}
                  isLatest={idx === lastBotIndex}
                  onQuickReply={handleSend}
                  onNavigate={handleNavigate}
                />
              ))}

              {typing && (
                <div className="bg-gradient-to-br from-cyan-800/90 to-indigo-900/90 rounded-2xl rounded-tl-sm w-fit">
                  <TypingDots />
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="bg-gray-900 border-t border-white/10 px-3 py-3 flex gap-2 items-center flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 flex items-center justify-center text-white disabled:opacity-30 hover:from-cyan-500 hover:to-indigo-500 transition-all flex-shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
