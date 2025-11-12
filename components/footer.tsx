import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			id="contact"
			className="flex flex-col bg-black rounded-t-lg p-6 sm:p-10 lg:p-20"
		>
			<div className="flex flex-col md:flex-row justify-between gap-10 mb-10 md:mb-20">
				{/* Left Section */}
				<div className="flex flex-col text-white gap-6 sm:gap-8 md:gap-10 w-full md:w-3/5 text-center md:text-left">
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold uppercase leading-tighter tracking-tighter">
						<span>Let’s bring your ideas to life</span>
						<br className="md:hidden" />
						<span> together.</span>
					</h1>
					<p className="text-gray-400 max-w-lg text-sm sm:text-base mx-auto md:mx-0">
						From concept to code, I help brands and individuals transform their
						vision into bold, interactive digital experiences.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center md:justify-start">
						<Link
							href="mailto:prathibhakalagani1@gmail.com?subject=Let’s%20Work%20Together&body=Hi%20Prathibha%2C%0D%0A"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button className="bg-purple-600 hover:bg-purple-700 text-white">
								Get in touch
							</Button>
						</Link>
						<Link
							href="#"
							className="underline underline-offset-2 hover:text-purple-500 transition-colors text-sm sm:text-base"
						>
							Download my resume
						</Link>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex flex-row gap-10 sm:gap-16 md:gap-20 text-white p-0 sm:p-5 text-center sm:text-left justify-center md:justify-end">
					<div>
						<h1 className="uppercase font-semibold mb-2 text-sm text-start sm:text-base">
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
									href="#experiences"
									className="hover:text-purple-500 transition-colors"
								>
									Experience
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
							Connect
						</h1>
						<ul className="space-y-2 text-start">
							<li className="flex items-center gap-2">
								<FaEnvelope className="text-purple-400" />
								<Link
									href="mailto:prathibhakalagani1@gmail.com"
									className="hover:text-purple-500 transition-colors"
								>
									prathibhakalagani1@gmail.com
								</Link>
							</li>
							<li className="flex items-center gap-2">
								<FaPhoneAlt className="text-purple-400" />
								<span>929-955-6271</span>
							</li>
							<li className="flex items-center gap-2">
								<FaLinkedin className="text-purple-400" />
								<Link
									href="https://www.linkedin.com/in/prathibha-k-7b8b30198"
									className="hover:text-purple-500 transition-colors"
									target="_blank"
								>
									LinkedIn
								</Link>
							</li>
							<li className="flex items-center gap-2">
								<FaGithub className="text-purple-400" />
								<Link
									href="https://github.com/prathibha74"
									className="hover:text-purple-500 transition-colors"
									target="_blank"
								>
									GitHub
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
				<p className="text-white text-sm sm:text-base">© 2025 Prathibha.</p>
			</div>
		</footer>
	);
}
