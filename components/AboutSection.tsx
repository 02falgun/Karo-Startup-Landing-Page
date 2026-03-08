"use client";

import { motion } from "framer-motion";
import {
  Target,
  Globe2,
  IndianRupee,
  CalendarDays,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Direct Investor Access",
    description:
      "Get your startup in front of pre-vetted investors looking for exactly what you're building. No middlemen, no gatekeepers.",
    color: "#1E3A8A",
    bg: "rgba(30, 58, 138, 0.08)",
  },
  {
    icon: Globe2,
    title: "Nationwide Visibility",
    description:
      "Your startup story reaches thousands of investors, mentors, and ecosystem partners across India through our media network.",
    color: "#DC2626",
    bg: "rgba(220, 38, 38, 0.08)",
  },
  {
    icon: IndianRupee,
    title: "Built for Bharat Founders",
    description:
      "We understand the unique challenges of building in India. Our platform celebrates startups solving real problems at scale.",
    color: "#00B894",
    bg: "rgba(0, 184, 148, 0.08)",
  },
  {
    icon: CalendarDays,
    title: "Pitch Event Ecosystem",
    description:
      "Participate in curated online and offline pitch events, demo days, and investor roundtables designed to result in funding.",
    color: "#FDCB6E",
    bg: "rgba(253, 203, 110, 0.12)",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24"
      style={{ background: "#F8F9FC" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(30, 58, 138, 0.08)",
              color: "#1E3A8A",
              border: "1px solid rgba(30, 58, 138, 0.15)",
            }}
          >
            Our Mission
          </div>
          <h2
            className="font-semibold leading-tight tracking-tight mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#1F2937",
              letterSpacing: "-0.02em",
            }}
          >
            Bridging the Gap Between
            <br />
            <span className="gradient-text">Founders &amp; Capital</span>
          </h2>
          <p
            className="mx-auto leading-relaxed"
            style={{
              fontSize: 16,
              color: "#6B7280",
              maxWidth: 620,
              lineHeight: 1.75,
            }}
          >
            Thousands of founders across India are building incredible
            businesses but lack access to the right investors. Karo Pitch
            bridges this gap by connecting founders with investors through
            curated pitch events and a discovery platform built for Bharat.
          </p>
        </motion.div>

        {/* Bento Grid — mission card 2×2 + four feature cells */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ gridAutoRows: "minmax(200px, auto)" }}
        >
          {/* Mission card ─ spans 2 cols × 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between cursor-default"
            style={{
              background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 55%, #DC2626 100%)",
              minHeight: 320,
              boxShadow: "0 8px 40px rgba(30, 58, 138, 0.32)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-44 h-44 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "rgba(255,255,255,0.16)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Our Mission
              </div>
              <h3
                className="font-bold text-white leading-snug mb-4"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
              >
                Bridging the gap between ambitious founders &amp; the capital they deserve
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.74 }}>
                Thousands of incredible businesses are being built across Bharat. Karo Pitch ensures none of them go unfunded due to lack of access to the right investors.
              </p>
            </div>
            <div
              className="relative z-10 grid grid-cols-3 gap-4 pt-5 mt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}
            >
              {[
                { value: "2,500+", label: "Pitches" },
                { value: "12", label: "Cities" },
                { value: "98%", label: "Satisfaction" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-bold text-white text-lg leading-tight">{s.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature cells */}
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: i * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 48px rgba(30, 58, 138, 0.14)",
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl p-6 cursor-default flex flex-col"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(229, 231, 235, 0.8)",
                  boxShadow: "0 2px 12px rgba(30, 58, 138, 0.06)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{ background: feature.bg }}
                >
                  <Icon size={22} color={feature.color} />
                </div>
                <div className="mt-auto pt-5">
                  <h3
                    className="font-semibold mb-2 leading-snug"
                    style={{ fontSize: 16, color: "#1F2937" }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.68 }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
