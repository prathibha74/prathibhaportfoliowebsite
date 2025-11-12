"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "The Cube",
		description:
			"A minimal 3D motion experiment blending geometry, light, and precision in code.",
		image: "./cube.png",
		link: "https://codepen.io/prathibha_chinni/pen/ogxNwYY",
	},
	{
		id: 2,
		title: "Cyberpunk Tunnel",
		description:
			"Built with Three.js, this reactive tunnel captures motion, depth, and atmosphere in real time.",
		image: "./tunnel.png",
		link: "https://codepen.io/prathibha_chinni/pen/jEqOmgp",
	},
	{
		id: 3,
		title: "Liquid Glass Apple",
		description:
			"A creative take on the illusion of transparency and distortion, inspired by product aesthetics.",
		image: "./liquid.png",
		link: "https://codepen.io/prathibha_chinni/pen/MYyWmMZ",
	},
	{
		id: 4,
		title: "React Dashboard",
		description:
			"A fully responsive dashboard template crafted with React + Tailwind, designed for clarity and flow.",
		image: "./dashboard.png",
		link: "https://codepen.io/prathibha_chinni/pen/gbrbjNe",
	},
	{
		id: 5,
		title: "E-Commerce Landing",
		description:
			"A balance of typography, motion, and hierarchy, built for seamless conversion and visual rhythm.",
		image: "./store.png",
		link: "https://codepen.io/prathibha_chinni/pen/PwNwdKX",
	},
	{
		id: 6,
		title: "Monkey Island Animation",
		description:
			"A playful motion sequence crafted purely with CSS, no JavaScript, just timing and creativity.",
		image: "./island.png",
		link: "https://codepen.io/prathibha_chinni/pen/OPNPoQq",
	},
];

export default function Projects() {
	const [active, setActive] = useState(projects[0]);
	const [expandedId, setExpandedId] = useState<number | null>(null);

	const spring = { type: "spring", stiffness: 120, damping: 20 };

	const handleClick = (projectId: number) => {
		setExpandedId(expandedId === projectId ? null : projectId);
		setActive(projects.find((p) => p.id === projectId)!);
	};

	return (
		<section
			id="projects"
			className="flex flex-col  p-5 md:p-16 md:py-20 lg:px-40"
		>
			<h1 className="text-5xl font-semibold uppercase leading-tighter tracking-tighter mb-2">
				Selected Works
			</h1>
			<p className="text-gray-600 font-medium mb-10 max-w-xl">
				Explorations that merge code, motion, and visual storytelling.
			</p>

			<div className="flex flex-col md:flex-row gap-10">
				{/* Left side — simple list */}
				<div className="w-full md:w-1/2 flex flex-col gap-4">
					{projects.map((project) => (
						<div
							key={project.id}
							onClick={() => handleClick(project.id)}
							onMouseEnter={() =>
								window.innerWidth >= 768 && setActive(project)
							}
							className={`cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
								active.id === project.id ? "bg-black/5" : "hover:bg-black/5"
							}`}
						>
							<h2
								className={`text-xl font-semibold mb-1 ${
									active.id === project.id ? "text-purple-600" : "text-black"
								}`}
							>
								{project.title}
							</h2>
							<p className="text-gray-700 text-sm">{project.description}</p>

							{/* Image below description on small screens */}
							<AnimatePresence>
								{expandedId === project.id && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ ...spring, duration: 0.4 }}
										className="mt-4 md:hidden relative w-full h-64 rounded-lg overflow-hidden"
									>
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover rounded-lg"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
											<h2 className="text-white text-lg font-semibold mb-1">
												{project.title}
											</h2>
											<Link
												href={project.link}
												target="_blank"
												className="text-purple-400 hover:underline text-sm flex items-center gap-1"
											>
												View Project <ArrowUpRight className="w-4 h-4" />
											</Link>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* Right side — preview image only on md+ screens */}
				<div className="hidden md:block w-full md:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden rounded-lg">
					<AnimatePresence mode="wait">
						<motion.div
							key={active.id}
							initial={{ opacity: 0, scale: 1.05, x: 30 }}
							animate={{ opacity: 1, scale: 1, x: 0 }}
							exit={{ opacity: 0, scale: 1.05, x: -30 }}
							transition={{ type: "spring", stiffness: 100, damping: 20 }}
							className="absolute inset-0"
						>
							<Image
								src={active.image}
								alt={active.title}
								fill
								className="object-cover rounded-lg"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
								<h2 className="text-white text-2xl font-semibold mb-2">
									{active.title}
								</h2>
								<Link
									href={active.link}
									target="_blank"
									className="text-purple-400 hover:underline text-sm flex items-center gap-1"
								>
									View Project <ArrowUpRight className="w-4 h-4" />
								</Link>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
