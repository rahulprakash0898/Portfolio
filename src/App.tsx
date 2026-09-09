import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import FuturisticBackground from "./components/FuturisticBackground";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsHub from "./components/SkillsHub";
import CertificationsEducation from "./components/CertificationsEducation";
import ProjectsSection from "./components/ProjectsSection";
import ResumePreview from "./components/ResumePreview";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Smooth scroll configuration or any other global bindings
  useEffect(() => {
    // Add smooth scrolling to html element programmatically
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Add or remove .light-theme class to HTML element for selective overrides if needed
    if (darkMode) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  };

  const notifyNavigateToPrint = () => {
    // Scroll directly to print section
    const el = document.getElementById("resume-viewer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "dark text-white bg-[#08090e]" : "text-slate-800 bg-[#f8fafc]"}`}>
      
      {/* Background Layer - Particle Grid Canvas */}
      <FuturisticBackground />

      {/* Intro Entrance Animation Layer */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen flex flex-col justify-between"
        >
          {/* Recruiter Navigation Bar */}
          <Navbar 
            darkMode={darkMode} 
            toggleTheme={toggleTheme} 
            onNavigateToPrint={notifyNavigateToPrint}
          />

          {/* Core Visual Sections Stack */}
          <main className="flex-grow">
            {/* 1. Cinematic Hero Header Banner */}
            <Hero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              {/* 2. Top-3 Metric Panel & About Highlights */}
              <AboutSection />

              {/* 3. Interactive Accordion Timeline Column Panels */}
              <ExperienceTimeline />

              {/* 4. Filterable Skills Grid Hub */}
              <SkillsHub />

              {/* 5. Accredited Certifications & Trophy Showcase */}
              <CertificationsEducation />

              {/* Projects List showcase from GitHub */}
              <ProjectsSection />

              {/* 6. ATS Premium Printable Resume Canvas */}
              <ResumePreview />

              {/* 7. Transmission Footer Contact Hub */}
              <ContactSection />
            </div>
          </main>
        </motion.div>
      )}
    </div>
  );
}
