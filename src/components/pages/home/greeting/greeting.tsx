import LanguagesTyped from "./languages-typed";
import AnimatedMovedown from "./animated-movedown";
import Image from "next/image";

const Greeting = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <Image
        src="/images/linkedin.jpeg"
        alt="Me Wearing a Suit"
        className="rounded-full mx-auto md:mx-0"
        height={240}
        width={240}
        priority
      />
      <h1 className="text-3xl md:text-7xl text-foreground font-semibold mt-8">
        Tom Bryden
      </h1>
      <h2 className="text-xl md:text-4xl text-muted-foreground font-semibold mt-2">
        Navigating the tech landscape with <LanguagesTyped />
      </h2>
      <p className="text-muted-foreground mt-8 max-w-3xl">
        I harness the transformative power of programming and technology to
        drive innovation and deliver impactful solutions. With a rich skill set
        I craft dynamic, scalable digital solutions that meet the demands of
        today&apos;s world.
      </p>

      {/* <AnimatedMovedown /> */}
    </section>
  );
};

export default Greeting;
