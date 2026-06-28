"use client";

import React, { useState } from "react";

interface Step {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    id: "acquire",
    title: "Acquire",
    subtitle: "Civic Custody & Purchase",
    description:
      "We identify and acquire ecologically sensitive private lands, keeping them out of speculative development.",
    details: [
      "Rigorous parcel mapping and boundary audits",
      "Collaborative crowdfunding and corporate green funding",
      "Securing land title deeds under trust custody"
    ]
  },
  {
    id: "protect",
    title: "Protect",
    subtitle: "Immediate Threat Safeguarding",
    description:
      "Deploy physical and legal protection systems to secure the land from encroachment, poaching, and logging.",
    details: [
      "Fencing critical entry zones and installing signage",
      "Appointing local forest guardians & anti-poaching monitors",
      "Legal registration as protected private sanctuaries"
    ]
  },
  {
    id: "restore",
    title: "Restore",
    subtitle: "Ecological Reconstruction",
    description:
      "Initiate tailored ecological restoration interventions to re-establish the native floristic baseline.",
    details: [
      "Removal of invasive alien species (lantana, wattle, etc.)",
      "Nursery propagation of site-specific local species",
      "Assisted natural regeneration and soil stabilization"
    ]
  },
  {
    id: "monitoring",
    title: "Scientific Monitoring",
    subtitle: "Baseline Tracking & Audits",
    description:
      "Measure recovery metrics using strict scientific protocols, publishing open data reports annually.",
    details: [
      "Setting up permanent vegetation transects",
      "Camera trap surveillance for wildlife recolonization",
      "Hydrological recharge metrics and carbon sequestration auditing"
    ]
  }
];

export default function Pillar1() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="pillar-restore" className="relative z-0 w-full bg-[#f4f3ef] text-gray-900 pt-36 pb-24 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-moss font-semibold block mb-3">
            Pillar 01
          </span>
          <h2 className="text-4xl md:text-5xl serif-header font-bold text-forest mb-6">
            Collective Land Restoration
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed font-light">
            Through private and civic-backed land custody, individuals and businesses contribute directly towards the acquisition and preservation of ecologically significant lands. This prevents fragmentation and safeguards legacy habitats.
          </p>
        </div>

        {/* Step progress tracker container */}
        <div className="w-full bg-white border border-gray-200/80 rounded-2xl p-6 md:p-10 shadow-sm mb-10">
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-100 -translate-y-1/2 hidden md:block z-0" />
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-moss -translate-y-1/2 hidden md:block z-0 transition-all duration-500" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="w-full md:w-auto flex md:flex-col items-center gap-4 md:gap-3 z-10 text-left md:text-center group focus:outline-none focus:ring-2 focus:ring-moss/30 rounded-xl p-2 md:p-0 transition-all"
                  aria-label={`Step ${idx + 1}: ${step.title}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 ${
                      isActive
                        ? "bg-moss text-white border-moss scale-110 shadow-md shadow-moss/20"
                        : isPast
                        ? "bg-forest text-white border-forest"
                        : "bg-white text-gray-400 border-gray-200 group-hover:border-moss/50"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h3
                      className={`text-sm md:text-base font-semibold transition-colors duration-200 ${
                        isActive ? "text-moss" : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <span className="text-xs text-gray-400 block md:hidden">
                      {step.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active step details card */}
          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100 transition-all duration-300">
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-widest text-moss font-semibold block mb-2">
                Phase {activeStep + 1} • {steps[activeStep].subtitle}
              </span>
              <h4 className="text-2xl font-bold text-forest mb-4 serif-header">
                {steps[activeStep].title} Operations
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {steps[activeStep].description}
              </p>
            </div>
            
            <div className="md:col-span-7 bg-sand/40 rounded-xl p-6 border border-gray-100">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold block mb-4">
                Core Deliverables
              </span>
              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <svg
                      className="w-5 h-5 text-moss mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
