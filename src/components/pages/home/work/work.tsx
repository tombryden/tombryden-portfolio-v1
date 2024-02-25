import TimelineCard from "@/components/timeline-card";
import NumberSubtitle from "../../../number-subtitle";
import { Briefcase, Cpu, Globe, Laptop, Network } from "lucide-react";

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
const makerHubPoints = [
  "Teaching students as young as eight to develop their knowledge and understanding of Raspberry Pi’s, Arduino’s and computer programming.",
  "Assisting students to produce projects incorporating the STEM disciplines.",
  "Operate equipment such as soldering irons, multimeters, screwdrivers, pliers, and wire strippers.",
  "Create and document projects for the York Maker Hub manual.",
  "Led the breakout session with sports and games activities.",
];

const riponPoints = [
  "Coded a Windows-based application for Ripon Cathedral, enabling the input of singer absences.",
  "Automated the process of sending notification emails to the absent singer's replacement.",
  "Automated the process of sending absence notifications to the Finance Office.",
  "Further developed the application by transitioning from a Windows-based to a web application.",
  "Achieved cross-platform compatibility, allowing use on various devices and operating systems.",
];

const avivaPoints = [
  "Worked within a business environment in the IT department of Aviva.",
  "Conducted data analysis using upcoming interactive software such as “Qlik”.",
  "Improved the uploading time of data from a previously coded C# software that is used by the data analysis team by re-coding how it interacts with the database.",
  "Added an additional feature to an MVC C# project that automatically emails clients form portfolios.",
];

const jamesPoints = [
  "Assisted the Network Manager with the management of the school network.",
  "Installed back-up batteries for the network to run without downtime in the event of a power cut.",
];

// not the best but will do for now...
const iconClassname = "text-muted-foreground size-10 my-4";

const Work = () => {
  return (
    <section>
      <NumberSubtitle number="02." title="Experience" />

      <TimelineCard
        bulletpoints={IBMPoints}
        title="IT Consultant - UKI Quality Engineering Practice"
        company="IBM"
        time="2018 - Present"
        icon={<Globe className={iconClassname} />}
      />
      <TimelineCard
        bulletpoints={makerHubPoints}
        title="Maker Leader"
        company="York Maker Hub"
        time="2017 - 2018"
        icon={<Cpu className={iconClassname} />}
        right
      />
      <TimelineCard
        bulletpoints={avivaPoints}
        title="Work Experience"
        company="Aviva"
        time="2017"
        icon={<Briefcase className={iconClassname} />}
      />
      <TimelineCard
        bulletpoints={riponPoints}
        title="Software Engineer"
        company="Ripon Cathedral"
        time="2015 - 2017"
        icon={<Laptop className={iconClassname} />}
        right
      />
      <TimelineCard
        bulletpoints={jamesPoints}
        title="Work Experience"
        company="King James School"
        time="2016"
        icon={<Network className={iconClassname} />}
      />
    </section>
  );
};

export default Work;
