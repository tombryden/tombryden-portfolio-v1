"use client";

import { ReactTyped } from "react-typed";

const LanguagesTyped = () => {
  return (
    <ReactTyped
      typeSpeed={50}
      backSpeed={50}
      smartBackspace={false}
      startDelay={100}
      loop
      className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
      strings={[
        "React.",
        "Next.js.",
        "Java.",
        "Spring Boot.",
        "GraphQL.",
        "C#.",
        "C++.",
        "MySQL.",
      ]}
    />
  );
};

export default LanguagesTyped;
