import AnimatedImage from "@/components/animated-image";
import AnimatedP from "@/components/animated-p";
import NumberSubtitle from "@/components/number-subtitle";

const SideProjects = () => {
  return (
    <section className="mb-60">
      <NumberSubtitle number="03." title="Side Projects" />
      <div>
        <AnimatedP className="text-muted-foreground text-3xl font-semibold max-w-[50%]">
          I&apos;ve been working on personal projects as a hobby since the age
          of 12.
        </AnimatedP>
      </div>

      <AnimatedImage
        alt="Adaprio Home Page"
        src="/images/projects/adaprio/home.png"
      />
    </section>
  );
};

export default SideProjects;
