"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, X, Loader2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", message: "", budget: "", source: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${formData.firstName} ${formData.lastName}`, email: formData.email, message: formData.message }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "", budget: "", source: "" });
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 py-4 text-white text-center placeholder:text-white/30 focus:border-[#8b5cf6] focus:outline-none transition-colors";

  return (
    <section id="contact" className="min-h-screen py-20 flex items-center justify-center" ref={ref}>
      <div className="w-full max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-6"
        >
          Let&apos;s join <span className="text-[#8b5cf6]">forces</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-white/50 mb-4 text-center"
        >
          As long as there&apos;s room to turn things up a notch, I&apos;m in.
        </motion.p>

        <motion.a
          href="mailto:atriyadipankar@gmail.com"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-[#8b5cf6] hover:underline mb-12 text-center"
        >
          atriyadipankar@gmail.com
        </motion.a>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="First name" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className={inputClass} />
            <input type="text" placeholder="Last name" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className={inputClass} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputClass} />
            <input type="tel" placeholder="Phone number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={inputClass} />
          </div>
          <input type="text" placeholder="Company (optional)" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className={inputClass} />
          <textarea placeholder="How can I help you?" required rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={`${inputClass} resize-none`} />

          <div className="grid md:grid-cols-2 gap-6">
            <select value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className={`${inputClass} bg-transparent cursor-pointer`}>
              <option value="" className="bg-[#0a0a0f]">Expected budget</option>
              <option value="10-30k" className="bg-[#0a0a0f]">$10K - $30K</option>
              <option value="30-60k" className="bg-[#0a0a0f]">$30K - $60K</option>
              <option value="60-100k" className="bg-[#0a0a0f]">$60K - $100K</option>
              <option value="100k+" className="bg-[#0a0a0f]">$100K+</option>
            </select>
            <select value={formData.source} onChange={(e) => setFormData({...formData, source: e.target.value})} className={`${inputClass} bg-transparent cursor-pointer`}>
              <option value="" className="bg-[#0a0a0f]">How did you hear about me?</option>
              <option value="search" className="bg-[#0a0a0f]">Search engine</option>
              <option value="referral" className="bg-[#0a0a0f]">Referral</option>
              <option value="social" className="bg-[#0a0a0f]">Social media</option>
              <option value="linkedin" className="bg-[#0a0a0f]">LinkedIn</option>
              <option value="other" className="bg-[#0a0a0f]">Other</option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-3 text-lg tracking-wider uppercase hover:text-[#8b5cf6] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
              ) : status === "success" ? (
                <><CheckCircle className="w-5 h-5 text-green-500" /> Mission complete</>
              ) : status === "error" ? (
                <><X className="w-5 h-5 text-red-500" /> Error - Try again</>
              ) : (
                <>Submit <span className="text-[#8b5cf6]">→</span></>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
