import TimelineCard from "@/components/timeline-card";
import NumberSubtitle from "../../../number-subtitle";
import { Cpu, Globe } from "lucide-react";

const IBMPoints = [
  "Underwent an intensive degree apprenticeship at IBM for my first four years, allocating four days weekly to client work and one day to study.",
  "Achieved a First-Class Honours degree in Digital & Technology Solutions (Software Engineering Pathway).",
  "Smoothly transitioned to a full-time role within IBM's UKI Quality Engineering Practice.",
  "Acquired broad experience in various industries.",
  "Fulfilled diverse testing duties, enhancing skills in API stubbing, automation suite development and more.",
  "Exhibited flexibility and proficiency in managing intricate testing scenarios and teams.",
  "Refined technical skills and deepened knowledge of sector-specific challenges.",
  "Emerged as a highly adaptable and essential contributor to the software testing and development sphere.",
];

// not the best but will do for now...
const iconClassname = "text-muted-foreground size-10 my-4";

const Work = () => {
  return (
    <section className="mt-24">
      <NumberSubtitle number="02." title="Experience" />

      <TimelineCard
        bulletpoints={IBMPoints}
        title="IT Consultant - UKI Quality Engineering Practice"
        company="IBM"
        time="2018 - Present"
        icon={<Globe className={iconClassname} />}
      />
      <TimelineCard
        bulletpoints={IBMPoints}
        title="IT Consultant - UKI Quality Engineering Practice"
        company="IBM"
        time="2018 - Present"
        icon={<Cpu className={iconClassname} />}
        right
      />
    </section>
  );
};

export default Work;
