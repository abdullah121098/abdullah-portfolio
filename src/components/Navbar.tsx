import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Layers, Briefcase, Mail, Download } from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
  { name: "Build & Stack", href: "#build-stack", icon: <Layers className="w-5 h-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", ...navItems.map(item => item.href.substring(1))];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const navItem = navItems.find(item => item.href === `#${currentSection}`);
        setActive(navItem ? navItem.name : "Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`hidden md:flex glass-pill items-center gap-4 transition-all duration-300 ${scrolled ? "py-2 px-8" : "py-3 px-10"
          }`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 ${active === item.name ? "text-white" : "text-text-muted hover:text-white"
              }`}
          >
            {item.name}
            {active === item.name && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-accent/20 rounded-full -z-10 border border-accent/30 glow-blue"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        ))}
      </motion.div>

      {/* Mobile Navbar Trigger */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="md:hidden flex items-center justify-between w-full max-w-[320px] glass-pill py-2 px-4"
      >
        <a href="#home" className="text-white font-bold text-sm tracking-tight hover:text-accent transition-colors">PORTFOLIO</a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-20 w-full max-w-[320px] glass rounded-[40px] p-6 shadow-2xl z-50 overflow-hidden border border-white/10"
          >
            {/* Glassy Overlay */}
            <div className="absolute inset-0 bg-surface/80 backdrop-blur-2xl -z-10" />

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-4 px-4 py-4 rounded-3xl transition-all duration-300 ${active === item.name
                      ? "bg-accent text-white shadow-lg glow-blue"
                      : "text-text-muted hover:bg-white/5 hover:text-white"
                    }`}
                >
                  <span className={active === item.name ? "text-white" : "text-accent"}>
                    {item.icon}
                  </span>
                  <span className="font-bold text-lg">{item.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <button className="w-full flex items-center justify-center gap-3 py-4 bg-accent hover:bg-accent/80 text-white rounded-2xl font-bold shadow-lg transition-all glow-blue">
                <Download className="w-5 h-5" />
                Download Resume
                <a href="public\Abdullah-entry(2024).pdf" download>Download</a>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
