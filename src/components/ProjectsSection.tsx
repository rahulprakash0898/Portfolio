import { useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Globe,
  MessageSquare,
  ShoppingBag,
  Vote,
  Activity,
  CheckSquare,
  Utensils,
  Laptop,
  Video,
  LineChart,
  Workflow,
  Database,
  GitBranch,
  Search,
  RefreshCw,
  FolderGit2
} from "lucide-react";
import { resumeData } from "../data";

// Helper function to map contextual icon to each project
function getProjectIcon(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("chat")) return MessageSquare;
  if (lower.includes("commerce")) return ShoppingBag;
  if (lower.includes("poll") || lower.includes("voting")) return Vote;
  if (lower.includes("stream") || lower.includes("analytics")) return Activity;
  if (lower.includes("todo") || lower.includes("task")) return CheckSquare;
  if (lower.includes("zomato") || lower.includes("food")) return Utensils;
  if (lower.includes("hubspot")) return Globe;
  if (lower.includes("dell") || lower.includes("hardware")) return Laptop;
  if (lower.includes("media") || lower.includes("converter")) return Video;
  if (lower.includes("observability") || lower.includes("grafana")) return LineChart;
  if (lower.includes("queue") && lower.includes("monitoring")) return Workflow;
  if (lower.includes("priority queue") || lower.includes("persistence")) return Database;
  if (lower.includes("git") || lower.includes("github")) return GitBranch;
  if (lower.includes("khoj") || lower.includes("search")) return Search;
  if (lower.includes("bdi") || lower.includes("integration")) return RefreshCw;
  return FolderGit2;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Frontend" | "API & DevOps">("All");
  const allProjects = resumeData.projects || [];

  const filterOptions: Array<"All" | "Full Stack" | "Frontend" | "API & DevOps"> = [
    "All",
    "Full Stack",
    "Frontend",
    "API & DevOps"
  ];

  const filteredProjects = allProjects.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-4">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
              FEATURED WORKS & REPOSITORIES
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Project Showcase
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            FULL STACK SYSTEMS, FRONTEND EXPERIENCES & API / DEVOPS MICROSERVICES
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {filterOptions.map((opt, i) => {
            const count = opt === "All" ? allProjects.length : allProjects.filter((p) => p.category === opt).length;
            
            return (
              <button
                key={i}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                  filter === opt
                    ? "bg-blue-600/15 text-cyan-400 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-[#0b0e14]/60 text-slate-400 border-white/5 hover:border-slate-700 hover:text-slate-100"
                }`}
              >
                <span>{opt.toUpperCase()}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${filter === opt ? "bg-cyan-950 text-cyan-300 border border-cyan-800/40" : "bg-white/5 text-slate-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredProjects.map((proj, pIdx) => {
            const ProjectIcon = getProjectIcon(proj.title);
            
            let categoryBadgeColor = "text-cyan-400 border-cyan-800/30 bg-cyan-950/40";
            if (proj.category === "Full Stack") {
              categoryBadgeColor = "text-cyan-400 border-cyan-800/30 bg-cyan-950/40";
            } else if (proj.category === "Frontend") {
              categoryBadgeColor = "text-blue-400 border-blue-800/30 bg-blue-950/40";
            } else if (proj.category === "API & DevOps") {
              categoryBadgeColor = "text-emerald-400 border-emerald-800/30 bg-emerald-950/40";
            }

            return (
              <motion.div
                key={proj.title + pIdx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (pIdx % 3) * 0.08, duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="relative group p-6 rounded-2xl bg-[#0d111a]/95 border border-white/5 shadow-xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Corner subtle glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent blur-xl pointer-events-none" />

                <div className="space-y-4">
                  {/* Folder & Category Indicator */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${categoryBadgeColor} group-hover:scale-110 transition duration-300`}>
                      <ProjectIcon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded border ${categoryBadgeColor}`}>
                      {proj.category}
                    </span>
                  </div>

                  {/* Info Text */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-100 font-sans tracking-tight group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed min-h-[40px]">
                      {proj.description}
                    </p>
                  </div>

                  {/* Structured Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-white/[0.03]">
                    {proj.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-[11px] text-slate-300 font-sans leading-relaxed flex items-start space-x-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[9px] font-mono text-slate-300 bg-white/[0.03] border border-white/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Source Code & Live Demo Action Links */}
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono font-medium text-slate-200 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/20 transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-3 py-1.5 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/50 text-xs font-mono font-medium text-cyan-300 hover:text-white border border-cyan-800/40 hover:border-cyan-500/50 transition flex items-center justify-center space-x-1.5 shadow-[0_0_10px_rgba(34,211,238,0.1)] cursor-pointer"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global GitHub Repositories Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900 to-cyan-950/30 border border-cyan-500/20 shadow-2xl relative overflow-hidden text-left"
        >
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cyan-500/10 to-transparent blur-xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base sm:text-lg font-bold text-slate-100 font-sans tracking-tight">
                  Looking to Explore More Project Repositories?
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl leading-relaxed">
                Check out Rahul Prakash's GitHub repository hub for all public repositories, microservices, AI workflows, and cloud architectures.
              </p>
            </div>

            <a
              href="https://github.com/rahulprakash0898?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:brightness-110 font-mono text-xs font-semibold text-white tracking-wider flex items-center justify-center space-x-2.5 shadow-[0_0_20px_rgba(37,99,235,0.45)] group transition cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>ALL REPOSITORIES TAB</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
