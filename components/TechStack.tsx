"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython,
  SiFlutter, SiSwift, SiKotlin, SiTensorflow, SiOpenai,
  SiFigma, SiSupabase, SiPostgresql, SiDocker,
} from "react-icons/si";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Flutter", icon: SiFlutter },
    { name: "Swift", icon: SiSwift },
    { name: "Kotlin", icon: SiKotlin },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "OpenAI", icon: SiOpenai },
    { name: "Figma", icon: SiFigma },
    { name: "Supabase", icon: SiSupabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: SiDocker },
  ];

  return (
    <section className="py-20 flex items-center justify-center" ref={ref}>
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white/40 tracking-[0.3em] uppercase text-sm mb-12"
        >
          Technologies I work with
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-10 md:gap-12 items-center justify-center flex-wrap"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <tech.icon className="w-10 h-10 text-white/30 group-hover:text-[#8b5cf6] transition-colors" />
              <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors tracking-wider">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
