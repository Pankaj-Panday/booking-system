import React, { useState } from "react";
import Container from "../components/common/Container";
import Map from "../components/contact/Map";
import Address from "../components/contact/Address";
import ContactForm from "../components/contact/Contact-form";

export default function Contact() {
  return (
    <main>
      <section className="bg-secondary-50 p-6 sm:p-12 lg:p-16">
        <Container>
          <header className="my-4">
            <h1 className="text-center font-body text-3xl font-bold uppercase text-primary-500 md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto my-3 text-center font-body text-sm text-primary-400 md:text-base lg:w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              fugiat quisquam aut consectetur perferendis repellat ipsam
              provident nulla quis odio labore totam veritatis nisi quos ad ex,
              eligendi unde nihil.
            </p>
          </header>
        </Container>
      </section>
      <section>
        <Map />
      </section>
      <section className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-col justify-center gap-8 lg:flex-row lg:gap-16">
            <Address />
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
