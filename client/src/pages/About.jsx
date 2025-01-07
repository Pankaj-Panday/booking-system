import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import AboutStory from "../components/about/AboutStory";
import AboutCount from "../components/about/AboutCount";

export default function About() {
  return (
    <main className="relative">
      <div className="pattern-dots absolute inset-0 pattern-bg-white pattern-onSurface-500 pattern-opacity-10 pattern-size-8"></div>
      <div className="relative">
        <AboutHeader />
        <AboutStory />
        <AboutCount />
      </div>
    </main>
  );
}
