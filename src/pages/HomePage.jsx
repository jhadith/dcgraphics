import { ArrowRight, BadgeCheck, BriefcaseBusiness, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, mediaLibrary, services, sharedBenefits, testimonials } from "../data/siteContent.js";
import { ContactStrip } from "../components/sections/ContactStrip.jsx";
import { HeroProductSlider } from "../components/sections/HeroProductSlider.jsx";
import { SectionCta } from "../components/sections/SectionCta.jsx";
import { TopicImageSlider } from "../components/sections/TopicImageSlider.jsx";
import { VerticalWordSlider } from "../components/sections/VerticalWordSlider.jsx";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { MediaFrame } from "../components/ui/MediaFrame.jsx";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";
import { Seo } from "../components/ui/Seo.jsx";

const trustMetrics = [
  {
    value: "25+",
    label: "Popular products",
    text: "Printing, signs, apparel, displays, vehicle graphics, and storefront visibility.",
    icon: BriefcaseBusiness,
  },
  {
    value: "5",
    label: "Client reviews featured",
    text: "Real customer feedback from the current DG Graphics website.",
    icon: Star,
  },
  {
    value: "1",
    label: "Houston shop",
    text: "Local production and quote support from Westheimer Rd in Houston, TX.",
    icon: MapPin,
  },
  {
    value: "0",
    label: "Contracts required",
    text: "Project-by-project service, matching the original site promise.",
    icon: BadgeCheck,
  },
];

const processSteps = [
  {
    title: "Design",
    text: "Confirm idea, size, material, artwork, and business goal.",
  },
  {
    title: "Production",
    text: "Print, cut, prepare, and finish the project in-house or locally.",
  },
  {
    title: "Installation",
    text: "Deliver or install with clean placement and practical guidance.",
  },
];

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
      <Seo
        title="DG Graphics LLC | Sign Company Houston, Vehicle Wraps & Printing"
        description="DG Graphics LLC is a Houston, TX sign company for business signs, vehicle wraps, window graphics, promotional signs, printing, and apparel."
      />
      <section className="overflow-hidden">
        <div className="container-page grid min-h-[calc(100svh-6.5rem)] gap-8 pt-4 pb-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:pt-3 lg:pb-8">
          <div className="max-w-3xl">
           
            <h1 className="mt-3 font-display text-6xl font-black leading-[1.01] text-ink sm:text-7xl lg:text-[5.25rem] xl:text-[6.35rem]">
              WE BUILD <VerticalWordSlider /> THAT GROW YOUR BUSINESS
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
              <Link className="focus-ring flex items-start gap-2 rounded-md hover:text-ink" to="/contact">
                <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Where to find us: Houston, TX. Serving {contact.serviceAreas.slice(1, 5).join(", ")} and nearby areas.
                </span>
              </Link>
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
          <SectionCta
            title="See a service that fits your project?"
            text="Send a photo, size, deadline, or rough idea and we can help shape the quote."
          />
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
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/55 bg-white/65 p-4 shadow-[0_18px_55px_rgba(17,19,24,0.10)] backdrop-blur-2xl">
              <div className="grid gap-3 md:grid-cols-3">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="relative rounded-lg border border-navy/10 bg-white/75 p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-ink font-display text-lg font-black text-gold">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-black text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-graphite">{step.text}</p>
                    {index < processSteps.length - 1 ? (
                      <ArrowRight
                        className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-gold p-1 text-ink shadow-[0_8px_20px_rgba(17,19,24,0.16)] md:block"
                        size={30}
                      />
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
            <SectionCta
              title="Ready to compare options?"
              text="Call or message the team for material, installation, and budget guidance."
            />
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

      <section className="py-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-white/55 bg-ink text-white shadow-[0_24px_70px_rgba(17,19,24,0.22)]">
            <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(244,214,12,0.34),transparent_18rem),radial-gradient(circle_at_88%_20%,rgba(31,159,202,0.32),transparent_20rem),radial-gradient(circle_at_72%_88%,rgba(242,39,47,0.22),transparent_18rem)]"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Trust signals</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
                  Built to help Houston businesses look ready for customers.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/78">
                  These numbers are based on the current DG Graphics website: its service catalog, visible client reviews,
                  and local shop information.
                </p>
              </div>
              <div className="relative z-10 grid gap-3 sm:grid-cols-2">
                {trustMetrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <article key={metric.label} className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-display text-5xl font-black text-gold">{metric.value}</p>
                          <h3 className="mt-2 font-display text-xl font-bold">{metric.label}</h3>
                        </div>
                        <span className="grid size-11 shrink-0 place-items-center rounded-md bg-white/12 text-gold">
                          <Icon size={23} />
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/76">{metric.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <SectionCta
            title="Want your project quoted quickly?"
            text="Use WhatsApp for the fastest quote path: send photos, measurements, and timeline."
          />
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
