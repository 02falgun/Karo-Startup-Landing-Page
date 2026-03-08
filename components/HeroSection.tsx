"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Building2 } from "lucide-react";
import PitchModal from "./PitchModal";
import { useCountUp } from "@/hooks/useCountUp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, amount: 0.3 });
  const fundingCount = useCountUp(50, 1800, inView);
  const investorCount = useCountUp(200, 1600, inView);
  const startupCount = useCountUp(150, 1500, inView);

  return (
    <>
      <PitchModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center hero-gradient overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-20 w-175 h-175 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(30,58,138,0.22) 0%, rgba(29,78,216,0.1) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-32 -left-20 w-150 h-150 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.06) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(30,58,138,0.1) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 mx-auto px-6 text-center"
        style={{ maxWidth: 1200 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "rgba(30, 58, 138, 0.1)",
                border: "1px solid rgba(30, 58, 138, 0.2)",
                color: "#1E3A8A",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#1E3A8A" }}
              />
              Powered by KaroStartup · India's Startup Ecosystem
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-tight tracking-tight mb-6"
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              color: "#1F2937",
              maxWidth: 820,
              letterSpacing: "-0.02em",
            }}
          >
            Pitch Your Startup to
            <br />
            <span className="gradient-text">India's Top Investors</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="leading-relaxed mb-10"
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "#6B7280",
              maxWidth: 600,
              lineHeight: "1.72",
            }}
          >
            Karo Pitch helps ambitious founders across Bharat showcase their
            startups and connect with verified investors, mentors, and funding
            opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            id="hero-cta"
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
          >
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 60%, #DC2626 100%)",
                boxShadow: "0 6px 24px rgba(30, 58, 138, 0.42)",
                fontSize: 15,
              }}
            >
              Apply to Pitch
              <ArrowRight size={16} />
            </motion.button>
            <motion.a
              href="#startups"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(30, 58, 138, 0.2)",
                color: "#374151",
                fontSize: 15,
                boxShadow: "0 4px 16px rgba(30, 58, 138, 0.1)",
              }}
            >
              <Play size={15} fill="#1E3A8A" color="#1E3A8A" />
              Explore Startups
            </motion.a>
          </motion.div>

          {/* Bento Stats Grid */}
          <motion.div
            ref={statsRef}
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full"
            style={{ maxWidth: 820, gridAutoRows: "minmax(110px, auto)" }}
          >
            {/* Featured stat — gradient 2×2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="col-span-2 sm:col-span-2 sm:row-span-2 rounded-2xl p-6 relative overflow-hidden cursor-default flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #DC2626 100%)",
                minHeight: 160,
                boxShadow: "0 8px 32px rgba(30, 58, 138, 0.38)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={15} color="rgba(255,255,255,0.85)" />
                  <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.72)" }}>Total Funding Raised</span>
                </div>
                <p className="font-bold text-white leading-none" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>₹{fundingCount}Cr+</p>
                <p className="text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>by Karo Pitch alumni</p>
              </div>
              <div className="relative z-10 flex items-end gap-1.5 mt-4">
                {[28, 42, 36, 55, 48, 70, 100].map((h, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-sm"
                    style={{
                      height: h * 0.38,
                      background: idx === 6 ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Investors stat */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 glass-card rounded-2xl p-5 cursor-default flex flex-col justify-between"
              style={{ boxShadow: "0 4px 20px rgba(30, 58, 138, 0.1)" }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ background: "rgba(220, 38, 38, 0.1)" }}
              >
                <Users size={17} color="#DC2626" />
              </div>
              <div>
                <p className="font-bold text-xl leading-tight" style={{ color: "#1F2937" }}>{investorCount}+</p>
                <p className="text-xs mt-0.5 leading-tight" style={{ color: "#6B7280" }}>Active Investors</p>
              </div>
            </motion.div>

            {/* Startups stat */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 glass-card rounded-2xl p-5 cursor-default flex flex-col justify-between"
              style={{ boxShadow: "0 4px 20px rgba(30, 58, 138, 0.1)" }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ background: "rgba(0, 184, 148, 0.1)" }}
              >
                <Building2 size={17} color="#00B894" />
              </div>
              <div>
                <p className="font-bold text-xl leading-tight" style={{ color: "#1F2937" }}>{startupCount}+</p>
                <p className="text-xs mt-0.5 leading-tight" style={{ color: "#6B7280" }}>Startups Funded</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #F8F9FC)",
        }}
      />
    </section>
    </>
  );
}
