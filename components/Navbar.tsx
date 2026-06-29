"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-forest text-sand border-b border-moss/20 py-4 px-6 sticky top-0 z-50 backdrop-blur-md bg-forest/95">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2 select-none hover:opacity-90 transition-opacity">
            <div className="relative w-[18px] h-[26px] flex-shrink-0">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-sand"></div>
              <div className="absolute left-0 top-0 w-full h-[2px] bg-sand"></div>
              <div className="absolute left-0 top-[45%] -translate-y-1/2 w-[68%] h-[1.5px] bg-amber-accent"></div>
              <div className="absolute left-0 bottom-0 w-[2px] h-[5px] bg-amber-accent"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-sm tracking-[0.18em] text-sand serif-header">FOREST</span>
              <span className="font-sans font-light text-[0.45rem] tracking-[0.45em] text-sand/50 mt-[2px] flex items-baseline">
                F<span className="text-amber-accent font-semibold">I</span>RST
              </span>
            </div>
          </a>
          <span className="text-moss text-xs hidden sm:inline">|</span>
          <span className="text-xs uppercase tracking-widest text-sand/70 font-light font-sans hidden sm:inline">
            An Initiative of The Heritage Foundation
          </span>
        </div>

        {/* Link back to parent organization */}
        <a
          href="https://the-heritage.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest font-semibold text-amber-accent hover:text-white transition-colors duration-200 flex items-center gap-1.5 border border-amber-accent/30 rounded-full px-4 py-1.5 bg-amber-accent/5 hover:bg-amber-accent/15 cursor-pointer"
        >
          <span>Parent Portal</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

      </div>
    </nav>
  );
}
