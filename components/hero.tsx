import React from "react";
import { Button } from "./ui/button";
import { Ripple } from "@/components/ui/ripple";
import Header from "./header";
import Link from "next/link";

export default function Hero() {
	return (
		<main
			id="home"
			className="relative flex flex-col items-center justify-center h-[60vh] md:h-screen bg-zinc-50 font-sans dark:bg-black px-4 sm:px-6 md:px-8 pt-[9vh]"
		>
			<Header />
			<Ripple />
			<div className="uppercase leading-tighter tracking-tighter my-10 text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold flex flex-col uppercase leading-tighter tracking-tighter">
					Prathibha
				</h1>
				<p className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-semibold flex flex-col uppercase leading-tighter tracking-tighter">
					Fullstack Developer
				</p>
			</div>
			<p className="font-medium max-w-xl text-center text-sm sm:text-base md:text-lg px-2">
				I create high-performance, visually refined digital experiences that
				blend creativity and precision. With expertise in modern web
				technologies, I build scalable, user-focused solutions that bring ideas
				to life and drive real impact.
			</p>

			<div className="mt-10 flex flex-row gap-3 w-full sm:w-auto justify-center items-center">
				<Link href="#projects">
					<Button>View Projects</Button>
				</Link>
				<Link href="#contact">
					<Button>Get in touch</Button>
				</Link>
			</div>
		</main>
	);
}
