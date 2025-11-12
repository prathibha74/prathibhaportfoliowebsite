"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
	{
		id: 1,
		role: "Frontend Developer",
		company: "Elysium Digital",
		period: "2024 — Present",
		description:
			"Leading the frontend for luxury real estate and software projects. Built interactive 3D experiences and web apps using Next.js, React Three Fiber, Three.js, TailwindCSS, Framer Motion, and TypeScript. Optimized performance, accessibility, and responsive design, integrating APIs and animation-driven user interfaces.",
		technologies: [
			"Next.js",
			"React Three Fiber",
			"Three.js",
			"TailwindCSS",
			"Framer Motion",
			"TypeScript",
		],
	},
	{
		id: 2,
		role: "Software Engineer",
		company: "SVN North Holdings",
		period: "2023 — 2024",
		description:
			"Developed scalable web applications for data analytics and AI integrations. Worked with AWS (Lambda, S3, SNS/SQS), Node.js, Express, PostgreSQL, and Redis. Implemented real-time dashboards and data pipelines, focusing on modular and performant codebases.",
		technologies: [
			"Node.js",
			"Express",
			"PostgreSQL",
			"Redis",
			"AWS Lambda",
			"AWS S3",
			"SNS/SQS",
		],
	},
	{
		id: 3,
		role: "Creative Technologist",
		company: "Freelance",
		period: "2020 — 2023",
		description:
			"Designed and developed brand identities and immersive web portfolios for creators and small businesses. Built interactive visuals and websites using HTML, CSS, JavaScript, React, Three.js, and WebGL. Combined motion design, storytelling, and usability for unique experiences.",
		technologies: ["HTML", "CSS", "JavaScript", "React", "Three.js", "WebGL"],
	},
	{
		id: 4,
		role: "UI/UX Designer",
		company: "Bright Ideas Studio",
		period: "2019 — 2020",
		description:
			"Crafted user-centered interfaces and prototypes for web and mobile apps. Conducted research, wireframing, and high-fidelity design using Figma, Adobe XD, and InVision. Focused on usability, accessibility, and conversion optimization.",
		technologies: ["Figma", "Adobe XD", "InVision"],
	},
	{
		id: 5,
		role: "Intern Developer",
		company: "Tech Horizons",
		period: "2018 — 2019",
		description:
			"Assisted in building internal tools and web applications using React, Node.js, Express, and MongoDB. Contributed to feature development, debugging, and responsive UIs. Learned agile workflow and version control best practices.",
		technologies: ["React", "Node.js", "Express", "MongoDB", "Git"],
	},
];

export default function Experiences() {
	const [active, setActive] = useState(experiences[0]);
	const [expandedId, setExpandedId] = useState<number | null>(null);
	const spring = { type: "spring", stiffness: 120, damping: 20 };

	const handleClick = (id: number) => {
		setExpandedId(expandedId === id ? null : id);
		setActive(experiences.find((exp) => exp.id === id)!);
	};

	return (
		<section
			className="w-full min-h-[90vh] bg-black text-white p-5 md:p-16 md:py-20 lg:px-40 flex flex-col"
			id="experiences"
		>
			<h1 className="text-5xl font-bold uppercase tracking-tighter mb-4">
				Experience
			</h1>
			<p className="text-gray-300 max-w-xl mb-12">
				A journey through projects, technologies, and creative problem-solving —
				turning ideas into polished digital experiences.
			</p>

			<div className="flex flex-col md:flex-row gap-12 flex-1">
				{/* Left Column */}
				<div className="w-full md:w-1/2 flex flex-col gap-6">
					{experiences.map((exp) => (
						<div
							key={exp.id}
							onClick={() => handleClick(exp.id)}
							onMouseEnter={() => window.innerWidth >= 768 && setActive(exp)}
							className={`p-4 rounded-lg cursor-pointer border-l-4 transition-all duration-300 ${
								active.id === exp.id
									? "border-purple-500 bg-white/10"
									: "border-gray-700 hover:bg-white/5"
							}`}
						>
							<div className="flex items-center gap-3">
								<Briefcase className="w-5 h-5 text-purple-500" />
								<h2
									className={`text-lg font-semibold transition-colors ${
										active.id === exp.id ? "text-purple-400" : "text-white"
									}`}
								>
									{exp.role}
								</h2>
							</div>
							<p className="text-sm text-gray-400">
								{exp.company} — {exp.period}
							</p>

							{/* Mobile expandable content */}
							<AnimatePresence>
								{expandedId === exp.id && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ type: "tween", duration: 0.4 }}
										className="mt-4 md:hidden bg-gray-900 rounded-lg p-6"
									>
										<div className="mb-4 flex flex-wrap gap-2">
											{exp.technologies.map((tech, idx) => (
												<span
													key={idx}
													className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
												>
													{tech}
												</span>
											))}
										</div>
										<p className="text-gray-400">{exp.description}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* Right Column for md+ */}
				<div className="hidden md:flex w-full md:w-1/2 bg-gray-900 rounded-lg p-8 md:p-16 relative overflow-hidden items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={active.id}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ type: "tween", duration: 0.4 }}
							className="flex flex-col justify-center w-full"
						>
							<h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
								{active.role}
							</h2>
							<p className="text-gray-300 text-lg mb-4">
								{active.company} — {active.period}
							</p>
							<div className="mb-4 flex flex-wrap gap-2">
								{active.technologies.map((tech, idx) => (
									<span
										key={idx}
										className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
									>
										{tech}
									</span>
								))}
							</div>
							<p className="text-gray-400 text-md max-w-xl">
								{active.description}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
