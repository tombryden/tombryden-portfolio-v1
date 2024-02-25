import Container from "@/components/container";
import AboutMe from "@/components/pages/home/about-me/about-me";
import Greeting from "@/components/pages/home/greeting/greeting";
import SideProjects from "@/components/pages/home/side-projects/side-projects";
import Work from "@/components/pages/home/work/work";

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
