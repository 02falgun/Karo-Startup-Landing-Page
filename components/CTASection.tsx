"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import PitchModal from "./PitchModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <PitchModal open={modalOpen} onClose={() => setModalOpen(false)} />
    <section className="py-6 px-6">
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 40%, #DC2626 100%)",
            padding: "clamp(48px, 8vw, 88px) clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-100 h-100 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              }}
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute -bottom-20 -left-20 w-87.5 h-87.5 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{
                    background: "rgba(255, 255, 255, 0.18)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "#fff",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Applications Open · Cohort 2026
                </div>

                <h2
                  className="font-bold leading-tight tracking-tight text-white mb-5"
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 52px)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Ready to Pitch
                  <br />
                  Your Startup?
                </h2>

                <p
                  className="leading-relaxed mb-0"
                  style={{
                    fontSize: 17,
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.7,
                    maxWidth: 480,
                  }}
                >
                  Join hundreds of founders who've already used Karo Pitch to
                  raise capital, find mentors, and build lasting investor
                  relationships. Your next chapter starts with one application.
                </p>
              </motion.div>
            </div>

            {/* Right: CTA buttons + social proof */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 lg:shrink-0"
            >
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: "#fff",
                  color: "#1E3A8A",
                  fontSize: 16,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  minWidth: 240,
                }}
              >
                Apply Now — It's Free
                <ArrowRight size={17} />
              </motion.button>

              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "1.5px solid rgba(255, 255, 255, 0.35)",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                <Handshake size={17} />
                Partner With Us
              </motion.a>

              {/* Social proof */}
              <div className="flex items-center gap-3 mt-1">
                <div className="flex -space-x-2">
                  {["#1E3A8A", "#DC2626", "#00B894", "#E17055"].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: c }}
                    >
                      {["A", "P", "R", "S"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span className="font-semibold text-white">150+ founders</span> applied
                  this month
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
