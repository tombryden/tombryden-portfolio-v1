"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AspectRatio } from "./ui/aspect-ratio";
import BulletPoint from "./bullet-point";

const AnimatedDescriptionImage = ({
  alt,
  src,
  bulletPoints,
  title,
}: {
  alt: string;
  src: string;
  bulletPoints: string[];
  title: string;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "bottom bottom",
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
    <div className="flex gap-8">
      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>

        <div className="space-y-4 ml-6">
          {bulletPoints.map((bullet, index) => (
            <BulletPoint key={index} text={bullet} />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <AspectRatio ratio={16 / 9}>
          <Image
            ref={imageRef}
            alt={alt}
            src={src}
            fill
            className="rounded"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default AnimatedDescriptionImage;
