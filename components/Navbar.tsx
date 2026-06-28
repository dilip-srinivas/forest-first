"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-forest text-sand border-b border-moss/20 py-4 px-6 sticky top-0 z-50 backdrop-blur-md bg-forest/95">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Serif Institutional Tagline */}
        <div className="flex items-center gap-2">
          <span className="serif-header font-semibold text-lg text-white">
            Forest First
          </span>
          <span className="text-moss text-xs hidden sm:inline">|</span>
          <span className="text-xs uppercase tracking-widest text-sand/70 font-light font-sans">
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
