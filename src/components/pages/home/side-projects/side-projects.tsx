import AnimatedImage from "@/components/animated-image";
import AnimatedP from "@/components/animated-p";
import BulletPoint from "@/components/bullet-point";
import NumberSubtitle from "@/components/number-subtitle";
import SimpleBulletCard from "@/components/simple-bullet-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const adaprioBullets = [
  "A course creation platform that allows users to sign up and create their own area of courses.",
  "This incorporated video uploading to S3 on Amazon Web Services.",
  "Created website editor functionality so users can edit their area of the website with ease.",
  "Utilised Material UI for quick prototyping.",
  "Utilised DND Kit library for drag and drop interaction.",
  "I created this project using React (Next.js 13 App Router) and Spring for GraphQL running on the back-end with MySQL. I also used Stripe API for payment integration.",
];

const lootableBullets = [
  "Having used Massdrop years ago, I wanted to recreate the website, where users can sign up and enter a ‘drop’ – essentially saying ‘I want to buy this item’. Once the drop reaches the number of users required for each milestone, or the time period expires, the ‘drop’ would occur and users would be charged for the item.",
  "I coded this using React (Next.js + Material UI) and Java (Spring Boot REST API) with a MySQL database and Stripe integration.",
];

const hotelPitBullets = [
  "My dissertation had to bring benefit to IBM – so I created a website in React with a Java (Spring Boot REST API) back-end that implemented toggle-able bugs. This allowed testers to assess their testing capability whether that be in manual, automation, or performance testing.",
  "The website was a mock of a hotel booking website to simulate real-life scenarios testers might experience when working for a client of IBM.",
  "Utilised the Material UI library for quick design implementation.",
  "Achieved a First-Class grade.",
];

const bookingPoints = [
  "Created a booking system using a React front-end and a Java (Spring Boot REST API) back-end.",
  "Venue owners could sign up for an account, and subscribe to the platform to create their own customisable venue.",
  "This was integrated with Stripe to handle payment processing.",
  "Users could purchase bookable services from the venues (E.G. a hair cut) – eliminating the need for pen and paper booking systems.",
];

const minecraftPoints = [
  "Began my programming journey at age 12 by custom-coding plugins for my Minecraft server using Java and a MySQL database.",
  "Implemented monetisation strategies for the custom features created within the Minecraft server.",
  "Generated substantial income from the monetised features, marking an early success in my programming career.",
];

const SideProjects = () => {
  return (
    <section className="mb-60">
      <NumberSubtitle number="03." title="Side Projects" />

      <AnimatedP className="text-muted-foreground text-3xl font-semibold max-w-[50%]">
        I&apos;ve been working on personal projects as a hobby since the age of
        12.
      </AnimatedP>

      <div className="space-y-20 mt-10">
        <AnimatedImage
          title="Adaprio - Course Creation Platform"
          bulletPoints={adaprioBullets}
          alt="Adaprio Home Page"
          src="/images/projects/adaprio/home.png"
        />

        <AnimatedImage
          title="HotelPit - University First-Class Grade Dissertation"
          bulletPoints={hotelPitBullets}
          alt="HotelPit Home Page"
          src="/images/projects/hotelpit/home.jpg"
        />

        <AnimatedImage
          title="Lootable - Group Buying E-Commerce Store"
          bulletPoints={lootableBullets}
          alt="Lootable Home Page"
          src="/images/projects/lootable/home.png"
        />
      </div>

      <AnimatedP className="text-muted-foreground text-3xl font-semibold mt-10 mb-10">
        And some honerable mentions...
      </AnimatedP>

      <div className="grid grid-cols-2 gap-8">
        <SimpleBulletCard
          title="Booking System Platform"
          bulletPoints={bookingPoints}
        />
        <SimpleBulletCard
          title="Custom-coded Minecraft Server"
          bulletPoints={minecraftPoints}
        />
      </div>
    </section>
  );
};

export default SideProjects;
