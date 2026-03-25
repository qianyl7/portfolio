import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start gap-11 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <Image
            className="rounded-full object-cover" 
            src="/profile.jpeg"
            alt="Profile picture"
            width={120}
            height={120}
            priority
          />
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Computer Science Student and Software Developer in making
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium sm:justify-start">         
          <div className="group relative">
            <button className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors py-2">
              About
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
              <div className="w-80 rounded-lg bg-[#121212] p-4 font-mono text-sm text-zinc-300 shadow-2xl border border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">{">"}</span>
                    <span className="animate-pulse">whoami</span>
                  </div>
                  <p className="mt-2 opacity-90 leading-relaxed">
                    Computer Science student. Currently building multi-agent systems and full stack projects, with a strong interest in understanding how things work under the hood. Building this frontend-focused project, with the goal of landing a backend-focused role.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors py-2">
              Email
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
              <div className="w-80 rounded-lg bg-[#121212] p-4 font-mono text-sm text-zinc-300 shadow-2xl border border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">{">"}</span>
                    <span className="animate-pulse">ls contacts</span>
                  </div>
                  <div className="mt-2 space-y-1 opacity-90">
                    <a href="mailto:chloe.liqy7@gmail.com" className="block hover:text-white transition-colors">
                      — chloe.liqy7 (at) gmail (dot) com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors py-2">
              Projects
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
              <div className="w-80 rounded-lg bg-[#121212] p-4 font-mono text-sm text-zinc-300 shadow-2xl border border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">{">"}</span>
                    <span className="animate-pulse">git log --oneline</span>
                  </div>
                  <div className="mt-2 space-y-2 opacity-90">
                    <div>
                      <p>Multi-Agent Collaboration System</p>
                    </div>
                    <div>
                      <p>GRC Assistant(Governance, Risk, and Compliance)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/cv.pdf" target="_blank" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors py-2">
            CV
          </a>
          
          <a href="/one-more-thing" className="italic text-violet-400 hover:text-violet-300 dark:text-violet-400 transition-colors py-2">
            One More Thing...
          </a>

        </nav>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
        </div>
      </main>
    </div>
  );
}
