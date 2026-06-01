import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "reviews", label: "Reviews" },
  { id: "booking", label: "Book" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      data-testid="viva-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(74,29,92,0.35)] border border-white"
            : "bg-white/55 backdrop-blur-md border border-white/70"
        }`}
        style={{ padding: scrolled ? "10px 18px" : "14px 22px" }}
      >
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-to-br from-[#9D5FE2] to-[#4A1D5C] text-white font-serif-luxe text-lg shadow-[0_8px_20px_-8px_rgba(124,43,174,0.6)]">
            V
          </span>
          <span className="font-serif-luxe text-xl sm:text-2xl text-[#3D1A4A] tracking-tight">
            Viva <span className="italic text-[#7C2BAE]">Nail & Spa</span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="text-[#3D1A4A]/80 hover:text-[#7C2BAE] text-sm font-medium tracking-wide transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#C9A77C] after:transition-all hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-2">
          <a
            data-testid="nav-call-btn"
            href="tel:+19123444116"
            className="hidden md:inline-flex items-center gap-2 text-sm text-[#3D1A4A]/80 hover:text-[#7C2BAE] transition-colors"
          >
            <Phone className="h-4 w-4" /> (912) 344-4116
          </a>
          <button
            data-testid="nav-book-btn"
            onClick={onBookClick}
            className="btn-luxe-primary text-sm"
            style={{ padding: "10px 20px" }}
          >
            Book Now
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-[#7C2BAE] to-[#4A1D5C] text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden mx-4 mt-3 rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_50px_-20px_rgba(74,29,92,0.35)] p-5 pop-in"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="w-full text-left py-3 px-3 rounded-xl text-[#3D1A4A] hover:bg-[#F5EBE0] transition-colors font-medium"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  onBookClick();
                }}
                className="btn-luxe-primary w-full"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
