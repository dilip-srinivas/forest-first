"use client";

import React, { useState, useEffect } from "react";

interface Prospect {
  name: string;
  domain: string;
  contact: string;
}

interface ScrapedProfile {
  name: string;
  domain: string;
  contact: string;
  sustainable_goals: string;
  headquarters_watershed: string;
  estimated_budget: number;
}

interface CampaignState {
  active: boolean;
  current_niche: string | null;
  prospects: Prospect[];
  active_prospect: Prospect | null;
  scraped_profile: ScrapedProfile | null;
  email_draft: string | null;
  hitl_approved: boolean;
  delivery_status: string | null;
  crm_synced: boolean;
}

const BACKEND_URL = "http://localhost:8000/api/v1";

// Standalone Mock Fallback Data (for immediate visual checking/no backend server mode)
const mockCampaignState: CampaignState = {
  active: true,
  current_niche: "corporate_csr",
  prospects: [
    { name: "Apex Green Ventures", domain: "apexgreen.com", contact: "sustainability@apexgreen.com" },
    { name: "TerraCorp Industries", domain: "terracorp.org", contact: "csr@terracorp.org" }
  ],
  active_prospect: { name: "Apex Green Ventures", domain: "apexgreen.com", contact: "sustainability@apexgreen.com" },
  scraped_profile: {
    name: "Apex Green Ventures",
    domain: "apexgreen.com",
    contact: "sustainability@apexgreen.com",
    sustainable_goals: "Carbon neutrality by 2030, focus on biodiversity corridors and local micro-habitats.",
    headquarters_watershed: "Cauvery River Basin catchment zone",
    estimated_budget: 75000
  },
  email_draft: `Subject: Securing the Cauvery River Basin catchment zone — Institutional Land Custody

Dear Sustainability Lead at Apex Green Ventures,

We have analyzed target ecological sectors near the Cauvery River Basin catchment zone. As an initiative of The Heritage Foundation, we believe conservation is not merely about planting trees; it is about protecting existing montane aquifers and restoring damaged grasslands that act as crucial hydrological sponges.

We welcome a partnership to acquire and systematically restore key ecological buffers.

Sincerely,
The Forest First Secretariat
an initiative of The Heritage Foundation`,
  hitl_approved: false,
  delivery_status: null,
  crm_synced: false
};

export default function AdminDashboard() {
  const [state, setState] = useState<CampaignState>({
    active: false,
    current_niche: null,
    prospects: [],
    active_prospect: null,
    scraped_profile: null,
    email_draft: null,
    hitl_approved: false,
    delivery_status: null,
    crm_synced: false
  });

  const [niche, setNiche] = useState("corporate_csr");
  const [draftText, setDraftText] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isUsingMock, setIsUsingMock] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load current status on mount
  useEffect(() => {
    fetchStatus();
  }, []);

  const addLog = (msg: string) => {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
  };

  const fetchStatus = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/campaign/status`);
      if (res.ok) {
        const data = await res.json();
        setState(data);
        if (data.email_draft) setDraftText(data.email_draft);
        setIsUsingMock(false);
      }
    } catch (err) {
      // Backend not running, default to offline state
      setIsUsingMock(true);
      addLog("System offline. Running in interactive demo simulation sandbox.");
    }
  };

  const handleTrigger = async () => {
    setLoading(true);
    setLogs([]);
    addLog(`Initiating Campaign Outbound Agent... niche: ${niche}`);
    
    if (isUsingMock) {
      setTimeout(() => {
        addLog("Agent 1 [GrowthAgent]: Segments analyzed. Selected high-value targets.");
        addLog("Agent 2 [ScraperAgent]: Scraped domains via Firecrawl. Located headquarters watershed.");
        addLog("Agent 3 [CopywriterAgent]: Drafted email copy focused on montane sponges.");
        addLog("Agent Staged: Human-in-the-Loop approval gate triggered.");
        setState(mockCampaignState);
        setDraftText(mockCampaignState.email_draft || "");
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/campaign/trigger`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ niche })
      });
      if (res.ok) {
        const data = await res.json();
        setState(data);
        if (data.email_draft) setDraftText(data.email_draft);
        addLog("Workflow successfully execution-paused. Awaiting HITL copy review.");
      } else {
        addLog("Error: Backend returned campaign execution failure.");
      }
    } catch (err) {
      addLog("Network Error: Could not trigger campaign on local backend server.");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    setLoading(true);
    addLog("HITL approved. Processing outbound copy delivery...");

    if (isUsingMock) {
      setTimeout(() => {
        addLog("Outbound SMTP: Email sent successfully via @forestfirst.org relay!");
        addLog("Agent 4 [FollowUpAgent]: Database log synchronized. CRM pipeline updated.");
        setState((prev) => ({
          ...prev,
          email_draft: draftText,
          hitl_approved: true,
          delivery_status: "sent",
          crm_synced: true
        }));
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/campaign/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ edited_draft: draftText })
      });
      if (res.ok) {
        const data = await res.json();
        setState(data);
        addLog("Agent execution complete. Target records finalized in CRM.");
      } else {
        addLog("Error: Backend rejected Human-in-the-Loop approval payload.");
      }
    } catch (err) {
      addLog("Network Error: Connection failed during approval transfer.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLogs([]);
    addLog("Resetting agent campaign workspace...");
    
    if (isUsingMock) {
      setState({
        active: false,
        current_niche: null,
        prospects: [],
        active_prospect: null,
        scraped_profile: null,
        email_draft: null,
        hitl_approved: false,
        delivery_status: null,
        crm_synced: false
      });
      setDraftText("");
      addLog("Simulation cleared. Ready for next campaign run.");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/campaign/reset`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setState(data);
        setDraftText("");
        addLog("Workspace database cache cleared.");
      }
    } catch (err) {
      addLog("Error: Could not contact backend for resetting.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-gray-900 font-sans p-6 md:p-12 relative overflow-hidden">
      
      {/* Visual background noise overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,99,80,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="border-b border-gray-300/60 pb-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-moss font-bold block mb-1">
              Internal Brand Operations Portal
            </span>
            <h1 className="text-4xl font-extrabold text-forest serif-header">
              Agent Control Center
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full border ${
              isUsingMock
                ? "bg-amber-500/10 text-amber-700 border-amber-300/40"
                : "bg-green-500/10 text-green-700 border-green-300/40"
            }`}>
              {isUsingMock ? "Simulation Sandbox Mode" : "Local API Connected"}
            </span>
            <button
              onClick={fetchStatus}
              className="text-xs text-moss hover:text-forest transition-colors flex items-center gap-1 cursor-pointer font-semibold uppercase tracking-wider"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Controllers and Log Feed */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Target Settings */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-forest serif-header mb-4">
                Campaign Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold block mb-2">
                    Outreach Target Niche
                  </label>
                  <select
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    disabled={state.active}
                    className="w-full bg-[#f5f0e8]/50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-moss"
                  >
                    <option value="corporate_csr">Corporate CSR Sustainability Funds</option>
                    <option value="eco_philanthropy">Private Ecological Foundations</option>
                    <option value="civic_trusts">Civic Land Conservation Trusts</option>
                  </select>
                </div>

                {!state.active ? (
                  <button
                    onClick={handleTrigger}
                    disabled={loading}
                    className="w-full bg-forest hover:bg-forest/90 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-forest/10"
                  >
                    {loading ? "Triggering..." : "Launch Outbound Agents"}
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    Reset & Clear State
                  </button>
                )}
              </div>
            </div>

            {/* Live Logs Console */}
            <div className="bg-[#141a16] border border-gray-800 rounded-2xl p-6 shadow-md text-green-400 font-mono text-xs">
              <h3 className="text-sand/40 uppercase tracking-widest font-bold font-sans text-[10px] mb-3">
                Agent Terminal Streams
              </h3>
              <div className="h-60 overflow-y-auto space-y-2 pr-2 scrollbar-thin">
                {logs.length === 0 ? (
                  <p className="text-gray-600 italic">Terminal idle. Awaiting campaign execution.</p>
                ) : (
                  logs.map((log, idx) => (
                    <p key={idx} className="leading-relaxed break-words">{log}</p>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Agent Pipeline State */}
          <div className="lg:col-span-8">
            {!state.active ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
                <span className="text-4xl block mb-4">🤖</span>
                <h3 className="text-xl font-bold text-forest serif-header mb-2">
                  No Active State Machine Run
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed font-light">
                  Select an outbound target segment on the left panel and click launch to run the multi-agent workflow.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Active Lead Details */}
                {state.scraped_profile && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <span className="text-[10px] font-bold text-moss uppercase tracking-widest block mb-1">
                      Agent 2 [ScraperResult] • Enriched Dossier
                    </span>
                    <h3 className="text-2xl font-bold text-forest serif-header mb-4">
                      {state.scraped_profile.name}
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
                      <div className="bg-[#f5f0e8]/30 rounded-xl p-3 border border-gray-100">
                        <span className="text-gray-400 font-bold block mb-0.5 uppercase text-[9px] tracking-wider">Contact Email</span>
                        <span className="text-gray-800 font-semibold">{state.scraped_profile.contact}</span>
                      </div>
                      <div className="bg-[#f5f0e8]/30 rounded-xl p-3 border border-gray-100">
                        <span className="text-gray-400 font-bold block mb-0.5 uppercase text-[9px] tracking-wider">Target Watershed Zone</span>
                        <span className="text-forest font-bold">{state.scraped_profile.headquarters_watershed}</span>
                      </div>
                      <div className="bg-[#f5f0e8]/30 rounded-xl p-3 border border-gray-100 sm:col-span-2">
                        <span className="text-gray-400 font-bold block mb-0.5 uppercase text-[9px] tracking-wider">Identified CSR / Philanthropy Objectives</span>
                        <span className="text-gray-700 leading-relaxed font-light">{state.scraped_profile.sustainable_goals}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* HITL Copy Review Block */}
                {state.email_draft && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 left-0 h-1.5 bg-amber-accent" />
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-[10px] font-bold text-amber-accent uppercase tracking-widest block mb-0.5">
                          Agent 3 [CopywriterResult] • Human-in-the-Loop Review
                        </span>
                        <h3 className="text-xl font-bold text-forest serif-header">
                          Draft Copy Editor
                        </h3>
                      </div>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${
                        state.hitl_approved
                          ? "bg-green-500/10 text-green-700 border-green-200"
                          : "bg-amber-500/10 text-amber-700 border-amber-200 animate-pulse"
                      }`}>
                        {state.hitl_approved ? "Approved" : "Awaiting Review"}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mb-4 leading-relaxed font-light">
                      Please review the draft generated by the Copywriter Agent. You can make direct edits in the editor below before executing the outbound SMTP server delivery.
                    </p>

                    <textarea
                      value={draftText}
                      onChange={(e) => setDraftText(e.target.value)}
                      disabled={state.hitl_approved || loading}
                      className="w-full h-72 bg-[#f5f0e8]/40 border border-gray-200 rounded-xl p-4 text-xs md:text-sm font-mono text-gray-800 leading-relaxed focus:outline-none focus:border-moss disabled:bg-gray-50 disabled:text-gray-400 mb-6"
                    />

                    {!state.hitl_approved ? (
                      <button
                        onClick={handleApprove}
                        disabled={loading || !draftText.trim()}
                        className="w-full bg-amber-accent hover:bg-amber-accent/90 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-accent/10"
                      >
                        {loading ? "Processing..." : "Approve & Deliver Email Outbound"}
                      </button>
                    ) : (
                      <div className="bg-green-50 text-green-800 rounded-xl p-4 border border-green-200 flex items-start gap-3">
                        <span className="text-xl">🚀</span>
                        <div>
                          <h4 className="font-bold text-xs uppercase tracking-wider mb-0.5">Campaign Executed Successfully</h4>
                          <p className="text-xs text-green-700/90 leading-relaxed font-light">
                            Email dispatched from outbound@forestfirst.org relay. Agent 4 [FollowUpAgent] has updated the CRM and scheduled the scientific monitoring logs.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
