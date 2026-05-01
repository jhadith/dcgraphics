import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { contact, navigation } from "../../data/siteContent.js";
import { ButtonLink } from "../ui/ButtonLink.jsx";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-5">
        <NavLink className="focus-ring flex items-center gap-3 rounded-md" to="/" onClick={() => setIsOpen(false)}>
          <span className="grid size-11 place-items-center rounded-md bg-ink font-display text-lg font-black text-white">
            DG
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-black text-ink">DG Graphics</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-graphite">Houston, TX</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-white text-signal shadow-sm" : "text-graphite hover:bg-white hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={contact.phoneHref} variant="dark">
            <Phone size={17} />
            {contact.phone}
          </ButtonLink>
        </div>

        <button
          className="focus-ring grid size-11 place-items-center rounded-md border border-line bg-white lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="container-page grid gap-2 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-3 py-3 text-sm font-semibold ${
                    isActive ? "bg-white text-signal" : "text-graphite hover:bg-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ButtonLink href={contact.phoneHref} variant="dark" className="mt-2">
              <Phone size={17} />
              {contact.phone}
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
