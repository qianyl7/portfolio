import Image from "next/image";
import Link from "next/link";

export default function GamePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="self-center flex flex-col items-center gap-3">
          <Image
            className="object-cover border border-zinc-200 dark:border-zinc-800"
            src="/construction.png"
            alt="Under Construction"
            width={200}
            height={200}
            priority
          />
            <p className="text-base font-medium text-zinc-500 dark:text-zinc-400">
              Under Construction: This page is currently being built. Check back soon for updates!
            </p>
            <Link href="/" className="text-base italic text-violet-500 hover:text-violet-400">
              Sorry you are stuck with the main page for now.
            </Link>
        </div>
      </main>
    </div>
  );
}
