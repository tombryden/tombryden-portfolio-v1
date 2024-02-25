import LanguagesTyped from "./languages-typed";
import AnimatedMovedown from "./animated-movedown";

const Greeting = () => {
  return (
    <section className="h-svh flex flex-col justify-center">
      <h1 className="text-7xl text-foreground font-semibold">Tom Bryden</h1>
      <h2 className="text-4xl text-muted-foreground font-semibold mt-2">
        Navigating the tech landscape with <LanguagesTyped />
      </h2>
      <p className="text-muted-foreground mt-8">
        I harness the transformative power of programming and technology to
        drive innovation and deliver impactful solutions. With a rich skill set
        I craft dynamic, scalable digital solutions that meets the demands of
        today&apos;s world.
      </p>

      <AnimatedMovedown />
    </section>
  );
};

export default Greeting;
