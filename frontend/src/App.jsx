import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MarqueeStrip from "./components/MarqueeStrip";

function App() {
  const [apiStatus, setApiStatus] = useState("Checking API");

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const response = await fetch("/api/health");
        const data = await response.json();
        setApiStatus(data.status === "ok" ? "API Online" : "API Syncing");
      } catch (error) {
        setApiStatus("API Offline");
      }
    };

    loadStatus();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <HeroSection apiStatus={apiStatus} />
        <MarqueeStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
