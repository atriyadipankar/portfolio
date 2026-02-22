"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const posts = [
    { title: "Getting Started with GenAI Development", category: "AI", date: "Coming Soon" },
    { title: "Building Scalable Mobile Apps with Flutter", category: "Mobile", date: "Coming Soon" },
    { title: "The Future of Web Development", category: "Web", date: "Coming Soon" },
  ];

  return (
    <section id="blog" className="py-20 flex items-center justify-center" ref={ref}>
      <div className="w-full max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-16"
        >
          Insights
        </motion.h2>

        <div>
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="group cursor-pointer border-t border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="py-8 text-center">
                <span className="text-xs tracking-[0.2em] uppercase text-[#8b5cf6] mb-2 block">{post.category}</span>
                <div className="flex items-center justify-center gap-3">
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-[#8b5cf6] transition-colors">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#8b5cf6] transition-all" />
                </div>
                <span className="text-sm text-white/30 mt-2 block">{post.date}</span>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
