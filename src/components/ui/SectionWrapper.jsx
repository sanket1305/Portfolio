import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`section-padding max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
