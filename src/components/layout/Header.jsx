import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { contact, navigation } from "../../data/siteContent.js";
import logoMark from "../../assets/logo-dggraphics-mark.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const sampleY = Math.min(window.innerHeight - 1, 82);
      const sampledElement = document.elementFromPoint(window.innerWidth / 2, sampleY);
      setIsOverDarkSection(Boolean(sampledElement?.closest('[data-header-theme="dark"]')));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 shadow-[0_18px_55px_rgba(17,19,24,0.10)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 ${
        isOverDarkSection ? "bg-ink/48" : "bg-white/34"
      }`}
    >
      <div
        className={`relative flex min-h-16 w-full items-center justify-between gap-2 overflow-visible border-b px-4 transition-colors duration-300 sm:px-6 lg:min-h-[4.5rem] lg:px-8 ${
          isOverDarkSection ? "border-white/15 bg-ink/34" : "border-white/55 bg-white/42"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(244,214,12,0.24)_0%,rgba(255,255,255,0.72)_24%,rgba(255,255,255,0.48)_68%,rgba(247,224,44,0.34)_100%)] transition-opacity duration-300 ease-out ${
            isScrolled || isOverDarkSection ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />

        <NavLink
          className="focus-ring relative z-10 flex w-[11%] min-w-[86px] max-w-[132px] items-center rounded-md"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          <img className="h-9 w-auto shrink-0 object-contain sm:h-10 lg:h-12" src={logoMark} alt="DG Graphics" />
        </NavLink>

        <nav className="relative z-10 hidden flex-1 items-stretch justify-start gap-1 lg:flex xl:gap-1.5" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring relative flex min-h-10 items-center rounded-md px-2 py-2 text-xs font-black leading-none transition-all duration-200 ease-out after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:origin-center after:rounded-full after:bg-highlight after:transition-transform after:duration-200 hover:shadow-[0_8px_22px_rgba(17,19,24,0.08)] hover:after:scale-x-100 xl:px-2.5 xl:text-sm ${
                  isOverDarkSection
                    ? `hover:bg-white/14 hover:text-white ${isActive ? "bg-white/12 text-white after:scale-x-100" : "text-white/86 after:scale-x-0"}`
                    : `hover:bg-white/40 hover:text-navy ${isActive ? "bg-white/25 text-navy after:scale-x-100" : "text-graphite after:scale-x-0"}`
                }`
              }
            >
              <span className="whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="relative z-10 hidden min-w-[120px] flex-col items-center gap-0.5 pr-1 lg:flex xl:min-w-[136px]">
          <a
            className={`focus-ring inline-flex items-center justify-center gap-1.5 rounded-md text-xs font-black transition-colors duration-200 xl:text-sm ${
              isOverDarkSection ? "text-white hover:text-accent" : "text-navy hover:text-graphite"
            }`}
            href={contact.phoneHref}
          >
            <Phone size={17} />
            {contact.phone}
          </a>
          <span className={`text-center text-[11px] font-bold ${isOverDarkSection ? "text-white/76" : "text-graphite"}`}>
            English/Spanish
          </span>
        </div>

        <button
          className="focus-ring absolute right-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-md border border-navy/15 bg-white/90 text-navy shadow-[0_10px_24px_rgba(17,19,24,0.12)] transition hover:text-graphite sm:right-6 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-b border-white/55 bg-white/80 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl lg:hidden">
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
