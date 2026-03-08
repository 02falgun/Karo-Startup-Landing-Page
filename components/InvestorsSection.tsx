"use client";

import { motion } from "framer-motion";
import { BadgeCheck, TrendingUp, ArrowUpRight } from "lucide-react";

const investors = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    fund: "Bharat Ventures",
    stage: "Seed & Pre-Series A",
    type: "Angel Fund",
    industries: ["D2C", "AgriTech", "FinTech"],
    invested: "₹40Cr+",
    portfolio: 28,
    color: "#1E3A8A",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    fund: "Elevate Capital",
    stage: "Pre-Series A to Series A",
    type: "VC Fund",
    industries: ["SaaS", "EdTech", "HealthTech"],
    invested: "₹80Cr+",
    portfolio: 42,
    color: "#DC2626",
    gradient: "linear-gradient(135deg, #DC2626 0%, #F87171 100%)",
  },
  {
    name: "Ravi Nair",
    initials: "RN",
    fund: "Independence DAF",
    stage: "Angel to Seed",
    type: "Angel Network",
    industries: ["Manufacturing", "Logistics", "B2B"],
    invested: "₹25Cr+",
    portfolio: 19,
    color: "#00B894",
    gradient: "linear-gradient(135deg, #00B894 0%, #00cec9 100%)",
  },
  {
    name: "Sunita Agarwal",
    initials: "SA",
    fund: "NxtGen Fund",
    stage: "Seed to Series B",
    type: "Growth Fund",
    industries: ["Consumer Tech", "FMCG", "Retail"],
    invested: "₹120Cr+",
    portfolio: 56,
    color: "#E17055",
    gradient: "linear-gradient(135deg, #E17055 0%, #fdcb6e 100%)",
  },
  {
    name: "Kiran Desai",
    initials: "KD",
    fund: "Tier2 Capital",
    stage: "Angel & Seed",
    type: "Impact Fund",
    industries: ["Bharat Tech", "Rural FinTech", "AgriTech"],
    invested: "₹30Cr+",
    portfolio: 23,
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)",
  },
  {
    name: "Anand Krishnan",
    initials: "AK",
    fund: "Scale Partners",
    stage: "Pre-Series A to Series A",
    type: "Sector VC",
    industries: ["CleanTech", "EV", "DeepTech"],
    invested: "₹90Cr+",
    portfolio: 31,
    color: "#FDCB6E",
    gradient: "linear-gradient(135deg, #FDCB6E 0%, #e17055 100%)",
  },
];

export default function InvestorsSection() {
  return (
    <section
      id="investors"
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #F8F9FC 0%, #eef0ff 50%, #F8F9FC 100%)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(30, 58, 138, 0.08)",
              color: "#1E3A8A",
              border: "1px solid rgba(30, 58, 138, 0.15)",
            }}
          >
            Investors
          </div>
          <h2
            className="font-semibold leading-tight tracking-tight mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#1F2937",
              letterSpacing: "-0.02em",
            }}
          >
            Meet Investors Looking for the{" "}
            <span className="gradient-text">Next Big Startup</span>
          </h2>
          <p
            className="mx-auto leading-relaxed"
            style={{ fontSize: 16, color: "#6B7280", maxWidth: 520 }}
          >
            Our network includes 200+ verified investors — from angel investors
            to growth funds — actively seeking high-potential Indian startups.
          </p>
        </motion.div>

        {/* Bento Investor Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ gridAutoRows: "minmax(180px, auto)" }}
        >
          {investors.map((inv, i) => {
            const isFeatured = i === 0; // Arjun — 2×2 featured cell
            const isWide     = i === 3; // Sunita — 2×1 wide cell
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(30, 58, 138, 0.14)", transition: { duration: 0.2 } }}
                className={`rounded-2xl cursor-default group flex flex-col ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 p-8"
                    : isWide
                    ? "sm:col-span-2 lg:col-span-2 p-6"
                    : "p-6"
                }`}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(229,231,235,0.8)",
                  boxShadow: "0 2px 12px rgba(30, 58, 138, 0.05)",
                }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center rounded-xl overflow-hidden shrink-0 bg-white ${
                        isFeatured ? "w-14 h-14" : "w-11 h-11"
                      }`}
                      style={{ border: "1px solid rgba(229,231,235,0.9)", padding: isFeatured ? 6 : 4 }}
                    >
                      <img
                        src="/karostartup-logo.png"
                        alt={inv.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-semibold leading-tight" style={{ fontSize: isFeatured ? 18 : 15, color: "#1F2937" }}>
                          {inv.name}
                        </p>
                        <BadgeCheck size={14} color={inv.color} />
                      </div>
                      <p className="text-sm leading-tight mt-0.5" style={{ color: "#6B7280" }}>{inv.fund}</p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                    style={{ background: `${inv.color}12`, color: inv.color }}
                  >
                    {inv.type}
                  </span>
                </div>

                {/* Featured: testimonial quote */}
                {isFeatured && (
                  <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#6B7280", lineHeight: 1.72 }}>
                    &ldquo;We actively seek high-growth Indian startups at Seed and Pre-Series A. Karo Pitch has become our primary deal sourcing channel for Bharat-focused founders.&rdquo;
                  </p>
                )}

                {/* Stage + deployed (2-col on featured) */}
                <div className={`${isFeatured ? "grid grid-cols-2 gap-4" : "flex flex-col gap-2"} mb-4`}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#9CA3AF" }}>Stage</p>
                    <p style={{ fontSize: isFeatured ? 14 : 13, color: "#374151", fontWeight: 500 }}>{inv.stage}</p>
                  </div>
                  {isFeatured && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#9CA3AF" }}>Deployed</p>
                      <p className="text-sm font-bold" style={{ color: "#1F2937" }}>{inv.invested}</p>
                    </div>
                  )}
                </div>

                {/* Industry tags */}
                <div className="mb-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {inv.industries.map((ind, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "rgba(30,58,138,0.06)", color: "#1E3A8A", border: "1px solid rgba(30,58,138,0.12)" }}
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer stats */}
                <div className="flex items-center justify-between pt-4 mt-4" style={{ borderTop: "1px solid rgba(229,231,235,0.8)" }}>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={13} color={inv.color} />
                    <span className="text-sm font-semibold" style={{ color: "#1F2937" }}>{inv.invested}</span>
                    <span className="text-xs" style={{ color: "#9CA3AF" }}>deployed</span>
                  </div>
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>
                    <span className="font-semibold" style={{ color: "#374151" }}>{inv.portfolio}</span> cos.
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Join CTA bento cell */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.42 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="sm:col-span-2 lg:col-span-2 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              minHeight: 180,
            }}
          >
            <p className="font-bold text-white mb-2" style={{ fontSize: 18 }}>Are you an investor?</p>
            <p className="text-sm mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Join 200+ verified investors actively discovering India&#39;s next generation of funded startups.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            >
              Join as Investor
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
