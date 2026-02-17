import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaWordpress, FaCode, FaDownload, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import TypeWriter from "./TypeWriter";
import AnimatedCounter from "./AnimatedCounter";

const techStack = [
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <FaWordpress />, name: "WordPress", color: "#21759b" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06b6d4" },
];

const HomeTab = () => {
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
          <span>Available for Freelance Work</span>
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
              "modern web applications",
              "scalable React frontends",
              "robust Node.js backends",
              "custom WordPress solutions",
              "pixel-perfect user interfaces",
              "high-performance APIs",
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
          Senior Full-Stack Developer with <strong>5+ years</strong> of
          experience crafting modern web applications. Specialized in React,
          Node.js, and WordPress — turning ideas into pixel-perfect, performant
          digital experiences.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary btn-glow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get in Touch</span>
            <FaArrowRight className="btn-icon-right" />
          </motion.a>
          <motion.a
            href="#"
            className="btn btn-outline btn-shimmer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload />
            <span>Download CV</span>
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
            <span className="stat-label">Projects Completed</span>
          </motion.div>
          <motion.div
            className="stat-card stat-card-glow"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              <AnimatedCounter target={50} duration={1800} suffix="+" />
            </span>
            <span className="stat-label">Happy Clients</span>
          </motion.div>
          <motion.div
            className="stat-card stat-card-glow"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="stat-number">
              <AnimatedCounter target={99} duration={2200} suffix="%" />
            </span>
            <span className="stat-label">Client Satisfaction</span>
          </motion.div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          className="tech-marquee-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="tech-marquee-label">Tech I work with</p>
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
            <FaNodeJs />
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
            <SiTypescript />
          </motion.div>
          <motion.div
            className="floating-icon icon-next"
            animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiNextdotjs />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeTab;
