import { MessageCircle } from "lucide-react";
import { contact } from "../../data/siteContent.js";

export function FloatingWhatsApp() {
  return (
    <a
      className="focus-ring group fixed bottom-5 right-5 z-[60] inline-flex min-h-14 items-center gap-3 rounded-full border border-white/70 bg-[#25d366] px-4 py-3 text-white shadow-[0_18px_45px_rgba(18,140,78,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-[#1fbd5b] hover:shadow-[0_22px_55px_rgba(18,140,78,0.45)] sm:bottom-6 sm:right-6"
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
  );
}
