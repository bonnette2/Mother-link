import { motion } from "framer-motion";
import mask from "../assets/mask.png";

const Hero = () => {
  return (
    <section className="hero-mini">
      <div className="hero-mini-grid">
        
        {/* Text Content */}
        <motion.div
          className="hero-mini-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            Empowering Every mother<br />Anywhere
          </h1>
          <p>
            Connecting mothers to life-saving care through technology.<br />
            Access healthcare support 24/7, no internet required.
          </p>
          <button>Get started</button>

          <div className="hero-mini-stats">
            <div><strong>1200+</strong> Mothers supported</div>
            <div><strong>100+</strong> Children supported</div>
            <div><strong>50+</strong> Hospitals covered</div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="hero-mini-img"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={mask} alt="Mother and child" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;