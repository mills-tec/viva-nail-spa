import { Clock, MapPin, Phone } from "lucide-react";

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const HOURS = [
  ["Monday", "10:00 AM – 7:00 PM"],
  ["Tuesday", "10:00 AM – 7:00 PM"],
  ["Wednesday", "10:00 AM – 7:00 PM"],
  ["Thursday", "10:00 AM – 7:00 PM"],
  ["Friday", "10:00 AM – 7:00 PM"],
  ["Saturday", "10:00 AM – 7:00 PM"],
  ["Sunday", "Closed"],
];

export const HoursContact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div
            className="text-xs tracking-[0.3em] uppercase text-[#C9A77C] mb-3 reveal"
            data-idx="0"
          >
            Visit Us
          </div>
          <h2
            className="font-serif-luxe text-4xl sm:text-5xl lg:text-6xl text-[#3D1A4A] reveal"
            data-idx="1"
          >
            Hours & <span className="italic text-[#7C2BAE]">Contact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-7">
          <div data-idx="0" className="reveal luxe-card p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-gradient-to-br from-[#F5EBE0] to-[#E8D8C4] border border-[#C9A77C]/30">
                <Clock className="h-5 w-5 text-[#7C2BAE]" />
              </span>
              <h3 className="font-serif-luxe text-2xl text-[#3D1A4A]">
                Business Hours
              </h3>
            </div>
            <ul className="divide-y divide-[#3D1A4A]/10">
              {HOURS.map(([d, t]) => (
                <li
                  key={d}
                  className="flex justify-between py-3 text-[#3D1A4A]/85"
                >
                  <span className="font-medium">{d}</span>
                  <span
                    className={t === "Closed" ? "text-[#C9A77C] italic" : ""}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div data-idx="1" className="reveal luxe-card p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-gradient-to-br from-[#F5EBE0] to-[#E8D8C4] border border-[#C9A77C]/30">
                <MapPin className="h-5 w-5 text-[#7C2BAE]" />
              </span>
              <h3 className="font-serif-luxe text-2xl text-[#3D1A4A]">
                Reach Us
              </h3>
            </div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#C9A77C] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B5577]">
                    Address
                  </div>
                  <a
                    data-testid="contact-address"
                    href="https://www.google.com/maps/search/?api=1&query=Viva+Nail+and+Spa+11215+Abercorn+St+Suite+4+Savannah+GA+31419"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#3D1A4A] hover:text-[#7C2BAE] transition-colors"
                  >
                    11215 Abercorn St Suite 4<br />
                    Savannah, GA 31419
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-[#C9A77C] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B5577]">
                    Phone
                  </div>
                  <a
                    data-testid="contact-phone"
                    href="tel:+19123444116"
                    className="text-[#3D1A4A] hover:text-[#7C2BAE] transition-colors text-lg font-medium"
                  >
                    +1 (912) 344-4116
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <FacebookIcon className="h-5 w-5 text-[#C9A77C] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B5577]">
                    Follow
                  </div>
                  <a
                    data-testid="contact-facebook"
                    href="https://www.facebook.com/people/ViVa-Nail-and-Spa/100063689164512/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#3D1A4A] hover:text-[#7C2BAE] transition-colors"
                  >
                    @ViVa Nail and Spa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-idx="2" className="reveal mt-7 shimmer-frame">
          <div className="shimmer-frame-inner">
            <iframe
              data-testid="contact-map"
              title="Viva Nail and Spa Location"
              src="https://www.google.com/maps?q=Viva+Nail+and+Spa+11215+Abercorn+St+Suite+4+Savannah+GA+31419&output=embed"
              className="w-full h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
