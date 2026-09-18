"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroTextProps {
  staggerDelay?: number;
}

export default function HeroText({ staggerDelay = 0.2 }: HeroTextProps) {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-4 z-10 px-2 max-w-xl mx-auto">
      {/* ── "Rhythma" Headline with Custom Watercolor Leaf Flourish ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: staggerDelay, ease: "easeOut" }}
        className="relative inline-block"
      >
        {/* Watercolor 3-Leaf Flourish sprouting over the second 'h' & 'm' */}
        <div className="absolute -top-7 sm:-top-8 right-16 sm:right-20 pointer-events-none select-none z-20">
          <svg width="58" height="46" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Left Leaf: Teal to Pink */}
              <linearGradient id="leafTealPink" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#72B6BA" />
                <stop offset="55%" stopColor="#A296C6" />
                <stop offset="100%" stopColor="#EB9BB7" />
              </linearGradient>
              {/* Top Leaf: Lavender to Magenta */}
              <linearGradient id="leafLavenderMagenta" x1="0%" y1="100%" x2="40%" y2="0%">
                <stop offset="0%" stopColor="#9C77C4" />
                <stop offset="50%" stopColor="#C371B7" />
                <stop offset="100%" stopColor="#DF76A9" />
              </linearGradient>
              {/* Right Leaf: Soft Purple to Rose Pink */}
              <linearGradient id="leafRose" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#8E92C3" />
                <stop offset="50%" stopColor="#BE76B4" />
                <stop offset="100%" stopColor="#E988AA" />
              </linearGradient>
              {/* Stem: Purple curving gracefully */}
              <linearGradient id="stemGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9E4AA4" />
                <stop offset="100%" stopColor="#7BB6B9" />
              </linearGradient>
            </defs>

            {/* Gracefully arched stem connected to 'h' */}
            <path d="M6 42 C 16 38, 26 30, 35 22" stroke="url(#stemGrad)" strokeWidth="2.2" strokeLinecap="round" />
            
            {/* Left pointed leaf */}
            <path d="M26 26 C 21 16, 23 8, 31 5 C 31 14, 29 21, 26 26 Z" fill="url(#leafTealPink)" opacity="0.94" />
            
            {/* Center upright leaf */}
            <path d="M33 23 C 34 11, 41 2, 48 1 C 48 11, 42 19, 33 23 Z" fill="url(#leafLavenderMagenta)" opacity="0.96" />
            
            {/* Right rose leaf */}
            <path d="M35 23 C 43 23, 54 25, 58 30 C 50 33, 41 29, 35 23 Z" fill="url(#leafRose)" opacity="0.94" />
          </svg>
        </div>

        {/* Wordmark with exact reference gradient: #803893 (purple) to #EE70B8 (rose pink) */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <h1 className="font-serif italic text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#803893] via-[#A845A3] to-[#EE70B8] drop-shadow-xs whitespace-nowrap select-none">
            Rhythma
          </h1>
        </motion.div>
      </motion.div>

      {/* ── Tagline: Centered, Deep Purple #76388F ── */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: staggerDelay + 0.15, ease: "easeOut" }}
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#76388F] tracking-tight leading-snug"
      >
        Her Rhythm. Her Health. Her Power.
      </motion.h2>

      {/* ── Subtext: Centered, 2 Lines, Dusty Purple #7D6688 ── */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: staggerDelay + 0.3, ease: "easeOut" }}
        className="text-[#7D6688] text-sm sm:text-base lg:text-lg max-w-md leading-relaxed font-normal text-center"
      >
        Your AI health companion for every phase<br className="hidden sm:inline" /> of her health.
      </motion.p>

      {/* ── Pill CTA Button ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: staggerDelay + 0.45, ease: "easeOut" }}
        className="pt-1"
      >
        <motion.a
          href="#download"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 30px -5px rgba(118, 56, 143, 0.45), 0 0 20px 2px rgba(238, 112, 184, 0.3)",
          }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#76388F] hover:bg-[#652E7D] text-white px-8 py-3 rounded-full font-semibold text-base shadow-md transition-all inline-flex items-center gap-2.5 group"
        >
          <span>Download App</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </div>
  );
}
