"use client";
import { useState } from "react";

import { HomeContent } from "../components/homeContent";

import { Contact } from "@/components/sections/ContactMe";
import { Skills } from "@/components/sections/Skills";
import { Cv } from "../components/cv";
import { AboutMe } from "../components/sections/AboutMe";
import { Experience } from "../components/sections/Experiencie";
import { Projects } from "../components/sections/Projects/Projects";
import { Referencies } from "../components/sections/Referencies/Referencies";
import { colors } from "../config";
import "./home.css";

const content = [
	{
		key: "about-me",
		element: AboutMe,
		animationWordInit: "WELCOME",
		elementInitialPosition: {
			y: "0",
			x: "-100%",
		},
	},
	{
		key: "job-experience",
		element: Experience,
		animationWordInit: "TO",
		elementInitialPosition: {
			y: "0",
			x: "-100%",
		},
	},
	{
		key: "references",
		element: Referencies,
		animationWordInit: "MY",
		elementInitialPosition: {
			y: "110%",
			x: "0",
		},
	},
	{
		key: "contact",
		element: Contact,
		animationWordInit: "FRONT",
		elementInitialPosition: {
			y: "0",
			x: "0",
		},
		hasNotBackground: true,
		canOpen: false,
	},
	{
		key: "cv",
		element: Cv,
		animationWordInit: "END",
		elementInitialPosition: {
			y: "0",
			x: "110%",
		},
		animationWordPosition: "right",
	},
	{
		key: "projects",
		element: Projects,
		animationWordInit: "PORTFOLIO",
		elementInitialPosition: {
			y: "0",
			x: "110%",
		},
	},
	{
		key: "skills",
		notModal: true,
		element: Skills,
		animationWordInit: "PORTFOLIO",
		elementInitialPosition: {
			y: "0",
			x: "110%",
		},
	},
] as {
	key: string;
	notModal?: boolean;
	element: React.ComponentType<{
		open?: boolean;
		setCurrentContent?: (key: string | null) => void;
	}>;
	animationWordInit: string;
	elementInitialPosition: {
		y: string;
		x: string;
	};
	animationWordPosition: "right" | "left" | "center";
	hasNotBackground?: boolean;
	canOpen?: boolean;
}[];

export default function Home() {
	const [currentContent, setCurrentContent] = useState<string | null>(null);
	const [topOpenPosition, setTopOpenPosition] = useState(0);

	return (
		<main
			onScroll={(e) => setTopOpenPosition((e.target as Element).scrollTop)}
			onResize={(e) => setTopOpenPosition((e.target as Element).scrollTop)}
			className="animated-gradient-background"
		>
			<div>
				{content.map((item, index) => (
					<HomeContent
						key={item.key}
						id={item.key}
						setCurrentContent={setCurrentContent}
						currentContent={currentContent}
						index={index}
						Element={item.element}
						animationWordInit={item.animationWordInit}
						elementInitialPosition={item.elementInitialPosition}
						notModal={item.notModal}
						animationWordPosition={
							item.animationWordPosition as "left" | "right" | "center"
						}
						hasNotBackground={item.hasNotBackground || false}
						canOpen={item.canOpen || true}
						topOpenPosition={topOpenPosition}
					/>
				))}
			</div>
		</main>
	);
}
