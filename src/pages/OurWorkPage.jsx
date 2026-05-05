import { Link } from "react-router-dom";
import { contact, workTopics } from "../data/siteContent.js";
import { ContactStrip } from "../components/sections/ContactStrip.jsx";
import { MediaFrame } from "../components/ui/MediaFrame.jsx";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";
import { Seo } from "../components/ui/Seo.jsx";

export function OurWorkPage() {
  const featuredItems = workTopics.flatMap((topic) =>
    topic.media.slice(0, 3).map((media) => ({
      ...media,
      topic: topic.label,
      slug: topic.slug,
    })),
  );

  return (
    <>
      <Seo
        title="Our Work | DG Graphics LLC Houston Signs, Wraps & Printing"
        description="See real DG Graphics LLC work in Houston, TX: business signs, vehicle graphics, window graphics, promotional signs, printing, and apparel."
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Real project work"
            title="Signs, wraps, window graphics, banners, printing, and apparel made for local businesses."
            text="Browse examples by topic, then call or WhatsApp the shop with photos, measurements, and your timeline."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item, index) => (
              <Link
                key={`${item.src}-${item.topic}`}
                className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""} focus-ring group block`}
                to={`/${item.slug}`}
              >
                <MediaFrame media={item} className={index === 0 ? "h-[520px]" : "h-[255px]"} />
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Featured work</p>
                    <h2 className="font-display text-xl font-black text-ink">{item.topic}</h2>
                  </div>
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-black text-white transition group-hover:bg-accent group-hover:text-ink">
                    View service
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {workTopics.map((topic) => (
        <section key={topic.slug} className="py-14">
          <div className="container-page">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Project category</p>
                <h2 className="mt-2 font-display text-3xl font-black text-ink">{topic.label}</h2>
              </div>
              <Link className="focus-ring rounded-md bg-white/70 px-4 py-2 text-sm font-black text-navy shadow-soft hover:bg-white" to={`/${topic.slug}`}>
                More about {topic.label}
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topic.media.map((media) => (
                <MediaFrame key={media.src} media={media} className="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContactStrip
        title="Want work like this for your business?"
        text={`Call ${contact.phone} or send project photos through WhatsApp for a fast quote.`}
      />
    </>
  );
}
