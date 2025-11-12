"use client";
import React from "react";
import { Button } from "./ui/button";
import Header from "./header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<main
			id="home"
			className="relative flex flex-col items-center justify-center h-[60vh] md:h-screen bg-black font-sans px-4 sm:px-6 md:px-8 pt-[9vh] overflow-hidden"
		>
			<Header />

			{/* Floating gradient circles */}
			<div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full animate-blob filter blur-3xl mix-blend-multiply"></div>
			<div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-pink-500/20 rounded-full animate-blob animation-delay-2000 filter blur-3xl mix-blend-multiply"></div>

			{/* Name & Role */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="uppercase text-center mt-10"
			>
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
					Prathibha
				</h1>
				<p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mt-2">
					Fullstack Developer
				</p>
			</motion.div>

			{/* Description */}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 1 }}
				className="font-medium max-w-xl text-center text-gray-300 text-sm sm:text-base md:text-lg mt-6 px-2"
			>
				I create high-performance, visually refined digital experiences that
				blend creativity and precision. With expertise in modern web
				technologies, I build scalable, user-focused solutions that bring ideas
				to life and drive real impact.
			</motion.p>

			{/* CTA Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 1 }}
				className="mt-10 flex flex-row gap-3 w-full sm:w-auto justify-center items-center"
			>
				<Link href="#projects">
					<Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30">
						View Projects
					</Button>
				</Link>
				<Link
					href="mailto:prathibhakalagani1@gmail.com?subject=Let’s%20Work%20Together&body=Hi%20Prathibha%2C%0D%0A"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/30">
						Get in touch
					</Button>
				</Link>
			</motion.div>
		</main>
	);
}
