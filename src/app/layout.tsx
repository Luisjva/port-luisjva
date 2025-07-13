import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { theme } from "../config/themeMantine";

import "@mantine/core/styles.css";
import "../styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio - Luis Villegas",
	description:
		"Portfolio of a web developer specializing in React. Explore innovative, high-performance projects that demonstrate advanced skills in front- and back-end development, performance optimization, and intuitive interface design.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<meta name="theme-color" content="#2F3551" />
				<title>Portfolio - Luis Villegas</title>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MantineProvider theme={theme}>{children}</MantineProvider>
			</body>
		</html>
	);
}
