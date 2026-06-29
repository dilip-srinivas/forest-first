"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="w-full h-screen bg-[#0d0d0d] overflow-hidden">
      <iframe
        src="/legal/terms.html"
        className="w-full h-full border-none"
        title="Terms of Custody"
      />
    </div>
  );
}
