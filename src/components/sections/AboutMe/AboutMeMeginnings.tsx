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
					My beginnings
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
					The pandemic changed the lives of many people. In my case, it was the
					starting point for me to delve into the world of programming.
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
					Taking advantage of my free time, I began learning <b>HTML</b> through
					YouTube courses, motivated by the idea of creating interactive
					websites. My first pages weren&apos;t visually appealing, but after
					learning <b>CSS</b> and incorporating styles, things started to
					improve considerably. Still, I knew I needed to keep perfecting my
					skills.
					<br />
					<br />
					At first, it was just a hobby, but when I discovered <b>
						JavaScript
					</b>{" "}
					and its true potential, I decided to take it seriously. Since then, I
					haven&apos;t stopped learning and deepening my knowledge, especially
					in
					<b>React</b>.
					<br />
					<br />
					Over time, I mastered libraries like <b>React</b>, <b>Vue</b>,{" "}
					<b>Next.js</b>, and <b>Node.js</b>, and developed several personal
					projects that allowed me to build a solid portfolio. This marked the
					beginning of my professional journey as a front-end developer.
				</Text>
			</motion.div>
		</Box>
	</motion.div>
);
