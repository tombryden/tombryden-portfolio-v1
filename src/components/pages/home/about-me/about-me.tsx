import NumberSubtitle from "../../../number-subtitle";

const AboutMe = () => {
  return (
    <section>
      <NumberSubtitle number="01." title="About Me" />

      <p className="text-muted-foreground">
        Hello and welcome to the portfolio of someone who started their
        programming journey in the most unconventional of classrooms: the
        endless, pixelated landscapes of Minecraft. At the age of 12, armed with
        nothing but a passion, a Minecraft account, and a curiosity for how
        things worked, I dived headfirst into the world of Java to create my
        very own Minecraft plugins. Fast forward to the present, and while my
        projects have evolved beyond the confines of Minecraft, the essence of
        fun and exploration in technology remains the same.
      </p>

      <p className="text-muted-foreground mt-4">
        Most recently, I&apos;ve had the privilege of being a founding engineer
        at Vera, where I built the entire product from the ground up -
        architecting and developing an AI-powered platform that revolutionised
        how sales and pre-sales teams handle RFPs and security questionnaires. I
        designed and implemented the complete technical infrastructure, creating
        both the workflow management system and the core AI agent that generates
        high-accuracy responses in minutes.
      </p>

      <p className="text-muted-foreground mt-4">
        I specialise in delivering end-to-end solutions, from crafting intuitive
        front-end experiences to architecting robust back-end systems and CI/CD
        pipelines. I thrive in fast-paced environments where I can leverage my
        technical versatility to solve complex problems and drive projects from
        concept to production.
      </p>

      <p className="text-muted-foreground mt-4">
        Before Vera, I spent five years at IBM where I honed my skills in
        software consulting, working across various technologies and leading
        multiple teams through critical phases of system integration and
        regression testing. I&apos;m a proud First-Class Honours graduate from
        Manchester Metropolitan University, where I completed IBM&apos;s
        prestigious Digital & Technology Solutions Degree Apprenticeship,
        combining academic excellence with real-world industry experience.
      </p>
    </section>
  );
};

export default AboutMe;
