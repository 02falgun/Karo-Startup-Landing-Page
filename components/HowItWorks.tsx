"use client";

import { motion } from "framer-motion";
import {
  UploadCloud,
  CheckCircle2,
  Presentation,
  BadgeDollarSign,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UploadCloud,
    title: "Apply with Your Pitch Deck",
    description:
      "Submit your startup profile, pitch deck, and key business metrics through our simple application portal. Takes less than 15 minutes.",
    color: "#1E3A8A",
    bg: "rgba(30, 58, 138, 0.08)",
    border: "rgba(30, 58, 138, 0.2)",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Get Shortlisted",
    description:
      "Our expert review panel evaluates applications based on team strength, market opportunity, and traction. Top 20% are shortlisted.",
    color: "#DC2626",
    bg: "rgba(220, 38, 38, 0.08)",
    border: "rgba(220, 38, 38, 0.2)",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Pitch to Investors",
    description:
      "Present your startup to a curated group of 20–50 investors in live pitch sessions. Online and in-person formats available.",
    color: "#00B894",
    bg: "rgba(0, 184, 148, 0.08)",
    border: "rgba(0, 184, 148, 0.2)",
  },
  {
    number: "04",
    icon: BadgeDollarSign,
    title: "Raise Funding",
    description:
      "Connect 1:1 with interested investors, receive term sheets, and close your funding round with ongoing support from our team.",
    color: "#FDCB6E",
    bg: "rgba(253, 203, 110, 0.1)",
    border: "rgba(253, 203, 110, 0.3)",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24"
      style={{
        background:
          "linear-gradient(180deg, #F8F9FC 0%, #FAFBFF 50%, #F8F9FC 100%)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
            The Process
          </div>
          <h2
            className="font-semibold leading-tight tracking-tight mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#1F2937",
              letterSpacing: "-0.02em",
            }}
          >
            From Idea to{" "}
            <span className="gradient-text">Funded Startup</span>
          </h2>
          <p
            className="mx-auto leading-relaxed"
            style={{ fontSize: 16, color: "#6B7280", maxWidth: 520 }}
          >
            A simple, transparent four-step process designed to maximize your
            chances of securing the right investor for your startup.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute top-16 left-0 right-0 hidden lg:block"
            style={{
              height: 2,
              margin: "0 12.5%",
              background:
                "linear-gradient(90deg, rgba(30,58,138,0.15), rgba(220,38,38,0.3), rgba(0,184,148,0.3), rgba(253,203,110,0.3))",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative flex items-center justify-center w-18 h-18 rounded-2xl mb-6 z-10"
                    style={{
                      background: "#fff",
                      border: `2px solid ${step.border}`,
                      boxShadow: `0 8px 24px ${step.bg}`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{ background: step.bg }}
                    >
                      <Icon size={24} color={step.color} />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                        boxShadow: `0 2px 8px ${step.color}44`,
                      }}
                    >
                      {i + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div
                    className="rounded-2xl p-6 w-full transition-all duration-200"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(229, 231, 235, 0.8)",
                      boxShadow: "0 2px 12px rgba(30, 58, 138, 0.05)",
                    }}
                  >
                    <div
                      className="text-xs font-bold tracking-[0.15em] uppercase mb-2"
                      style={{ color: step.color, opacity: 0.7 }}
                    >
                      Step {step.number}
                    </div>
                    <h3
                      className="font-semibold mb-3 leading-snug"
                      style={{ fontSize: 17, color: "#1F2937" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold"
            style={{
              background: "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)",
              boxShadow: "0 6px 24px rgba(30, 58, 138, 0.35)",
              fontSize: 15,
            }}
          >
            Start Your Application
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
