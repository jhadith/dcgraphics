import { Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";
import { ButtonLink } from "../ui/ButtonLink.jsx";

export function ContactStrip({ title = "Ready to start your project?", text = "Call, WhatsApp, or email DG Graphics for a free quote." }) {
  return (
    <section className="bg-ink py-14 text-white">
      <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-black tracking-normal">{title}</h2>
          <p className="mt-3 text-base text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contact.phoneHref} variant="primary">
            <Phone size={18} />
            Call Now
          </ButtonLink>
          <ButtonLink href={contact.whatsappHref} variant="light">
            <MessageCircle size={18} />
            WhatsApp
          </ButtonLink>
          <ButtonLink href={contact.emailHref} variant="light">
            <Mail size={18} />
            Email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
