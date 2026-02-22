"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX, SiDribbble } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiX, href: "#", label: "X" },
    { icon: SiDribbble, href: "#", label: "Dribbble" },
  ];

  const navLinks = ["Services", "Work", "Contact"];

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
            <polygon points="16,2 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12" fill="#8b5cf6"/>
          </svg>
          <span className="tracking-[0.2em] text-lg text-white/70">DIPANKAR ATRIYA</span>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/50 hover:text-[#8b5cf6] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-white/40 hover:text-[#8b5cf6] transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <div className="w-16 h-px bg-white/10 mx-auto mb-8" />

        <p className="text-sm text-white/30">
          {currentYear} © Dipankar Atriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
