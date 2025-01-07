import React from "react";

export default function ModalContent({ img, title, description }) {
  return (
    <article className="flex flex-col items-center">
      {img && (
        <div className="h-24 w-24">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
      )}
      <div className="text-center font-body">
        <h2 className="my-3 text-4xl font-bold">{title}</h2>
        <p className="font-light">{description}</p>
      </div>
    </article>
  );
}
