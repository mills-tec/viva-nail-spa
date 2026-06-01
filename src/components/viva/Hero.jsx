import { Sparkles } from "./Sparkles";
import { Sparkle, ChevronRight, Star } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80";

export const Hero = ({ onBook, onExplore }) => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen pt-32 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      <Sparkles density={70} />

      {/* Decorative gradient orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(157,95,226,0.45) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-10 -left-24 h-[360px] w-[360px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(201,167,124,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm mb-6 pop-in">
            <Sparkle className="h-3.5 w-3.5 text-[#C9A77C]" />
            <span className="text-xs tracking-widest uppercase font-medium text-[#3D1A4A]/80">
              Savannah · Abercorn St
            </span>
          </div>

          <h1
            data-testid="hero-heading"
            className="font-serif-luxe text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[0.98] tracking-tight text-[#3D1A4A]"
          >
            <span className="gloss-text">Where Beauty</span>
            <br />
            <span className="italic font-light text-[#6B2D8B]">Meets</span>{" "}
            <span className="gloss-text">Luxury</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#3D1A4A]/75 max-w-xl font-light">
            Savannah's Premier Nail & Spa Experience — indulgent treatments
            crafted by artisans who care about every detail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-book-btn"
              onClick={onBook}
              className="btn-luxe-primary"
            >
              Book Your Appointment <ChevronRight className="h-4 w-4" />
            </button>
            <button
              data-testid="hero-explore-btn"
              onClick={onExplore}
              className="btn-luxe-ghost"
            >
              Explore Our Services
            </button>
          </div>

          {/* social proof row */}
          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=120&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="happy client"
                  className="h-12 w-12 rounded-full border-[3px] border-white object-cover shadow-md"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C9A77C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#C9A77C] stroke-[#C9A77C]"
                  />
                ))}
              </div>
              <p className="text-sm text-[#3D1A4A]/70 mt-1">
                Loved by 100+ happy clients
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT visual */}
        <div className="relative z-10 lg:h-[640px] h-[520px]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[88%] h-[92%] shimmer-frame">
            <div className="shimmer-frame-inner w-full h-full">
              <img
                src={HERO_IMG}
                alt="Luxury nail salon interior"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Floating stat cards */}
          <div
            className="absolute top-2 left-2 lg:left-0 float-card pop-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="font-serif-luxe text-3xl text-[#3D1A4A] leading-none">
              8+
            </div>
            <div className="text-xs uppercase tracking-widest text-[#6B5577] mt-1">
              Years Serving Savannah
            </div>
          </div>

          <div
            className="absolute top-1/3 -right-2 lg:right-[-30px] float-card pop-in"
            style={{ animationDelay: "350ms" }}
          >
            <div className="font-serif-luxe text-3xl text-[#3D1A4A] leading-none">
              100+
            </div>
            <div className="text-xs uppercase tracking-widest text-[#6B5577] mt-1">
              5-Star Reviews
            </div>
          </div>

          <div
            className="absolute -bottom-4 left-6 lg:left-[10%] float-card pop-in"
            style={{ animationDelay: "500ms" }}
          >
            <div className="font-serif-luxe text-2xl text-[#3D1A4A] leading-none">
              Complimentary
            </div>
            <div className="text-xs uppercase tracking-widest text-[#6B5577] mt-1">
              Beverages Included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
