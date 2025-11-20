import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import child from "../assets/child.png";

const Welcome = () => {
  return (
    <SectionWrapper>
      <section className="welcome-compact">
        <div className="welcome-grid">

          {/* Image + Blue Rectangle */}
          <motion.div
            className="welcome-image-box"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="blue-bg"></div>
            <img
              src={child}
              alt="Mother holding child"
              className="welcome-img"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="welcome-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2>Welcome to Mother Link</h2>
            <p>
              MotherLink is a Rwandan digital health innovation designed to bridge
              the gap between mothers, community health workers, and healthcare facilities
              through inclusive mobile technology. Our platform connects every mother —
              even those without smartphones or internet access — to life-saving health
              information and emergency care using USSD codes, SMS, voice calls, and AI-powered assistance.
            </p>
            <button className="welcome-btn">Get started</button>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default Welcome;