import React from "react";
import Container from "../common/Container";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutCount() {
  const items = [
    { id: 1, count: 2000, img: img1, text: "Happy customers served" },
    { id: 2, count: 5, img: img2, text: "years of experience" },
    { id: 3, count: 500, img: img3, text: "appointments daily" },
  ];
  return (
    <section className="bg-secondary-50 py-8 md:py-16">
      <Container>
        <header>
          <h2 className="text-center font-body text-3xl font-bold capitalize tracking-tight text-primary-500 lg:text-4xl">
            S-parlour by numbers
          </h2>
        </header>
        <div className="my-12 grid grid-cols-1 gap-6 font-body sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow"
            >
              <div className="aspect-square w-40 overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 text-center">
                <div className="text-4xl font-bold text-primary-600">
                  <AnimatedCounter from={0} to={item.count} />+
                </div>
                <div className="mt-1 text-lg font-medium lowercase text-primary-400">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
