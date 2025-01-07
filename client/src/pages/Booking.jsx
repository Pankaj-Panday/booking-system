import React from "react";
import Container from "../components/common/Container";
import { FaWhatsapp } from "react-icons/fa";

export default function Booking() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center rounded-lg p-10 text-center">
          <h1 className="mb-4 font-body text-3xl font-bold">
            Book Your Parlour Appointment
          </h1>
          <p className="mb-6 text-lg">
            We are here to pamper you! Schedule your visit by contacting us via
            WhatsApp.
          </p>
          <a
            // href="https://wa.me/123456789" // Replace with your actual WhatsApp number
            className="flex cursor-pointer items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-body font-medium text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with your icon component or inline SVG */}
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
