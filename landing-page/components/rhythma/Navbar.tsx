"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  navAnimationDelay?: number;
}

export default function Navbar({ navAnimationDelay = 0.4 }: NavbarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: navAnimationDelay, ease: "easeOut" }}
      className="w-full bg-transparent shrink-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo with uploaded 3D ribbon 'R' emblem */}
        <a href="#" className="flex items-center gap-2.5 group select-none">
          <img
            src="/rhythma-logo-transparent.png"
            alt="Rhythma Logo"
            className="w-10 h-10 object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
          />
          <span className="font-serif italic font-bold text-2xl md:text-3xl text-[#532076] tracking-tight">
            Rhythma
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-[#7A6285] text-sm md:text-base">
          <a href="#explore" className="hover:text-[#6B3FA0] transition-colors">
            Explore
          </a>
          <a href="#features" className="hover:text-[#6B3FA0] transition-colors">
            Features
          </a>
          <a href="#wellness" className="hover:text-[#6B3FA0] transition-colors">
            Wellness
          </a>
          <a href="#about" className="hover:text-[#6B3FA0] transition-colors">
            About
          </a>
          <a href="#community" className="hover:text-[#6B3FA0] transition-colors">
            Community
          </a>
          <a href="#contact" className="hover:text-[#6B3FA0] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <motion.a
          href="#download"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgba(107, 63, 160, 0.4)" }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#6B3FA0] hover:bg-[#583287] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all"
        >
          Download App
        </motion.a>
      </div>
    </motion.header>
  );
}
