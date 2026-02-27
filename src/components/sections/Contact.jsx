import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

export default function Contact({ personal }) {
  const { email, github, linkedin, twitter, location } = personal;

  const links = [
    { icon: Mail, label: 'Email', href: `mailto:${email}` },
    { icon: Github, label: 'GitHub', href: github },
    { icon: Linkedin, label: 'LinkedIn', href: linkedin },
    { icon: Twitter, label: 'Twitter', href: twitter },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle title="Get In Touch" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-2 leading-relaxed"
        >
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hello — my inbox is always open!
        </motion.p>

        {location && (
          <div className="flex items-center justify-center gap-1 text-gray-400 dark:text-gray-500 text-sm mb-8">
            <MapPin size={14} className="text-cyan-600 dark:text-cyan-400" />
            <span>{location}</span>
          </div>
        )}

        <motion.a
          href={`mailto:${email}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-8 py-3 bg-cyan-600 dark:bg-cyan-400 text-white dark:text-gray-950 font-semibold rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-colors duration-200 mb-12 text-sm md:text-base"
        >
          Say Hello ✉
        </motion.a>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {links.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <Icon size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200" />
              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-200">
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
