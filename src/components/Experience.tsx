import { motion } from "motion/react";
import { GitCommit, Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Dafy Online Pvt Ltd",
    role: "Frontend Developer & React.js Specialist",
    period: "Early Career",
    location: "Remote",
    desc: "Leading frontend development initiatives, building responsive web applications with React.js, and providing critical production support. Specialized in creating seamless user experiences and ensuring high application performance.",
    isPrimary: true,
  },
  {
    company: "Ison Xperience",
    role: "Technical Support Associate",
    period: "Early Career",
    location: "On-site",
    desc: "Handled technical operations, client communication, and deployment support. Focused on resolving complex technical issues and maintaining high service standards for enterprise clients.",
    isPrimary: false,
  },
  {
    company: "ACSASS Pvt Ltd",
    role: "Junior Developer",
    period: "Previous",
    location: "On-site",
    desc: "Assisted in web development projects, debugging code, and supporting deployment processes. Gained foundational experience in frontend technologies and team collaboration.",
    isPrimary: false,
  },
  {
    company: "Phifer Mosquito Screens - Chennai",
    role: "Back Office Sales Coordinator",
    period: "Present",
    location: "On-site",
    desc: "Back Office Sales Coordinator both Inbound and Outbound.",
    isPrimary: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gradient">Professional Journey</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A timeline of my growth as a developer and technical specialist.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-glow-blue/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative pl-20 group"
              >
                {/* Git Commit Icon */}
                <div className={`absolute left-4 top-0 p-2 rounded-full z-10 transition-all duration-500 ${exp.isPrimary ? "bg-accent text-white glow-blue scale-125" : "bg-surface text-accent border border-accent/30 group-hover:bg-accent group-hover:text-white"
                  }`}>
                  <GitCommit className="w-6 h-6" />
                </div>

                {/* Experience Card */}
                <div className={`glass-card p-8 hover:border-accent/50 transition-all duration-300 ${exp.isPrimary ? "border-accent/30 bg-accent/5" : ""
                  }`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{exp.company}</h3>
                      <p className="text-accent font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-text-muted leading-relaxed text-lg italic">
                    "{exp.desc}"
                  </p>

                  {exp.isPrimary && (
                    <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                      <span className="text-xs font-mono px-3 py-1 bg-accent/10 rounded-full text-accent border border-accent/20">React.js</span>
                      <span className="text-xs font-mono px-3 py-1 bg-accent/10 rounded-full text-accent border border-accent/20">Frontend Dev</span>
                      <span className="text-xs font-mono px-3 py-1 bg-accent/10 rounded-full text-accent border border-accent/20">Production Support</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
