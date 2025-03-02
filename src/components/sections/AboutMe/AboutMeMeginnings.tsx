import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
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
		<PhotoProvider>
			<div className="about-me__beginnings__images">
				<PhotoView src={"/proy7.webp"}>
					<Box className="big">
						<Image
							src="/proy7.webp"
							alt="Picture of the author"
							fill={true}
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</Box>
				</PhotoView>

				<PhotoView src={"/first-proyect.jpeg"}>
					<Box className="secondary">
						<Image
							src="/first-proyect.jpeg"
							alt="Picture of the author"
							fill={true}
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</Box>
				</PhotoView>
				<PhotoView src={"/proy4.webp"}>
					<Box className="last">
						<Image
							src="/proy4.webp"
							alt="Picture of the author"
							fill={true}
							style={{ objectFit: "cover", objectPosition: "top" }}
						/>
					</Box>
				</PhotoView>
			</div>
		</PhotoProvider>

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
					The pandemic transformed many people&apos;s lives. In my case, it was
					the starting point for diving into the world of programming.
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
					When the pandemic started and I had a lot of free time, I decided to
					learn <b>HTML</b> through YouTube courses with the idea of creating
					attractive websites. At first, my pages weren&apos;t very appealing,
					but after learning <b>CSS</b> and being able to add styles, everything
					improved considerably. However, I still needed to improve my
					programming skills significantly.
					<br />
					<br />
					At that time, it was all for fun, but when I started learning{" "}
					<b>JavaScript</b> and discovered its full potential, I decided to take
					programming more seriously. I continued deepening my knowledge and
					began studying <b>React</b>.
					<br />
					<br />
					Over time, I gained solid mastery of frontend libraries like React,
					Vue, and Next.js. I created several personal projects to build a small
					portfolio, which allowed me to start searching for my first work
					experience.
				</Text>
			</motion.div>
		</Box>
	</motion.div>
);
