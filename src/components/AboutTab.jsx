import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, level: 95, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, level: 95, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, level: 88, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85, category: "frontend" },
  { name: "HTML5", icon: <FaHtml5 />, level: 98, category: "frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 95, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, category: "frontend" },
  { name: "Redux", icon: <SiRedux />, level: 85, category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs />, level: 90, category: "backend" },
  { name: "Express.js", icon: <SiExpress />, level: 88, category: "backend" },
  { name: "WordPress", icon: <FaWordpress />, level: 92, category: "backend" },
  { name: "PHP", icon: <FaPhp />, level: 85, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 82, category: "backend" },
  { name: "MySQL", icon: <SiMysql />, level: 85, category: "backend" },
  { name: "GraphQL", icon: <SiGraphql />, level: 78, category: "backend" },
  { name: "Firebase", icon: <SiFirebase />, level: 80, category: "backend" },
  { name: "Git", icon: <FaGitAlt />, level: 90, category: "tools" },
  { name: "Docker", icon: <FaDocker />, level: 75, category: "tools" },
  { name: "Figma", icon: <FaFigma />, level: 80, category: "tools" },
  { name: "Databases", icon: <FaDatabase />, level: 85, category: "tools" },
];

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description: "Pixel-perfect, responsive UIs built with React, Next.js, and modern CSS frameworks. Smooth animations and blazing-fast performance.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Scalable APIs and server-side solutions using Node.js, Express, and databases like MongoDB and MySQL.",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress Solutions",
    description: "Custom themes, plugins, and full WordPress development. E-commerce with WooCommerce and advanced CMS setups.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "User-centered design with Figma. Wireframes, prototypes, and design systems that look stunning and convert.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description: "Seamless experiences across all devices. Mobile-first approach ensuring your app looks great everywhere.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Performance & SEO",
    description: "Speed optimization, Core Web Vitals, and SEO best practices to maximize your web presence and rankings.",
  },
];

const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "Freelance / Contract",
    period: "2021 – Present",
    description:
      "Leading full-stack projects for diverse clients. Architecting scalable React and Node.js applications, delivering custom WordPress themes and plugins, and mentoring junior developers.",
    tags: ["React", "Node.js", "WordPress", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Tech Agency",
    period: "2019 – 2021",
    description:
      "Built responsive, high-performance web applications using React, Redux, and modern CSS. Collaborated with design teams to deliver pixel-perfect UI implementations.",
    tags: ["React", "Redux", "Tailwind", "TypeScript"],
  },
  {
    role: "WordPress Developer",
    company: "Digital Studio",
    period: "2018 – 2019",
    description:
      "Developed custom WordPress themes and plugins. Optimized site performance and implemented SEO best practices for clients across multiple industries.",
    tags: ["WordPress", "PHP", "MySQL", "SEO"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutTab = () => {
  return (
    <motion.section
      className="tab-content about-tab"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* About Section */}
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="section-badge">
          <FaRocket />
          <span>Who I Am</span>
        </div>
        <h2 className="section-title">
          About <span className="gradient-text gradient-text-animated">Me</span>
        </h2>
        <p className="about-text">
          I'm a passionate full-stack developer with over 5 years of hands-on
          experience building modern web applications. From crafting intuitive
          user interfaces with React to designing robust backend systems with
          Node.js, I bring ideas to life with clean, maintainable code. My
          WordPress expertise allows me to deliver powerful CMS solutions
          tailored to client needs. I believe in writing code that is not only
          functional but also elegant and scalable.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="services-section">
        <h3 className="subsection-title">What I Do</h3>
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="skills-section">
        <h3 className="subsection-title">Technical Skills</h3>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <div className="experience-section">
        <h3 className="subsection-title">Experience</h3>
        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot">
                <span className="timeline-dot-ring" />
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h4 className="timeline-role">{exp.role}</h4>
                <span className="timeline-company">{exp.company}</span>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutTab;
