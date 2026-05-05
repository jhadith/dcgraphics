import { MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] grid justify-items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        className="focus-ring group inline-flex min-h-12 items-center gap-3 rounded-full border border-white/70 bg-ink px-4 py-2.5 text-white shadow-[0_16px_38px_rgba(17,19,24,0.28)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-graphite"
        href={contact.phoneHref}
        aria-label="Call DG Graphics now"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/12">
          <Phone size={18} strokeWidth={2.6} />
        </span>
        <span className="hidden pr-1 text-sm font-black sm:block">Call Now</span>
      </a>
      <a
        className="focus-ring group inline-flex min-h-14 items-center gap-3 rounded-full border border-white/70 bg-[#25d366] px-4 py-3 text-white shadow-[0_18px_45px_rgba(18,140,78,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-[#1fbd5b] hover:shadow-[0_22px_55px_rgba(18,140,78,0.45)]"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with DG Graphics on WhatsApp"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/18">
          <MessageCircle size={22} strokeWidth={2.6} />
        </span>
        <span className="hidden pr-1 text-sm font-black leading-tight sm:block">
          WhatsApp
          <span className="block text-xs font-bold text-white/85">Free quote</span>
        </span>
      </a>
    </div>
  );
}
