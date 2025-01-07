import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ from, to }) {
  const spanRef = useRef(null);

  useGSAP(() => {
    gsap.to(spanRef.current, {
      innerText: to,
      duration: 2,
      ease: "power1.out",
      snap: {
        innerText: 1,
      },
      scrollTrigger: {
        trigger: spanRef.current,
        start: "-50 80%",
        toggleActions: "play none none none",
      },
    });
  });
  return (
    <span className="inline-block" ref={spanRef}>
      {from}
    </span>
  );
}
