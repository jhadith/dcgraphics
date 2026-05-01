import { CheckCircle, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";
import { ButtonLink } from "../ui/ButtonLink.jsx";
import { MediaFrame } from "../ui/MediaFrame.jsx";
import { SectionHeader } from "../ui/SectionHeader.jsx";
import { TagList } from "../ui/TagList.jsx";
import { ContactStrip } from "./ContactStrip.jsx";

export function ServiceTemplate({ service }) {
  const [featuredMedia, ...supportingMedia] = service.media;

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">{service.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-8 text-graphite">{service.summary}</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-graphite">{service.process}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.phoneHref}>
                <Phone size={18} />
                Free Quote
              </ButtonLink>
              <ButtonLink href={contact.whatsappHref} variant="light">
                <MessageCircle size={18} />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
          <MediaFrame media={featuredMedia} className="aspect-[4/3]" />
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <TagList items={service.highlights} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="What we make"
            title={`${service.label} options`}
            text="Choose the format that fits your business, your space, and the way customers discover you."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {service.offerings.map((offering) => (
              <div key={offering} className="flex min-h-16 items-center gap-3 rounded-lg border border-line bg-paper px-4">
                <CheckCircle className="shrink-0 text-cyan" size={20} />
                <span className="font-semibold text-graphite">{offering}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why DG Graphics"
            title="A local team for design, production, and delivery."
            text="Get practical guidance, clear communication, and finished work made for Houston businesses."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-lg border border-line bg-white p-6">
                <h3 className="font-display text-xl font-bold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {supportingMedia.length ? (
        <section className="bg-white py-16">
          <div className="container-page">
            <SectionHeader eyebrow="Selected work" title="Real project media from DG Graphics." />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {supportingMedia.map((media) => (
                <MediaFrame key={media.src} media={media} className="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16">
        <div className="container-page grid gap-8 rounded-lg border border-line bg-white p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">Visit the shop</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">Houston consultations and quotes.</h2>
          </div>
          <div className="grid gap-4 text-sm text-graphite sm:grid-cols-2">
            <a className="focus-ring flex gap-3 rounded-md hover:text-ink" href={contact.mapHref}>
              <MapPin className="shrink-0 text-signal" size={20} />
              <span>{contact.address}</span>
            </a>
            <div>
              {contact.hours.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactStrip title={`Ready for ${service.label}?`} text="Send photos, artwork, sizes, or a rough idea and the team can guide the next step." />
    </>
  );
}
