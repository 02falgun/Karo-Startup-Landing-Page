"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Smartphone,
  Store,
  Code2,
  Factory,
  MapPin,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    icon: ShoppingBag,
    title: "D2C Brands",
    description:
      "Direct-to-consumer businesses with strong product market fit and growth potential.",
    tag: "Consumer",
    color: "#1E3A8A",
    bg: "rgba(30, 58, 138, 0.07)",
    tagBg: "rgba(30, 58, 138, 0.08)",
  },
  {
    icon: Smartphone,
    title: "Consumer Startups",
    description:
      "Apps, platforms, and services targeting everyday Indian consumers at scale.",
    tag: "Mobile-First",
    color: "#DC2626",
    bg: "rgba(220, 38, 38, 0.07)",
    tagBg: "rgba(220, 38, 38, 0.08)",
  },
  {
    icon: Store,
    title: "MSMEs",
    description:
      "Micro, small, and medium enterprises seeking growth capital and strategic partnerships.",
    tag: "Growth Stage",
    color: "#00B894",
    bg: "rgba(0, 184, 148, 0.07)",
    tagBg: "rgba(0, 184, 148, 0.08)",
  },
  {
    icon: Code2,
    title: "SaaS Startups",
    description:
      "B2B and B2C software products serving Indian SMBs and enterprises globally.",
    tag: "Tech",
    color: "#E17055",
    bg: "rgba(225, 112, 85, 0.07)",
    tagBg: "rgba(225, 112, 85, 0.08)",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Make-in-India manufacturing businesses innovating in production and supply chain.",
    tag: "Industrial",
    color: "#FDCB6E",
    bg: "rgba(253, 203, 110, 0.1)",
    tagBg: "rgba(253, 203, 110, 0.12)",
  },
  {
    icon: MapPin,
    title: "Bharat Focused",
    description:
      "Startups solving grassroots problems in Tier 2 and Tier 3 cities across India.",
    tag: "Impact",
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.08)",
    tagBg: "rgba(59, 130, 246, 0.1)",
  },
];

export default function EligibilityGrid() {
  return (
    <section
      id="eligibility"
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
            Who Can Apply
          </div>
          <h2
            className="font-semibold leading-tight tracking-tight mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#1F2937",
              letterSpacing: "-0.02em",
            }}
          >
            Built for Every Kind of{" "}
            <span className="gradient-text">Founder</span>
          </h2>
          <p
            className="mx-auto leading-relaxed"
            style={{ fontSize: 16, color: "#6B7280", maxWidth: 520 }}
          >
            Whether you're building for consumers, enterprises, or solving
            deep Bharat problems — if you're building something real, we want
            to hear your story.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.07,
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 48px rgba(30, 58, 138, 0.12)",
                  transition: { duration: 0.2 },
                }}
                className="group rounded-2xl p-6 cursor-default transition-all duration-200"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(229, 231, 235, 0.8)",
                  boxShadow: "0 2px 12px rgba(30, 58, 138, 0.05)",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ background: cat.bg }}
                  >
                    <Icon size={22} color={cat.color} />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: cat.tagBg,
                      color: cat.color,
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>
                <h3
                  className="font-semibold mb-2.5 leading-snug"
                  style={{ fontSize: 17, color: "#1F2937" }}
                >
                  {cat.title}
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}
                >
                  {cat.description}
                </p>
                <div
                  className="flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
                  style={{ color: cat.color }}
                >
                  Learn more
                  <ChevronRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Eligibility note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p style={{ fontSize: 14, color: "#9CA3AF" }}>
            Pre-revenue to Series A stage startups welcome.{" "}
            <a
              href="#"
              style={{ color: "#1E3A8A", fontWeight: 500 }}
              className="hover:underline"
            >
              View full eligibility criteria →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
