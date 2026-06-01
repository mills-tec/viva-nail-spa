import { useEffect } from "react";
import { Sparkles as SparkleIcon, X, Phone } from "lucide-react";

export const BookingSuccessDialog = ({ open, data, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const confetti = Array.from({ length: 14 });

  return (
    <div
      data-testid="booking-success-dialog"
      className="fixed inset-0 z-[100] grid place-items-center px-5"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-[#2A1135]/55 backdrop-blur-md"
        onClick={onClose}
        style={{ animation: "pop-in 400ms ease both" }}
      />

      <div className="relative pop-in w-full max-w-md rounded-[28px] bg-white overflow-hidden shadow-[0_40px_120px_-30px_rgba(74,29,92,0.6)]">
        {/* Decorative ribbon */}
        <div className="relative h-32 bg-gradient-to-br from-[#9D5FE2] via-[#7C2BAE] to-[#4A1D5C] overflow-hidden">
          {confetti.map((_, i) => {
            const left = (i * 7 + 5) % 100;
            const tx = (i % 2 === 0 ? 1 : -1) * (20 + ((i * 9) % 80));
            const rot = (i * 47) % 360;
            const delay = (i * 90) % 800;
            const emoji = ["✦", "✧", "❤", "★", "✿"][i % 5];
            return (
              <span
                key={i}
                className="confetti-bit text-white/90"
                style={{
                  left: `${left}%`,
                  bottom: 0,
                  "--tx": `${tx}px`,
                  "--rot": `${rot}deg`,
                  animationDelay: `${delay}ms`,
                }}
              >
                {emoji}
              </span>
            );
          })}
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="h-20 w-20 rounded-full bg-white/15 backdrop-blur-md grid place-items-center border border-white/30 pop-in"
              style={{ animationDelay: "120ms" }}
            >
              <SparkleIcon className="h-9 w-9 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <button
            data-testid="booking-success-close"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-7 text-center">
          <h3 className="font-serif-luxe text-3xl text-[#3D1A4A]">
            You're on the list,{" "}
            <span className="italic text-[#7C2BAE]">
              {data?.name?.split(" ")[0] || "lovely"}
            </span>
            .
          </h3>
          <p className="mt-3 text-[#3D1A4A]/75 leading-relaxed">
            We received your request for{" "}
            <span className="font-medium text-[#6B2D8B]">{data?.service}</span>
            {data?.date ? (
              <>
                {" "}
                on{" "}
                <span className="font-medium text-[#6B2D8B]">{data.date}</span>
              </>
            ) : null}
            {data?.time ? (
              <>
                {" "}
                at{" "}
                <span className="font-medium text-[#6B2D8B]">{data.time}</span>
              </>
            ) : null}
            . One of our artists will confirm via {data?.email} or {data?.phone}{" "}
            within the hour.
          </p>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#F5EBE0] to-[#FBF5EE] border border-[#C9A77C]/30 p-4 text-sm text-[#3D1A4A]/80">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-[#7C2BAE]" />
              Prefer instant? Call us at
              <a
                href="tel:+19123444116"
                className="font-medium text-[#7C2BAE] hover:underline"
              >
                (912) 344-4116
              </a>
            </div>
          </div>

          <button
            data-testid="booking-success-dismiss"
            onClick={onClose}
            className="btn-luxe-primary mt-7 w-full"
          >
            Beautiful — Thank You
          </button>
        </div>
      </div>
    </div>
  );
};
