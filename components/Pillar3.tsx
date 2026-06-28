"use client";

import React, { useState } from "react";

interface MatrixItem {
  id: string;
  category: string;
  shortDesc: string;
  impact: string;
  collaborator: string;
  restorationGoal: string;
  severity: "high" | "critical" | "moderate";
}

const matrixData: MatrixItem[] = [
  {
    id: "social-forestry",
    category: "Social Forestry Plantations",
    shortDesc: "Exotic monoculture belts (e.g., Acacia, Eucalyptus, Pine).",
    impact:
      "Drastic lowering of local groundwater table, high risk of forest fires, and suppression of native undergrowth biodiversity due to toxic leaf litter.",
    collaborator: "Forest Department & Panchayats",
    restorationGoal:
      "Phased harvest of exotics, mechanical stump treatment, and re-introduction of native broad-leaved canopy profiles.",
    severity: "moderate"
  },
  {
    id: "degraded-forests",
    category: "Degraded Forest Areas",
    shortDesc: "Degraded reserve forest spaces experiencing crown cover loss.",
    impact:
      "Severe soil erosion, habitat fragmentation, and loss of wildlife food sources, driving human-wildlife conflict at forest edges.",
    collaborator: "Forest Department (Wildlife Wing)",
    restorationGoal:
      "Assisted Natural Regeneration (ANR), seed ball broadcasting, and soil-moisture conservation check-dams.",
    severity: "high"
  },
  {
    id: "abandoned-plantations",
    category: "Abandoned Plantations",
    shortDesc: "Neglected commercial tea, coffee, or rubber estates.",
    impact:
      "Colonization by invasive weeds, blockage of animal migration paths, and highly compacted soil limiting natural forest regrowth.",
    collaborator: "Revenue Department & Land Owners",
    restorationGoal:
      "Loosening compacted soils, clearing plantation monocultures, and establishing nursery-grown forest succession matrices.",
    severity: "high"
  },
  {
    id: "invasive-hotspots",
    category: "Invasive Hotspots",
    shortDesc: "Thickets overrun by Lantana camara, Chromolaena, or Senna spectabilis.",
    impact:
      "Complete choking of native regeneration, poisonous to native herbivores, and creation of impenetrable barriers for wildlife movement.",
    collaborator: "Local Bodies & BMCs",
    restorationGoal:
      "Manual uprooting using 'cut-root-stock' method, controlled native planting, and biological checks.",
    severity: "critical"
  },
  {
    id: "encroached-watersheds",
    category: "Encroached Watershed Zones",
    shortDesc: "Riparian belts, marshes, and stream banks occupied by infrastructure.",
    impact:
      "Loss of natural flood buffering capacity, severe organic pollution in water streams, and blocking of source-spring aquifers.",
    collaborator: "Revenue Department & Local Administration",
    restorationGoal:
      "Eviction and relocation, dredging of natural channels, and bio-shield planting of bamboo and moisture-loving native grass filters.",
    severity: "critical"
  }
];

export default function Pillar3() {
  const [activeItem, setActiveItem] = useState<string>(matrixData[0].id);

  const selected = matrixData.find((item) => item.id === activeItem) || matrixData[0];

  const severityColor = (sev: string) => {
    switch (sev) {
      case "critical":
        return "bg-red-500/10 text-red-700 border-red-200";
      case "high":
        return "bg-amber-500/10 text-amber-700 border-amber-200";
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  return (
    <section className="w-full bg-white text-gray-900 py-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-moss font-semibold block mb-3">
            Pillar 03
          </span>
          <h2 className="text-4xl md:text-5xl serif-header font-bold text-forest mb-6">
            Public Land Ecological Restoration
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed font-light">
            We collaborate with state government departments and local administrative bodies to orchestrate systemic policies, reclaiming public commons and returning degraded landscapes to their natural ecosystems.
          </p>
        </div>

        {/* Matrix Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: 5 Categories Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
              Select target land category
            </h3>
            {matrixData.map((item) => {
              const isActive = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start justify-between gap-4 group ${
                    isActive
                      ? "bg-forest border-forest text-white shadow-md shadow-forest/10"
                      : "bg-[#f4f3ef]/30 border-gray-200 hover:bg-[#f4f3ef]/60"
                  }`}
                  aria-pressed={isActive}
                >
                  <div>
                    <h4 className={`font-bold text-base transition-colors ${isActive ? "text-white" : "text-gray-900 group-hover:text-moss"}`}>
                      {item.category}
                    </h4>
                    <p className={`text-xs mt-1 line-clamp-1 ${isActive ? "text-sand/80" : "text-gray-500"}`}>
                      {item.shortDesc}
                    </p>
                  </div>
                  <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded border-0.5 flex-shrink-0 ${
                    isActive ? "bg-white/20 text-white border-white/30" : severityColor(item.severity)
                  }`}>
                    {item.severity}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Detailed View */}
          <div className="lg:col-span-7 bg-[#f4f3ef] border border-gray-200 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center gap-4 mb-6 border-b border-gray-200/60 pb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-moss font-semibold block mb-1">
                    Systemic Intervention Details
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-forest serif-header">
                    {selected.category}
                  </h4>
                </div>
                <span className={`text-xs font-semibold uppercase px-3 py-1 rounded border ${severityColor(selected.severity)}`}>
                  {selected.severity} Severity
                </span>
              </div>

              {/* Grid content blocks */}
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                    Ecological Degradation Impact
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-light">
                    {selected.impact}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                    Primary Institutional Collaborator
                  </h5>
                  <p className="text-gray-800 font-semibold text-sm md:text-base">
                    {selected.collaborator}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Action Callout */}
            <div className="mt-8 pt-6 border-t border-gray-200/60">
              <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                <span className="text-moss text-2xl flex-shrink-0 mt-0.5">🌱</span>
                <div>
                  <h6 className="font-bold text-sm text-forest uppercase tracking-wider mb-1">
                    Restoration Pathway Goal
                  </h6>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selected.restorationGoal}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
