"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences =[ 
	{
		id: 1,
		role: "Full Stack Developer",
		company: "US Bank",
		period: "May 2025 — Present",
		description:
			"Leading the frontend for luxury real estate and software projects. Built interactive 3D experiences and web apps using Next.js, React Three Fiber, Three.js, TailwindCSS, Framer Motion, and TypeScript. Optimized performance, accessibility, and responsive design, integrating APIs and animation-driven user interfaces.",
		technologies: [
			"java",
			"Spring Boot",
			"PostgreSQL",
			"AWS",
			"Cloudwatch",
			"REST APIs",
			"Docker"
		],
	},
	{
		id: 2,
		role: "Graduate Teaching Assistant",
		company: "New York Institute of Technology",
		period: "Jan 2025 — May 2025",
		description:
			"Assisted students with Java, Python, Data Structures, Algorithms, and Software Engineering concepts. Developed Python automation scripts that improved grading efficiency by 40%.",
  technologies: [
			"Java",
			"Python",
			"Data Structures",
			"Algorithms",
		],
	},
	{
		id: 3,
		role: "Full Stack Developer",
		company: "HCL Technologies",
		period: "jun 2021 — jan 2024",
		description:
			"Developed modular Spring Boot microservices for enterprise insurance platforms. Built backend services using Java and REST APIs, optimized SQL queries and caching, and integrated React frontends with backend systems.",
  technologies: ["Java", "Spring Boot", "React", "REST APIs", "MYSQL", "Microservices"],
	},
	{
		id: 4,
		role: "Software Engineering Research Intern",
		company: "IIIT Hyderabad",
		period: "Jan 2021 - Apr 2021",
		description:
			"Built Python and FastAPI backend services for NLP systems. Optimized large-scale processing pipelines and developed AWS Lambda-based OCR automation workflows.",
  technologies: ["Python", "Fast API","AWS LAMBDA","NLP"],
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
