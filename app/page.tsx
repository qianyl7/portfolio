"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type MenuType = "about" | "email" | "projects" | null;

export default function Home() {

  // State to track if and which menu is open
  const [openMenu, setOpenMenu] = useState<MenuType>(null);

  // Ref to the nav element to track clicks outside of it
  const navRef = useRef<HTMLElement | null>(null);

  // Close menu if user clicks outside nav or presses Esc
  useEffect(() => {
    const handleClose = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key === "Escape") setOpenMenu(null);
      if (e instanceof MouseEvent && navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, []);


  const linkStyle = "relative group text-zinc-600 hover:text-violet-500 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors py-2";
  const underlineStyle = "absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full";

  // Main page layout
  // Content needs to be updated later
  return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
          
          
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Image
              className="rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
              src="/profile.jpeg"
              alt="Profile pic"
              width={120}
              height={120}
              priority
            />
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Computer Science Student & Software Developer in Making
            </p>
          </div>

          
          <nav ref={navRef} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium sm:justify-start">
            
            
            <div className="relative">
              <button onClick={() => setOpenMenu(openMenu === "about" ? null : "about")} className={linkStyle}>
                About
                <span className={underlineStyle}></span>
              </button>
              {openMenu === "about" && (
                <TerminalBox title="whoami">
                  <p className="leading-relaxed">
                    CS student building multi-agent systems and full stack applications.
                  </p>
                </TerminalBox>
              )}
            </div>

            
            <div className="relative">
              <button onClick={() => setOpenMenu(openMenu === "email" ? null : "email")} className={linkStyle}>
                Email
                <span className={underlineStyle}></span>
              </button>
              {openMenu === "email" && (
                <TerminalBox title="ls contacts">
                  <a href="mailto:chloe.liqy7@gmail.com" className="block hover:text-white transition-colors">
                    — chloe.liqy7 (at) gmail (dot) com
                  </a>
                </TerminalBox>
              )}
            </div>

            
            <div className="relative">
              <button onClick={() => setOpenMenu(openMenu === "projects" ? null : "projects")} className={linkStyle}>
                Projects
                <span className={underlineStyle}></span>
              </button>
              {openMenu === "projects" && (
                <TerminalBox title="git log --oneline">
                  <div className="space-y-2">
                    <p><span className="text-violet-400/80"> Multi-Agent System</span></p>
                    <p><span className="text-violet-400/80">GRC Assistant</span></p>
                  </div>
                </TerminalBox>
              )}
            </div>

            
            <a href="/cv.pdf" target="_blank" className={linkStyle}>
              CV
              <span className={underlineStyle}></span>
            </a>
            
            <Link href="/one-more-thing" className="relative group italic text-violet-500 hover:text-violet-400 py-2">
              One More Thing...
              <span className={underlineStyle}></span>
            </Link>

          </nav>
        </main>
      </div>
    );
  }

// TerminalBox used by nav menu to show content
// May need to resize it later
// May want to change the coour scheme to make it look more like ghostty
function TerminalBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-full mt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
      <div className="w-80 rounded-lg bg-[#121212] p-4 font-mono text-xs text-zinc-300 shadow-2xl border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-violet-400">{">"}</span>
          <span className="typewriter-text text-sm">{title}</span>
        </div>
        <div className="opacity-90">{children}</div>
      </div>
    </div>
  );
}