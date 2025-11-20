import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

import centerImg from "../assets/childie.jpg";
import s1 from "../assets/mother1.jpg";
import s2 from "../assets/mother2.jpg";
import s3 from "../assets/child.png";
import s4 from "../assets/mother3.jpg";

const Mission = () => {
  const highlights = [
    "24/7 access to healthcare information and support",
    "Direct connection to Community Health Workers",
    "Emergency response coordination with hospitals",
  ];

  return (
    <SectionWrapper>
      <section className="mission-compact">
        <div className="mission-compact-grid">

          {/* Text – Brand Blue + Black */}
          <motion.div
            className="mission-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Our Mission</h2>
            <p className="lead">
              MotherLink is Rwanda’s digital health platform dedicated to reducing maternal
              and child mortality through inclusive, accessible technology.
            </p>

            <ul className="bullets">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Static Orbit – Small & Beautiful */}
          <motion.div
            className="orbit-static"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="orbit-center">
              <img src={centerImg} alt="Mother & child" />
            </div>
            <img src={s1} alt="" className="small top" />
            <img src={s2} alt="" className="small left" />
            <img src={s3} alt="" className="small right" />
            <img src={s4} alt="" className="small bottom" />
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default Mission;