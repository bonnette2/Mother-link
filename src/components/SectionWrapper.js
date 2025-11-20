// src/components/SectionWrapper.js
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
};

export default function SectionWrapper({ children, delay = 0 }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", duration: 1, delay }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}