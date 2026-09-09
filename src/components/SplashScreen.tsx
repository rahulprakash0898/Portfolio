import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // 1.2 seconds smooth load
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      id="splash-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white select-none overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none animate-pulse" />

      <div className="flex flex-col items-center max-w-xs w-full text-center space-y-8 z-10 px-4">
        {/* Monogram Monolith Initial "RP" Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative group cursor-default"
        >
          {/* Cyber outer border ring */}
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
          
          <div className="relative w-24 h-24 rounded-2xl bg-[#0d1017] border border-white/10 flex items-center justify-center">
            <span className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 font-sans">
              RP
            </span>
            
            {/* Corner Tech bracket lines */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-blue-400/50" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400/50" />
          </div>
        </motion.div>

        {/* Text details */}
        <div className="space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg font-semibold tracking-wider text-slate-200 font-sans uppercase"
          >
            Rahul Prakash
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs tracking-widest text-cyan-400 font-mono"
          >
            FULL STACK DEVELOPER
          </motion.p>
        </div>

        {/* Cyber style bar loading */}
        <div className="w-full space-y-2">
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>SYS_READY</span>
            <span className="text-cyan-400 font-bold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
