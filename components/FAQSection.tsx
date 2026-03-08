"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What stage of startups can apply to Karo Pitch?",
    a: "We welcome startups at all stages — from idea-stage founders with validated MVPs to Series A companies looking to scale. Our investor network spans angel investors (for pre-seed/seed) to institutional VCs (for Series A and beyond). We have dedicated tracks for each stage.",
  },
  {
    q: "Is there a fee to apply or participate?",
    a: "Applying to Karo Pitch is completely free. Selected founders receive a structured pitch prep session, investor briefings, and access to our pitch event at no cost. We only offer paid advisory packages for founders who want dedicated mentor support, but these are entirely optional.",
  },
  {
    q: "How many investors attend each Karo Pitch event?",
    a: "Each cohort connects founders with 40–60 curated investors including angel investors, family offices, micro-VCs, and institutional funds. All investors are pre-verified for active deployment and matched to your sector and stage.",
  },
  {
    q: "How long does the entire process take from application to pitch day?",
    a: "From application to pitch day is typically 4–6 weeks. That includes a 1-week review period, 2 weeks of pitch preparation with our team, and a 1-week pre-event investor briefing window. We keep it lean so you can stay focused on building.",
  },
  {
    q: "What happens after the pitch event?",
    a: "Karo Pitch provides 90 days of post-pitch support: warm investor introductions, due diligence assistance, and deal room setup. Our team actively follows up with interested investors on your behalf and tracks term sheet conversations.",
  },
  {
    q: "Which sectors does Karo Pitch focus on?",
    a: "We are sector-agnostic and have successfully placed startups across SaaS, fintech, agritech, edtech, healthtech, D2C, climate-tech, and deep tech. If you're solving a real problem with a scalable model, you're eligible.",
  },
  {
    q: "Can founders from tier-2 and tier-3 cities apply?",
    a: "Absolutely — and we actively encourage it. Roughly 40% of our alumni founders are from cities outside the top 5 metros. Our events are hybrid (in-person + virtual), ensuring geography is never a barrier.",
  },
  {
    q: "Do I need a co-founder or a registered company to apply?",
    a: "Neither is mandatory at application stage. Solo founders are welcome. We do recommend incorporating before pitch day so investors can evaluate deal structure, but we can guide you through that process during prep.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: "#F8F9FC" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(30, 58, 138, 0.08)",
                border: "1px solid rgba(30, 58, 138, 0.15)",
                color: "#1E3A8A",
              }}
            >
              FAQs
            </div>
            <h2
              className="font-semibold leading-tight tracking-tight mb-5"
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                color: "#1F2937",
                letterSpacing: "-0.02em",
              }}
            >
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.72 }}>
              Everything you need to know before applying. Can't find your
              answer?{" "}
              <a
                href="mailto:pitch@karostartup.com"
                style={{ color: "#1E3A8A", fontWeight: 500 }}
              >
                Email us directly.
              </a>
            </p>

            {/* Quick stats */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                { value: "4–6 wks", label: "From apply to pitch day" },
                { value: "40–60", label: "Investors per cohort" },
                { value: "90 days", label: "Post-pitch support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(229,231,235,0.8)",
                    boxShadow: "0 2px 8px rgba(30,58,138,0.05)",
                  }}
                >
                  <p
                    className="font-bold"
                    style={{ fontSize: 22, color: "#1E3A8A", minWidth: 60 }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 13, color: "#6B7280" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-200"
                  style={{
                    background: "#fff",
                    border: isOpen
                      ? "1px solid rgba(30,58,138,0.2)"
                      : "1px solid rgba(229,231,235,0.8)",
                    boxShadow: isOpen
                      ? "0 6px 24px rgba(30,58,138,0.1)"
                      : "0 2px 8px rgba(30,58,138,0.04)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                    style={{ background: "transparent" }}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-medium"
                      style={{
                        fontSize: 15,
                        color: isOpen ? "#1E3A8A" : "#1F2937",
                        lineHeight: 1.5,
                      }}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        size={18}
                        color={isOpen ? "#1E3A8A" : "#9CA3AF"}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="px-6 pb-5"
                          style={{
                            borderTop: "1px solid rgba(229,231,235,0.6)",
                          }}
                        >
                          <p
                            className="pt-4 leading-relaxed"
                            style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.78 }}
                          >
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
