import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyUs from "../components/home/WhyUs";
import ServiceSection from "../components/home/ServiceSection";
import MyWork from "../components/home/MyWork";

export default function Home() {
  return (
    <main className="bg-secondary">
      <HeroSection />
      <WhyUs />
      <ServiceSection />
      <MyWork />
    </main>
  );
}
