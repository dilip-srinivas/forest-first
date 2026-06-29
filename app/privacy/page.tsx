"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="w-full h-screen bg-[#0d0d0d] overflow-hidden">
      <iframe
        src="/legal/privacy.html"
        className="w-full h-full border-none"
        title="Privacy Policy"
      />
    </div>
  );
}
