import { ArrowRight, BadgeCheck, BriefcaseBusiness, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, mediaLibrary, services, testimonials } from "../data/siteContent.js";
import { ContactStrip } from "../components/sections/ContactStrip.jsx";
import { SectionCta } from "../components/sections/SectionCta.jsx";
import { VerticalWordSlider } from "../components/sections/VerticalWordSlider.jsx";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";
import { Seo } from "../components/ui/Seo.jsx";
import designIcon from "../../imagenes/iconos/pincel-de-arte.png";
import productionIcon from "../../imagenes/iconos/tuerca.png";
import installationIcon from "../../imagenes/iconos/controlar.png";

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
    number: "1",
    title: "Design",
    text: "We create custom artwork that represents your brand. Free design consultation included.",
    icon: designIcon,
  },
  {
    number: "2",
    title: "Production",
    text: "We manufacture with premium materials and fast turnaround for business-ready projects.",
    icon: productionIcon,
  },
  {
    number: "3",
    title: "Installation",
    text: "Professional on-site installation with clean placement, timing, and practical guidance.",
    icon: installationIcon,
  },
];

export function HomePage() {
  const heroMedia = mediaLibrary.hero.find((media) => media.alt === "Window graphics project by DG Graphics") ?? mediaLibrary.hero[0];
  const recentMotionWork = [
    {
      title: "Window Graphics",
      media: mediaLibrary.hero.find((media) => media.alt === "Vinyl lettering sample from DG Graphics"),
    },
    {
      title: "Vehicle Graphics",
      media: services.find((service) => service.slug === "vehicle-graphics")?.media.find((media) => media.type === "video"),
    },
    {
      title: "Printing & Apparel",
      media: services.find((service) => service.slug === "printing-apparel")?.media.find((media) => media.type === "video"),
    },
  ].filter((item) => item.media);

  return (
    <>
      <Seo
        title="DG Graphics LLC | Sign Company Houston, Vehicle Wraps & Printing"
        description="DG Graphics LLC is a Houston, TX sign company for business signs, vehicle wraps, window graphics, promotional signs, printing, and apparel."
      />
      <section className="hero-background-slider relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-ink text-white">
        <img className="absolute inset-0 h-full w-full object-cover" src={heroMedia.src} alt={heroMedia.alt} loading="eager" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,24,0.82)_0%,rgba(17,19,24,0.56)_38%,rgba(17,19,24,0.12)_76%,rgba(17,19,24,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.32)_0%,transparent_46%,rgba(17,19,24,0.46)_100%)]" />

        <div className="container-page relative z-10 flex min-h-[calc(100svh-4.5rem)] items-center py-12 lg:py-14">
          <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-6xl">
            <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-accent sm:text-sm">DG Graphics Houston</p>
            <h1 className="mt-4 font-display text-[2.35rem] font-black leading-[1.02] text-white min-[380px]:text-[2.55rem] sm:text-6xl lg:text-[4.65rem] xl:text-[5.65rem]">
              <span className="block">WE BUILD</span>
              <span className="block">
                <VerticalWordSlider />
              </span>
              <span className="block">THAT GROW</span>
              <span className="block sm:hidden">YOUR</span>
              <span className="block sm:hidden">BUSINESS</span>
              <span className="hidden sm:block">YOUR BUSINESS</span>
            </h1>
            <p className="mt-6 max-w-[20rem] text-[13px] font-semibold leading-6 text-white/82 min-[380px]:max-w-[21rem] sm:max-w-2xl sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              DG Graphics helps local businesses design, produce, and install visual materials that get seen: storefront signs,
              vehicle graphics, banners, window vinyl, print products, and branded apparel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.phoneHref}>
                <Phone size={18} />
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href={contact.whatsappHref} variant="light">
                <MessageCircle size={18} />
                WhatsApp Us
              </ButtonLink>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-white/82">
              <a className="focus-ring flex items-center gap-2 rounded-md hover:text-white" href={contact.mapHref}>
                <MapPin size={17} className="text-accent" />
                {contact.address}
              </a>
              <a className="focus-ring flex items-center gap-2 rounded-md hover:text-white" href={contact.emailHref}>
                <Mail size={17} className="text-accent" />
                {contact.email}
              </a>
              <Link className="focus-ring flex items-start gap-2 rounded-md hover:text-white" to="/contact">
                <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Where to find us: Houston, TX. Serving {contact.serviceAreas.slice(1, 5).join(", ")} and nearby areas.
                </span>
              </Link>
            </div>
          </div>
        </div>

      </section>

      <section className="service-scroll-stack relative">
        <div>
          {services.map((service) => {
            const media =
              service.slug === "business-signs"
                ? service.media.find((item) => item.src.includes("20221103_212849"))
                : service.media.find((item) => item.type === "image") ?? service.media[0];

            return (
              <article
                key={service.slug}
                className="service-story-panel group sticky top-0 h-[88svh] min-h-[520px] overflow-hidden bg-ink text-white sm:h-screen sm:min-h-[620px]"
              >
                {media.type === "video" ? (
                  <video
                    className="service-story-media absolute inset-0 h-full w-full object-cover"
                    src={media.src}
                    aria-label={media.alt}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img className="service-story-media absolute inset-0 h-full w-full object-cover" src={media.src} alt={media.alt} loading="lazy" />
                )}
                <div className="service-story-scroll-shade absolute inset-0 z-[1] bg-ink/0" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,24,0.88)_0%,rgba(17,19,24,0.62)_36%,rgba(17,19,24,0.16)_72%,rgba(17,19,24,0.04)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.12)_0%,transparent_44%,rgba(17,19,24,0.34)_100%)]" />

                <div className="container-page relative z-10 flex h-full items-end pb-[14vh] pt-12 sm:pb-[20vh] sm:pt-16">
                  <div className="service-story-copy max-w-3xl">
                    <h2 className="font-display text-3xl font-black uppercase leading-[0.98] text-white min-[380px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                      {service.label}
                    </h2>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink to={`/${service.slug}`} className="bg-accent text-navy hover:bg-highlight">
                        View {service.label}
                        <ArrowRight size={18} />
                      </ButtonLink>
                      <ButtonLink href={contact.whatsappHref} variant="light">
                        <MessageCircle size={18} />
                        WhatsApp Quote
                      </ButtonLink>
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-sm font-black uppercase tracking-[0.22em] text-accent">Motion gallery</p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[1.02] sm:text-6xl">Our Recent Work</h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-7 text-white/68">
              Real project videos and animated samples from DG Graphics work.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {recentMotionWork.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-xl bg-white/8 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  {item.media.type === "video" ? (
                    <video className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.media.src} muted loop playsInline autoPlay />
                  ) : (
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.media.src} alt={item.media.alt} loading="lazy" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/88 via-ink/34 to-transparent p-5">
                    <h3 className="font-display text-2xl font-black uppercase text-white">{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6fb] py-16 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <h2 className="font-display text-4xl font-black leading-[1.02] text-navy sm:text-6xl">Our Process</h2>
            <p className="mt-4 text-xl font-semibold leading-8 text-graphite/72">Simple, fast and professional from idea to installation</p>
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-accent shadow-[0_18px_45px_rgba(17,19,24,0.10)]">
              <BadgeCheck size={18} />
              No. 1 Sign Company in Houston, TX
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl">
            <div className="absolute left-[16%] right-[16%] top-[5.6rem] hidden h-0.5 bg-accent md:block" aria-hidden="true" />
            <div className="grid gap-8 md:grid-cols-3">
              {processSteps.map((step) => (
                <article key={step.title} className="relative z-10 text-center">
                  <div className="mx-auto grid size-24 place-items-center rounded-full bg-white shadow-[0_18px_50px_rgba(17,19,24,0.10)]">
                    <img className="size-12 object-contain" src={step.icon} alt="" aria-hidden="true" loading="lazy" />
                  </div>
                  <div className="mx-auto -mt-2 grid size-16 place-items-center rounded-full bg-accent font-display text-3xl font-black text-navy shadow-[0_14px_32px_rgba(244,214,12,0.28)]">
                    {step.number}
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-black text-navy">{step.title}</h3>
                  <p className="mx-auto mt-4 max-w-xs text-base leading-7 text-graphite/72">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Reviews" title="Trusted by Houston businesses." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-xl bg-white/85 p-7 shadow-[0_16px_42px_rgba(17,19,24,0.08)]">
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

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-xl bg-ink text-white shadow-[0_24px_70px_rgba(17,19,24,0.20)]">
            <div className="relative grid gap-10 p-6 md:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-12">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(244,214,12,0.34),transparent_18rem),radial-gradient(circle_at_88%_20%,rgba(31,159,202,0.32),transparent_20rem),radial-gradient(circle_at_72%_88%,rgba(242,39,47,0.22),transparent_18rem)]"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Trust signals</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[1.04] sm:text-6xl">
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
                    <article key={metric.label} className="rounded-xl bg-white/10 p-5 backdrop-blur-xl">
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
