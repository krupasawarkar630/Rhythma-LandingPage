"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/rhythma/Navbar";
import HeroText from "@/components/rhythma/HeroText";
import HeroMockup from "@/components/rhythma/HeroMockup";
import WaveDivider from "@/components/rhythma/WaveDivider";

export default function Home() {
  return (
    <div className="h-screen max-h-screen overflow-hidden bg-gradient-to-br from-[#FAF4FA] via-[#FDF8FC] to-[#F7EEF8] text-[#331B3F] font-sans flex flex-col justify-between selection:bg-[#6B3FA0] selection:text-white relative">
      {/* ── 1. Navbar Component ── */}
      <Navbar navAnimationDelay={0.3} />

      {/* ── Left-Side Direct Background: Exact Woman with Smooth Fade-In Animation ── */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
        aria-hidden="true"
        className="absolute left-6 sm:left-10 lg:left-14 bottom-0 pointer-events-none select-none z-0 flex items-end justify-start h-[78vh] max-h-[580px] w-auto"
      >
        <motion.img
          src="/serene-woman-seamless.png"
          alt=""
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
          className="h-full w-auto object-contain object-left-bottom"
        />
      </motion.div>

      {/* ── 2. Hero Content (Text in Center with generous left spacing, Phone on Right) ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-center py-2 relative z-10">
        {/* Ambient Subtle Glow behind phone */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-80 h-80 bg-[#E8D6F2]/50 rounded-full blur-[110px] -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full">
          {/* Left spacer on desktop so the background woman shines with plenty of room */}
          <div className="hidden lg:block lg:col-span-4 pointer-events-none h-1" />

          {/* Center: HeroText ("Rhythma" headline with left space, tagline, subtext, CTA button) */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center lg:pl-8 xl:pl-12">
            <HeroText staggerDelay={0.2} />
          </div>

          {/* Right: HeroMockup (100% Completely Visible Slanted Phone Screen) */}
          <div className="lg:col-span-3 flex justify-center items-center py-1">
            <HeroMockup staggerDelay={0.4} />
          </div>
        </div>
      </main>

      {/* ── 3. Wave Divider (Bottom Edge) ── */}
      <WaveDivider />
    </div>
  );
}
