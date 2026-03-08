"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Investors", href: "#investors" },
  { label: "Startups", href: "#startups" },
  { label: "About", href: "#about-karostartup" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(248, 249, 252, 0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(229, 231, 235, 0.8)"
            : "none",
          boxShadow: scrolled
            ? "0 1px 20px rgba(30, 58, 138, 0.07)"
            : "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1200, padding: "0 24px", height: 68 }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/karostartup-logo.png"
              alt="KaroStartup"
              style={{ height: 38, width: "auto" }}
              className="object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/80"
                style={{ color: "#374151" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#1E3A8A";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#374151";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#investors"
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              style={{ color: "#1E3A8A" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background =
                  "rgba(30, 58, 138, 0.06)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              For Investors
            </a>
            <motion.a
              href="#hero-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)",
                boxShadow: "0 4px 14px rgba(30, 58, 138, 0.35)",
              }}
            >
              Apply to Pitch
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#374151" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-17 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(248, 249, 252, 0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(229, 231, 235, 0.8)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "#374151" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="#investors"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 text-sm font-medium rounded-lg text-center"
                  style={{ color: "#1E3A8A" }}
                >
                  For Investors
                </a>
                <a
                  href="#hero-cta"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 text-sm font-semibold rounded-xl text-white text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)",
                  }}
                >
                  Apply to Pitch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
