import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, mediaLibrary, services, sharedBenefits, testimonials } from "../data/siteContent.js";
import { ContactStrip } from "../components/sections/ContactStrip.jsx";
import { HeroProductSlider } from "../components/sections/HeroProductSlider.jsx";
import { TopicImageSlider } from "../components/sections/TopicImageSlider.jsx";
import { VerticalWordSlider } from "../components/sections/VerticalWordSlider.jsx";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { MediaFrame } from "../components/ui/MediaFrame.jsx";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";

export function HomePage() {
  const overviewMedia = services[4].media[0];
  const heroSliderItems = mediaLibrary.hero.map((media) => ({
    ...media,
    label: "DG Graphics Work",
  }));
  const topicSliderItems = services
    .map((service) => {
      const image = service.media.find((media) => media.type === "image");

      return image
        ? {
            label: service.label,
            src: image.src,
            alt: image.alt,
          }
        : null;
    })
    .filter(Boolean);

  return (
    <>
      <section className="overflow-hidden">
        <div className="container-page grid min-h-[calc(100svh-6.5rem)] gap-8 pt-4 pb-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:pt-3 lg:pb-8">
          <div className="max-w-3xl">
           
            <h1 className="mt-3 font-display text-6xl font-black leading-[1.01] text-ink sm:text-7xl lg:text-[5.25rem] xl:text-[6.35rem]">
              WE BUILD <VerticalWordSlider /> THAT GROW YOUR BUSSINESS
            </h1>
          </div>

          <div className="lg:pt-1">
            <HeroProductSlider items={heroSliderItems} className="h-[44svh] min-h-[300px] sm:h-[48svh] lg:h-[58svh] lg:min-h-[470px]" />
          </div>
        </div>

        <div className="container-page grid gap-6 border-t border-line py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-lg leading-8 text-graphite">
              DG Graphics helps local businesses design, produce, and install visual materials that get seen: storefront signs,
              vehicle graphics, banners, window vinyl, print products, and branded apparel.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.phoneHref}>
                <Phone size={18} />
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href={contact.whatsappHref} variant="light">
                <MessageCircle size={18} />
                WhatsApp Us
              </ButtonLink>
            </div>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-graphite">
              <a className="focus-ring flex items-center gap-2 rounded-md hover:text-ink" href={contact.mapHref}>
                <MapPin size={17} className="text-accent" />
                {contact.address}
              </a>
              <a className="focus-ring flex items-center gap-2 rounded-md hover:text-ink" href={contact.emailHref}>
                <Mail size={17} className="text-accent" />
                {contact.email}
              </a>
            </div>
          </div>

          <div>
            <MediaFrame media={overviewMedia} className="h-[260px] sm:h-[320px] lg:h-[360px]" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Services"
            title="One shop for the main things a business needs to be seen."
            text="The home keeps the broad overview. Detailed pages focus on each service category."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="focus-ring group rounded-lg border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">{service.eyebrow}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-ink">{service.label}</h3>
                  </div>
                  <ArrowRight className="mt-1 text-graphite transition group-hover:translate-x-1 group-hover:text-accent" size={22} />
                </div>
                <p className="mt-4 text-sm leading-6 text-graphite">{service.summary}</p>
              </Link>
            ))}
            <TopicImageSlider items={topicSliderItems} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Why choose DG Graphics"
            title="Built for local businesses that need clear, practical execution."
            text="From concept to finished product, the site should communicate speed, clarity, and real production capability."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {sharedBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="font-display text-xl font-bold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeader eyebrow="Reviews" title="Trusted by Houston businesses." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-lg border border-line bg-white p-6">
                <div className="flex gap-1 text-gold" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-6 text-graphite">&quot;{item.quote}&quot;</blockquote>
                <figcaption className="mt-5 font-semibold text-ink">{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
