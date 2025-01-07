import React from "react";
import Container from "../common/Container";
import person from "../../assets/about-us-person.jpg";

export default function AboutHeader() {
  return (
    <section className="bg-secondary-50">
      <Container>
        <header className="relative flex flex-col items-center justify-between gap-4 py-12 font-body md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-primary-500">
              About us
            </h1>
            <p className="text-md font-medium text-primary-400">
              After years of experience working with clients, I decided to start
              my own parlour to provide personalized care and exceptional
              service.
            </p>
          </div>
          <div className="flex-1">
            <figure className="ml-auto overflow-hidden rounded-sm shadow-md lg:w-4/5">
              <img className="h-full w-full object-cover" src={person} alt="" />
            </figure>
          </div>
        </header>
      </Container>
    </section>
  );
}
