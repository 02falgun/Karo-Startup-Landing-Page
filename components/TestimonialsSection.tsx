"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Karo Pitch connected us with three investors in our first batch. We closed our ₹1.2Cr pre-seed round within 8 weeks of the pitch event. The KaroStartup team genuinely cares about founder success.",
    founder: "Priya Sharma",
    startup: "AgriLink",
    role: "Co-founder & CEO",
    outcome: "Raised ₹1.2Cr Pre-Seed",
    color: "#1E3A8A",
    bg: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)",
    featured: true,
  },
  {
    quote:
      "The pitch preparation sessions were game-changing. We finally learned how to articulate our unit economics clearly. Two weeks post-event, we had term sheets from two angels.",
    founder: "Rahul Mehta",
    startup: "HealthStack",
    role: "Founder",
    outcome: "2 Term Sheets",
    color: "#DC2626",
    bg: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
    featured: false,
  },
  {
    quote:
      "As a tier-2 city founder, I never thought top investors would take meetings with us. Karo Pitch made it happen. We're now backed by a Mumbai-based family office.",
    founder: "Anjali Verma",
    startup: "EduBharat",
    role: "Founder & CTO",
    outcome: "Backed by Family Office",
    color: "#00B894",
    bg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    featured: false,
  },
  {
    quote:
      "The investor network at Karo Pitch is unlike anything else in India. We pitched to 40+ investors in one weekend and walked away with a lead investor committed the same day.",
    founder: "Vikram Nair",
    startup: "FinFlow",
    role: "Co-founder",
    outcome: "Lead Investor Committed",
    color: "#E17055",
    bg: "linear-gradient(135deg, #E17055 0%, #C0392B 100%)",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #F8F9FC 0%, #eef0ff 100%)" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(30, 58, 138, 0.08)",
              border: "1px solid rgba(30, 58, 138, 0.15)",
              color: "#1E3A8A",
            }}
          >
            Founder Stories
          </div>
          <h2
            className="font-semibold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              color: "#1F2937",
              letterSpacing: "-0.02em",
            }}
          >
            Founders Who Pitched,{" "}
            <span className="gradient-text">Founders Who Raised</span>
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{ fontSize: 16, color: "#6B7280", maxWidth: 520, lineHeight: 1.7 }}
          >
            Real stories from founders across India who used Karo Pitch to find
            their investors and close their rounds.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoRows: "minmax(220px, auto)" }}
        >
          {testimonials.map((t, i) => {
            const isFeatured = i === 0;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden cursor-default ${
                  isFeatured ? "lg:col-span-2 md:col-span-2 lg:row-span-1" : ""
                }`}
                style={
                  isFeatured
                    ? {
                        background: t.bg,
                        boxShadow: "0 8px 32px rgba(30,58,138,0.35)",
                        minHeight: 240,
                      }
                    : {
                        background: "#fff",
                        border: "1px solid rgba(229,231,235,0.8)",
                        boxShadow: "0 4px 20px rgba(30,58,138,0.07)",
                      }
                }
              >
                {/* Decorative bg glow */}
                {isFeatured && (
                  <div
                    className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)",
                    }}
                  />
                )}

                {/* Quote icon */}
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg mb-4"
                  style={{
                    background: isFeatured ? "rgba(255,255,255,0.2)" : `${t.color}15`,
                  }}
                >
                  <Quote size={16} color={isFeatured ? "#fff" : t.color} />
                </div>

                {/* Quote text */}
                <p
                  className="leading-relaxed mb-6 relative z-10 flex-1"
                  style={{
                    fontSize: isFeatured ? 17 : 15,
                    color: isFeatured ? "rgba(255,255,255,0.92)" : "#374151",
                    lineHeight: 1.72,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p
                      className="font-semibold"
                      style={{
                        fontSize: 14,
                        color: isFeatured ? "#fff" : "#1F2937",
                      }}
                    >
                      {t.founder}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: isFeatured ? "rgba(255,255,255,0.6)" : "#9CA3AF",
                      }}
                    >
                      {t.role}, {t.startup}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: isFeatured ? "rgba(255,255,255,0.2)" : `${t.color}15`,
                      color: isFeatured ? "#fff" : t.color,
                      border: isFeatured ? "1px solid rgba(255,255,255,0.3)" : `1px solid ${t.color}30`,
                    }}
                  >
                    {t.outcome}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
