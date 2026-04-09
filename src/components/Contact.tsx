import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, Linkedin, Download, Send, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleWhatsAppRedirect = () => {
    const { name, email, message } = formData;
    const text = `Hello, my name is ${name}. %0AEmail: ${email} %0A%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918489351923?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-12 neumorphic-soft overflow-hidden relative"
        >
          {/* Background Glows */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 blur-[100px] rounded-full -z-10" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-glow-blue/20 blur-[100px] rounded-full -z-10" />

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Let's Connect</h2>
                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <a
                  href="mailto:iblis.lucifer121098@gmail.com"
                  className="flex items-center gap-3 md:gap-4 group p-3 md:p-4 glass rounded-2xl hover:border-accent/50 transition-all duration-300"
                >
                  <div className="p-2 md:p-3 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-mono">Email Me</p>
                    <p className="text-sm md:text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 truncate">iblis.lucifer121098@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 md:gap-4 group p-3 md:p-4 glass rounded-2xl hover:border-accent/50 transition-all duration-300"
                >
                  <div className="p-2 md:p-3 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-mono">Call Me</p>
                    <p className="text-sm md:text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">+91 84893 51923</p>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                  <a
                    href="https://www.linkedin.com/in/abdullah-mohamedyousuf-m-aa43801a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-accent hover:bg-accent/80 text-white rounded-xl font-semibold transition-all duration-300 glow-blue group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </a>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 md:py-4 glass hover:bg-white/10 text-white rounded-xl font-semibold transition-all duration-300 group"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    Resume
                    <a href="public\Abdullah-entry(2024).pdf" download>Download</a>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-mono text-text-muted px-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-mono text-text-muted px-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-mono text-text-muted px-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
                  />
                </div>
              </div>
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-accent hover:bg-accent/80 text-white rounded-xl font-semibold transition-all duration-300 glow-blue group"
              >
                Send Message
                <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
