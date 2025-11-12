"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80">
			<div className="flex justify-between items-center px-5 py-4 h-[9vh] relative">
				{/* Logo */}
				<h1
					className={`${pacifico.className} text-3xl sm:text-4xl text-white drop-shadow-lg z-50`}
				>
					Prathibha
				</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-6 font-medium text-white z-50">
					<Link
						href="#home"
						className="hover:text-purple-500 transition-colors"
					>
						Home
					</Link>
					<Link
						href="#about"
						className="hover:text-purple-500 transition-colors"
					>
						About
					</Link>
					<Link
						href="#experiences"
						className="hover:text-purple-500 transition-colors"
					>
						Experience
					</Link>
					<Link
						href="#projects"
						className="hover:text-purple-500 transition-colors"
					>
						Projects
					</Link>
				</nav>

				{/* Desktop CTA */}
				<Link
					href="mailto:prathibhakalagani1@gmail.com?subject=Let’s%20Work%20Together&body=Hi%20Prathibha%2C%0D%0A"
					target="_blank"
					rel="noopener noreferrer"
					className="hidden md:block z-50"
				>
					<Button className="bg-purple-600 hover:bg-purple-700 text-white">
						Get in touch
					</Button>
				</Link>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden z-50 text-white"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`md:hidden fixed top-[9vh] left-0 w-full h-[calc(100vh-9vh)] bg-black shadow-lg z-40 transition-transform duration-300 ${
					isMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className="flex flex-col gap-5 p-5 font-medium">
					<Link
						href="#home"
						onClick={toggleMenu}
						className="py-2 text-white hover:text-purple-500 transition-colors"
					>
						Home
					</Link>
					<Link
						href="#about"
						onClick={toggleMenu}
						className="py-2 text-white hover:text-purple-500 transition-colors"
					>
						About
					</Link>
					<Link
						href="#experiences"
						onClick={toggleMenu}
						className="py-2 text-white hover:text-purple-500 transition-colors"
					>
						Experience
					</Link>
					<Link
						href="#projects"
						onClick={toggleMenu}
						className="py-2 text-white hover:text-purple-500 transition-colors"
					>
						Projects
					</Link>
					<Link
						href="#contact"
						onClick={toggleMenu}
						className="mt-3"
					>
						<Button className="w-full">Get in touch</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
