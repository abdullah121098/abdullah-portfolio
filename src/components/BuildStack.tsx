import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Code2, Layout, ShieldCheck, Github, Database, Terminal, MessageSquare, Bug, Settings, Globe, Server } from "lucide-react";

const tabs = [
  { id: "stack", label: "Stack", icon: <Terminal className="w-4 h-4" /> },
  { id: "builds", label: "Builds", icon: <Layout className="w-4 h-4" /> },
  { id: "strengths", label: "Strengths", icon: <ShieldCheck className="w-4 h-4" /> },
];

const stackItems = [
  { name: "React.js", icon: <Code2 className="w-8 h-8 text-[#61DAFB]" /> },
  { name: "HTML5", icon: <Globe className="w-8 h-8 text-[#E34F26]" /> },
  { name: "CSS3", icon: <Layout className="w-8 h-8 text-[#1572B6]" /> },
  { name: "Bootstrap", icon: <Layout className="w-8 h-8 text-[#7952B3]" /> },
  { name: "PHP", icon: <Server className="w-8 h-8 text-[#777BB4]" /> },
  { name: "Python", icon: <Terminal className="w-8 h-8 text-[#3776AB]" /> },
  { name: "MySQL", icon: <Database className="w-8 h-8 text-[#4479A1]" /> },
  { name: "GitHub", icon: <Github className="w-8 h-8 text-white" /> },
  { name: "Visual Studio", icon: <Code2 className="w-8 h-8 text-[#007ACC]" /> },
];

const buildItems = [
  {
    title: "Dafy Online Website",
    stack: "React.js",
    desc: "A premium, responsive business website built with React.js, focusing on high performance and modern UI/UX.",
  },
  {
    title: "GASTOS",
    stack: "PHP + MySQL",
    desc: "A robust expense management system designed for tracking and managing financial data with secure database integration.",
  },
  {
    title: "College Management System",
    stack: "Python + SQLite",
    desc: "A comprehensive management tool for educational institutions, streamlining administrative tasks and student data.",
  },
  {
    title: "Malware App Detection",
    stack: "PHP + MySQL",
    desc: "A security-focused application for detecting and reporting malicious software, featuring a clean dashboard interface.",
  },
];

const strengthItems = [
  { name: "Client Management", icon: <MessageSquare className="w-6 h-6 text-accent" /> },
  { name: "Deployment Support", icon: <Settings className="w-6 h-6 text-accent" /> },
  { name: "Communication", icon: <MessageSquare className="w-6 h-6 text-accent" /> },
  { name: "Chat Support", icon: <MessageSquare className="w-6 h-6 text-accent" /> },
  { name: "Debugging", icon: <Bug className="w-6 h-6 text-accent" /> },
  { name: "Process Operations", icon: <Settings className="w-6 h-6 text-accent" /> },
];

export default function BuildStack() {
  const [activeTab, setActiveTab] = useState("stack");

  return (
    <section id="build-stack" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gradient">Build & Stack</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Explore my technical ecosystem, projects, and professional strengths.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="glass-pill flex p-1.5 gap-1 md:gap-2 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? "bg-accent text-white glow-blue" : "text-text-muted hover:text-white"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "stack" && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              >
                {stackItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-8 flex flex-col items-center gap-4 hover:border-accent/50 group hover:scale-105"
                  >
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-text-muted group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "builds" && (
              <motion.div
                key="builds"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {buildItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 hover:border-accent/50 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Layout className="w-24 h-24 text-accent" />
                    </div>
                    <div className="relative z-10 space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-accent tracking-widest uppercase">{item.stack}</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                      </div>
                      <p className="text-text-muted leading-relaxed">{item.desc}</p>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "strengths" && (
              <motion.div
                key="strengths"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {strengthItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass p-6 rounded-2xl flex items-center gap-6 hover:border-accent/50 group transition-all duration-300"
                  >
                    <div className="p-4 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-lg font-bold text-text-muted group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
