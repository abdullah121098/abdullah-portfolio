import { motion } from "motion/react";
import { Code2, Database, MessageSquare, ShieldCheck } from "lucide-react";

const highlights = [
  { title: "Frontend Development", icon: <Code2 className="w-6 h-6 text-accent" />, desc: "React.js Specialist" },
  { title: "Deployment Support", icon: <ShieldCheck className="w-6 h-6 text-accent" />, desc: "Production Ready" },
  { title: "Client Communication", icon: <MessageSquare className="w-6 h-6 text-accent" />, desc: "Technical Operations" },
  { title: "Technical Support", icon: <Database className="w-6 h-6 text-accent" />, desc: "Debugging Expert" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 grid lg:grid-cols-[320px_1fr] gap-12 items-start neumorphic-soft"
        >
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group mx-auto lg:mx-0 w-full max-w-[320px]"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass border border-white/10 relative z-10 shadow-2xl">
              <img
                src="/image.png"
                alt="Abdullah Mohamed Yousuf M"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl -z-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-glow-blue/30 rounded-br-2xl -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

            <div className="absolute -inset-2 bg-accent/5 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Content Column */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Summary */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold text-gradient">About Me</h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
              </div>
              <p className="text-lg text-text-muted leading-relaxed">
                I am a dedicated <span className="text-white font-semibold">Frontend Developer and React.js Specialist</span> with over 3 years of professional experience in building and maintaining robust web applications.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                My expertise lies in crafting responsive, user-centric interfaces using modern frontend technologies. Beyond development, I have a strong background in <span className="text-white font-semibold">deployment support</span> and <span className="text-white font-semibold">client-facing technical operations</span>, ensuring that applications not only look great but perform flawlessly in production environments.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                I thrive in collaborative environments, bridging the gap between complex technical requirements and intuitive user experiences.
              </p>
            </div>

            {/* Right Side: Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-5 rounded-2xl hover:border-accent/50 transition-all duration-300 group flex flex-col justify-center"
                >
                  <div className="p-3 bg-accent/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 leading-tight">{item.title}</h3>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
