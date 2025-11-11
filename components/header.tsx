"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-3xl dark:bg-black">
			<div className="flex w-full justify-between items-center px-5 py-4 sm:py-5 h-[9vh] shadow-md overflow-hidden">
				<h1 className="uppercase font-bold text-lg sm:text-xl">Prathibha</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-5 font-medium">
					<Link href="#">Home</Link>
					<Link href="#about">About</Link>
					<Link href="#projects">Projects</Link>
				</nav>

				{/* Desktop CTA Button */}
				<Link
					href="#contact"
					className="hidden md:block"
				>
					<Button>Get in touch</Button>
				</Link>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden z-50"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<nav className="md:hidden absolute top-[9vh] left-0 w-full bg-white dark:bg-black shadow-lg z-40 animate-in slide-in-from-top">
					<div className="flex flex-col gap-5 p-5 font-medium">
						<Link
							href="#"
							onClick={toggleMenu}
							className="py-2 hover:text-purple-600 transition-colors"
						>
							Home
						</Link>
						<Link
							href="#about"
							onClick={toggleMenu}
							className="py-2 hover:text-purple-600 transition-colors"
						>
							About
						</Link>
						<Link
							href="#projects"
							onClick={toggleMenu}
							className="py-2 hover:text-purple-600 transition-colors"
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
				</nav>
			)}
		</header>
	);
}
