"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20" ref={ref}>
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-white/90"
        >
          Your dedicated partner for crafting{" "}
          <span className="text-[#8b5cf6]">digital experiences</span> that take you far beyond what you came for.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-lg md:text-xl text-white/50 leading-relaxed"
        >
          I&apos;m an engineer with deep expertise in Generative AI and modern software development.
          With experience working alongside international clients, I bring a global perspective
          to every project. What sets me apart? The perfect blend of speed and quality —
          delivering exceptional results, fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-12 md:gap-20 flex-wrap"
        >
          <div>
            <span className="text-5xl md:text-7xl font-bold text-[#8b5cf6]">5+</span>
            <p className="text-white/50 mt-3 tracking-wider text-sm uppercase">Years Experience</p>
          </div>
          <div className="hidden md:block w-px h-20 bg-white/10" />
          <div>
            <span className="text-5xl md:text-7xl font-bold text-[#8b5cf6]">50+</span>
            <p className="text-white/50 mt-3 tracking-wider text-sm uppercase">Projects Delivered</p>
          </div>
          <div className="hidden md:block w-px h-20 bg-white/10" />
          <div>
            <span className="text-5xl md:text-7xl font-bold text-[#8b5cf6]">20+</span>
            <p className="text-white/50 mt-3 tracking-wider text-sm uppercase">Global Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
