import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, navigation } from "../../data/siteContent.js";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-white font-display text-lg font-black text-ink">
              DG
            </span>
            <div>
              <p className="font-display text-xl font-black">DG Graphics LLC</p>
              <p className="text-sm text-white/70">Printing, signs, wraps, and apparel in Houston.</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-6 text-white/70">
            A local one-stop shop for business signage, vehicle graphics, banners, print products, and branded apparel.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Pages</p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} className="focus-ring rounded-md text-sm text-white/75 hover:text-white" to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a className="focus-ring flex items-center gap-2 rounded-md hover:text-white" href={contact.phoneHref}>
              <Phone size={16} />
              {contact.phone}
            </a>
            <a className="focus-ring flex items-center gap-2 rounded-md hover:text-white" href={contact.whatsappHref}>
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a className="focus-ring flex items-center gap-2 rounded-md hover:text-white" href={contact.emailHref}>
              <Mail size={16} />
              {contact.email}
            </a>
            <a className="focus-ring flex items-start gap-2 rounded-md hover:text-white" href={contact.mapHref}>
              <MapPin className="mt-0.5 shrink-0" size={16} />
              {contact.address}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
