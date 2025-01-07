import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";

export default function Modal({ isOpen, onClose, content }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      ></div>
      {/* Modal Container */}
      <div className="fixed left-[10%] top-1/2 min-h-16 min-w-60 max-w-xl -translate-y-1/2 rounded bg-white p-3 shadow-2xl max-sm:right-[10%] sm:left-1/2 sm:min-w-[30rem] sm:-translate-x-1/2 sm:p-6 lg:p-8">
        {/* Modal content */}
        {content}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center active:scale-95 sm:h-10 sm:w-10"
        >
          <IoIosCloseCircle className="h-full w-full text-gray-400" />
        </button>
      </div>
    </>,
    document.querySelector("#portal-div"),
  );
}
