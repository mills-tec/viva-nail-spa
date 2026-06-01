import { useState } from "react";
import { Navbar } from "../components/viva/Navbar";
import { Divider } from "../components/viva/Divider";
import { About } from "../components/viva/About";
import { Services } from "../components/viva/Services";
import { WhyChooseUs } from "../components/viva/WhyChooseUs";
import { Reviews } from "../components/viva/Reviews";
import { Booking } from "../components/viva/Booking";
import { HoursContact } from "../components/viva/HoursContact";
import { BookingSuccessDialog } from "../components/viva/BookingSuccessDialog";
import { Footer } from "../components/viva/Footer";
import { Hero } from "../components/viva/Hero";
import { useReveal } from "../components/useReveal";

export default function VivaHome() {
  const rootRef = useReveal(".reveal");
  const [success, setSuccess] = useState({ open: false, data: null });

  const goSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={rootRef} data-testid="viva-home">
      <Navbar onBookClick={() => goSection("booking")} />
      <Hero onBook={() => goSection("booking")} onExplore={() => goSection("services")} />

      <Divider />
      <About />

      <Divider />
      <Services onBook={() => goSection("booking")} />

      <Divider />
      <WhyChooseUs />

      <Divider />
      <Reviews />

      <Divider />
      <Booking onSuccess={(data) => setSuccess({ open: true, data })} />

      <Divider />
      <HoursContact />

      <Footer />

      <BookingSuccessDialog
        open={success.open}
        data={success.data}
        onClose={() => setSuccess({ open: false, data: null })}
      />
    </div>
  );
}
