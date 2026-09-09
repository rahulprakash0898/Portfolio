import { motion } from "motion/react";
import { Award, GraduationCap, CheckCircle2, Trophy, Sparkles } from "lucide-react";
import { resumeData } from "../data";

export default function CertificationsEducation() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden px-4">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Module Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              CREDENTIAL ACCREDITATION
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Certifications & Education
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            VERIFIED INDUSTRY ACHIEVEMENTS AND HONORS DEGREE ACADEMICS
          </p>
        </div>

        {/* Dynamic two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Certifications: Column Span 7 */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="flex items-center space-x-2 pb-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <h3 className="text-lg font-bold text-slate-100 font-sans tracking-tight">
                Accredited Achievements & Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.certifications.map((cert, index) => {
                const colors = [
                  "from-amber-500/10 to-transparent border-amber-500/20 text-amber-400",
                  "from-blue-500/10 to-transparent border-blue-500/20 text-blue-400",
                  "from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-400",
                  "from-indigo-500/10 to-transparent border-indigo-500/20 text-indigo-400"
                ];
                const activeTheme = colors[index % colors.length];

                return (
                  <motion.a
                    href="https://linkedin.com/in/rahul-prakash-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-5 rounded-2xl bg-[#0d111a]/95 border bg-gradient-to-br ${activeTheme} shadow-lg relative group overflow-hidden flex flex-col justify-between cursor-pointer`}
                  >
                    <div className="absolute top-0 right-0 p-3 text-slate-700/50 group-hover:text-cyan-400/20 transition-colors">
                      <Award className="w-12 h-12" />
                    </div>

                    <div className="space-y-4 relative z-10">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 w-fit">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-100 font-sans leading-snug">
                        {cert}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mt-4 tracking-widest uppercase group-hover:text-cyan-400 transition-colors">
                      <span>VERIFY CREDENTIAL ↗</span>
                      <span>VERIFIED_OK</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Academics: Column Span 5 */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2 pb-2">
              <GraduationCap className="w-4.5 h-4.5 text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-100 font-sans tracking-tight">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {resumeData.education.map((edu, eIdx) => (
                <motion.div
                  key={eIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: eIdx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0b0e14]/90 border border-white/5 shadow-xl relative overflow-hidden group hover:border-cyan-500/20"
                >
                  {/* Visual accent light */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent blur-xl pointer-events-none" />

                  <div className="space-y-4">
                    <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/30 text-cyan-400 w-fit">
                      <GraduationCap className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                        {eIdx === 0 ? "POST-GRADUATE DEGREE" : "UNDERGRADUATE DEGREE"}
                      </span>
                      <h4 className="text-base font-bold text-slate-100 font-sans">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-slate-300 font-sans">
                        {edu.institution}
                      </p>
                      {edu.location && (
                        <p className="text-[11px] text-slate-400 font-mono">
                          {edu.location}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-3 mt-4">
                      <span className="font-mono">Graduated with Honors</span>
                      <span className="font-mono text-cyan-400 font-semibold">{edu.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 text-xs text-slate-400 leading-relaxed font-sans space-y-2">
              <p className="font-bold text-slate-300">💡 Academic Foundation:</p>
              <p>
                Strong foundation in computer science engineering, software architecture, data structures, algorithms, and relational database systems from Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA).
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
