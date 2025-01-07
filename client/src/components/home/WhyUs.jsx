import React from "react";
import {
  FaMoneyBillWave,
  FaUserTie,
  FaRegStar,
  FaSpa,
  FaShieldAlt,
} from "react-icons/fa";
import { FaClover } from "react-icons/fa6";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function WhyUs() {
  const features = [
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Pricing",
      description: "Premium services at budget-friendly prices.",
    },
    {
      icon: <FaClover />,
      title: "All Skin Types Welcome",
      description: "Customized treatments for every skin type and tone.",
    },
    {
      icon: <FaUserTie />,
      title: "Experienced Professionals",
      description: "Skilled and certified beauty experts at your service.",
    },
    {
      icon: <FaRegStar />,
      title: "High-Quality Products",
      description: "Only the best, skin-safe, and cruelty-free products used.",
    },
    {
      icon: <FaSpa />,
      title: "Relaxing Ambiance",
      description: "A serene and rejuvenating environment to unwind.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Hygiene & Safety",
      description: "Strict adherence to cleanliness and hygiene standards.",
    },
  ];

  return (
    <section className="bg-surface-100 py-20">
      <Container>
        <SectionHeading
          text="Why choose us?"
          className="mb-16 text-secondary-700"
        />
        <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 p-6">
              <div className="text-2xl text-secondary-600">{feature.icon}</div>
              <h3 className="-mb-1 font-body text-xl font-medium text-accent-700">
                {feature.title}
              </h3>
              <p className="text-center text-xl text-accent-600">
                {feature.description}
              </p>
            </div>
          ))}
        </article>
      </Container>
    </section>
  );
}
