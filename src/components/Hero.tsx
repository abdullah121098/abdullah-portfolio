import { motion } from "motion/react";
import { Terminal, Code2, Database, Github, Layout, Cpu, Download, Mail } from "lucide-react";

const stats = [
  { label: "3+ Years Experience", icon: <Cpu className="w-5 h-5 text-accent" /> },
  { label: "React Specialist", icon: <Code2 className="w-5 h-5 text-accent" /> },
  { label: "4 Projects", icon: <Layout className="w-5 h-5 text-accent" /> },
  { label: "Production Support", icon: <Database className="w-5 h-5 text-accent" /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-mono tracking-widest uppercase text-sm"
            >
              Available for new opportunities
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              ABDULLAH <br />
              <span className="text-gradient">MOHAMED YOUSUF M</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-text-muted max-w-lg"
            >
              Frontend Developer | React.js Specialist. <br />
              <span className="text-text-primary/80">Building responsive web applications with modern frontend technologies and production support expertise.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <a
              href="#build-stack"
              className="px-6 md:px-8 py-3.5 bg-accent hover:bg-accent/80 text-white rounded-full font-semibold transition-all duration-300 glow-blue hover:scale-105 active:scale-95 text-sm md:text-base whitespace-nowrap"
            >
              View Work
            </a>
            <button
              className="px-6 md:px-8 py-3.5 glass hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Resume
              <a href="public\Abdullah-entry(2024).pdf" download>Download</a>
            </button>
            <a
              href="#contact"
              className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] glass hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group shrink-0"
              title="Contact Me"
            >
              <Mail className="w-5 h-5 group-hover:text-accent transition-colors" />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 pt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-card p-4 flex items-center gap-3 hover:border-accent/50 group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <span className="text-sm font-medium text-text-muted group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Code Preview */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 2, 0],
              rotateY: [0, -2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="glass-card p-1 overflow-hidden neumorphic-soft shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="bg-[#1e1e1e]/80 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>developer.tsx</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">1</span>
                  <p><span className="text-accent">const</span> <span className="text-glow-blue">developer</span> = {"{"}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">2</span>
                  <p className="pl-4"><span className="text-accent">name:</span> <span className="text-green-400">"Abdullah Mohamed Yousuf M"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">3</span>
                  <p className="pl-4"><span className="text-accent">role:</span> <span className="text-green-400">"Frontend Developer"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">4</span>
                  <p className="pl-4"><span className="text-accent">specialization:</span> <span className="text-green-400">"React.js"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">5</span>
                  <p className="pl-4"><span className="text-accent">stack:</span> [</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">6</span>
                  <p className="pl-8"><span className="text-green-400">"React.js"</span>, <span className="text-green-400">"HTML5"</span>, <span className="text-green-400">"CSS3"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">7</span>
                  <p className="pl-8"><span className="text-green-400">"Bootstrap"</span>, <span className="text-green-400">"MySQL"</span>, <span className="text-green-400">"GitHub"</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">8</span>
                  <p className="pl-4">],</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">9</span>
                  <p className="pl-4"><span className="text-accent">experience:</span> <span className="text-orange-400">"3+ Years"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">10</span>
                  <p className="pl-4"><span className="text-accent">status:</span> <span className="text-green-400">"Ready for Production"</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-muted/50 select-none">11</span>
                  <p>{"};"}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[80px] rounded-full -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-glow-blue/20 blur-[80px] rounded-full -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
