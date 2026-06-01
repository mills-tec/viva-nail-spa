import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah Pevey",
    text: "I absolutely love this place! Very professional and EXTREMELY clean. I've been to many nail salons around Savannah and this is by far my favorite. Vivian and Mary have both done my nails and I love them every time!",
  },
  {
    name: "Stephanie Matthews",
    text: "I have been coming to this shop for 4 years and I've never been disappointed. Mimi is truly amazing. The shop environment is welcoming and they give you complimentary beverages to make your appointment more comfortable. Highly recommend!",
  },
  {
    name: "Cali Jobe",
    text: "Always a pleasant environment with inviting staff. Mary and Mae are both amazing and very helpful with different design ideas. Highly recommend if you're in the Savannah area!",
  },
  {
    name: "L. Danielle Briscoe",
    badge: "Local Guide",
    text: "ASK FOR MIMI — She is amazing, very knowledgeable and she actually cares about your real nails. She's super creative — if you take a photo of nails you'd like, she can make it happen! I have been a loyal client for almost 8 years!",
  },
  {
    name: "Nicki Graz",
    badge: "Local Guide",
    text: "Fantastic salon! Mary was my tech and I only explained once what I was looking for and she executed it perfectly. I was so impressed I booked my next appointment before leaving!",
  },
  {
    name: "Shannon Bonin",
    text: "Hands down best nail salon! The ladies here did a fantastic job. The black and red ombre is out of this world!!!",
  },
];

const Card = ({ r, i }) => (
  <article
    data-testid={`review-card-${i}`}
    className="luxe-card p-8 w-[340px] sm:w-[420px] shrink-0 relative overflow-hidden"
  >
    <div
      aria-hidden
      className="absolute -top-3 -left-3 h-32 w-32 rounded-full opacity-30"
      style={{
        background:
          "radial-gradient(circle, rgba(201,167,124,0.55), transparent 70%)",
      }}
    />
    <Quote className="h-10 w-10 text-[#C9A77C]/60 -ml-1" strokeWidth={1.5} />
    <div className="mt-2 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star key={j} className="h-4 w-4 fill-[#C9A77C] stroke-[#C9A77C]" />
      ))}
    </div>
    <p className="mt-4 text-[#3D1A4A]/85 leading-relaxed text-[15px]">
      "{r.text}"
    </p>
    <div className="mt-6 flex items-center justify-between">
      <div>
        <div className="font-serif-luxe text-xl text-[#3D1A4A]">{r.name}</div>
        {r.badge && (
          <div className="text-[10px] uppercase tracking-widest text-[#C9A77C] mt-0.5">
            {r.badge}
          </div>
        )}
      </div>
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#9D5FE2] to-[#4A1D5C] grid place-items-center text-white font-serif-luxe">
        {r.name.charAt(0)}
      </div>
    </div>
  </article>
);

export const Reviews = () => {
  // Duplicate for seamless loop
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative py-24 overflow-hidden"
    >
      <div className="px-5 sm:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div
            className="text-xs tracking-[0.3em] uppercase text-[#C9A77C] mb-3 reveal"
            data-idx="0"
          >
            Kind Words
          </div>
          <h2
            className="font-serif-luxe text-4xl sm:text-5xl lg:text-6xl text-[#3D1A4A] reveal"
            data-idx="1"
          >
            Loved by <span className="italic text-[#7C2BAE]">Savannah</span>
          </h2>
        </div>
      </div>

      <div
        className="marquee-wrapper relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track px-5">
          {loop.map((r, i) => (
            <Card r={r} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
