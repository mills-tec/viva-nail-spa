import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Sparkles as SparkleIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  CalendarDays,
  XCircle,
} from "lucide-react";

// ── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_7x7k2rs";
const EMAILJS_TEMPLATE_ID = "template_7yxrwwb";
const EMAILJS_PUBLIC_KEY = "jKg_QJ4VpElXUHhlQ";

const SERVICES = [
  "Gel Manicures",
  "Acrylic Full Set",
  "Dip Powder",
  "Pedicure",
  "Nail Art & Custom Designs",
  "Eyebrow Waxing",
  "Waxing Services",
];

const ARTISTS = ["No Preference", "Mimi", "Mary", "Mae"];

const TIME_SLOTS = (() => {
  const slots = [];
  for (let h = 10; h <= 19; h++) {
    const period = h < 12 ? "AM" : "PM";
    const hour = h === 12 ? 12 : h > 12 ? h - 12 : h;
    slots.push(`${hour}:00 ${period}`);
    if (h < 19) slots.push(`${hour}:30 ${period}`);
  }
  return slots;
})();

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function useClickOutside(ref, onClose) {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose]);
}

// ── Custom Select Dropdown ────────────────────────────────────────────────────
function CustomSelect({ value, onChange, options, placeholder, testId }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        data-testid={testId}
        onClick={() => setOpen((o) => !o)}
        className="luxe-input flex items-center justify-between text-left w-full"
      >
        <span className={value ? "text-[#2d1639]" : "text-[#a08bb0]"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#7C2BAE] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(74,29,92,0.25)] border border-[#ead8f3] overflow-hidden">
          {options.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between gap-2 transition-colors duration-150
                ${
                  value === opt
                    ? "bg-[#7C2BAE]/10 text-[#7C2BAE] font-medium"
                    : "text-[#3D1A4A] hover:bg-[#7C2BAE]/10 hover:text-[#7C2BAE]"
                }`}
            >
              <span>{opt}</span>
              {value === opt && (
                <Check className="h-4 w-4 text-[#7C2BAE] shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Custom Calendar Date Picker ───────────────────────────────────────────────
function DatePicker({ value, onChange, testId }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const toISO = (d) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const selectDay = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    if (d < today || d.getDay() === 0) return;
    onChange(toISO(day));
    setOpen(false);
  };

  const displayValue = value
    ? new Date(value + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        data-testid={testId}
        onClick={() => setOpen((o) => !o)}
        className="luxe-input flex items-center justify-between text-left w-full"
      >
        <span className={value ? "text-[#2d1639]" : "text-[#a08bb0]"}>
          {displayValue || "Pick a date"}
        </span>
        <CalendarDays className="h-4 w-4 text-[#7C2BAE] shrink-0" />
      </button>

      {open && (
        <div className="absolute z-50 left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(74,29,92,0.25)] border border-[#ead8f3] p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1.5 rounded-xl hover:bg-[#7C2BAE]/10 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-[#7C2BAE]" />
            </button>
            <span className="font-serif-luxe text-[#3D1A4A] text-base">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 rounded-xl hover:bg-[#7C2BAE]/10 transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-[#7C2BAE]" />
            </button>
          </div>

          <div className="grid grid-cols-7 mb-1">
            {DAY_NAMES.map((d, i) => (
              <div
                key={d}
                className={`text-center text-[10px] font-semibold uppercase tracking-wider pb-2 ${
                  i === 0 ? "text-[#C9A77C]/50" : "text-[#6B5577]/60"
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(viewYear, viewMonth, day);
              const isSunday = date.getDay() === 0;
              const isPast = date < today;
              const isDisabled = isSunday || isPast;
              const isSelected = value === toISO(day);
              const isToday = date.getTime() === today.getTime();

              return (
                <button
                  type="button"
                  key={day}
                  disabled={isDisabled}
                  onClick={() => selectDay(day)}
                  title={isSunday ? "Closed on Sundays" : undefined}
                  className={[
                    "h-9 w-9 mx-auto rounded-full text-sm flex items-center justify-center transition-all duration-150",
                    isDisabled
                      ? "cursor-not-allowed opacity-30"
                      : "cursor-pointer",
                    isSelected
                      ? "bg-[#7C2BAE] text-white font-semibold shadow-[0_4px_12px_-4px_rgba(124,43,174,0.55)]"
                      : "",
                    !isSelected && !isDisabled
                      ? "hover:bg-[#7C2BAE]/10 hover:text-[#7C2BAE]"
                      : "",
                    isToday && !isSelected
                      ? "ring-1 ring-[#C9A77C] font-semibold text-[#3D1A4A]"
                      : "",
                    isSunday ? "line-through" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-center text-[10px] text-[#C9A77C]/70 tracking-wider">
            Closed Sundays · Open Mon – Sat
          </p>
        </div>
      )}
    </div>
  );
}

// ── Custom Time Slot Picker ───────────────────────────────────────────────────
function TimePicker({ value, onChange, testId }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        data-testid={testId}
        onClick={() => setOpen((o) => !o)}
        className="luxe-input flex items-center justify-between text-left w-full"
      >
        <span className={value ? "text-[#2d1639]" : "text-[#a08bb0]"}>
          {value || "Pick a time"}
        </span>
        <Clock className="h-4 w-4 text-[#7C2BAE] shrink-0" />
      </button>

      {open && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(74,29,92,0.25)] border border-[#ead8f3] overflow-hidden max-h-52 overflow-y-auto">
          {TIME_SLOTS.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => {
                onChange(slot);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between gap-2 transition-colors duration-150
                ${
                  value === slot
                    ? "bg-[#7C2BAE]/10 text-[#7C2BAE] font-medium"
                    : "text-[#3D1A4A] hover:bg-[#7C2BAE]/10 hover:text-[#7C2BAE]"
                }`}
            >
              <span>{slot}</span>
              {value === slot && (
                <Check className="h-4 w-4 text-[#7C2BAE] shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Booking Form ─────────────────────────────────────────────────────────
export const Booking = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    artist: "No Preference",
    notes: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setVal = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service || !form.date)
      return;

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `New Booking Request — ${form.name} wants ${form.service}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          date: new Date(form.date + "T00:00:00").toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          time: form.time || "No preference",
          artist: form.artist,
          notes: form.notes || "None",
        },
        EMAILJS_PUBLIC_KEY,
      );

      console.log("Booking submission:", form);
      onSuccess && onSuccess(form);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        artist: "No Preference",
        notes: "",
      });
      setStatus("idle");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="relative py-24 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div
            className="text-xs tracking-[0.3em] uppercase text-[#C9A77C] mb-3 reveal"
            data-idx="0"
          >
            Reserve
          </div>
          <h2
            className="font-serif-luxe text-4xl sm:text-5xl lg:text-6xl text-[#3D1A4A] reveal"
            data-idx="1"
          >
            Treat Yourself <span className="italic text-[#7C2BAE]">Today</span>
          </h2>
          <p className="mt-4 text-[#3D1A4A]/70 reveal" data-idx="2">
            Tell us what you'd love — we'll confirm your appointment within the
            hour.
          </p>
        </div>

        <form
          data-testid="booking-form"
          onSubmit={submit}
          className="reveal luxe-card p-7 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <Field label="Full Name *">
            <input
              data-testid="booking-name"
              required
              value={form.name}
              onChange={set("name")}
              className="luxe-input"
              placeholder="Jane Doe"
            />
          </Field>

          <Field label="Email *">
            <input
              data-testid="booking-email"
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              className="luxe-input"
              placeholder="jane@example.com"
            />
          </Field>

          <Field label="Phone Number *">
            <input
              data-testid="booking-phone"
              type="tel"
              required
              value={form.phone}
              onChange={set("phone")}
              className="luxe-input"
              placeholder="(912) 555-0123"
            />
          </Field>

          <Field label="Service *">
            <CustomSelect
              value={form.service}
              onChange={setVal("service")}
              options={SERVICES}
              placeholder="Choose a service…"
              testId="booking-service"
            />
          </Field>

          <Field label="Preferred Date *">
            <DatePicker
              value={form.date}
              onChange={setVal("date")}
              testId="booking-date"
            />
          </Field>

          <Field label="Preferred Time">
            <TimePicker
              value={form.time}
              onChange={setVal("time")}
              testId="booking-time"
            />
          </Field>

          <Field label="Nail Artist Preference">
            <CustomSelect
              value={form.artist}
              onChange={setVal("artist")}
              options={ARTISTS}
              placeholder="No Preference"
              testId="booking-artist"
            />
          </Field>

          <Field label="Special Requests">
            <input
              data-testid="booking-notes"
              value={form.notes}
              onChange={set("notes")}
              className="luxe-input"
              placeholder="Inspo photo, color palette, etc."
            />
          </Field>

          {status === "error" && (
            <div className="sm:col-span-2 flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl px-5 py-3">
              <XCircle className="h-5 w-5 text-red-400 shrink-0" />
              <p className="text-sm text-red-600">
                Couldn't send your request. Please try again or call{" "}
                <a href="tel:+19123444116" className="font-medium underline">
                  (912) 344-4116
                </a>
              </p>
            </div>
          )}

          <div className="sm:col-span-2 flex flex-col items-center mt-3 gap-3">
            <button
              data-testid="booking-submit-btn"
              type="submit"
              disabled={status === "loading"}
              className="btn-luxe-primary px-10 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <SparkleIcon className="h-4 w-4" /> Book My Appointment
                </>
              )}
            </button>
            <p className="text-sm text-[#3D1A4A]/70 flex items-center gap-2">
              Or call us at
              <a
                href="tel:+19123444116"
                className="font-medium text-[#7C2BAE] hover:underline inline-flex items-center gap-1"
              >
                <Phone className="h-3.5 w-3.5" /> (912) 344-4116
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, children }) => (
  <div className="block">
    <span className="block text-xs uppercase tracking-widest text-[#6B5577] mb-2 font-medium">
      {label}
    </span>
    {children}
  </div>
);
