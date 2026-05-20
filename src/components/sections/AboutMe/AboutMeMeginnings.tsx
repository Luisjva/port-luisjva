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
					Before all of this — from circuits to code
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
					I started in Electrical & Electronic Engineering — systems thinking
					was always the bridge into software.
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
					end-to-end. The same mindset — decomposing a problem, designing the
					flow, measuring what happens — translated almost perfectly to
					software, and pulled me into web development for good.
					<br />
					<br />
					That same instinct keeps pulling me toward building things from
					scratch. On top of my day job, I co-founded <b>Citafy</b>, a SaaS for
					appointment management aimed at the LATAM market. I mapped the
					system end-to-end and I&apos;m currently leading the technical
					direction, shipping the MVP on <b>Next.js</b> and <b>PostgreSQL</b>.
				</Text>
			</motion.div>
		</Box>
	</motion.div>
);
