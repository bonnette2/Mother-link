import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <SectionWrapper>
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">Join us in saving lives through digital healthcare</h2>
          <p className="cta-text">
            Whether you are a healthcare provider, NGO, or government agency, partner with us to expand maternal healthcare across Rwanda.
          </p>

          <div className="cta-buttons">
            <motion.button
              className="btn-partner"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a partner
            </motion.button>

            <motion.button
              className="btn-download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download mobile app
            </motion.button>
          </div>
        </motion.div>
      </section>
    </SectionWrapper>
  );
};

export default CTA;