import { MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";
import { ButtonLink } from "../ui/ButtonLink.jsx";

export function SectionCta({
  title = "Need pricing for a project like this?",
  text = "Call or send photos on WhatsApp and DG Graphics can guide the next step.",
}) {
  return (
    <div className="mt-10 flex flex-col gap-5 border-l-4 border-accent py-2 pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="max-w-2xl">
        <p className="font-display text-2xl font-black leading-tight text-ink">{title}</p>
        <p className="mt-2 text-base leading-7 text-graphite/76">{text}</p>
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
