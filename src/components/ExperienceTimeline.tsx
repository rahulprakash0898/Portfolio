import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, Sparkles, AlertCircle } from "lucide-react";
import { resumeData, impactHighlights } from "../data";

export default function ExperienceTimeline() {
  const [expandedRoles, setExpandedRoles] = useState<Record<number, boolean>>({
    0: true, // Axepert Exhibits
    1: true, // Myndtree
    2: true, // Aditya Birla
  });

  const toggleRole = (idx: number) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden px-4">
      {/* Background visual light meshes */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center md:text-left space-y-3">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              PROFESSIONAL DEVELOPMENT
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Engineering Experience
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl leading-relaxed">
            ENTERPRISE FULL-STACK CONTRIBUTIONS, CLOUD INFRASTRUCTURE & INTERNSHIPS
          </p>
        </div>

        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Experience Accordion List: 8 columns */}
          <div className="lg:col-span-8 space-y-4">
            {resumeData.experience.map((role, idx) => {
              const isOpen = !!expandedRoles[idx];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#0b0e14]/90 border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/20 transition-colors"
                >
                  {/* Accordion Trigger Header */}
                  <div
                    onClick={() => toggleRole(idx)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer select-none hover:bg-white/[0.01] transition-colors"
                  >
                    <div className="flex items-start space-x-4 text-left">
                      <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/40 text-cyan-400 mt-1">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-bold text-slate-100 font-sans tracking-tight">
                          {role.role}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                          <span className="font-semibold text-cyan-400">{role.company}</span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{role.dates}</span>
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{role.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-slate-200">
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </div>

                  {/* Expandable Bullets Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-white/[0.03] space-y-4 text-left">
                          
                          {/* Inner Bullets Listing */}
                          <ul className="space-y-2.5">
                            {role.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed flex items-start space-x-2.5"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Quick keywords highlighted based on role */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {idx === 0 && (
                              <>
                                <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/40 text-[10px] text-cyan-400 font-mono">React.js & Node.js</span>
                                <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-900/40 text-[10px] text-emerald-400 font-mono">MongoDB, Postgres & Redis</span>
                                <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-900/40 text-[10px] text-purple-400 font-mono">Docker & AWS EC2</span>
                                <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-900/40 text-[10px] text-cyan-400 font-mono">AI/LLM Integration</span>
                                <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-900/40 text-[10px] text-amber-400 font-mono">Socket.IO & TanStack Query</span>
                              </>
                            )}
                            {idx === 1 && (
                              <>
                                <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-900/40 text-[10px] text-cyan-400 font-mono">Responsive Web Development</span>
                                <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/40 text-[10px] text-blue-400 font-mono">UI Layouts & Maintainability</span>
                                <span className="px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-900/40 text-[10px] text-indigo-400 font-mono">Agile Environment</span>
                              </>
                            )}
                            {idx === 2 && (
                              <>
                                <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-900/40 text-[10px] text-amber-400 font-mono">Oracle APEX</span>
                                <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/40 text-[10px] text-blue-400 font-mono">PL/SQL Stored Procedures</span>
                                <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-900/40 text-[10px] text-purple-400 font-mono">Relational Database Workflows</span>
                              </>
                            )}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Impact Highlights panel - 4 columns */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0d111a]/95 border border-white/5 shadow-xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
              
              <div className="flex items-center space-x-2 pb-2 border-b border-white/5">
                <AlertCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-medium text-slate-200 tracking-wider uppercase">
                  Impact Feed Panel
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Measurable engineering results from enterprise and cloud deployments:
              </p>

              <div className="space-y-4 pt-1">
                {impactHighlights.map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-wider">
                        {hl.metric}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-sans leading-normal">
                      {hl.context}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono italic truncate pt-1 border-t border-white/[0.02]">
                      "{hl.source}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-950/30 border border-cyan-800/30 p-4 rounded-xl text-[11px] font-sans text-cyan-300 leading-relaxed">
                🚀 Full-stack developer with hands-on production experience in high-scale systems, AI/LLM integration, and modern cloud pipelines.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
