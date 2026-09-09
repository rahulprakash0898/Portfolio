import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Terminal, Code, Cpu, Cloud, Database, Settings, Users, Layers } from "lucide-react";
import { resumeData } from "../data";

export default function SkillsHub() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...resumeData.skills.map((s) => s.category)];
  const allSkills = resumeData.skills;

  const currentSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-4">
      {/* Background neon visual anchors */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header content */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              GRID ARCHITECTURE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Specialized Skills Hub
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            SYSTEM-WIDE TECHNICAL CAPABILITIES & ARCHITECTURAL EXPERTISE
          </p>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  : "bg-[#0b0e14]/50 text-slate-400 border-white/5 hover:border-slate-700 hover:text-slate-100"
              }`}
            >
              {cat === "All" ? "ALL DIRECTORIES" : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Interactive Skills Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {currentSkills.map((group, gIdx) => {
            // Select appropriate icon
            let CategoryIcon = Code;
            if (group.category === "Frontend") CategoryIcon = Layers;
            if (group.category === "Backend & AI") CategoryIcon = Cpu;
            if (group.category === "Database") CategoryIcon = Database;
            if (group.category === "Cloud & DevOps") CategoryIcon = Cloud;
            if (group.category === "Tools") CategoryIcon = Settings;
            if (group.category === "Professional Skills") CategoryIcon = Users;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gIdx * 0.08 }}
                className="relative p-6 rounded-2xl bg-[#0d111a]/90 border border-white/5 shadow-xl hover:border-cyan-500/20 group transition-all duration-300"
              >
                {/* Accent lights */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-900/30 text-cyan-400 group-hover:scale-110 transition duration-300">
                      <CategoryIcon className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-100 font-sans tracking-wide">
                        {group.category}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                        GROUPED_SKILL_ARRAY ({group.skills.length})
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-200 text-xs text-slate-300 font-sans flex items-center space-x-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Grouped languages at bottom */}
        <div className="p-6 rounded-2xl bg-[#0b0e14]/90 border border-white/5 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-3xl mx-auto text-left">
          <div className="space-y-1">
            <h5 className="text-sm font-bold text-slate-100 font-sans">
              Spoken Languages
            </h5>
            <p className="text-xs text-slate-400 font-sans">
              Native and professional working language proficiencies
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {resumeData.languages.map((language, lIdx) => (
              <span
                key={lIdx}
                className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#0d121c] border border-white/10 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.05)]"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
