"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Newspaper, Users, Building2, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: Newspaper,
    target: 5000,
    prefix: "",
    suffix: "+",
    label: "Startup Stories Published",
    color: "#1E3A8A",
    bg: "rgba(30, 58, 138, 0.08)",
  },
  {
    icon: Users,
    target: 100,
    prefix: "",
    suffix: "K+",
    label: "Founder Community",
    color: "#DC2626",
    bg: "rgba(220, 38, 38, 0.08)",
  },
  {
    icon: Building2,
    target: 15000,
    prefix: "",
    suffix: "+",
    label: "Startups Covered",
    color: "#00B894",
    bg: "rgba(0, 184, 148, 0.08)",
  },
  {
    icon: Clock,
    target: 5,
    prefix: "",
    suffix: "+ Years",
    label: "Supporting Founders",
    color: "#E17055",
    bg: "rgba(225, 112, 85, 0.08)",
  },
];

const logos = [
  "YourStory", "Inc42", "Economic Times", "Mint", "Hindu BusinessLine", "NDTV Profit",
];

export default function AboutKaroStartup() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, amount: 0.3 });
  const count1 = useCountUp(5000, 2000, inView);
  const count2 = useCountUp(100, 1800, inView);
  const count3 = useCountUp(15000, 2000, inView);
  const count4 = useCountUp(5, 1500, inView);
  const statCounts = [count1, count2, count3, count4];

  return (
    <section
      id="about-karostartup"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8F9FC 0%, #eef0ff 100%)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
              background: "rgba(30, 58, 138, 0.08)",
              color: "#1E3A8A",
              border: "1px solid rgba(30, 58, 138, 0.15)",
              }}
            >
              About KaroStartup
            </div>

            <h2
              className="font-semibold leading-tight tracking-tight mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 38px)",
                color: "#1F2937",
                letterSpacing: "-0.02em",
              }}
            >
              India's Most Trusted{" "}
              <span className="gradient-text">Startup Media Platform</span>
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.78 }}
            >
              Since 2019, KaroStartup has been India's home for startup stories.
              We've published over 5,000 founder journeys, covered every major
              funding round, and built a community of 100,000+ entrepreneurs
              building the future of Bharat.
            </p>
            <p
              className="leading-relaxed mb-10"
              style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.78 }}
            >
              Karo Pitch is our next step — transforming our media reach into
              tangible connections between ambitious founders and the capital
              they deserve. We don't just cover success stories — we help
              create them.
            </p>

            {/* Press logos */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#9CA3AF" }}
              >
                As Featured In
              </p>
              <div className="flex flex-wrap gap-3">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="px-3.5 py-2 rounded-lg text-xs font-semibold"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid rgba(229, 231, 235, 0.8)",
                      color: "#6B7280",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
            style={{ gridAutoRows: "minmax(140px, auto)" }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              const isFeatured = i === 0; // 5000+ — full-width gradient
              const isDark     = i === 3; // 5+ Years — full-width dark accent
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: isFeatured ? "0 16px 48px rgba(30,58,138,0.35)" : "0 16px 40px rgba(30,58,138,0.14)", transition: { duration: 0.2 } }}
                  className={`rounded-2xl flex flex-col justify-between ${
                    isFeatured || isDark ? "col-span-2 p-7" : "col-span-1 p-5"
                  }`}
                  style={{
                    background: isFeatured
                      ? "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)"
                      : isDark
                      ? "#111827"
                      : "#fff",
                    border: isFeatured || isDark ? "none" : "1px solid rgba(229,231,235,0.8)",
                    boxShadow: isFeatured
                      ? "0 8px 32px rgba(30,58,138,0.32)"
                      : isDark
                      ? "0 8px 32px rgba(0,0,0,0.18)"
                      : "0 2px 12px rgba(30,58,138,0.06)",
                  }}
                >
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                    style={{
                      background: isFeatured
                        ? "rgba(255,255,255,0.18)"
                        : isDark
                        ? "rgba(255,255,255,0.1)"
                        : stat.bg,
                    }}
                  >
                    <Icon
                      size={20}
                      color={isFeatured || isDark ? "rgba(255,255,255,0.9)" : stat.color}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold mb-1 leading-tight"
                      style={{
                        fontSize: isFeatured ? "clamp(26px, 4vw, 34px)" : "clamp(22px, 3vw, 28px)",
                        color: isFeatured || isDark ? "#fff" : "#1F2937",
                      }}
                    >
                      {stat.prefix}
                      {i === 0
                        ? statCounts[0].toLocaleString()
                        : i === 1
                        ? statCounts[1]
                        : i === 2
                        ? statCounts[2].toLocaleString()
                        : statCounts[3]}
                      {stat.suffix}
                    </p>
                    <p
                      className="text-sm leading-snug"
                      style={{ color: isFeatured || isDark ? "rgba(255,255,255,0.65)" : "#6B7280" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
