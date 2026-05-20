import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	container,
	itemAnimation,
} from "../../../helpers/motionAnimationContainer";

container.visible.transition.delayChildren = 0.5;
container.visible.transition.staggerChildren = 0.2;

export const AboutMeMyBeginnings = () => (
	<motion.div
		variants={container}
		initial="hidden"
		animate="visible"
		className="about-me__beginnings"
	>
		<div className="about-me__beginnings__images">
			<Box className="big">
				<Image
					src="/proy7.webp"
					alt="Picture of the author"
					fill={true}
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
			</Box>

			<Box className="secondary">
				<Image
					src="/first-proyect.jpeg"
					alt="Picture of the author"
					fill={true}
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
			</Box>

			<Box className="last">
				<Image
					src="/proy4.webp"
					alt="Picture of the author"
					fill={true}
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
			</Box>
		</div>

		<Box>
			<motion.div variants={itemAnimation}>
				<Text
					style={{
						fontSize: ".8rem",
						opacity: 0.8,
					}}
				>
					From circuits to code
				</Text>
			</motion.div>

			<motion.div variants={itemAnimation}>
				<Text
					style={{
						fontSize: "1.4rem",
						fontWeight: 800,
					}}
					mt={".25rem"}
				>
					I started in Electrical & Electronic Engineering and ended up
					building AI-powered platforms — systems thinking was always the
					bridge.
				</Text>
			</motion.div>

			<motion.div variants={itemAnimation}>
				<Text
					mt={"1rem"}
					style={{
						fontSize: ".9rem",
						opacity: 0.8,
					}}
				>
					I spent four years studying <b>Electrical & Electronic Engineering</b>{" "}
					at UNEXPO (Venezuela), wiring circuits and reasoning about systems
					end-to-end. Somewhere along the way I realized the same mindset —
					decomposing a problem, designing the flow, measuring what happens —
					translated almost perfectly to software.
					<br />
					<br />
					That click pulled me into web development. I went deep on{" "}
					<b>JavaScript</b>, then on <b>React</b>, <b>Next.js</b> and{" "}
					<b>Node.js</b>, and started shipping real products. Over the next few
					years I worked across the full stack — from real-time multimedia
					apps to internal dashboards — and grew into a Tech Lead role.
					<br />
					<br />
					Today my focus is the intersection of product engineering and{" "}
					<b>AI automation</b>: <b>LLMs</b>, <b>RAG</b>, conversational agents
					and multichannel workflows. I&apos;m most interested in building
					platforms where AI is not a demo, but a measurable lever for the
					business behind it.
				</Text>
			</motion.div>
		</Box>
	</motion.div>
);
