import { useState } from "react";
import { Printer, Copy, Check, Sparkles, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function ResumePreview() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    let text = `RAHUL PRAKASH\n`;
    text += `6388689662 | rahulprakash0898@gmail.com | linkedin.com/in/rahul-prakash-dev | github.com/rahulprakash0898 | rahulprakash-dev.netlify.app\n\n`;
    
    text += `WORK EXPERIENCE\n`;
    text += `Axepert Exhibits Private Limited, New Delhi, India\n`;
    text += `Full Stack Developer (May 2025 – Aug 2026)\n`;
    text += `• Delivered 10+ full-stack projects using Node.js, Express.js, React.js, MongoDB, PostgreSQL, and Redis for production applications.\n`;
    text += `• Supported applications serving 100,000+ user visits through scalable REST APIs, optimized database queries, database indexing, Redis caching, pagination, and efficient client-server communication.\n`;
    text += `• Reduced production deployment turnaround to approximately 20 minutes using Docker, Nginx, AWS EC2, Linux/VPS infrastructure, and GitHub Actions CI/CD.\n`;
    text += `• Integrated AI/LLM capabilities into full-stack applications by connecting AI services with Node.js backend APIs and React.js interfaces for application workflows and user-facing features.\n`;
    text += `• Implemented secure application architecture using JWT/OAuth, RBAC, API validation, Socket.IO/WebSockets, Redux Toolkit, and TanStack Query for scalable authentication, real-time communication, and data management.\n\n`;
    
    text += `INTERNSHIP\n`;
    text += `Myndtree Business Services, Noida, India\n`;
    text += `Software DM Trainee (Feb 2024 – May 2024)\n`;
    text += `• Developed responsive web pages and improved UI layouts while collaborating with development teams in an Agile environment.\n`;
    text += `• Supported frontend development through debugging, coordination, communication, and implementation of maintainable web interfaces.\n\n`;
    
    text += `Aditya Birla Hindalco Industries Ltd, Renukoot, Uttar Pradesh\n`;
    text += `Oracle APEX / PL/SQL Intern (Jul 2023 – Sep 2023)\n`;
    text += `• Worked with PL/SQL queries, stored procedures, functions, and database operations during a 3-month internship.\n`;
    text += `• Used Oracle APEX for database-driven applications, data handling, application logic, and relational database workflows.\n\n`;
    
    text += `SKILLS\n`;
    text += `• Frontend: React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, Zustand\n`;
    text += `• Backend & AI: Node.js, Express.js, RESTful APIs, Socket.IO, WebSockets, AI/LLM Integration\n`;
    text += `• Database: MongoDB, PostgreSQL, MySQL, Redis\n`;
    text += `• Cloud & DevOps: AWS EC2, AWS S3, Docker, Nginx, GitHub Actions, Linux, VPS/KVM\n`;
    text += `• Tools: Git, GitHub, Postman, MongoDB Compass\n`;
    text += `• Professional Skills: Communication, Collaboration, Problem-Solving, Teamwork, Coordination, Adaptability, Time Management, Agile\n\n`;
    
    text += `PROJECTS\n`;
    text += `Real-Time Chat Application | React.js, Node.js, Express.js, MongoDB, Socket.IO (Live: fullstack-chat-app-5ane.onrender.com | GitHub: github.com/rahulprakash0898/fullstack-chat-app)\n`;
    text += `• Developed a full-stack real-time chat application using React.js, Node.js, Express.js, MongoDB, Socket.IO, Zustand, and React Router for live messaging.\n`;
    text += `• Implemented JWT/Bcrypt.js authentication, Cloudinary image management, and responsive UI using Tailwind CSS and DaisyUI.\n\n`;
    
    text += `E-commerce Website | React.js, Redux Toolkit, Node.js, Express.js, MongoDB (Live: e-commerce-app-rahul-dev.vercel.app | GitHub: github.com/rahulprakash0898/E-Commerce-App)\n`;
    text += `• Developed a full-stack E-commerce platform with product filtering, shopping cart, checkout, and PayPal payment integration.\n`;
    text += `• Implemented JWT authentication and RBAC using MongoDB Atlas, Cloudinary, Redux Toolkit, Axios, and reusable UI components.\n\n`;
    
    text += `Interactive Polling Application | React.js, Node.js, Express.js, MongoDB (Live: polling-app-rahul-dev.vercel.app/login | GitHub: github.com/rahulprakash0898/Polling-App)\n`;
    text += `• Created real-time polling system with live vote counters and user authentication for poll creation and voting integrity.\n\n`;
    
    text += `EDUCATION\n`;
    text += `Galgotias College of Engineering and Technology, Greater Noida, India\n`;
    text += `Master of Computer Applications (MCA) with Honors (Nov 2021 – Sep 2023)\n\n`;
    text += `Bundelkhand University, Jhansi, India\n`;
    text += `Bachelor of Computer Applications (BCA) with Honors (Jul 2018 – Jul 2021)\n\n`;
    
    text += `ACHIEVEMENTS\n`;
    text += `• HackerRank 5-Star – Java and SQL (2024 – Present)\n`;
    text += `• MERN Stack Developer Training – JSpiders (July 2024 – May 2025)\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume-viewer" className="py-24 relative overflow-hidden px-4">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              RECRUITER ACCESS SHEETS
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white">
            Formal Resume Hub
          </h2>
          <p className="text-xs text-slate-400 font-mono tracking-wider max-w-xl mx-auto leading-relaxed">
            PRINT-READY ATS RESUME CORRESPONDING EXACTLY TO OFFICIAL RECORD
          </p>
        </div>

        {/* Toolbar widgets */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0b0e14]/90 border border-white/5 shadow-md">
          <span className="text-xs font-mono text-cyan-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ATS_VERIFIED_DOCUMENT</span>
          </span>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition flex items-center space-x-1.5 cursor-pointer"
              title="Copy plain-text CV details"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy TXT</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:brightness-110 text-xs font-mono text-white transition flex items-center space-x-1.5 shadow-[0_4px_15px_rgba(37,99,235,0.3)] cursor-pointer"
              title="Print standard copy of this CV directly"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>

        {/* Outer Formal Visual Container */}
        <div 
          id="formal-cv-document"
          className="bg-white text-slate-900 rounded-2xl p-6 sm:p-12 shadow-2xl text-left font-serif border border-slate-200 print:shadow-none print:p-0 print:border-none relative select-text"
        >
          {/* Print instructions overlay */}
          <div className="absolute top-4 right-4 flex items-center space-x-1 px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono rounded border border-slate-200 uppercase tracking-wider print:hidden select-none">
            <Printer className="w-3 h-3" />
            <span>Optimal on A4/Letter size</span>
          </div>

          {/* LaTeX Document Body container */}
          <div className="max-w-[800px] mx-auto text-[13px] leading-relaxed text-[#111] space-y-5">
            
            {/* Header section */}
            <div className="text-center space-y-1">
              <h3 className="text-3xl font-bold tracking-tight text-slate-950 font-serif uppercase">
                RAHUL PRAKASH
              </h3>
              
              <div className="text-xs sm:text-sm text-slate-800 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-serif">
                <span>6388689662</span>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="mailto:rahulprakash0898@gmail.com" 
                  className="hover:underline hover:text-blue-600 font-serif"
                >
                  rahulprakash0898@gmail.com
                </a>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="https://linkedin.com/in/rahul-prakash-dev" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-blue-600 font-serif"
                >
                  linkedin.com/in/rahul-prakash-dev
                </a>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="https://github.com/rahulprakash0898" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-blue-600 font-serif"
                >
                  github.com/rahulprakash0898
                </a>
                <span className="text-slate-400 font-sans">|</span>
                <a 
                  href="https://rahulprakash-dev.netlify.app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline hover:text-blue-600 font-serif font-bold text-blue-700"
                >
                  rahulprakash-dev.netlify.app
                </a>
              </div>
            </div>

            {/* WORK EXPERIENCE */}
            <div className="space-y-2 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                WORK EXPERIENCE
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Axepert Exhibits Private Limited</span>
                    <span className="text-xs text-slate-900 font-serif">New Delhi, India</span>
                  </div>
                  <div className="flex justify-between items-baseline font-serif italic text-xs text-slate-800">
                    <span>Full Stack Developer</span>
                    <span>May 2025 – Aug 2026</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-1">
                    <li className="leading-relaxed text-justify">
                      Delivered 10+ full-stack projects using Node.js, Express.js, React.js, MongoDB, PostgreSQL, and Redis for production applications.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Supported applications serving 100,000+ user visits through scalable REST APIs, optimized database queries, database indexing, Redis caching, pagination, and efficient client-server communication.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Reduced production deployment turnaround to approximately 20 minutes using Docker, Nginx, AWS EC2, Linux/VPS infrastructure, and GitHub Actions CI/CD.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Integrated AI/LLM capabilities into full-stack applications by connecting AI services with Node.js backend APIs and React.js interfaces for application workflows and user-facing features.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Implemented secure application architecture using JWT/OAuth, RBAC, API validation, Socket.IO/WebSockets, Redux Toolkit, and TanStack Query for scalable authentication, real-time communication, and data management.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* INTERNSHIP */}
            <div className="space-y-2 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                INTERNSHIP
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Myndtree Business Services</span>
                    <span className="text-xs text-slate-900 font-serif">Noida, India</span>
                  </div>
                  <div className="flex justify-between items-baseline font-serif italic text-xs text-slate-800">
                    <span>Software DM Trainee</span>
                    <span>Feb 2024 – May 2024</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Developed responsive web pages and improved UI layouts while collaborating with development teams in an Agile environment.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Supported frontend development through debugging, coordination, communication, and implementation of maintainable web interfaces.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Aditya Birla Hindalco Industries Ltd</span>
                    <span className="text-xs text-slate-900 font-serif">Renukoot, Uttar Pradesh</span>
                  </div>
                  <div className="flex justify-between items-baseline font-serif italic text-xs text-slate-800">
                    <span>Oracle APEX / PL/SQL Intern</span>
                    <span>Jul 2023 – Sep 2023</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Worked with PL/SQL queries, stored procedures, functions, and database operations during a 3-month internship.
                    </li>
                    <li className="leading-relaxed text-justify">
                      Used Oracle APEX for database-driven applications, data handling, application logic, and relational database workflows.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                SKILLS
              </h4>
              <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                <li className="leading-relaxed">
                  <strong className="font-serif">Frontend:</strong> React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, Zustand
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Backend & AI:</strong> Node.js, Express.js, RESTful APIs, Socket.IO, WebSockets, AI/LLM Integration
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Database:</strong> MongoDB, PostgreSQL, MySQL, Redis
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Cloud & DevOps:</strong> AWS EC2, AWS S3, Docker, Nginx, GitHub Actions, Linux, VPS/KVM
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Tools:</strong> Git, GitHub, Postman, MongoDB Compass
                </li>
                <li className="leading-relaxed">
                  <strong className="font-serif">Professional Skills:</strong> Communication, Collaboration, Problem-Solving, Teamwork, Coordination, Adaptability, Time Management, Agile
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div className="space-y-3 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                PROJECTS
              </h4>
              <div className="space-y-3">
                {/* Project 1 */}
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Real-Time Full Stack Chat App</span>
                    <span className="text-xs text-slate-800 font-serif italic">React.js, Node.js, Express.js, MongoDB, Socket.IO</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Developed a full-stack real-time chat application using React.js, Node.js, Express.js, MongoDB, Socket.IO, Zustand, and React Router for live messaging (Live: fullstack-chat-app-5ane.onrender.com).
                    </li>
                    <li className="leading-relaxed text-justify">
                      Implemented JWT/Bcrypt.js authentication, Cloudinary image management, and responsive UI using Tailwind CSS and DaisyUI.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">E-Commerce Web Application</span>
                    <span className="text-xs text-slate-800 font-serif italic">React.js, Redux Toolkit, Node.js, Express.js, MongoDB</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Developed a full-stack E-commerce platform with product filtering, shopping cart, checkout, and PayPal payment integration (Live: e-commerce-app-rahul-dev.vercel.app).
                    </li>
                    <li className="leading-relaxed text-justify">
                      Implemented JWT authentication and RBAC using MongoDB Atlas, Cloudinary, Redux Toolkit, Axios, and reusable UI components.
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Interactive Polling Application</span>
                    <span className="text-xs text-slate-800 font-serif italic">React.js, Node.js, Express.js, MongoDB, Tailwind CSS</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                    <li className="leading-relaxed text-justify">
                      Created real-time poll creation and instant voting interface with dynamic percentage tally updates and single-vote integrity per user (Live: polling-app-rahul-dev.vercel.app/login).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-2 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                EDUCATION
              </h4>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Galgotias College of Engineering and Technology</span>
                    <span className="text-xs text-slate-900 font-serif">Greater Noida, India</span>
                  </div>
                  <div className="flex justify-between items-baseline font-serif italic text-xs text-slate-800">
                    <span>Master of Computer Applications (MCA) with Honors</span>
                    <span>Nov 2021 – Sep 2023</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-serif">
                    <span className="font-bold text-slate-950">Bundelkhand University</span>
                    <span className="text-xs text-slate-900 font-serif">Jhansi, India</span>
                  </div>
                  <div className="flex justify-between items-baseline font-serif italic text-xs text-slate-800">
                    <span>Bachelor of Computer Applications (BCA) with Honors</span>
                    <span>Jul 2018 – Jul 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="space-y-1 page-break-inside-avoid">
              <h4 className="text-[13.5px] font-bold tracking-wider text-slate-950 border-b border-slate-950 uppercase pb-0.5 font-serif select-none">
                ACHIEVEMENTS
              </h4>
              <ul className="list-disc pl-5 mt-1 text-[#111] font-serif space-y-0.5">
                <li className="leading-relaxed text-justify">
                  <strong className="font-serif">HackerRank 5-Star – Java and SQL:</strong> Achieved 5-star rating in Java and 5-star rating in SQL, demonstrating strong programming, database, and problem-solving skills (2024 – Present).
                </li>
                <li className="leading-relaxed text-justify">
                  <strong className="font-serif">MERN Stack Developer Training – JSpiders:</strong> Completed hands-on training in MongoDB, Express.js, React.js, and Node.js, covering API development, debugging, code optimization, Git, and GitHub (July 2024 – May 2025).
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
