import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient">Abdullah Mohamed Yousuf M</h3>
            <p className="text-text-muted text-sm">Frontend Developer & React.js Specialist</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/abdullah121098?tab=repositories" className="p-2 glass rounded-lg text-text-muted hover:text-white hover:border-accent/50 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-mohamedyousuf-m-aa43801a5/" className="p-2 glass rounded-lg text-text-muted hover:text-white hover:border-accent/50 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:iblis.lucifer121098@gmail.com" className="p-2 glass rounded-lg text-text-muted hover:text-white hover:border-accent/50 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-text-muted text-sm text-center md:text-right">
            <p>© 2026 Abdullah Mohamed Yousuf M.</p>
            <p>Built with React & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
