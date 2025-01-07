import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Address() {
  const items = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />, // Map Marker icon
      title: "Address",
      description: "Asthan Mall Ramnagar, 244715, Uttarakhand",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />, // Phone icon
      title: "Phone",
      description: "1234567890",
    },
    {
      id: 3,
      icon: <FaEnvelope />, // Email icon
      title: "Email",
      description: "test@example.com",
    },
  ];

  return (
    <article className="flex-1 space-y-8 lg:max-w-[460px] lg:p-8">
      {items.map(({ id, icon, title, description }) => (
        <div key={id} className="flex gap-3">
          <div className="grid aspect-square h-12 min-w-12 place-items-center rounded-full bg-primary-500 text-lg text-white">
            {icon}
          </div>
          <div>
            <h2 className="font-body text-lg font-bold">{title}</h2>
            <p className="font-body font-light">{description}</p>
          </div>
        </div>
      ))}
    </article>
  );
}
