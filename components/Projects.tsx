"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI Chat Platform",
      description: "Real-time AI-powered chat application with multi-model support and conversation memory.",
      tags: ["Web App", "AI/ML", "Full Stack"],
      color: "#8b5cf6",
    },
    {
      title: "E-Commerce App",
      description: "Cross-platform mobile shopping experience with seamless checkout and push notifications.",
      tags: ["Mobile", "Flutter", "Firebase"],
      color: "#3b82f6",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and team collaboration features.",
      tags: ["Web App", "React", "TypeScript"],
      color: "#10b981",
    },
    {
      title: "Healthcare Platform",
      description: "Telemedicine solution with video consultations and appointment scheduling.",
      tags: ["Web App", "WebRTC", "Full Stack"],
      color: "#f59e0b",
    },
  ];

  return (
    <section id="work" className="min-h-screen py-20 flex items-center justify-center" ref={ref}>
      <div className="w-full max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-16"
        >
          My Work
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group cursor-pointer border-t border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="py-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }} />
                  <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-[#8b5cf6] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-[#8b5cf6] transition-all" />
                </div>
                <p className="text-white/50 mb-4">{project.description}</p>
                <div className="flex justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs tracking-wider uppercase bg-white/5 rounded-full text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
