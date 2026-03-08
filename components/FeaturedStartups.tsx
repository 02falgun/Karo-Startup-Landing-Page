"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Flame } from "lucide-react";

const startups = [
  {
    name: "GrainLink",
    logo: "GL",
    category: "AgriTech",
    tagline: "Connecting 500K+ farmers directly to urban retailers, eliminating 4 layers of middlemen.",
    stage: "Pre-Series A",
    raised: "₹2.4Cr raised",
    founded: "2022",
    location: "Pune, MH",
    color: "#00B894",
    gradient: "linear-gradient(135deg, #00B894 0%, #00cec9 100%)",
    hot: true,
  },
  {
    name: "Zaroorat",
    logo: "ZT",
    category: "FinTech",
    tagline: "Micro-lending platform serving Bharat's 200M unbanked workforce with instant credit.",
    stage: "Seed",
    raised: "₹80L raised",
    founded: "2023",
    location: "Jaipur, RJ",
    color: "#DC2626",
    gradient: "linear-gradient(135deg, #DC2626 0%, #F87171 100%)",
    hot: false,
  },
  {
    name: "CleanKart",
    logo: "CK",
    category: "CleanTech",
    tagline: "B2B marketplace for industrial waste recyclers with route optimization and compliance.",
    stage: "Pre-Series A",
    raised: "₹3.1Cr raised",
    founded: "2021",
    location: "Surat, GJ",
    color: "#FDCB6E",
    gradient: "linear-gradient(135deg, #FDCB6E 0%, #e17055 100%)",
    hot: true,
  },
  {
    name: "SkillSync",
    logo: "SS",
    category: "EdTech",
    tagline: "Vernacular-first job-skill platform preparing Tier 3 India for the new economy.",
    stage: "Seed",
    raised: "₹1.2Cr raised",
    founded: "2023",
    location: "Lucknow, UP",
    color: "#1E3A8A",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
    hot: false,
  },
  {
    name: "MediReach",
    logo: "MR",
    category: "HealthTech",
    tagline: "Telemedicine and last-mile drug delivery for rural India's 800M underserved patients.",
    stage: "Series A",
    raised: "₹12Cr raised",
    founded: "2020",
    location: "Bengaluru, KA",
    color: "#E17055",
    gradient: "linear-gradient(135deg, #E17055 0%, #fdcb6e 100%)",
    hot: true,
  },
  {
    name: "VahanSeva",
    logo: "VS",
    category: "Mobility",
    tagline: "EV fleet management SaaS for last-mile logistics companies across 50+ Indian cities.",
    stage: "Pre-Series A",
    raised: "₹4.5Cr raised",
    founded: "2022",
    location: "Delhi NCR",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)",
    hot: false,
  },
];

const stageColors: Record<string, string> = {
  "Seed": "rgba(220, 38, 38, 0.1)",
  "Pre-Series A": "rgba(30, 58, 138, 0.08)",
  "Series A": "rgba(0, 184, 148, 0.08)",
};

const stageTextColors: Record<string, string> = {
  "Seed": "#DC2626",
  "Pre-Series A": "#1E3A8A",
  "Series A": "#00B894",
};

export default function FeaturedStartups() {
  return (
    <section
      id="startups"
      className="py-24"
      style={{ background: "#F8F9FC" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(30, 58, 138, 0.08)",
                color: "#1E3A8A",
                border: "1px solid rgba(30, 58, 138, 0.15)",
              }}
            >
              Featured Startups
            </div>
            <h2
              className="font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#1F2937",
                letterSpacing: "-0.02em",
              }}
            >
              Startups That Pitched.{" "}
              <span className="gradient-text">Startups That Raised.</span>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "#1E3A8A" }}
          >
            View all startups
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        {/* Bento Mosaic Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ gridAutoRows: "minmax(180px, auto)" }}
        >
          {startups.map((startup, i) => {
            const isFeatured = i === 0;   // GrainLink — 2×2 hero cell
            const isWide     = i === 5;   // VahanSeva — 2×1 wide cell
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: i * 0.06 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(30, 58, 138, 0.14)", transition: { duration: 0.2 } }}
                className={`rounded-2xl relative overflow-hidden cursor-default group flex flex-col ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 p-8"
                    : isWide
                    ? "sm:col-span-2 lg:col-span-2 p-6"
                    : "p-6"
                }`}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(229, 231, 235, 0.8)",
                  boxShadow: "0 2px 12px rgba(30, 58, 138, 0.05)",
                }}
              >
                {startup.hot && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(253,92,60,0.08)", color: "#E17055", border: "1px solid rgba(225,112,85,0.2)" }}
                  >
                    <Flame size={11} />
                    Trending
                  </div>
                )}

                {/* Logo + meta */}
                <div className={`flex items-start gap-4 ${isFeatured ? "mb-6" : "mb-4"}`}>
                  <div
                    className={`flex items-center justify-center rounded-2xl text-white font-bold shrink-0 ${
                      isFeatured ? "w-16 h-16 text-base" : "w-12 h-12 text-sm"
                    }`}
                    style={{ background: startup.gradient }}
                  >
                    {startup.logo}
                  </div>
                  <div>
                    <h3
                      className="font-semibold leading-tight"
                      style={{ fontSize: isFeatured ? 20 : 17, color: "#1F2937" }}
                    >
                      {startup.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${startup.color}12`, color: startup.color }}
                      >
                        {startup.category}
                      </span>
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>{startup.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p
                  className={`leading-relaxed ${isFeatured ? "mb-6" : "mb-4"}`}
                  style={{ fontSize: isFeatured ? 15 : 13, color: "#6B7280", lineHeight: 1.72 }}
                >
                  {startup.tagline}
                </p>

                {/* Funding progress bar — featured card only */}
                {isFeatured && (
                  <div
                    className="mb-6 p-4 rounded-xl"
                    style={{ background: "rgba(30,58,138,0.04)", border: "1px solid rgba(30,58,138,0.1)" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#9CA3AF" }}>
                      Funding Progress
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold" style={{ color: "#1F2937" }}>{startup.raised}</span>
                      <span className="text-xs font-medium" style={{ color: "#00B894" }}>72% of target</span>
                    </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(30,58,138,0.1)" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: "72%", background: "linear-gradient(90deg, #1E3A8A, #00B894)" }}
                      />
                    </div>
                  </div>
                )}

                {/* Stage + raised */}
                <div
                  className="mt-auto flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(229,231,235,0.8)" }}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: stageColors[startup.stage] || "rgba(30,58,138,0.08)",
                      color: stageTextColors[startup.stage] || "#1E3A8A",
                    }}
                  >
                    {startup.stage}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "#1F2937" }}>{startup.raised}</span>
                </div>
              </motion.div>
            );
          })}

          {/* View-all CTA bento cell */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.36 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="sm:col-span-2 lg:col-span-2 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group"
            style={{
              background: "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)",
              boxShadow: "0 8px 32px rgba(30,58,138,0.28)",
              minHeight: 180,
            }}
          >
            <p className="font-bold text-white mb-2" style={{ fontSize: 20 }}>Discover 100+ Startups</p>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 280 }}>
              Browse all pitches across categories, locations, and funding stages.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}
            >
              View All Startups
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
