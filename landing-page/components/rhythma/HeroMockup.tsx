"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ChevronDown, Send, Globe, Sparkles } from "lucide-react";

interface LanguageItem {
  id: string;
  name: string;
  native: string;
  flag: string;
  prompt: string;
  answer: string;
  tip: string;
}

const languages: LanguageItem[] = [
  {
    id: "en",
    name: "English",
    native: "English",
    flag: "🇬🇧",
    prompt: "What is my fertile window this month?",
    answer: "Based on your 28.7-day cycle average, your estimated fertile window is June 7–12, with peak ovulation around June 10. 📊",
    tip: "Listening to your body's rhythm is essential self-care.",
  },
  {
    id: "hi",
    name: "Hindi",
    native: "हिंदी",
    flag: "🇮🇳",
    prompt: "क्या PCOS में चक्र अनियमित होना सामान्य है?",
    answer: "हाँ, PCOS में हार्मोनल असंतुलन से चक्र अनियमित हो सकता है। सही आहार और नियम से इसे संतुलित करने में मदद मिलती है। 🌸",
    tip: "Rhythma Tip: अपने शरीर की बात सुनना भी स्व-देखभाल है।",
  },
  {
    id: "mr",
    name: "Marathi",
    native: "मराठी",
    flag: "🇮🇳",
    prompt: "पाळीच्या वेदना कमी करण्यासाठी घरगुती उपाय काय आहेत?",
    answer: "कोमट पाण्याने शेक देणे, आले-हळदीचा चहा आणि सौम्य योगासने केल्याने पाळीच्या त्रासापासून तात्काळ आराम मिळतो.",
    tip: "आपल्या आरोग्याची काळजी घेणे हा तुमचा अधिकार आहे.",
  },
  {
    id: "ta",
    name: "Tamil",
    native: "தமிழ்",
    flag: "🇮🇳",
    prompt: "PCOS சீராக்க என்ன உணவுகள் சாப்பிட வேண்டும்?",
    answer: "நார்ச்சத்து நிறைந்த காய்கறிகள், கீரைகள் மற்றும் புரதச்சத்து உணவுகள் PCOS அறிகுறிகளைக் குறைக்க உதவும்.",
    tip: "உங்கள் சுழற்சியைப் புரிந்துகொள்வது மிக முக்கியம்.",
  },
  {
    id: "bn",
    name: "Bengali",
    native: "বাংলা",
    flag: "🇮🇳",
    prompt: "অনিয়মিত পিরিয়ডের প্রাকৃতিক সমাধান কি?",
    answer: "নিয়মিত সুষম আহার, পর্যাপ্ত ঘুম এবং অশ্বগন্ধা ও আয়ুর্বেদিক ভেষজ হরমোনের ভারসাম্য বজায় রাখতে সাহায্য করে।",
    tip: "আপনার শারীরিক সুস্থতা আমাদের প্রথম প্রাধান্য।",
  },
];

interface HeroMockupProps {
  staggerDelay?: number;
}

export default function HeroMockup({ staggerDelay = 0.6 }: HeroMockupProps) {
  const [langIndex, setLangIndex] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const [customMessages, setCustomMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([]);

  // Auto-cycle through languages every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const currentLang = languages[langIndex];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userText = chatInput;
    setCustomMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      setCustomMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `For "${userText}", Rhythma recommends tracking your symptoms daily in your private log. 🌸`,
        },
      ]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: staggerDelay, ease: "easeOut" }}
      className="flex justify-center items-center w-full py-2"
      style={{ perspective: "1200px" }}
    >
      {/* ── 3D Slanted Phone Container (Noticeably more slanted with depth shadow) ── */}
      <motion.div
        animate={{
          rotateY: [-16, -11, -16],
          rotateX: [6, 4, 6],
          rotateZ: [2, 1, 2],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          rotateY: -6,
          rotateX: 2,
          rotateZ: 0,
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
        className="relative w-full max-w-[240px] sm:max-w-[255px] shadow-[-18px_22px_45px_-8px_rgba(107,63,160,0.35),0_12px_24px_-8px_rgba(0,0,0,0.15)] rounded-[38px] my-auto"
      >
        {/* iPhone Metallic Bezel */}
        <div className="relative bg-[#1A181C] rounded-[38px] p-2 border-2 border-[#3D3742]">
          {/* Dynamic Island Notch */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1E] border border-gray-700" />
          </div>

          {/* Screen Content - Fits 100% inside container */}
          <div className="bg-[#FAF5FA] rounded-[30px] overflow-hidden pt-6 pb-2.5 px-2 flex flex-col h-[400px] sm:h-[430px] border border-[#EEDEEF] font-sans text-xs justify-between">
            {/* App Header */}
            <div>
              <div className="flex items-center justify-between mb-1.5 pt-0.5 px-1">
                <span className="font-serif italic font-bold text-sm text-[#6B3FA0]">Rhythma</span>
                <div className="flex items-center gap-1">
                  <Bell className="w-3 h-3 text-[#7A6285]" />
                  <div className="flex items-center gap-0.5 bg-[#6B3FA0]/10 text-[#6B3FA0] px-1.5 py-0.5 rounded-full text-[8px] font-bold">
                    <span>Priya - 32</span>
                    <ChevronDown className="w-2 h-2" />
                  </div>
                </div>
              </div>

              {/* Language Switcher Bar */}
              <div className="flex items-center gap-1 bg-white p-0.5 rounded-full border border-[#EEDEEF] mb-1.5 text-[8px] font-bold overflow-x-auto no-scrollbar">
                <Globe className="w-2.5 h-2.5 text-[#E85FA0] shrink-0 ml-1" />
                {languages.map((l, idx) => (
                  <button
                    key={l.id}
                    onClick={() => setLangIndex(idx)}
                    className={`px-1.5 py-0.5 rounded-full transition-all shrink-0 ${
                      langIndex === idx
                        ? "bg-[#6B3FA0] text-white shadow-xs"
                        : "text-[#7A6285] hover:text-[#6B3FA0]"
                    }`}
                  >
                    {l.flag} {l.native}
                  </button>
                ))}
              </div>

              {/* AI Assistant Banner */}
              <div className="bg-gradient-to-r from-[#6B3FA0] via-[#8E5BC7] to-[#E85FA0] text-white p-1.5 rounded-lg mb-1.5 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px]">
                    🌸
                  </div>
                  <div>
                    <div className="font-bold text-[9px] leading-tight">Rhythma AI</div>
                    <div className="text-[7.5px] text-white/80">{currentLang.name} ({currentLang.native})</div>
                  </div>
                </div>
                <span className="flex items-center gap-1 bg-white/20 text-white px-1 py-0.5 rounded-full text-[7.5px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>
            </div>

            {/* Auto-Cycling Animated Chat Stream */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-0.5 text-[9px] my-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLang.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1.5"
                >
                  {/* Tip Card */}
                  <div className="bg-[#FDF0F6] p-1.5 rounded-lg border border-[#F3CBE1] text-[#6B3FA0] text-[8.5px] flex items-start gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#E85FA0] shrink-0 mt-0.5" />
                    <span>{currentLang.tip}</span>
                  </div>

                  {/* User Question Prompt */}
                  <div className="flex justify-end">
                    <div className="bg-[#6B3FA0] text-white p-1.5 rounded-xl rounded-tr-xs shadow-xs text-[9px] max-w-[88%] font-medium">
                      {currentLang.prompt}
                    </div>
                  </div>

                  {/* AI Answer Reply */}
                  <div className="bg-white p-1.5 rounded-xl border border-[#EEDEEF] shadow-xs text-[#331B3F] text-[9px] leading-snug">
                    {currentLang.answer}
                  </div>
                </motion.div>
              </AnimatePresence>

              {customMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-1.5 rounded-xl shadow-xs max-w-[85%] text-[9px] ${
                      msg.sender === "user"
                        ? "bg-[#6B3FA0] text-white rounded-tr-xs"
                        : "bg-white text-[#331B3F] border border-[#EEDEEF] rounded-tl-xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="pt-1 border-t border-[#EEDEEF] flex items-center gap-1">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={`Ask in ${currentLang.name}...`}
                className="flex-1 bg-white border border-[#EEDEEF] rounded-full px-2 py-0.5 text-[8.5px] focus:outline-none focus:border-[#6B3FA0]"
              />
              <button
                type="submit"
                className="w-5 h-5 rounded-full bg-[#6B3FA0] text-white flex items-center justify-center shrink-0 shadow-xs"
              >
                <Send className="w-2.5 h-2.5" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
