import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

import team1 from "../assets/bonnie.jpg";
import team2 from "../assets/ange.jpg";
import team3 from "../assets/bless.jpg";
import team4 from "../assets/nora.jpg";
import team5 from "../assets/mellisa.jpg";

const members = [
  { img: team1, name: "Umurerwa Bonnette", role: "Chief Executive Officer" },
  { img: team2, name: "Ishimwe Ndize Ange", role: "Chief Operations Officer" },
  { img: team3, name: "Teta Angel Bless", role: "Chief Marketing Officer" },
  { img: team4, name: "Ineza Mugisha Nora", role: "Chief Innovation Officer" },
  { img: team5, name: "Uhirwa Shami Mellissa", role: "Chief Technology Officer" },
];

const Team = () => {
  return (
    <SectionWrapper>
      <section className="team-section">
        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Team
        </motion.h2>

        <div className="team-grid">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-inner">
                <img src={member.img} alt={member.name} className="team-photo" />
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Team;