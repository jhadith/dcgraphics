import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { contact, subServices } from "../data/siteContent.js";
import { ContactStrip } from "../components/sections/ContactStrip.jsx";
import { SectionCta } from "../components/sections/SectionCta.jsx";
import { ButtonLink } from "../components/ui/ButtonLink.jsx";
import { MediaFrame } from "../components/ui/MediaFrame.jsx";
import { Seo } from "../components/ui/Seo.jsx";
import { NotFoundPage } from "./NotFoundPage.jsx";

export function SubServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  const subService = subServices.find((item) => item.slug === slug);

  if (!subService) {
    return <NotFoundPage />;
  }

  const [featuredMedia, ...supportingMedia] = subService.media;

  return (
    <>
      <Seo
        title={`${subService.label} Houston, TX | DG Graphics LLC`}
        description={`${subService.summary} Call or WhatsApp DG Graphics LLC in Houston, TX for a fast quote.`}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{subService.keyword}</p>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">{subService.title}</h1>
            <p className="mt-5 text-lg leading-8 text-graphite">{subService.summary}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
          <MediaFrame media={featuredMedia} className="aspect-[4/3]" />
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">What is included</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink">Practical options for Houston businesses.</h2>
            <p className="mt-4 text-base leading-7 text-graphite">
              This page gives Google and customers a clear topic-specific path while still connecting back to DG Graphics&apos;
              main service categories.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {subService.offerings.map((item) => (
              <div key={item} className="flex min-h-16 items-center gap-3 rounded-lg border border-line bg-paper px-4">
                <CheckCircle className="shrink-0 text-cyan" size={20} />
                <span className="font-semibold text-graphite">{item}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <SectionCta title={`Need ${subService.label}?`} text="Send photos, measurements, artwork, or timeline and the shop can quote the next step." />
          </div>
        </div>
      </section>

      {supportingMedia.length ? (
        <section className="py-16">
          <div className="container-page">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Related work</p>
            <h2 className="mt-3 font-display text-3xl font-black text-ink">Project examples from DG Graphics.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {supportingMedia.slice(0, 6).map((media) => (
                <MediaFrame key={media.src} media={media} className="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactStrip title={`Ready to quote ${subService.label}?`} text="Call or WhatsApp DG Graphics with photos, sizes, location, and deadline." />
    </>
  );
}
