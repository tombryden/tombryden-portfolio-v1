import TimelineCard from "@/components/timeline-card";
import NumberSubtitle from "../../../number-subtitle";

/**
 * 
 * @returns <BulletPoint
            text="Underwent an intensive degree apprenticeship at IBM for my first four
years, allocating four days weekly to client work and one day to study."
          />
          <BulletPoint
            text="Achieved a First-Class Honours degree in Digital & Technology Solutions
            (Software Engineering Pathway)."
          />
          <BulletPoint text="Smoothly transitioned to a full-time role within IBM's UKI Quality Engineering Practice." />
          <BulletPoint text="Acquired broad experience in various industries." />
          <BulletPoint
            text="Fulfilled diverse testing duties, enhancing skills in API stubbing,
automation suite development and more."
          />
          <BulletPoint
            text="Exhibited flexibility and proficiency in managing intricate testing
            scenarios and teams."
          />
          <BulletPoint
            text="Refined technical skills and deepened knowledge of sector-specific
            challenges."
          />
          <BulletPoint
            text="Emerged as a highly adaptable and essential contributor to the software
            testing and development sphere."
          />
 */

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

const Work = () => {
  return (
    <section className="mt-24">
      <NumberSubtitle number="02." title="Experience" />

      <TimelineCard bulletpoints={IBMPoints} />
      <TimelineCard bulletpoints={IBMPoints} right />
    </section>
  );
};

export default Work;
