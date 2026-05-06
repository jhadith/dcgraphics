import { MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";
import { ButtonLink } from "../ui/ButtonLink.jsx";

export function SectionCta({
  title = "Need pricing for a project like this?",
  text = "Call or send photos on WhatsApp and DG Graphics can guide the next step.",
}) {
  return (
    <div className="mt-5 flex flex-col gap-3 rounded-lg border border-navy/10 bg-white/70 p-4 shadow-[0_12px_34px_rgba(17,19,24,0.08)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-lg font-black text-ink">{title}</p>
        <p className="mt-1 text-sm leading-6 text-graphite">{text}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <ButtonLink href={contact.phoneHref}>
          <Phone size={17} />
          Call Now
        </ButtonLink>
        <ButtonLink href={contact.whatsappHref} variant="light">
          <MessageCircle size={17} />
          WhatsApp
        </ButtonLink>
      </div>
    </div>
  );
}
