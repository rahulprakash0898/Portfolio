import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Check, Copy, ExternalLink, Sparkles, Send, Github } from "lucide-react";
import { resumeData } from "../data";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Hi Rahul,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.open(`mailto:rahulprakash0898@gmail.com?subject=${subject}&body=${body}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  const contactList = [
    {
      label: "Direct Email",
      value: resumeData.basics.email,
      href: `mailto:${resumeData.basics.email}`,
      icon: Mail,
      color: "text-cyan-400 border-cyan-900/40 bg-cyan-950/20",
    },
    {
      label: "Mobile Contact",
      value: resumeData.basics.phone,
      href: `tel:${resumeData.basics.phone}`,
      icon: Phone,
      color: "text-blue-400 border-blue-900/40 bg-blue-950/20",
    },
    {
      label: "LinkedIn Profile",
      value: "rahul-prakash-dev",
      href: resumeData.basics.linkedin,
      icon: Linkedin,
      color: "text-indigo-400 border-indigo-900/40 bg-indigo-950/20",
    },
    {
      label: "GitHub Account",
      value: "rahulprakash0898",
      href: resumeData.basics.github,
      icon: Github,
      color: "text-emerald-400 border-emerald-900/40 bg-emerald-950/20",
    }
  ];

  return (
    <footer id="contact" className="py-24 relative overflow-hidden px-4 border-t border-white/5 bg-[#06080c]/80">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Module Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              TRANSMISSION CHANNEL
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            COMMUNICATION PORTS OPEN FOR FULL-STACK & AI DEVELOPMENT ROLES
          </p>
        </div>

        {/* Channels Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactList.map((chan, idx) => {
            const Icon = chan.icon;
            const isCopied = copiedField === chan.label;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0e14]/90 border border-white/5 shadow-xl flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-colors text-left group"
              >
                <div className="space-y-3">
                  <div className={`p-2.5 rounded-xl border w-fit ${chan.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {chan.label}
                    </span>
                    <p className="text-sm font-bold text-slate-200 break-words group-hover:text-cyan-400 transition-colors">
                      {chan.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() => copyToClipboard(chan.value, chan.label)}
                    className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 transition text-xs flex items-center space-x-1 cursor-pointer"
                    title="Copy details"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="font-mono text-[10px]">{isCopied ? "COPIED" : "COPY"}</span>
                  </button>

                  {chan.href && (
                    <a
                      href={chan.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/20 transition text-xs flex items-center space-x-1 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px]">OPEN</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Message Form */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0b0e14]/90 border border-white/5 shadow-2xl text-left space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-100 font-sans">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Leave a quick note to connect directly with Rahul Prakash via email.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/10 text-slate-200 text-xs font-sans focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/10 text-slate-200 text-xs font-sans focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Let's build something scalable together..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/10 text-slate-200 text-xs font-sans focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:brightness-110 font-mono text-xs font-semibold text-white tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition cursor-pointer"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>MESSAGE READY - OPENED IN CLIENT</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Bottom Details */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 max-w-6xl mx-auto text-center">
          <div className="space-y-1 text-left">
            <p>© {new Date().getFullYear()} RAHUL PRAKASH. ALL RIGHTS RESERVED.</p>
            <p className="text-[10px] text-cyan-500">HOSTED LIVE ON NETLIFY • PRODUCTION GRADE</p>
          </div>
          
          <div className="flex items-center space-x-3 text-[10px] text-slate-400">
            <span>FULL STACK DEVELOPER</span>
            <span>•</span>
            <span>MERN & AI INTEGRATION</span>
            <span>•</span>
            <span>HACKERRANK 5-STAR</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
