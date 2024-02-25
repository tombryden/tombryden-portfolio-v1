"use client";

import BulletPoint from "./bullet-point";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TimelineCard = ({
  right,
  bulletpoints,
  title,
  company,
  time,
  icon,
}: {
  right?: boolean;
  bulletpoints: string[];
  title: string;
  company: string;
  time: string;
  icon: ReactNode;
}) => {
  const rightFlexReverse = right ? " flex-row-reverse" : "";

  const rightAlignEnd = right ? " items-end" : "";

  const cardRef = useRef<HTMLDivElement>(null);

  // animate card on load
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const x = right ? 200 : -200;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        x,
        opacity: 0,
        ease: "back",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "center bottom",
        },
        duration: 0.7,
      });
    });

    return () => ctx.revert();
  }, [right]);

  return (
    <div className={`flex${rightFlexReverse}`}>
      <Card className="flex-1" ref={cardRef}>
        <CardHeader>
          <CardTitle>
            {title}
            <span className="text-primary"> @ {company}</span>
          </CardTitle>
          <CardDescription>{time}</CardDescription>
        </CardHeader>
        <CardContent className="ml-6 space-y-4">
          {bulletpoints.map((bullet, index) => (
            <BulletPoint key={index} text={bullet} />
          ))}
        </CardContent>
      </Card>

      <div className={`w-20 flex flex-col${rightAlignEnd} items-center`}>
        <div>{icon}</div>
        <Separator orientation="vertical" />
      </div>

      {/* blank div to allow for fixed width seperator for nice spacing */}
      <div className={"flex-1"} />
    </div>
  );
};

export default TimelineCard;
