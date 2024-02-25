"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { MoveDown } from "lucide-react";
import { useEffect, useRef } from "react";

const AnimatedMovedown = () => {
  const ref = useRef<HTMLButtonElement>(null);
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
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className="absolute bottom-10 rounded-full"
      // Icon={<MoveDown />}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <MoveDown />
    </Button>
  );
};

export default AnimatedMovedown;
