import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
	return (
		<footer
			id="contact"
			className="flex flex-col bg-black  rounded-t-lg p-6 sm:p-10 lg:p-20"
		>
			<div className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:mb-20">
				{/* Left Section */}
				<div className="flex flex-col text-white gap-6 sm:gap-8 md:gap-10 w-full md:w-3/5 text-center md:text-left">
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold uppercase leading-tighter tracking-tighter">
						<span>Let&apos;s make it </span>
						<br className="md:hidden" />
						<span>happen now</span>
					</h1>
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center md:justify-start">
						<Link
							href="#contact"
							className=""
						>
							<Button>Get in touch</Button>
						</Link>
						<Link
							href="#"
							className="underline underline-offset-2 hover:text-purple-500 transition-colors text-sm sm:text-base"
						>
							download my resume
						</Link>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex flex-row gap-10 sm:gap-16 md:gap-20 text-white p-0 sm:p-5 text-center sm:text-left justify-center md:justify-end">
					<div>
						<h1 className="uppercase font-semibold mb-2 text-sm sm:text-base">
							Navigate
						</h1>
						<ul className="space-y-1 text-start">
							<li>
								<Link
									href="/"
									className="hover:text-purple-500 transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="hover:text-purple-500 transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="hover:text-purple-500 transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="hover:text-purple-500 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="uppercase font-semibold mb-2 text-start text-sm sm:text-base">
							Socials
						</h1>
						<ul className="space-y-1 text-start">
							<li>
								<Link
									href="https://facebook.com"
									className="hover:text-purple-500 transition-colors"
								>
									facebook
								</Link>
							</li>
							<li>
								<Link
									href="https://twitter.com"
									className="hover:text-purple-500 transition-colors"
								>
									twitter
								</Link>
							</li>
							<li>
								<Link
									href="https://linkedin.com"
									className="hover:text-purple-500 transition-colors"
								>
									linkedin
								</Link>
							</li>
							<li>
								<Link
									href="https://github.com/prathibha74"
									className="hover:text-purple-500 transition-colors"
								>
									github
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="border-t border-gray-800 py-5 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3 md:gap-5">
				<p className="text-white text-sm sm:text-base">All rights reserved.</p>
				<p className="text-white text-sm sm:text-base">
					Designed & Developed by Prathibha
				</p>
				<p className="text-white text-sm sm:text-base">
					© 2025 Prathibha.
				</p>
			</div>
		</footer>
	);
}
