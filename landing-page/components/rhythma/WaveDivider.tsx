"use client";

import React from "react";

export default function WaveDivider() {
  return (
    <div className="w-full overflow-hidden leading-none text-[#FDF0F6] shrink-0 pointer-events-none">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 fill-current">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
}
