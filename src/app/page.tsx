import Container from "@/components/container";
import AboutMe from "@/components/pages/home/about-me/about-me";
import Greeting from "@/components/pages/home/greeting/greeting";
import SideProjects from "@/components/pages/home/side-projects/side-projects";
import Work from "@/components/pages/home/work/work";

// export const metadata: Metadata = {
//   title: "Tom Bryden - Portfolio",
//   description:
//     "I harness the transformative power of programming and technology to drive innovation and deliver impactful solutions. With a rich skill set I craft dynamic, scalable digital solutions that meets the demands of today's world.",
// };

export default function Home() {
  return (
    <main>
      <Container>
        <Greeting />
        <AboutMe />
        <Work />
        <SideProjects />
      </Container>
    </main>
  );
}
