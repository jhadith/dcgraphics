import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { businessSignsDropdown, contact, navigation } from "../../data/siteContent.js";
import logoMark from "../../assets/logo-dggraphics-mark.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 py-3">
      <div className="container-page relative flex h-20 items-center justify-between gap-5 overflow-hidden rounded-2xl border border-white/45 bg-white/55 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl backdrop-saturate-150">
        <div
          className={`pointer-events-none absolute inset-0 scale-110 bg-[linear-gradient(90deg,rgba(244,214,12,0.30)_0%,rgba(255,255,255,0.62)_35%,rgba(255,255,255,0.48)_62%,rgba(247,224,44,0.36)_100%)] blur-2xl transition-opacity duration-300 ease-out ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />

        <NavLink className="focus-ring relative z-10 flex items-center gap-3 rounded-md" to="/" onClick={() => setIsOpen(false)}>
          <img className="h-12 w-auto shrink-0" src={logoMark} alt="DG Graphics" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-black text-navy">DG Graphics</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-graphite">Houston, TX</span>
          </span>
        </NavLink>

        <nav className="relative z-10 hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navigation.map((item) =>
            item.label === "Business Signs" ? (
              <div key={item.href} className="group relative">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `focus-ring relative inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm font-bold transition-all duration-200 ease-out after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-highlight after:transition-transform after:duration-200 hover:-translate-y-0.5 hover:bg-white/35 hover:text-navy hover:shadow-[0_8px_22px_rgba(17,19,24,0.08)] hover:after:scale-x-100 ${
                      isActive ? "bg-white/25 text-navy after:scale-x-100" : "text-graphite after:scale-x-0"
                    }`
                  }
                >
                  {item.label}
                  <ChevronDown className="transition-transform group-hover:rotate-180" size={15} />
                </NavLink>
                <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-lg border border-white/55 bg-white/90 p-2 opacity-0 shadow-[0_18px_45px_rgba(17,19,24,0.16)] backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                  {businessSignsDropdown.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      className={({ isActive }) =>
                        `focus-ring block rounded-md px-3 py-2 text-sm font-bold transition hover:bg-navy/5 hover:text-navy ${
                          isActive ? "bg-navy/10 text-navy" : "text-graphite"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring relative rounded-md px-2 py-2 text-sm font-bold transition-all duration-200 ease-out after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-highlight after:transition-transform after:duration-200 hover:-translate-y-0.5 hover:bg-white/35 hover:text-navy hover:shadow-[0_8px_22px_rgba(17,19,24,0.08)] hover:after:scale-x-100 ${
                    isActive ? "bg-white/25 text-navy after:scale-x-100" : "text-graphite after:scale-x-0"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="relative z-10 hidden flex-col items-center gap-1 lg:flex">
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md text-sm font-black text-navy transition-colors duration-200 hover:text-graphite"
            href={contact.phoneHref}
          >
            <Phone size={17} />
            {contact.phone}
          </a>
          <span className="text-center text-xs font-bold text-graphite">
            English/Spanish
          </span>
        </div>

        <button
          className="focus-ring relative z-10 grid size-11 place-items-center rounded-md border border-navy/10 bg-white/45 text-navy transition hover:text-graphite lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="container-page mt-2 rounded-2xl border border-white/45 bg-white/65 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-2 p-3" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <div key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `focus-ring relative block rounded-md px-3 py-3 text-sm font-semibold transition-all duration-200 ease-out after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-center after:rounded-full after:bg-highlight after:transition-transform after:duration-200 hover:-translate-y-0.5 hover:bg-white/35 hover:text-navy hover:after:scale-x-100 ${
                      isActive ? "bg-white/25 text-navy after:scale-x-100" : "text-graphite after:scale-x-0"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.label === "Business Signs" ? (
                  <div className="ml-3 mt-1 grid gap-1 border-l border-navy/10 pl-3">
                    {businessSignsDropdown.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `focus-ring rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-white/35 hover:text-navy ${
                            isActive ? "bg-white/25 text-navy" : "text-graphite"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a
              className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-navy transition-colors duration-200 hover:text-graphite"
              href={contact.phoneHref}
            >
              <Phone size={17} />
              {contact.phone}
            </a>
            <span className="justify-self-center text-center text-xs font-bold text-graphite">
              English/Spanish
            </span>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
