"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedP = ({
  children,
  ...props
}: React.InputHTMLAttributes<HTMLParagraphElement>) => {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pRef.current, {
        scrollTrigger: {
          trigger: pRef.current,
          start: "center bottom",
        },
        opacity: 0,
        y: 60,
        duration: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <p ref={pRef} {...props}>
      {children}
    </p>
  );
};

export default AnimatedP;
