import { ShieldCheck, Wine, Award, CalendarCheck2 } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Spotlessly Clean Salon",
    desc: "Hospital-grade hygiene at every station, every time.",
  },
  {
    icon: Wine,
    title: "Complimentary Beverages",
    desc: "Sparkling water, wine, or champagne — on the house.",
  },
  {
    icon: Award,
    title: "Expert Nail Artists",
    desc: "Years of experience and a passion for true detail.",
  },
  {
    icon: CalendarCheck2,
    title: "Online Booking Available",
    desc: "Reserve your seat anytime, day or night.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative py-24 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div
            className="text-xs tracking-[0.3em] uppercase text-[#C9A77C] mb-3 reveal"
            data-idx="0"
          >
            The Difference
          </div>
          <h2
            className="font-serif-luxe text-4xl sm:text-5xl lg:text-6xl text-[#3D1A4A] reveal"
            data-idx="1"
          >
            Why <span className="italic text-[#7C2BAE]">Savannah</span> Chooses
            Viva
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-idx={i}
                className="reveal luxe-card p-7 text-center group"
              >
                <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-gradient-to-br from-[#F5EBE0] to-[#E8D8C4] border border-[#C9A77C]/30 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-7 w-7 text-[#7C2BAE]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif-luxe text-xl text-[#3D1A4A]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[#3D1A4A]/70 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
