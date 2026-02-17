import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaWhatsapp,
  FaCheckCircle,
  FaClock,
  FaHandshake,
} from "react-icons/fa";

const ContactTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.section
      className="tab-content contact-tab"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="section-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
      >
        <FaEnvelope />
        <span>Let's Connect</span>
      </motion.div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Get in <span className="gradient-text gradient-text-animated">Touch</span>
      </motion.h2>
      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Have a project in mind or need a WordPress website? I'd love to hear
        from you. Let's build something amazing together.
      </motion.p>

      {/* Quick response cards */}
      <motion.div
        className="response-cards"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="response-card">
          <FaClock className="response-icon" />
          <span>Response within 24 hours</span>
        </div>
        <div className="response-card">
          <FaHandshake className="response-icon" />
          <span>Free initial consultation</span>
        </div>
        <div className="response-card">
          <FaCheckCircle className="response-icon" />
          <span>100% client satisfaction</span>
        </div>
      </motion.div>

      <div className="contact-grid">
        {/* Contact Info Cards */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="info-card"
            whileHover={{ x: 8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>huzaifaawan9461@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ x: 8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="info-icon">
              <FaPhone />
            </div>
            <div>
              <h4>Phone</h4>
              <p>+92 309 6065655</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ x: 8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="info-icon">
              <FaWhatsapp />
            </div>
            <div>
              <h4>WhatsApp</h4>
              <p>+92 309 6065655</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ x: 8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Location</h4>
              <p>Pakistan (Available Worldwide)</p>
            </div>
          </motion.div>

          <div className="social-links">
            <motion.a
              href="https://github.com/Mhz963"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/huzaifa-awan-wordpress-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -6, scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/923096065655"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="form-row">
            <div className={`form-group ${focusedField === "name" ? "focused" : ""}`}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className={`form-group ${focusedField === "email" ? "focused" : ""}`}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className={`form-group ${focusedField === "subject" ? "focused" : ""}`}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              placeholder="WordPress Project Inquiry"
              required
            />
          </div>

          <div className={`form-group ${focusedField === "message" ? "focused" : ""}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Tell me about your project..."
              rows={6}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary btn-glow submit-btn"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </motion.button>

          {submitted && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <FaCheckCircle className="success-icon" />
              <div>
                <strong>Message sent successfully!</strong>
                <p>I'll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactTab;
