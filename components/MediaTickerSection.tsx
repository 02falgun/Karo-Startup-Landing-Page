"use client";

import { motion } from "framer-motion";

const mediaLogos = [
  "YourStory",
  "Inc42",
  "Economic Times",
  "Mint",
  "Hindu BusinessLine",
  "NDTV Profit",
  "Forbes India",
  "Business Standard",
  "Outlook Business",
  "The Ken",
  "VCCircle",
  "Entrackr",
];

// Duplicate for seamless loop
const row1 = [...mediaLogos, ...mediaLogos];
const row2 = [...mediaLogos.slice(4), ...mediaLogos.slice(0, 4), ...mediaLogos.slice(4), ...mediaLogos.slice(0, 4)];

export default function MediaTickerSection() {
  return (
    <section
      className="py-12 overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      <div className="mb-5 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          As Seen &amp; Covered In
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <motion.div
          className="flex gap-4"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {row1.map((logo, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-xl shrink-0 flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                minWidth: 140,
              }}
            >
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <motion.div
          className="flex gap-4"
          style={{ width: "max-content" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {row2.map((logo, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-xl shrink-0 flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                minWidth: 140,
              }}
            >
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
