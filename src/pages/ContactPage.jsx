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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">Hablamos Espanol</p>
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
                  <Icon className="text-signal" size={24} />
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

      <section className="bg-ink py-16 text-white">
        <div className="container-page grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Business hours</p>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              {contact.hours.map((item) => (
                <p key={item.label}>
                  <strong className="text-white">{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Service areas</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {contact.serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/75">
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
