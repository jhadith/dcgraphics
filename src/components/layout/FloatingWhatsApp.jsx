import { MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 left-4 z-[60] grid w-[min(340px,calc(100vw-2rem))] grid-cols-2 gap-2 sm:inset-x-auto sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto sm:grid-cols-1 sm:justify-items-end sm:gap-3">
      <a
        className="focus-ring group inline-flex min-h-11 min-w-0 items-center justify-center gap-1 rounded-full border border-white/70 bg-ink px-1.5 py-2 text-white shadow-[0_16px_38px_rgba(17,19,24,0.28)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-graphite sm:min-h-12 sm:gap-3 sm:px-4 sm:py-2.5"
        href={contact.phoneHref}
        aria-label="Call DG Graphics now"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/12 sm:size-8">
          <Phone size={17} strokeWidth={2.6} />
        </span>
        <span className="truncate text-xs font-black min-[380px]:text-sm">Call</span>
      </a>
      <a
        className="focus-ring group inline-flex min-h-11 min-w-0 items-center justify-center gap-1 rounded-full border border-white/70 bg-[#25d366] px-1.5 py-2 text-white shadow-[0_18px_45px_rgba(18,140,78,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-[#1fbd5b] hover:shadow-[0_22px_55px_rgba(18,140,78,0.45)] sm:min-h-14 sm:gap-3 sm:px-4 sm:py-3"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with DG Graphics on WhatsApp"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/18 sm:size-9">
          <MessageCircle size={19} strokeWidth={2.6} />
        </span>
        <span className="truncate text-xs font-black leading-tight min-[380px]:text-sm">
          <span className="sm:hidden">WA</span>
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="hidden text-xs font-bold text-white/85 sm:block">Free quote</span>
        </span>
      </a>
    </div>
  );
}
