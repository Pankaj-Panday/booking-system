import React from "react";
import { Link } from "react-router";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import professional from "../../assets/professional.jpg";
import airbrush from "../../assets/airbrush.jpg";
import bridal from "../../assets/bridal.jpg";
import party from "../../assets/party.webp";
import wedding from "../../assets/wedding.jpg";

// swiper js imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServiceSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          text="Our services"
          className="mb-12 text-secondary-500"
        />
        <ServicesSlider />
        <div className="mt-8 text-center">
          <Link to="/services" className="secondary-btn w-[190px]">
            Explore Services
          </Link>
        </div>
      </Container>
    </section>
  );
}

const ServicesSlider = () => {
  const services = [
    { title: "Bridal makeup", img: bridal },
    { title: "Wedding Makeup", img: wedding },
    { title: "Party makeup", img: party },
    { title: "Airbrush makeup", img: airbrush },
    { title: "Professional makeup", img: professional },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={16}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="my-custom-swiper"
    >
      {services.map((service, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col items-center gap-3">
            <div className="aspect-[4/3] w-full">
              <img
                src={service.img}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h3 className="font-body text-xl font-medium uppercase tracking-tight text-secondary-600">
              {service.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
