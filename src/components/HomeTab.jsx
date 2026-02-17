import { motion } from "framer-motion";
import { FaReact, FaWordpress, FaCode, FaArrowRight } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiWoocommerce,
  SiElementor,
  SiBootstrap,
} from "react-icons/si";
import TypeWriter from "./TypeWriter";
import AnimatedCounter from "./AnimatedCounter";

const techStack = [
  { icon: <FaWordpress />, name: "WordPress", color: "#21759b" },
  { icon: <SiElementor />, name: "Elementor", color: "#92003B" },
  { icon: <SiWoocommerce />, name: "WooCommerce", color: "#96588a" },
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952b3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06b6d4" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
];

const HomeTab = ({ onNavigate }) => {
  return (
    <motion.section
      className="tab-content home-tab"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-container">
        {/* Decorative orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="badge-pulse" />
          <FaCode className="badge-icon" />
          <span>Senior WordPress Developer</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="gradient-text gradient-text-animated">Huzaifa Awan</span>
        </motion.h1>

        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <span className="typewriter-prefix">I build </span>
          <TypeWriter
            words={[
              "high-performance WordPress websites",
              "custom Elementor page designs",
              "WooCommerce e-commerce stores",
              "responsive & SEO-friendly solutions",
              "custom themes & plugins",
              "speed-optimized web experiences",
              "React-powered web applications",
            ]}
            speed={80}
            deleteSpeed={40}
            delay={2500}
          />
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Experienced WordPress Developer with <strong>5+ years</strong> of
          expertise in creating and optimizing high-performing websites.
          Specialized in Elementor, WooCommerce, speed optimization, Bootstrap,
          Tailwind, and plugin &amp; theme customization — delivering tailored,
          responsive, and SEO-friendly solutions.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            onClick={() => onNavigate("contact")}
            className="btn btn-primary btn-glow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get in Touch</span>
            <FaArrowRight className="btn-icon-right" />
          </motion.button>
          <motion.a
            href="https://github.com/Mhz963"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-shimmer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View My GitHub</span>
          </motion.a>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.div
            className="stat-card stat-card-glow"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              <AnimatedCounter target={5} duration={1500} suffix="+" />
            </span>
            <span className="stat-label">Years Experience</span>
          </motion.div>
          <motion.div
            className="stat-card stat-card-glow"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              <AnimatedCounter target={100} duration={2000} suffix="+" />
            </span>
            <span className="stat-label">Projects Delivered</span>
          </motion.div>
          <motion.div
            className="stat-card stat-card-glow"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              <AnimatedCounter target={100} duration={2200} suffix="%" />
            </span>
            <span className="stat-label">Client Satisfaction</span>
          </motion.div>
          <motion.div
            className="stat-card stat-card-glow"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              <AnimatedCounter target={3} duration={1200} suffix="+" />
            </span>
            <span className="stat-label">Companies Worked</span>
          </motion.div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          className="tech-marquee-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="tech-marquee-label">Technologies I Work With</p>
          <div className="tech-marquee">
            <div className="tech-marquee-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="tech-marquee-item">
                  <span className="tech-marquee-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="tech-marquee-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="floating-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="floating-icon icon-react"
            animate={{ y: [0, -15, 0], rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaReact />
          </motion.div>
          <motion.div
            className="floating-icon icon-node"
            animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiBootstrap />
          </motion.div>
          <motion.div
            className="floating-icon icon-wp"
            animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaWordpress />
          </motion.div>
          <motion.div
            className="floating-icon icon-js"
            animate={{ y: [0, 12, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiJavascript />
          </motion.div>
          <motion.div
            className="floating-icon icon-ts"
            animate={{ y: [0, -18, 0], x: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiTailwindcss />
          </motion.div>
          <motion.div
            className="floating-icon icon-next"
            animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiElementor />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeTab;
