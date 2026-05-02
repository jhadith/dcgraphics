import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, services } from "../data/siteContent.js";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";

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
      <section className="py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Hablamos Espanol</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight text-ink">Contact DG Graphics.</h1>
            <p className="mt-5 text-lg leading-8 text-graphite">
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

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="focus-ring rounded-lg border border-line bg-paper p-5 transition hover:border-ink hover:bg-white"
                >
                  <Icon className="text-accent" size={24} />
                  <p className="mt-5 font-display text-xl font-bold text-ink">{method.label}</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Request a quote"
            title="Send the details that help price the job faster."
            text="Useful details include quantity, size, material, deadline, installation address, vehicle photos, storefront photos, or existing artwork."
          />
          <div className="rounded-lg border border-line bg-white p-6">
            <p className="font-display text-xl font-bold text-ink">Services available</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <a
                  key={service.slug}
                  className="focus-ring rounded-md border border-line bg-paper px-4 py-3 text-sm font-semibold text-graphite hover:border-ink hover:bg-white hover:text-ink"
                  href={`mailto:${contact.email}?subject=Quote%20Request%20-%20${encodeURIComponent(service.label)}`}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 rounded-2xl border border-white/45 bg-white/55 p-6 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl md:grid-cols-3 md:p-8">
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
                <span key={area} className="rounded-full border border-line bg-white/45 px-3 py-1 text-sm font-semibold text-graphite">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Visit Our Shop in Houston</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink">
              Walk in or call — we&apos;ll have your quote ready fast.
            </h2>
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

          <div className="overflow-hidden rounded-2xl border border-white/45 bg-white/55 p-2 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl">
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
    </>
  );
}
