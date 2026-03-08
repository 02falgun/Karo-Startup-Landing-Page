"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

interface PitchModalProps {
  open: boolean;
  onClose: () => void;
}

const stages = ["Idea", "MVP", "Pre-Revenue", "Revenue Stage", "Series A+"];
const sectors = ["AgriTech", "FinTech", "EdTech", "HealthTech", "SaaS", "D2C", "CleanTech", "Mobility", "Other"];

export default function PitchModal({ open, onClose }: PitchModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    founderName: "",
    email: "",
    phone: "",
    startupName: "",
    sector: "",
    stage: "",
    tagline: "",
    website: "",
  });

  const set = (k: keyof typeof form, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setForm({ founderName: "", email: "", phone: "", startupName: "", sector: "", stage: "", tagline: "", website: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(6px)" }}
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                maxWidth: 540,
                background: "#fff",
                boxShadow: "0 32px 80px rgba(15,23,42,0.28)",
                pointerEvents: "auto",
              }}
            >
              {/* Header gradient strip */}
              <div
                className="px-8 pt-8 pb-6"
                style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #DC2626 100%)" }}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
                >
                  <X size={15} />
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <img src="/karostartup-logo.png" alt="KaroStartup" style={{ height: 28, filter: "brightness(0) invert(1)" }} />
                </div>
                <h2 className="font-bold text-white text-xl mb-1">Apply to Pitch</h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                  Cohort 2026 · Applications open · Free to apply
                </p>
                {/* Step indicators */}
                {!submitted && (
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2].map((s) => (
                      <div
                        key={s}
                        className="h-1 rounded-full transition-all duration-300 flex-1"
                        style={{ background: step >= s ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)" }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center text-center py-4"
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full mb-5" style={{ background: "rgba(0,184,148,0.1)" }}>
                        <CheckCircle2 size={32} color="#00B894" />
                      </div>
                      <h3 className="font-bold text-xl mb-2" style={{ color: "#0F172A" }}>Application Received!</h3>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7280", maxWidth: 340 }}>
                        Thanks <strong>{form.founderName}</strong>! We've received your application for <strong>{form.startupName}</strong>.
                        Our team will review it and reach out within 3–5 business days.
                      </p>
                      <button
                        onClick={handleClose}
                        className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
                        style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)" }}
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : step === 1 ? (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={(e) => { e.preventDefault(); setStep(2); }}
                      className="space-y-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>Step 1 of 2 — About You</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Founder Name *</label>
                          <input
                            required
                            value={form.founderName}
                            onChange={(e) => set("founderName", e.target.value)}
                            placeholder="Rahul Sharma"
                            className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
                            style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: "#1F2937" }}
                            onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Phone *</label>
                          <input
                            required
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
                            style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: "#1F2937" }}
                            onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="rahul@yourstartup.com"
                          className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
                          style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: "#1F2937" }}
                          onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white mt-2"
                        style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)" }}
                      >
                        Continue
                        <ArrowRight size={14} />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>Step 2 of 2 — About Your Startup</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Startup Name *</label>
                          <input
                            required
                            value={form.startupName}
                            onChange={(e) => set("startupName", e.target.value)}
                            placeholder="AgroLink India"
                            className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
                            style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: "#1F2937" }}
                            onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Website</label>
                          <input
                            value={form.website}
                            onChange={(e) => set("website", e.target.value)}
                            placeholder="https://..."
                            className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
                            style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: "#1F2937" }}
                            onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>One-line tagline *</label>
                        <input
                          required
                          value={form.tagline}
                          onChange={(e) => set("tagline", e.target.value)}
                          placeholder="We help farmers sell directly to retailers"
                          className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
                          style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: "#1F2937" }}
                          onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Sector *</label>
                          <select
                            required
                            value={form.sector}
                            onChange={(e) => set("sector", e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all appearance-none"
                            style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: form.sector ? "#1F2937" : "#9CA3AF" }}
                            onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                          >
                            <option value="">Select sector</option>
                            {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Stage *</label>
                          <select
                            required
                            value={form.stage}
                            onChange={(e) => set("stage", e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all appearance-none"
                            style={{ background: "#F8F9FC", border: "1px solid #E5E7EB", color: form.stage ? "#1F2937" : "#9CA3AF" }}
                            onFocus={(e) => (e.target.style.borderColor = "#1E3A8A")}
                            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                          >
                            <option value="">Select stage</option>
                            {stages.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all"
                          style={{ background: "#F3F4F6", color: "#374151" }}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                          style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)" }}
                        >
                          Submit Application
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
