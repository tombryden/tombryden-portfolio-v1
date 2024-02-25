"use client";

import CircleIcon from "@/components/circle-icon";
import gsap from "gsap";
import { MoveDown } from "lucide-react";
import { useEffect, useRef } from "react";

const AnimatedMovedown = () => {
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<GSAPTween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationRef.current = gsap.to(ref.current, {
        y: 20,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const handlePause = () => animationRef.current?.pause();
  const handleResume = () => animationRef.current?.resume();

  return (
    <CircleIcon
      ref={ref}
      className="absolute bottom-10"
      Icon={<MoveDown />}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    />
  );
};

export default AnimatedMovedown;
