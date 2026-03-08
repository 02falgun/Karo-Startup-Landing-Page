"use client";

import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Apply to Pitch", href: "#" },
    { label: "For Investors", href: "#investors" },
    { label: "Partner With Us", href: "#" },
    { label: "Sponsor an Event", href: "#" },
  ],
  Startups: [
    { label: "Browse Startups", href: "#startups" },
    { label: "Success Stories", href: "#" },
    { label: "Submit Your Startup", href: "#" },
    { label: "Pitch Events", href: "#" },
  ],
  Resources: [
    { label: "Pitch Deck Template", href: "#" },
    { label: "Investor Guide", href: "#" },
    { label: "Funding Glossary", href: "#" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Company: [
    { label: "About KaroStartup", href: "#about-karostartup" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="mt-6"
      style={{ background: "#111827", color: "#D1D5DB" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Top section */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center mb-5">
              <img
                src="/karostartup-logo.png"
                alt="KaroStartup"
                style={{ height: 36, width: "auto", filter: "brightness(0) invert(1)" }}
                className="object-contain"
              />
            </a>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#9CA3AF", maxWidth: 250 }}
            >
              Connecting India's next generation of founders with the investors
              and capital they deserve.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:bg-white/10"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#9CA3AF",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(30, 58, 138, 0.25)";
                      (e.currentTarget as HTMLElement).style.color = "#3B82F6";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(30, 58, 138, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255, 255, 255, 0.06)";
                      (e.currentTarget as HTMLElement).style.color = "#9CA3AF";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255, 255, 255, 0.08)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "#6B7280" }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "#9CA3AF";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
        >
          <p className="text-sm" style={{ color: "#4B5563" }}>
            © {new Date().getFullYear()} KaroStartup. All rights reserved. Made
            with ❤️ for Bharat founders.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#4B5563" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#9CA3AF";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#4B5563";
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
