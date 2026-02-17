import { motion } from "framer-motion";
import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaMobileAlt,
  FaShieldAlt,
  FaSearchPlus,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiWoocommerce,
  SiElementor,
  SiBootstrap,
} from "react-icons/si";

const skills = [
  { name: "WordPress", icon: <FaWordpress />, level: 95 },
  { name: "Elementor", icon: <SiElementor />, level: 95 },
  { name: "WooCommerce", icon: <SiWoocommerce />, level: 90 },
  { name: "Plugin Customization", icon: <FaServer />, level: 92 },
  { name: "Theme Development", icon: <FaPaintBrush />, level: 90 },
  { name: "PHP", icon: <FaPhp />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 />, level: 98 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 95 },
  { name: "JavaScript", icon: <SiJavascript />, level: 88 },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 92 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88 },
  { name: "React", icon: <FaReact />, level: 82 },
  { name: "MySQL", icon: <SiMysql />, level: 85 },
  { name: "Speed Optimization", icon: <FaRocket />, level: 93 },
  { name: "SEO", icon: <FaSearchPlus />, level: 90 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
];

const services = [
  {
    icon: <FaWordpress />,
    title: "WordPress Development",
    description: "Custom WordPress websites built from scratch with tailored themes, advanced functionality, and seamless content management systems.",
  },
  {
    icon: <SiElementor />,
    title: "Elementor Page Building",
    description: "Stunning, pixel-perfect page designs using Elementor Pro. Custom widgets, dynamic content, and visually engaging layouts.",
  },
  {
    icon: <SiWoocommerce />,
    title: "WooCommerce Solutions",
    description: "Complete e-commerce store setup and optimization with WooCommerce — product management, payment gateways, and conversion-focused design.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Theme & Plugin Customization",
    description: "Deep customization of WordPress themes and plugins to match exact requirements. Custom PHP development and third-party integrations.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description: "Mobile-first, fully responsive websites using Bootstrap and Tailwind CSS that look flawless across all devices and screen sizes.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Speed & SEO Optimization",
    description: "Website performance tuning, Core Web Vitals optimization, caching strategies, and advanced SEO practices to boost rankings and user experience.",
  },
];

const experience = [
  {
    role: "Sr. WordPress Developer",
    company: "Zee Tech PVT Ltd",
    period: "2025 – Present",
    description:
      "Currently delivering high-quality WordPress solutions and contributing to numerous React projects with a 100% client-satisfaction record. Building scalable, performant websites for diverse clients.",
    tags: ["WordPress", "React", "Elementor", "WooCommerce"],
  },
  {
    role: "Sr. WordPress Developer",
    company: "Webseowiz-Tech, Lahore",
    period: "May 2024 – Dec 2024",
    description:
      "Created professional, high-performance websites tailored to client needs. Handled theme and plugin customization, site-speed optimization, and applied advanced SEO practices to improve visibility and user experience.",
    tags: ["WordPress", "SEO", "Speed Optimization", "PHP"],
  },
  {
    role: "WordPress Developer & Project Manager",
    company: "TechoSolution",
    period: "2022 – 2024",
    description:
      "Successfully delivered numerous projects with a 100% client-satisfaction record. Additionally served as Project Manager, overseeing project lifecycles, coordinating teams, and ensuring on-time, high-quality outcomes.",
    tags: ["WordPress", "Project Management", "Elementor", "Bootstrap"],
  },
];

const education = [
  {
    degree: "BS Software Engineering",
    institution: "Virtual University, Lahore",
    period: "2024 – 2028",
    description: "Currently pursuing a degree in Software Engineering, strengthening core foundations in programming, data structures, algorithms, and modern software development practices.",
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
          I am Huzaifa Awan, an experienced WordPress developer with over five
          years of expertise in creating and optimizing high-performing websites.
          I specialize in Elementor page building, WooCommerce development, and
          website speed optimization. Additionally, I am highly skilled in
          Bootstrap, Tailwind CSS, and plugin &amp; theme customization to deliver
          tailored, responsive, and SEO-friendly solutions. I'm passionate about
          clean code, pixel-perfect design, and delivering results that exceed
          client expectations.
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
        <h3 className="subsection-title">Work Experience</h3>
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

      {/* Education Section */}
      <div className="experience-section">
        <h3 className="subsection-title">Education</h3>
        <div className="timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="timeline-dot">
                <span className="timeline-dot-ring" />
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{edu.period}</span>
                <h4 className="timeline-role">
                  <FaGraduationCap style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
                  {edu.degree}
                </h4>
                <span className="timeline-company">{edu.institution}</span>
                <p className="timeline-desc">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutTab;
