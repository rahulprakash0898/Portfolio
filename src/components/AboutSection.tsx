import { motion } from "motion/react";
import { Terminal, Cpu, Award, Zap, Shield, Sparkles } from "lucide-react";
import { resumeData, impactHighlights } from "../data";

export default function AboutSection() {
  const topThree = impactHighlights.slice(0, 3);

  return (
    <section id="about" className="py-24 relative overflow-hidden px-4">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Metric Highlight Strip - "Top 3 Impact Strip" */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
              KEY METRIC INSIGHTS
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 font-sans mt-3">
              Top Professional Impacts
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-1">
              PROVEN TRACK RECORD ACROSS PRODUCTION DEPLOYMENTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {topThree.map((item, index) => {
              const icons = [Shield, Award, Cpu];
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="relative group p-6 rounded-2xl bg-[#0d111a]/85 border border-white/5 shadow-xl hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Glowing background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Accent border highlight */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-l-2xl opacity-70 group-hover:opacity-100" />

                  <div className="flex items-start space-x-4 pl-2">
                    <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/30 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 text-left flex-1">
                      <div className="text-2xl font-black text-slate-100 tracking-tight font-sans">
                        {item.metric}
                      </div>
                      <div className="text-xs text-slate-400 font-mono leading-relaxed">
                        {item.context}
                      </div>
                      <div className="text-[10px] text-slate-500 border-t border-white/5 pt-1.5 mt-1.5 truncate italic font-sans">
                        "{item.source}"
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detailed Core Summary Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Summary columns */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
                ABOUT ME
              </span>
              <h3 className="text-3xl font-black font-sans text-slate-100 tracking-tight">
                Full Stack Developer & AI Integration Engineer
              </h3>
            </div>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed tracking-wide font-sans">
              <p>
                {resumeData.basics.summary[0]}
              </p>
              <p>
                {resumeData.basics.summary[1]}
              </p>
            </div>

            {/* Quick Architecture Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[10px] text-cyan-400 font-mono uppercase">PRODUCTION WORKFLOWS</span>
                <span className="text-xs text-slate-200 block truncate">MERN, Next.js, PostgreSQL, Redis</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[10px] text-cyan-400 font-mono uppercase">CLOUD & AI ECOSYSTEM</span>
                <span className="text-xs text-slate-200 block truncate">AWS EC2, Docker, Nginx, AI/LLM APIs</span>
              </div>
            </div>
          </div>

          {/* Interactive terminal concept visualization box */}
          <div className="lg:col-span-5 h-[340px] relative rounded-2xl bg-[#090b10] border border-white/10 p-5 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 left-0 w-full bg-[#11141e] border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-500">rahul_profile.sh</span>
            </div>

            <div className="pt-8 h-full flex flex-col justify-between font-mono text-xs text-slate-300 leading-relaxed text-left">
              <div className="space-y-4 pt-4 overflow-y-auto max-h-[240px] pr-2 scrollbar-none">
                <div>
                  <span className="text-cyan-400">$</span> cat profile.json
                  <pre className="text-green-400 text-[11px] mt-1 bg-black/40 p-3 rounded border border-white/5 leading-normal whitespace-pre-wrap">
{`{
  "name": "Rahul Prakash",
  "role": "Full Stack Developer",
  "education": "MCA with Honors (Galgotias)",
  "skills": ["React", "Node.js", "AI/LLM", "AWS"],
  "rating": "HackerRank 5-Star (Java & SQL)"
}`}
                  </pre>
                </div>

                <div>
                  <span className="text-cyan-400">$</span> run skills --assess
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/30 text-[10px] text-cyan-400">React.js</span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/30 text-[10px] text-cyan-400">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/30 text-[10px] text-cyan-400">Next.js</span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/30 text-[10px] text-cyan-400">MongoDB</span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/30 text-[10px] text-cyan-400">PostgreSQL</span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/30 text-[10px] text-cyan-400">Docker</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 italic">
                  * Live system verified and compiled cleanly
                </div>
              </div>

              {/* Bottom stats layout */}
              <div className="flex justify-between items-center text-[10px] text-slate-500 border-t border-white/5 pt-2">
                <span>LANG_HIN_ENG</span>
                <span className="text-emerald-400 font-bold">READY TO DEPLOY</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
