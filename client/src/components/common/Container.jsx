import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-2 sm:max-2xl:px-4 ${className}`}
    >
      {children}
    </div>
  );
}
