import { MapPin, Phone } from "lucide-react";

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "booking", label: "Book" },
  { id: "contact", label: "Contact" },
];

export const Footer = () => {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer
      data-testid="footer"
      className="relative mt-12 pt-20 pb-10 text-[#F5E1C5]"
      style={{
        background:
          "radial-gradient(800px 400px at 50% -40%, rgba(157,95,226,0.45), transparent 60%), linear-gradient(180deg, #2A1135 0%, #1A0A22 100%)",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A77C] to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#9D5FE2] to-[#4A1D5C] shadow-[0_10px_30px_-10px_rgba(157,95,226,0.7)] mb-5">
          <span className="font-serif-luxe text-2xl text-white">V</span>
        </div>
        <h3 className="font-serif-luxe text-4xl sm:text-5xl text-white tracking-tight">
          Viva <span className="italic text-[#F5E1C5]">Nail & Spa</span>
        </h3>
        <p className="mt-2 text-[#F5E1C5]/70 tracking-widest uppercase text-xs">
          Savannah's premier nail experience
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-7">
          {NAV.map((l) => (
            <li key={l.id}>
              <button
                data-testid={`footer-link-${l.id}`}
                onClick={() => go(l.id)}
                className="text-sm text-[#F5E1C5]/80 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#C9A77C] after:transition-all hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#F5E1C5]/80">
          <a
            href="tel:+19123444116"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" /> (912) 344-4116
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Viva+Nail+and+Spa+11215+Abercorn+St+Suite+4+Savannah+GA+31419"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <MapPin className="h-4 w-4" /> 11215 Abercorn St, Savannah GA
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            data-testid="footer-facebook"
            href="https://www.facebook.com/people/ViVa-Nail-and-Spa/100063689164512/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="grid place-items-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#C9A77C]/40 to-transparent" />
        <p className="mt-6 text-xs text-[#F5E1C5]/60 tracking-wider">
          © 2025 Viva Nail and Spa · Savannah, Georgia · Crafted with love.
        </p>
      </div>
    </footer>
  );
};
