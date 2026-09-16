"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#1e1e28] bg-[#0a0a0f]/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-2.5">
          <span className="text-2xl" aria-hidden>
            🏛️
          </span>
          <span className="text-[#F5F0E8] font-bold tracking-tight">
            Wisdom<span className="text-[#C9A96E]">Forge</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {headerNav.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "text-[#C9A96E]"
                    : "text-[#A89B8C] hover:text-[#C9A96E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
