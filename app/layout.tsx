import type { Metadata } from "next";
import {Manrope  } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
	title: "Prathibha - Fullstack Developer",
	description:
		"Portfolio of Prathibha, a skilled fullstack developer specializing in modern web technologies to create elegant and scalable digital solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.className} antialiased font-sans`}>
				
				{children}
				<Footer />
			</body>
		</html>
	);
}
