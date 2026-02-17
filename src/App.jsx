import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import HomeTab from "./components/HomeTab";
import AboutTab from "./components/AboutTab";
import ContactTab from "./components/ContactTab";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab key="home" onNavigate={handleTabChange} />;
      case "about":
        return <AboutTab key="about" />;
      case "contact":
        return <ContactTab key="contact" />;
      default:
        return <HomeTab key="home" onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="app">
      <ParticleBackground />
      <CursorGlow />
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="main-content">
        <AnimatePresence mode="wait">{renderTab()}</AnimatePresence>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">HA</span>
              <span className="logo-bracket"> /&gt;</span>
            </span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Huzaifa Awan. Crafted with passion &
            modern tech.
          </p>
          <div className="footer-links">
            <button onClick={() => handleTabChange("home")}>Home</button>
            <button onClick={() => handleTabChange("about")}>About</button>
            <button onClick={() => handleTabChange("contact")}>Contact</button>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
