import React from "react";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Forest First",
    "url": "https://forestfirst.org",
    "description":
      "Forest First is an ecological restoration initiative protecting shola forests, native grasslands, and wildlife corridors in the Nilgiris and Western Ghats.",
    "foundingOrganization": {
      "@type": "Organization",
      "name": "The Heritage Foundation",
      "url": "https://the-heritage.org",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kotagiri",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
    },
    "sameAs": ["https://the-heritage.org"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
