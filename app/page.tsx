import About from "@/components/about";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import Projects from "@/components/projects";



export default function Home() {
  return (
		<div className="flex flex-col max-w-screen overflow-hidden ">
      <Hero />
      <About/>
      <Experiences/>
      <Projects/>
    </div>
	);
}
