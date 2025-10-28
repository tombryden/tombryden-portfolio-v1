import AnimatedP from "@/components/animated-p";
import NumberSubtitle from "@/components/number-subtitle";
import HonerableMentions from "./honerable-mentions";
import AnimatedDescriptionImage from "@/components/animated-description-image";

const adaprioBullets = [
  "A course creation platform that allows users to sign up and create their own area of courses.",
  "This incorporated video uploading to S3 on Amazon Web Services.",
  "Created website editor functionality so users can edit their area of the website with ease.",
  "Utilised Material UI for quick prototyping.",
  "Utilised DND Kit library for drag and drop interaction.",
  "I created this project using React (Next.js 13 App Router) and Node.js (Apollo Server) running on the back-end with MySQL. I also used Stripe API for payment integration.",
];

const lootableBullets = [
  "Having used Massdrop years ago, I wanted to recreate the website, where users can sign up and enter a 'drop' - essentially saying 'I want to buy this item'. Once the drop reaches the number of users required for each milestone, or the time period expires, the 'drop' would occur and users would be charged for the item.",
  "I coded this using React (Next.js + Material UI) and Node.js (Express REST API) with a MySQL database and Stripe integration.",
];

const hotelPitBullets = [
  "My dissertation had to bring benefit to IBM - so I created a website in React with a Java (Spring Boot REST API) back-end that implemented toggle-able bugs. This allowed testers to assess their testing capability whether that be in manual, automation, or performance testing.",
  "The website was a mock of a hotel booking website to simulate real-life scenarios testers might experience when working for a client of IBM.",
  "Utilised the Material UI library for quick design implementation.",
  "Achieved a First-Class grade.",
];

const SideProjects = () => {
  return (
    <section>
      <NumberSubtitle number="03." title="Side Projects" />

      <AnimatedP className="text-xl md:text-3xl text-muted-foreground font-semibold md:max-w-[50%]">
        I&apos;ve been working on personal projects as a hobby since the age of
        12.
      </AnimatedP>

      <div className="space-y-20 mt-10">
        <AnimatedDescriptionImage
          title="Lootable - Group Buying E-Commerce Store"
          bulletPoints={lootableBullets}
          alt="Lootable Home Page"
          src="/images/projects/lootable/home.png"
        />

        <AnimatedDescriptionImage
          title="Adaprio - Course Creation Platform"
          bulletPoints={adaprioBullets}
          alt="Adaprio Home Page"
          src="/images/projects/adaprio/home.png"
        />

        <AnimatedDescriptionImage
          title="HotelPit - University First-Class Grade Dissertation"
          bulletPoints={hotelPitBullets}
          alt="HotelPit Home Page"
          src="/images/projects/hotelpit/home.jpg"
        />
      </div>

      <AnimatedP className="text-xl md:text-3xl text-muted-foreground font-semibold mt-10 mb-10">
        And some honerable mentions...
      </AnimatedP>

      <HonerableMentions />

      <div className="mt-20 mb-20 text-center">
        <a
          href="https://github.com/tombryden/tombryden-portfolio-v1"
          className="text-primary"
          target="_blank"
        >
          Feel free to check out the source code for this page!
        </a>
      </div>
    </section>
  );
};

export default SideProjects;
