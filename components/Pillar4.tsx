"use client";

import React from "react";

interface Phase {
  phaseNum: string;
  title: string;
  subtitle: string;
  focus: string;
  actions: string[];
  color: string;
}

const phases: Phase[] = [
  {
    phaseNum: "Phase 01",
    title: "Investigative Monitoring",
    subtitle: "Ground-Level Detection",
    focus: "Deploying remote sensing, camera traps, and local reporter networks to capture ecological violations in real-time.",
    actions: [
      "Tracking land encroachments and buffer-zone violations",
      "Monitoring commercial logging and illegal land conversions",
      "Documenting habitat destruction and wildlife trafficking",
      "Detecting illicit water extraction and watershed pollution"
    ],
    color: "border-red-500/30 text-red-400 bg-red-950/20"
  },
  {
    phaseNum: "Phase 02",
    title: "Scientific Documentation",
    subtitle: "Empirical Case Compiling",
    focus: "Synthesizing raw monitoring data into high-grade scientific baseline studies, GIS maps, and authoritative reports.",
    actions: [
      "Mapping threatened micro-habitats and wildlife corridors",
      "Compiling species inventories and hydrology reports",
      "Publishing environmental impact peer-review whitepapers",
      "Establishing long-term carbon and biodiversity data matrices"
    ],
    color: "border-amber-accent/30 text-amber-accent bg-amber-950/20"
  },
  {
    phaseNum: "Phase 03",
    title: "Legal & Public Advocacy",
    subtitle: "Systemic Solutions Execution",
    focus: "Translating documented science into direct constitutional representations, litigation support, and policy changes.",
    actions: [
      "Filing formal complaints to regional and state authorities",
      "Representing local communities in statutory hearings",
      "Supporting and filing Public Interest Litigations (PILs)",
      "Advocating for legislative forest protection amendments"
    ],
    color: "border-moss/30 text-moss bg-moss/10"
  }
];

export default function Pillar4() {
  return (
    <section id="pillar-advocacy" className="w-full bg-forest text-sand py-24 px-6 relative border-b border-moss/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(44,138,93,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.2em] text-moss font-semibold block mb-3">
            Pillar 04 • The Shield
          </span>
          <h2 className="text-4xl md:text-5xl serif-header font-bold text-white mb-6">
            Advocacy & Ecological Justice
          </h2>
          <p className="text-lg md:text-xl text-sand/80 max-w-3xl leading-relaxed font-light mx-auto md:mx-0">
            Defending the landscape requires more than on-the-ground planting. We build an unyielding shield of scientific proof, legal action, and civic vigilance to fight systemic ecocide.
          </p>
        </div>

        {/* 3-Phase Source-to-Solution Grid Matrix */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-[#123624]/30 border border-moss/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-moss/45 transition-all duration-300 group"
            >
              <div>
                {/* Phase Number Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-moss">
                    {phase.phaseNum}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${phase.color}`}>
                    {phase.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 serif-header group-hover:text-moss transition-colors">
                  {phase.title}
                </h3>
                <p className="text-sm text-sand/75 leading-relaxed mb-6 font-light">
                  {phase.focus}
                </p>
              </div>

              {/* Action List Container */}
              <div className="pt-6 border-t border-moss/10">
                <span className="text-xs uppercase tracking-widest text-moss font-bold block mb-4">
                  Operational Actions
                </span>
                <ul className="space-y-3">
                  {phase.actions.map((act, actIdx) => (
                    <li key={actIdx} className="flex items-start gap-3 text-xs md:text-sm text-sand/80">
                      <span className="text-moss text-[10px] mt-0.5">■</span>
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
