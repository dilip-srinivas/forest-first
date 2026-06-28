"use client";

import React from "react";

interface StreamItem {
  title: string;
  focus: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
}

const streams: StreamItem[] = [
  {
    title: "Shola Forest Patches",
    focus: "Montane Evergreen Forests",
    description:
      "Stunted tropical mountain forest patches nested in valleys, home to endemic flora and critical micro-climatic shelters.",
    metric: "High Endemism (80%+ woody flora)",
    icon: (
      <svg className="w-6 h-6 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
      </svg>
    )
  },
  {
    title: "Native Grasslands",
    focus: "Montane Hydrological Sponges",
    description:
      "High-altitude meadows acting as natural aquifers. They intercept heavy monsoonal rain and release it slowly throughout the dry season.",
    metric: "High water retention efficiency",
    icon: (
      <svg className="w-6 h-6 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
      </svg>
    )
  },
  {
    title: "Invasive Alien Species Removal",
    focus: "Acacia & Eucalyptus Eradication",
    description:
      "Aggressive clearing of commercial timber trees introduced historically, which deplete water reserves and crowd out native flora.",
    metric: "1,200+ Hectares clears targeted",
    icon: (
      <svg className="w-6 h-6 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  },
  {
    title: "Wildlife Corridors",
    focus: "Habitat Connectivity Linkages",
    description:
      "Restoring contiguous biological pathways to allow migration of larger mammals like the Nilgiri Tahr and Asian Elephant.",
    metric: "Linking isolated forest estates",
    icon: (
      <svg className="w-6 h-6 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  }
];

export default function Pillar2() {
  return (
    <section id="pillar-shola" className="w-full bg-forest text-sand py-24 px-6 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Pillar Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-moss font-semibold block mb-3">
            Pillar 02
          </span>
          <h2 className="text-4xl md:text-5xl serif-header font-bold text-white mb-6">
            Shola & Grassland Recovery
          </h2>
          <p className="text-lg md:text-xl text-sand/80 max-w-3xl leading-relaxed font-light">
            Working within the unique, high-altitude montane grasslands and forest mosaics (Sholas) of the Western Ghats—one of the world's hottest biodiversity hotspots.
          </p>
        </div>

        {/* Core Narrative Banner */}
        <div className="bg-[#123624] border-l-4 border-moss rounded-r-xl p-8 md:p-10 mb-12 shadow-inner">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white serif-header">
            The Watershed Connection
          </h3>
          <p className="text-sand/80 leading-relaxed text-sm md:text-base">
            The Western Ghats act as the principal <strong>water towers of Southern India</strong>. 
            The health of high-elevation vegetation profiles directly dictates watershed security downstream, impacting water availability for over 400 million people across multiple states. Restoring the natural vegetation cover is a vital civil security concern, not just an ecological task.
          </p>
        </div>

        {/* Counter-Intuitive Truth Box */}
        <div className="bg-amber-accent/10 border-2 border-amber-accent/40 rounded-2xl p-8 md:p-12 mb-16 relative">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-amber-accent text-forest font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
            Critical Insight
          </div>
          <div className="flex items-start gap-5">
            <span className="text-3xl text-amber-accent flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <h4 className="text-xl font-bold text-amber-accent mb-3 serif-header">
                The Counter-Intuitive Truth
              </h4>
              <p className="text-sand/90 text-base md:text-lg leading-relaxed font-light">
                <strong>Not every open landscape should become a forest.</strong> Native grasslands are ancient, complex ecosystems in their own right. They act as hydrological sponges, and they deserve absolute protection and restoration rather than being targeted for tree-planting drives. Planting trees in natural grasslands depletes groundwater reserves and destroys unique biodiversity.
              </p>
            </div>
          </div>
        </div>

        {/* Streams Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 serif-header text-white text-center md:text-left">
            Core Recovery Focal Areas
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {streams.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#123624]/40 border border-moss/20 rounded-xl p-6 md:p-8 hover:bg-[#123624]/60 hover:border-moss/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#123624] flex items-center justify-center border border-moss/30 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-moss transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs text-moss uppercase tracking-wider block">
                      {item.focus}
                    </span>
                  </div>
                </div>
                <p className="text-sand/75 text-sm md:text-base leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-moss/10 flex justify-between items-center text-xs text-moss font-semibold uppercase tracking-wider">
                  <span>Target Matrix Metric:</span>
                  <span className="text-white bg-moss/20 px-2.5 py-1 rounded">
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
