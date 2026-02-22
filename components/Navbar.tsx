"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <polygon points="16,2 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12" fill="#8b5cf6"/>
            </svg>
          </div>
          <span className="text-lg tracking-[0.3em] font-light hidden md:block">DIPANKAR</span>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <span className="text-sm text-[#8b5cf6] tracking-wider">Player 1</span>
        </div>
      </div>
    </motion.nav>
  );
}
