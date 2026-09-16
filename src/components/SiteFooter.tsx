import Link from "next/link";
import { footerNav } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden>
            🏛️
          </span>
          <div>
            <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
            <span className="text-[#6B6560] text-sm ml-2">
              by Aiona Edge &amp; The SMF Works Project
            </span>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {footerNav.map((link) => {
            const className =
              "text-[#6B6560] hover:text-[#C9A96E] transition-colors";
            if (link.external) {
              return (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
