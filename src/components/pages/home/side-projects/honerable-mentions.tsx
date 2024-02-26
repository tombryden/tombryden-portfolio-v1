"use client";

import SimpleBulletCard from "@/components/simple-bullet-card";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const bookingPoints = [
  "Created a booking system using a React front-end and a Java (Spring Boot REST API) back-end.",
  "Venue owners could sign up for an account, and subscribe to the platform to create their own customisable venue.",
  "This was integrated with Stripe to handle payment processing.",
  "Users could purchase bookable services from the venues (E.G. a hair cut) – eliminating the need for pen and paper booking systems.",
];

const minecraftPoints = [
  "Began my programming journey at age 12 by custom-coding plugins for my Minecraft server using Java and a MySQL database.",
  "Implemented monetisation strategies for the custom features created within the Minecraft server.",
  "Generated substantial income from the monetised features, marking an early success in my programming career.",
];

const HonerableMentions = () => {
  const honerableMentionsDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".simpleBulletCard", {
        scrollTrigger: {
          trigger: honerableMentionsDivRef.current,
          start: "bottom bottom",
        },
        scale: 0,
        duration: 0.3,
        ease: "back",
        stagger: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
      ref={honerableMentionsDivRef}
    >
      <SimpleBulletCard
        title="Booking System Platform"
        bulletPoints={bookingPoints}
      />
      <SimpleBulletCard
        title="Custom-coded Minecraft Server"
        bulletPoints={minecraftPoints}
      />
    </div>
  );
};

export default HonerableMentions;
