"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pin the triad when it reaches the top
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-10 w-full bg-forest text-sand">
      {/* Visual background treatment - subtle elegant radial gradient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,138,93,0.15),transparent_60%)] pointer-events-none" />

      {/* Main Hero Wrapper */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-36 md:pb-48 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-moss font-semibold block mb-4">
          The Heritage Foundation
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl serif-header font-extrabold tracking-tight mb-6 text-white leading-none">
          Forest First
        </h1>
        <p className="text-lg md:text-2xl text-sand/80 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          An Initiative of The Heritage Foundation
        </p>

        {/* Decorative Divider */}
        <div className="w-16 h-[2px] bg-moss mx-auto mb-12" />
      </div>

      {/* Sticky Anchor Triad */}
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-md border-b border-moss/20 shadow-lg py-4 transition-all duration-300"
            : "relative -mt-16 mb-24 py-6"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 flex justify-around items-center">
          <a
            href="#pillar-restore"
            className="text-sm md:text-lg uppercase tracking-[0.2em] font-semibold text-sand hover:text-moss transition-colors cursor-pointer"
          >
            Protect
          </a>
          <span className="text-moss/40">•</span>
          <a
            href="#pillar-shola"
            className="text-sm md:text-lg uppercase tracking-[0.2em] font-semibold text-sand hover:text-moss transition-colors cursor-pointer"
          >
            Restore
          </a>
          <span className="text-moss/40">•</span>
          <a
            href="#pillar-advocacy"
            className="text-sm md:text-lg uppercase tracking-[0.2em] font-semibold text-sand hover:text-moss transition-colors cursor-pointer"
          >
            Defend
          </a>
        </div>
      </div>

      {/* Disruption Box (Position Statement Card) */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 -mb-20">
        <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-14 border border-gray-100 disruption-card-shadow transition-all duration-500 hover:translate-y-[-4px]">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Elegant Accent Marker */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-forest text-sand serif-header font-bold text-xl">
              F
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-moss font-semibold block mb-2">
                Position Statement
              </span>
              <p className="text-xl md:text-3xl leading-relaxed text-gray-800 font-light serif-header">
                <strong>Conservation is not merely about planting trees.</strong> It is
                about protecting existing ecosystems, restoring damaged landscapes,
                recovering lost biodiversity, and ensuring that natural heritage is
                preserved for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
