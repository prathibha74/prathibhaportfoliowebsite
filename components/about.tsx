"use client";
import Image from "next/image";
import { Ripple } from "./ui/ripple";
import { motion } from "framer-motion";
import { File, Search, Settings } from "lucide-react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export default function About() {
	return (
		<section
			id="about"
			className="relative flex flex-col gap-10 m-5 sm:m-10 lg:gap-20 bg-black/5 p-5 rounded-xl"
		>
			{/* Subtle ripple background */}
			<Ripple />

			{/* Intro text with fade-in from left */}
			<motion.p
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-7xl font-semibold leading-tighter tracking-tight text-balance"
			>
				I’m <span className="text-purple-600">Prathibha</span>, a Fullstack
				Developer with 7 years of experience building scalable, user-centered
				digital products that merge creativity with technology.
			</motion.p>

			<div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 items-center">
				{/* Left Column: About and Skills */}
				<div className="flex-1 flex flex-col gap-8">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="font-semibold uppercase text-lg sm:text-xl md:text-2xl"
					>
						About Me
					</motion.h1>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 1 }}
						className="flex flex-col gap-6"
					>
						<p className="font-medium max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
							I specialize in designing and developing robust web applications
							using modern JavaScript frameworks. Over the years, I’ve helped
							startups and enterprises craft products that are fast, intuitive,
							and visually compelling. My approach blends clean code with
							thoughtful design, turning complex ideas into seamless user
							experiences.
						</p>

						<div>
							<h3 className="font-semibold uppercase text-base sm:text-lg mb-2">
								Core Skills
							</h3>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.8 }}
								className="flex flex-wrap gap-2"
							>
								{[
									"JavaScript",
									"TypeScript",
									"React",
									"Next.js",
									"Node.js",
									"Express",
									"MongoDB",
									"SQL",
									"HTML5",
									"CSS3",
									"Tailwind CSS",
									"Git",
									"RESTful APIs",
									"GraphQL",
									"Docker",
									"AWS",
								].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium hover:scale-105 transition-transform"
									>
										{skill}
									</span>
								))}
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Right Column: Portrait */}
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
					className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden flex-shrink-0"
				>
					<Image
						src="./photo2.jpg"
						alt="Developer portrait"
						fill
						style={{ objectFit: "cover" }}
						className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
					/>
				</motion.div>
			</div>
		</section>
	);
}
