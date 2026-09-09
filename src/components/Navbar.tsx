import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Briefcase, Cpu, Award, FileText, Sparkles, Languages, FolderGit2 } from "lucide-react";
import { resumeData } from "../data";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onNavigateToPrint: () => void;
}

export default function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home", icon: Sparkles },
    { id: "about", label: "About", icon: Languages },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills Hub", icon: Cpu },
    { id: "certifications", label: "Education & Certs", icon: Award },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "resume-viewer", label: "Formal CV", icon: FileText },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0e14]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with interactive pulse */}
          <div
            onClick={() => handleSmoothScroll("hero")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
              <div className="w-full h-full bg-[#0b0e14] rounded-[11px] flex items-center justify-center font-bold text-slate-100 text-sm tracking-wider font-sans">
                RP
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold tracking-wider text-slate-100 font-sans group-hover:text-cyan-400 transition-colors">
                {resumeData.basics.name.toUpperCase()}
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                FULL STACK DEVELOPER
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSmoothScroll(item.id)}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 rounded-lg flex items-center space-x-1.5 cursor-pointer ${
                    isActive
                      ? "text-slate-100"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-blue-500/10 border-b border-cyan-400/50 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Accents: CV Print Hotlink & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleSmoothScroll("resume-viewer")}
              className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 hover:border-cyan-500/50 px-3 py-1.5 rounded-md flex items-center space-x-1.5 shadow-[0_0_10px_rgba(34,211,238,0.1)] transition cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume PDF</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-100 border border-white/5 transition cursor-pointer"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Action & Mobile Theme toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-slate-200"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-slate-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation side menu with slide-in animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 w-64 bg-[#0d1017] border-l border-white/10 z-50 p-6 flex flex-col space-y-6 shadow-2xl md:hidden"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-100 font-mono">RP_NAVIGATION</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-3 pt-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSmoothScroll(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-500/10 text-cyan-400 border-l-2 border-cyan-400"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-white/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSmoothScroll("resume-viewer");
                }}
                className="w-full py-2.5 px-4 text-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 font-mono text-xs font-semibold text-white tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>PRINTABLE RESUME</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
