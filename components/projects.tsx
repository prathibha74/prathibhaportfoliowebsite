import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "The Cube",
		description:
			"An animated 3D cube using threejs and html and css for web animations.",
		image: "./cube.png",
		link: "https://codepen.io/prathibha_chinni/pen/ogxNwYY",
	},
	{
		id: 2,
		title: "3D Cyberpunk Tunnel",
		description: "A 3D animated tunnel built using ThreeJs, HTML and CSS.",
		image: "./tunnel.png",
		link: "https://codepen.io/prathibha_chinni/pen/jEqOmgp",
	},
	{
		id: 3,
		title: "Liquid Glass Apple",
		description:
			"A play on liquid glass effect using HTML, CSS and JavaScript.",
		image: "./liquid.png",
		link: "https://codepen.io/prathibha_chinni/pen/MYyWmMZ",
	},
	{
		id: 4,
		title: "Responsive React Dashboard with Tailwind",
		description:
			"A modern, responsive dashboard layout built with React and Tailwind CSS.",
		image: "./dashboard.png",
		link: "https://codepen.io/prathibha_chinni/pen/gbrbjNe",
	},
	{
		id: 5,
		title: "E-Commerce Landing Page Example",
		description:
			"An elegant e-commerce landing page design using HTML, CSS and JS.",
		image: "./store.png",
		link: "https://codepen.io/prathibha_chinni/pen/PwNwdKX",
	},
	{
		id: 6,
		title: "Monkey Island CSS Animation (without JS)",
		description: "An animated sequence uing HTML and CSS.",
		image: "./island.png",
		link: "https://codepen.io/prathibha_chinni/pen/OPNPoQq",
	},
];

export default function Projects() {
	return (
		<div id="projects" className="flex flex-col m-5 md:m-10">
			<h1 className="text-5xl font-semibold flex flex-col uppercase leading-tighter tracking-tighter">
				Selected Works
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
				{projects.map((project) => (
					<div
						key={project.id}
						
						className="group flex flex-col gap-1"
					>
						<AspectRatio
							ratio={1 / 1}
							className="bg-red-200 rounded-lg relative overflow-hidden"
						>
							<Image
								src={project.image}
								alt={project.title}
								fill
								style={{ objectFit: "cover" }}
								className="rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
							/>
							<div className="absolute bottom-0 left-0 right-0 flex flex-col text-white gap-3 p-4 bg-linear-to-t from-black/90 via-black/60 to-transparent rounded-b-lg">
								<p className="text-sm">{project.description}</p>
								<div className="flex items-center justify-between">
									<div className="flex gap-3">
										<p className="font-medium text-white">{project.title}</p>
										
									</div>
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
									<div className="flex items-center gap-1 text-white hover:gap-2 transition-all duration-200">
										<span className="text-sm font-medium">View Project</span>
										<ArrowUpRight className="w-4 h-4" />
									</div>
                                    </Link>
								</div>
							</div>
						</AspectRatio>
					</div>
				))}
			</div>
		</div>
	);
}
