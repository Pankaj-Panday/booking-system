import React from "react";
import Container from "../common/Container";

export default function AboutStory() {
  const items = [
    {
      id: 1,
      img: "https://placehold.co/1200x800",
      title: "Our Vision: Enhancing Natural Beauty",
      description:
        "At our beauty parlour, we believe every individual possesses unique beauty waiting to be celebrated. Our mission is to enhance your natural elegance through personalized care and expert techniques. From skincare treatments that nourish and rejuvenate to haircare services that highlight your personality, we are dedicated to helping you feel confident and radiant. Our team of experienced professionals is here to ensure you experience the highest level of comfort and satisfaction in every service. Let us take care of your beauty needs while you relax and unwind in our calming environment.",
    },
    {
      id: 2,
      img: "https://placehold.co/1200x800",
      title: "Our Story: Passion for Perfection",
      description:
        "Our journey began with a simple goal: to create a space where self-care meets luxury. With years of experience in the beauty industry, we saw the need for a parlour that not only offers exceptional services but also values genuine connections with clients. Inspired by this vision, we established our parlour to provide personalized treatments designed for every individual's unique needs. From humble beginnings to becoming a trusted name in the community, our story is built on passion, dedication, and an unwavering commitment to perfection. When you visit us, you’re not just a client—you’re family.",
    },
  ];

  return (
    <section className="py-8 md:py-10 lg:py-16">
      <Container className="flex flex-col gap-12">
        {items.map(({ id, img, title, description }, index) => (
          <article
            key={id}
            className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-12"
          >
            <div
              className={`${index % 2 === 1 ? "md:order-1" : null} max-h-96 overflow-hidden rounded-sm md:w-2/5`}
            >
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="mb-2 flex flex-1 items-center font-body text-2xl font-bold tracking-tight text-secondary-700 after:ml-4 after:h-[0.9px] after:flex-1 after:bg-secondary-700 after:opacity-20 lg:text-3xl">
                {title}
              </h2>
              <p className="text-md font-medium text-accent-600 lg:text-lg">
                {description}
              </p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
