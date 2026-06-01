import {
  Gem,
  Brush,
  Sparkles as SparkleIcon,
  Flower2,
  Palette,
  Scissors,
  Droplets,
} from "lucide-react";

const SERVICES = [
  {
    icon: Gem,
    name: "Gel Manicures",
    desc: "Long-lasting color that stays flawless for weeks.",
  },
  {
    icon: Brush,
    name: "Acrylic Full Set",
    desc: "Custom length and shape sculpted to perfection.",
  },
  {
    icon: SparkleIcon,
    name: "Dip Powder",
    desc: "Healthy, lightweight nails with rich vibrant color.",
  },
  {
    icon: Flower2,
    name: "Pedicure",
    desc: "A full relaxing foot treatment fit for royalty.",
  },
  {
    icon: Palette,
    name: "Nail Art & Custom Designs",
    desc: "Bring any photo — we make it happen.",
  },
  {
    icon: Scissors,
    name: "Eyebrow Waxing",
    desc: "Perfectly shaped brows to frame your face.",
  },
  {
    icon: Droplets,
    name: "Waxing Services",
    desc: "Smooth, clean results every time.",
  },
];

export const Services = ({ onBook }) => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div
            className="text-xs tracking-[0.3em] uppercase text-[#C9A77C] mb-3 reveal"
            data-idx="0"
          >
            The Menu
          </div>
          <h2
            className="font-serif-luxe text-4xl sm:text-5xl lg:text-6xl text-[#3D1A4A] reveal"
            data-idx="1"
          >
            Services <span className="italic text-[#7C2BAE]">crafted</span> with
            care
          </h2>
          <p
            className="mt-4 text-[#3D1A4A]/70 max-w-2xl mx-auto reveal"
            data-idx="2"
          >
            Every treatment is an experience — from your first sip of champagne
            to the final shimmer of topcoat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                data-testid={`service-card-${i}`}
                data-idx={i}
                className="reveal luxe-card p-7 group cursor-default"
              >
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-to-br from-[#F5EBE0] to-[#E8D8C4] border border-[#C9A77C]/30 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-6 w-6 text-[#7C2BAE]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif-luxe text-2xl text-[#3D1A4A]">
                  {s.name}
                </h3>
                <p className="mt-2 text-[#3D1A4A]/70 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-5 h-px w-12 bg-gradient-to-r from-[#C9A77C] to-transparent group-hover:w-24 transition-all duration-700" />
              </div>
            );
          })}

          {/* Final CTA card */}
          <div
            data-idx={SERVICES.length}
            className="reveal luxe-card p-7 bg-gradient-to-br from-[#4A1D5C] via-[#6B2D8B] to-[#7C2BAE] text-white border-0"
          >
            <div className="h-14 w-14 grid place-items-center rounded-2xl bg-white/15 backdrop-blur-md">
              <SparkleIcon
                className="h-6 w-6 text-[#F5E1C5]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="mt-5 font-serif-luxe text-2xl">Reserve Your Seat</h3>
            <p className="mt-2 text-white/80 leading-relaxed">
              Limited evening slots remaining this week. Treat yourself today.
            </p>
            <button
              data-testid="services-book-btn"
              onClick={onBook}
              className="mt-5 btn-luxe-ghost"
              style={{ background: "#fff", color: "#3D1A4A" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
