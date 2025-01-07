import React from "react";
import Container from "../common/Container";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] max-h-[600px] min-h-[400px] bg-secondary-50 bg-cover bg-right-top bg-no-repeat max-xl:bg-[url('/images/hero_bg.jpg')] max-xl:before:absolute max-xl:before:inset-0 max-xl:before:z-0 max-xl:before:bg-black/40">
      <Container className="flex h-full items-center justify-between">
        <div className="relative flex-grow-0 bg-secondary-50 p-4 font-body sm:basis-3/5 sm:py-10 lg:py-16 xl:basis-5/12">
          <h1 className="font-body text-6xl font-extrabold uppercase tracking-tight text-primary-500">
            Feel Beautiful Every Day
          </h1>
          <p className="my-4 font-sans text-xl font-semibold text-primary-400">
            Experience top-notch beauty services tailored to your unique style
            and needs. From relaxing facials to stunning makeovers, we’re here
            to make you look and feel your best.
          </p>
          <Link to="/booking" className="primary-btn">
            Book your appointment
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 top-0 w-1/2 flex-1 bg-[url('images/hero_bg.jpg')] bg-cover bg-right-top bg-no-repeat max-xl:hidden"></div>
      </Container>
    </section>
  );
}
