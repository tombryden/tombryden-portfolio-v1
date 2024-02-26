import NumberSubtitle from "../../../number-subtitle";

const AboutMe = () => {
  return (
    <section>
      <NumberSubtitle number="01." title="About Me" />

      {/* <p className="text-muted-foreground">
        Hello! I&apos;m Tom, and my life has been an endless loop of
        coding, coffee, and occasionally crying over a misplaced semicolon since
        2012. My journey into the matrix began at the tender age of 12, armed
        with nothing but a fierce passion and a Minecraft account. Yes, you read
        that right. While most kids my age were trying to avoid doing homework,
        I was busy crafting plugins for Minecraft in Java, proving once and for
        all that I was the coolest kid in the virtual block (pun intended).
      </p> */}
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
        Since 2018, I&apos;ve been working for IBM as an IT Consultant in the
        UKI Quality Engineering Practice, where I began with a degree
        apprenticeship, leading to a First-Class Honours in Digital & Technology
        Solutions with a focus on Software Engineering. This path allowed me to
        transition smoothly into a full-time role in 2022, where I&apos;ve
        tackled diverse testing duties across various industries, enhancing my
        skills in API stubbing and automation suite development.
      </p>

      <p className="text-muted-foreground mt-4">
        Before IBM, I was a Maker Leader at York Maker Hub, teaching young
        learners about computing with Raspberry Pi&apos;s and Arduino&apos;s,
        and leading STEM projects. Dive deeper into my portfolio to discover the
        projects and adventures that have shaped my journey since those early
        Minecraft days.
      </p>
    </section>
  );
};

export default AboutMe;
