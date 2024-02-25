"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const AnimatedImage = ({ alt, src }: { alt: string; src: string }) => {
  const adaprioImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(adaprioImage.current, {
        scrollTrigger: {
          trigger: adaprioImage.current,
          start: "center bottom",
        },
        scale: "0.5",
        duration: 0.3,
        opacity: 0,
        ease: "back",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={adaprioImage} className="h-[700px] relative mt-8">
      <Image
        alt={alt}
        src={src}
        fill
        style={{ objectFit: "contain", objectPosition: "top" }}
      />
    </div>
  );
};

export default AnimatedImage;
