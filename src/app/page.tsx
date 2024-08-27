import Container from "@/components/container";
import AboutMe from "@/components/pages/home/about-me/about-me";
import Greeting from "@/components/pages/home/greeting/greeting";
import SideProjects from "@/components/pages/home/side-projects/side-projects";
import Work from "@/components/pages/home/work/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tom Bryden - Portfolio",
  description:
    "I harness the transformative power of programming and technology to drive innovation and deliver impactful solutions.",
};

export default function Home() {
  return (
    <Container>
      <Greeting />
      <AboutMe />
      <Work />
      <SideProjects />
    </Container>
  );
}
