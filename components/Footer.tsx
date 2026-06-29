"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulate API registration
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you. You have been subscribed to Forest First updates.");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="w-full bg-forest text-sand/80 py-16 px-6 relative z-10 border-t border-moss/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 select-none mb-4">
              <div className="relative w-[22px] h-[32px] flex-shrink-0">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-sand"></div>
                <div className="absolute left-0 top-0 w-full h-[2px] bg-sand"></div>
                <div className="absolute left-0 top-[45%] -translate-y-1/2 w-[68%] h-[1.5px] bg-amber-accent"></div>
                <div className="absolute left-0 bottom-0 w-[2px] h-[6px] bg-amber-accent"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-base tracking-[0.18em] text-sand serif-header">FOREST</span>
                <span className="font-sans font-light text-[0.5rem] tracking-[0.45em] text-sand/50 mt-[2px] flex items-baseline">
                  F<span className="text-amber-accent font-semibold">I</span>RST
                </span>
              </div>
            </div>
            <p className="text-sm text-sand/60 leading-relaxed font-light mb-4 max-w-sm">
              Forest First is an ecological restoration initiative wholly operated and governed by The Heritage Foundation, a registered public charitable trust (12A/80G), Kotagiri, The Nilgiris, Tamil Nadu.
            </p>
            <div className="text-xs text-sand/40 leading-relaxed font-light mb-6 max-w-sm border-l border-moss/30 pl-4 py-1">
              <span className="block font-semibold text-moss">The Heritage Foundation</span>
              Registered Public Charitable Trust (12A/80G)
              <span className="block">PAN: AADTT8323J | Est. May 13, 2020</span>
              <span className="block">Kotagiri, The Nilgiris, Tamil Nadu, India</span>
            </div>
            <span className="text-xs text-sand/40 block">
              © {new Date().getFullYear()} The Heritage Foundation. All rights reserved.
            </span>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-moss font-bold mb-4">
              The Foundation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://the-heritage.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Home (the-heritage.org)
                </a>
              </li>
              <li>
                <a href="https://the-heritage.org/about.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  About the Foundation
                </a>
              </li>
              <li>
                <a href="https://the-heritage.org/donate.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Support & Donate
                </a>
              </li>
              <li>
                <a href="https://the-heritage.org/contact.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Input Component */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-moss font-bold mb-4">
              Newsletter Subscription
            </h4>
            <p className="text-xs text-sand/65 mb-4 leading-relaxed font-light">
              Receive updates on newly secured sanctuaries, flora recovery reports, and legal advocacy proceedings.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex w-full overflow-hidden rounded-lg border border-moss/30 bg-[#123624]/20 focus-within:border-moss transition-colors">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter email address"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-sand/40 outline-none"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-moss hover:bg-moss/95 text-white text-xs font-semibold px-4 transition-colors uppercase tracking-wider flex-shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {/* Status Message */}
              {status === "error" && (
                <p className="text-xs text-red-400 mt-1 font-semibold" role="alert">
                  {message}
                </p>
              )}
              {status === "success" && (
                <p className="text-xs text-moss mt-1 font-semibold" role="alert">
                  {message}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Legal disclosures & compliance footer bar */}
        <div className="border-t border-moss/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sand/40">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            <a href="/privacy" className="hover:text-sand/70 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-sand/70 transition-colors">
              Terms of Custody
            </a>
            <a href="/scientific-data" className="hover:text-sand/70 transition-colors">
              Scientific Data Disclosures
            </a>
            <a href="/disclosures.html" className="hover:text-sand/70 transition-colors">
              Institutional Disclosures
            </a>
          </div>
          <p className="text-center md:text-right max-w-md leading-relaxed font-light">
            Forest First is an initiative of The Heritage Foundation, a registered public charitable trust (12A/80G). All contributions are directed towards ecological restoration activities under the Foundation's mandate.
          </p>
        </div>

      </div>
    </footer>
  );
}
