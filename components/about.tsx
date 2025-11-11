import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function About() {
	return (
		<section
			id="about"
			className="flex flex-col gap-5 md:gap-10 lg:gap-20 m-5 sm:m-10"
		>
			<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-7xl font-semibold leading-tighter tracking-tight text-balance">
				I’m <span className="text-purple-600">Prathibha</span>, a
				Fullstack Developer with 7 years of experience building scalable,
				user-centered digital products that merge creativity with technology.
			</p>

			<div className="flex flex-col sm:p-6 md:p-10">
				<div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-5">
					<h1 className="font-semibold uppercase text-lg sm:text-xl md:text-2xl">
						About Me
					</h1>

					<div className="w-full flex flex-col gap-8 md:gap-10 px-2 sm:px-6 md:px-10">
						<p className="font-medium max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
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
							<p className="font-medium max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
								JavaScript, TypeScript, React, Next.js, Node.js, Express,
								MongoDB, SQL, HTML5, CSS3, Tailwind CSS, Git, RESTful APIs,
								GraphQL, Docker, AWS
							</p>
						</div>
					</div>

					<div className="relative w-full aspect-square md:w-1/2 rounded-lg overflow-hidden md:pr-20">
						<Image
							src="./photo2.jpg"
							alt="Developer portrait"
							fill
							style={{ objectFit: "cover" }}
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
