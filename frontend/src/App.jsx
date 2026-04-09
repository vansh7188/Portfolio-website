import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();
  const auraX = useMotionValue(-200);
  const auraY = useMotionValue(-200);
  const smoothAuraX = useSpring(auraX, { stiffness: 180, damping: 28, mass: 0.55 });
  const smoothAuraY = useSpring(auraY, { stiffness: 180, damping: 28, mass: 0.55 });

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

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const onPointerMove = (event) => {
      auraX.set(event.clientX - 190);
      auraY.set(event.clientY - 190);
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [auraX, auraY, shouldReduceMotion]);

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="app-ambient" />

      {!shouldReduceMotion ? (
        <motion.div
          aria-hidden="true"
          className="cursor-aura hidden lg:block"
          style={{ x: smoothAuraX, y: smoothAuraY }}
        />
      ) : null}

      <Navbar />
      <main className="relative z-[2]">
        <HeroSection apiStatus={apiStatus} />
        <MarqueeStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <div className="relative z-[2]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
