import React from "react";
import SectionHeading from "../common/SectionHeading";

export default function MyWork() {
  const works = [
    {
      title: "Bridal Look",
      img: "images/work1.webp",
      description:
        "A stunning bridal look designed to enhance your natural beauty for the most special day of your life.",
    },
    {
      title: "Mehandi Look",
      img: "images/work2.webp",
      description:
        "A vibrant and traditional Mehandi look that captures the essence of cultural elegance and festive spirit.",
    },
    {
      title: "Wedding Look",
      img: "images/work3.jpg",
      description:
        "An exquisite wedding style that perfectly complements your personality and makes your big day truly unforgettable.",
    },
    {
      title: "Fashion Look",
      img: "images/work4.jpg",
      description:
        "A chic and trendy fashion look that showcases the latest styles and highlights your unique charm.",
    },
    {
      title: "Professional Look",
      img: "images/work5.jpg",
      description:
        "An elegant and refined professional look that exudes confidence and sophistication for any workplace or formal event.",
    },
    {
      title: "Photoshoot Look",
      img: "images/work6.avif",
      description:
        "A captivating photoshoot look tailored to make you shine in front of the camera with perfect styling and makeup.",
    },
  ];

  return (
    <section className="bg-secondary-50 px-4 py-12">
      <SectionHeading text="Our work" className="mb-16 text-primary-500" />
      <div className="container mx-auto lg:px-10">
        <div className="grid w-full gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {/* First Column */}
          <div className="flex flex-col gap-2">
            <div className="group relative h-[300px] overflow-hidden">
              <img
                src={works[0].img}
                alt={works[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 bg-black/50 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h3 className="font-body text-xl font-semibold tracking-tighter">
                  {works[0].title}
                </h3>
                <p className="text-lg font-medium">{works[0].description}</p>
              </div>
            </div>
            <div className="group relative h-[450px] overflow-hidden sm:h-[550px]">
              <img
                src={works[3].img}
                alt={works[3].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 bg-black/50 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h3 className="font-body text-xl font-semibold tracking-tighter">
                  {works[3].title}
                </h3>
                <p className="text-lg font-medium">{works[3].description}</p>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="flex flex-col gap-2 max-sm:hidden">
            <div className="group relative order-1 h-[300px] overflow-hidden">
              <img
                src={works[1].img}
                alt={works[1].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 bg-black/50 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h3 className="font-body text-xl font-semibold tracking-tighter">
                  {works[1].title}
                </h3>
                <p className="text-lg font-medium">{works[1].description}</p>
              </div>
            </div>
            <div className="group relative h-[550px] overflow-hidden">
              <img
                src={works[4].img}
                alt={works[4].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 bg-black/50 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h3 className="font-body text-xl font-semibold tracking-tighter">
                  {works[4].title}
                </h3>
                <p className="text-lg font-medium">{works[4].description}</p>
              </div>
            </div>
          </div>

          {/* Third column */}
          <div className="flex flex-col gap-2 sm:max-lg:col-span-2 sm:max-lg:flex-row">
            <div className="group relative h-[300px] overflow-hidden sm:max-lg:h-[450px] sm:max-lg:flex-1">
              <img
                src={works[2].img}
                alt={works[2].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 bg-black/50 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h3 className="font-body text-xl font-semibold tracking-tighter">
                  {works[2].title}
                </h3>
                <p className="text-lg font-medium">{works[2].description}</p>
              </div>
            </div>
            <div className="group relative h-[450px] overflow-hidden sm:max-lg:flex-1 lg:h-[550px]">
              <img
                src={works[5].img}
                alt={works[5].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 bg-black/50 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <h3 className="font-body text-xl font-semibold tracking-tighter">
                  {works[5].title}
                </h3>
                <p className="text-lg font-medium">{works[5].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
