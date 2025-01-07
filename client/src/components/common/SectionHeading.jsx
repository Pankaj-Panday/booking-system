import React from "react";

export default function SectionHeading({ text, className }) {
  return (
    <h2
      className={`font-body text-center text-4xl font-bold capitalize tracking-tight ${className}`}
    >
      {text}
    </h2>
  );
}
