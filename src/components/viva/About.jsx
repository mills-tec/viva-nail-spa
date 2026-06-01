import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 8, suffix: "+", label: "Years Serving Savannah" },
  { value: 100, suffix: "+", label: "5-Star Reviews" },
  {
    value: 0,
    suffix: "",
    label: "Complimentary Beverages Included",
    custom: "∞",
  },
];

const Counter = ({ to, suffix, custom }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (custom) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, custom]);

  return (
    <span
      ref={ref}
      className="font-serif-luxe text-5xl sm:text-6xl text-[#3D1A4A]"
    >
      {custom ? custom : n}
      {!custom && suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        {/* Left frame */}
        <div className="reveal" data-idx="0">
          <div className="shimmer-frame relative">
            <div className="shimmer-frame-inner aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80"
                alt="Viva Nail and Spa interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 float-card hidden sm:block">
              <div className="text-xs tracking-widest uppercase text-[#6B5577]">
                Est. 2017
              </div>
              <div className="font-serif-luxe text-2xl text-[#3D1A4A]">
                Savannah, GA
              </div>
            </div>
          </div>
        </div>

        {/* Right copy */}
        <div className="reveal" data-idx="1">
          <div className="text-xs tracking-[0.3em] uppercase text-[#C9A77C] mb-3">
            Our Story
          </div>
          <h2 className="font-serif-luxe text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#3D1A4A]">
            A beloved Savannah sanctuary on{" "}
            <span className="italic text-[#7C2BAE]">Abercorn Street</span>.
          </h2>
          <p className="mt-6 text-[#3D1A4A]/75 text-lg leading-relaxed">
            Viva Nail and Spa has been Savannah's quiet luxury secret for years
            — known for its immaculate cleanliness, warm welcoming staff,
            complimentary beverages, and nail artists who truly care about their
            clients.
          </p>
          <p className="mt-4 text-[#3D1A4A]/75 text-lg leading-relaxed">
            At the heart of the salon are{" "}
            <span className="font-medium text-[#6B2D8B]">
              Mimi, Mary, and Mae
            </span>{" "}
            — three artisans whose creativity and devotion have turned
            first-time visitors into lifelong clients.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="luxe-card p-5 text-center">
                <Counter to={s.value} suffix={s.suffix} custom={s.custom} />
                <div className="mt-2 text-xs uppercase tracking-widest text-[#6B5577]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
