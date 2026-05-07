import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "../data/siteContent.js";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { QuoteForm } from "../components/sections/QuoteForm.jsx";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";
import { Seo } from "../components/ui/Seo.jsx";

const contactMethods = [
  {
    label: "Phone",
    value: contact.phone,
    href: contact.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Send project photos",
    href: contact.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
    icon: Mail,
  },
  {
    label: "Shop",
    value: contact.address,
    href: contact.mapHref,
    icon: MapPin,
  },
];

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact DG Graphics LLC | Houston, TX Signs, Wraps & Printing"
        description="Contact DG Graphics LLC in Houston, TX for quotes on signs, vehicle graphics, window graphics, banners, printing, and apparel."
      />

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Hablamos Espanol</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-[1.04] text-ink sm:text-6xl">Contact DG Graphics.</h1>
            <p className="mt-6 max-w-[calc(100vw-2rem)] text-xl leading-8 text-graphite/78 [overflow-wrap:anywhere] sm:max-w-xl sm:[overflow-wrap:normal]">
              Call, WhatsApp, email, or stop by the Houston shop for free quotes on signs, wraps, window graphics,
              banners, printing, and apparel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.phoneHref}>
                <Phone size={18} />
                Call Now
              </ButtonLink>
              <ButtonLink href={contact.whatsappHref} variant="light">
                <MessageCircle size={18} />
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="focus-ring rounded-xl bg-white/80 p-6 shadow-[0_14px_36px_rgba(17,19,24,0.08)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_48px_rgba(17,19,24,0.12)]"
                >
                  <Icon className="text-accent" size={24} />
                  <p className="mt-5 font-display text-2xl font-black text-ink">{method.label}</p>
                  <p className="mt-2 text-base leading-7 text-graphite/76">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Where to find us</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.04] text-ink sm:text-5xl">Visit Our Shop in Houston.</h2>
            <a
              className="focus-ring mt-5 inline-flex items-start gap-3 rounded-md text-base font-semibold leading-7 text-graphite hover:text-ink"
              href={contact.mapHref}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="mt-1 shrink-0 text-accent" size={20} />
              {contact.shopAddress}
            </a>
          </div>

          <div className="overflow-hidden rounded-xl bg-white/85 p-2 shadow-[0_18px_46px_rgba(17,19,24,0.10)] backdrop-blur-xl">
            <iframe
              className="h-[360px] w-full rounded-xl border-0"
              title="DG Graphics location on Google Maps"
              src={contact.mapEmbedHref}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Request a quote"
            title="Send the details that help price the job faster."
            text="Useful details include quantity, size, material, deadline, installation address, vehicle photos, storefront photos, or existing artwork."
          />
          <QuoteForm />
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-accent">Business hours</p>
            <div className="mt-4 grid gap-2 text-sm text-graphite">
              {contact.hours.map((item) => (
                <p key={item.label}>
                  <strong className="text-ink">{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-accent">Service areas</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {contact.serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-ink/[0.07] px-4 py-2 text-sm font-bold text-graphite">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
