"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Software",
      highlight: "Engineering",
      subtitle: "Technology",
      items: [
        "React, Next.js, Vue, Angular",
        "Node.js, Python, Go",
        "Flutter, React Native, Swift, Kotlin",
        "PostgreSQL, MongoDB, Supabase",
        "OpenAI, LangChain, TensorFlow",
        "AWS, Docker, Kubernetes",
        "REST APIs, GraphQL",
        "CI/CD, Test-driven development",
      ],
    },
    {
      title: "Design",
      highlight: "& Experience",
      subtitle: "UX / UI, Brand identities, Design Systems",
      items: [
        "User Interface Design",
        "User Experience Research",
        "Mobile & Desktop Apps",
        "Interactive Prototypes",
        "Design Systems",
        "Motion Design",
        "Wireframing & Flows",
        "Figma, Adobe Suite",
      ],
    },
  ];

  return (
    <section id="services" className="min-h-screen py-16 md:py-20 flex items-center justify-center" ref={ref}>
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-center mb-4 md:mb-6"
        >
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-white/50 mb-12 md:mb-16 text-center"
        >
          You have one vision. I make it count.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">{service.title}</h3>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8b5cf6] mb-4 md:mb-6">{service.highlight}</h3>
              <p className="text-white/40 tracking-wider text-xs md:text-sm uppercase mb-6 md:mb-8">{service.subtitle}</p>
              <div className="w-16 h-px bg-white/20 mx-auto mb-6 md:mb-8" />
              <ul className="space-y-2 md:space-y-3">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white/70 hover:text-white transition-colors text-base md:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
