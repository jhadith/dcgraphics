import { MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "../../data/siteContent.js";
import { ButtonLink } from "../ui/ButtonLink.jsx";
import { MediaFrame } from "../ui/MediaFrame.jsx";
import { SectionHeader } from "../ui/SectionHeader.jsx";
import { TagList } from "../ui/TagList.jsx";
import { ContactStrip } from "./ContactStrip.jsx";
import { SectionCta } from "./SectionCta.jsx";
import { Seo } from "../ui/Seo.jsx";

export function ServiceTemplate({ service }) {
  const [featuredMedia, ...supportingMedia] = service.media;

  return (
    <>
      <Seo
        title={`${service.label} Houston, TX | DG Graphics LLC`}
        description={`${service.summary} Get a fast quote from DG Graphics LLC in Houston, TX.`}
      />

      <section>
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:py-20">
          <div className="flex max-w-[calc(100vw-2rem)] flex-col justify-center lg:max-w-none lg:-translate-y-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{service.eyebrow}</p>
            <h1 className="mt-5 max-w-[19ch] break-words font-display text-[2rem] font-black leading-[1.06] text-ink [overflow-wrap:anywhere] min-[380px]:text-[2.15rem] sm:max-w-none sm:text-6xl sm:[overflow-wrap:normal]">{service.title}</h1>
            <p className="mt-5 max-w-[calc(100vw-2rem)] text-lg font-semibold leading-8 text-graphite/76 [overflow-wrap:anywhere] sm:max-w-2xl sm:[overflow-wrap:normal]">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-ink sm:min-h-[430px] lg:min-h-[520px]">
            {featuredMedia.type === "video" ? (
              <video className="h-full w-full object-cover" src={featuredMedia.src} aria-label={featuredMedia.alt} muted loop playsInline autoPlay />
            ) : (
              <img className="h-full w-full object-cover" src={featuredMedia.src} alt={featuredMedia.alt} loading="eager" />
            )}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container-page">
          <TagList items={service.highlights} />
          <SectionCta
            title={`Need ${service.label} in Houston, TX?`}
            text="Send photos, measurements, artwork, or a deadline and we can help quote the job."
          />
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-8 py-4 lg:flex-row lg:items-center">
            <div className="lg:w-[28%]">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">What we make</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[1.04] text-ink sm:text-5xl">{service.label} options</h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-1">
              {service.offerings.map((offering, index) => (
                <span
                  key={offering}
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-5 py-2 font-display text-sm font-black uppercase tracking-[0.06em] text-white shadow-[0_14px_32px_rgba(17,19,24,0.14)]"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-xs text-navy">
                    {index + 1}
                  </span>
                  {offering}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-7 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Why DG Graphics</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[1.04] text-ink sm:text-6xl">Built for visibility.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[58%]">
              {service.benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-black text-accent">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-black text-ink">{benefit.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <SectionCta title="Ready for a quote?" text="A quick call or WhatsApp message is enough to start." />
        </div>
      </section>

      {supportingMedia.length ? (
        <section className="py-14 lg:py-20">
          <div className="container-page">
            <SectionHeader eyebrow="Selected work" title="Real project media from DG Graphics." />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {supportingMedia.map((media) => (
                <MediaFrame key={media.src} media={media} className="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Visit the shop</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-ink">Houston consultations and quotes.</h2>
          </div>
          <div className="grid gap-4 text-sm text-graphite sm:grid-cols-2">
            <a className="focus-ring flex gap-3 rounded-md hover:text-ink" href={contact.mapHref}>
              <MapPin className="shrink-0 text-accent" size={20} />
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
