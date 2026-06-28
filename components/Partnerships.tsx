"use client";

import React from "react";

interface Partner {
  name: string;
  scope: string;
  role: string;
  description: string;
  icon: string;
}

const partners: Partner[] = [
  {
    name: "Forest Department",
    scope: "State Forestry & Wildlife",
    role: "Wildlife corridors & degraded forest recovery",
    description:
      "Joint field-level planning to secure wildlife passage corridors, remove exotic tree plantations, and plant indigenous species inside reserve forest zones.",
    icon: "🌲"
  },
  {
    name: "Revenue Department",
    scope: "Land Custody & Boundaries",
    role: "Land boundaries & encroachment resolution",
    description:
      "Legal verification of private property boundaries, digitizing land parcel records, and resolving public commons encroachments via statutory records.",
    icon: "📜"
  },
  {
    name: "Local Bodies & BMCs",
    scope: "Decentralized Governance",
    role: "Decentralized legal anchoring",
    description:
      "Anchoring conservation actions under the Biological Diversity Act, establishing Local Biodiversity Registers, and empowering local communities.",
    icon: "🤝"
  },
  {
    name: "Academic Institutions",
    scope: "Scientific Research",
    role: "Baseline studies & scientific monitoring",
    description:
      "Collaborating with universities for baseline botanical studies, camera trap analysis, soil carbon measurement, and hydrological flow rate tracking.",
    icon: "🎓"
  }
];

export default function Partnerships() {
  return (
    <section className="w-full bg-[#f4f3ef] text-gray-900 py-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-moss font-semibold block mb-3">
            Collaboration
          </span>
          <h2 className="text-4xl md:text-5xl serif-header font-bold text-forest mb-6">
            Institutional Partnership Matrix
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            True ecological recovery is not achieved in isolation. We anchor our efforts in official collaboration with statutory state bodies, local communities, and research institutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:border-moss/20 hover:translate-y-[-2px] transition-all duration-300"
            >
              <div>
                <div className="text-3xl mb-4">{partner.icon}</div>
                <h3 className="text-lg font-bold text-forest serif-header mb-1">
                  {partner.name}
                </h3>
                <span className="text-[10px] font-semibold text-moss uppercase tracking-wider block mb-4">
                  {partner.scope}
                </span>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 font-light">
                  {partner.description}
                </p>
              </div>

              {/* Specific Role Callout */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">
                  Primary Role
                </span>
                <span className="text-gray-700 text-xs font-semibold block">
                  {partner.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
