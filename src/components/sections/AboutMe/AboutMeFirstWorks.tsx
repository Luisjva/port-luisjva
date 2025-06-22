import { Box, Button, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { itemAnimation } from "../../../helpers/motionAnimationContainer";
import { colors } from "../../../config";

export const AboutMeFirstWorks = ({
	setCurrentContent,
}: {
	setCurrentContent: (key: string | null) => void;
}) => (
	<div className="about-me__first-works">
		<div className="about-me__first-works__header">
			<Box
				style={{
					maxWidth: 500,
				}}
			>
				<Box>
					<motion.div variants={itemAnimation}>
						<Text
							style={{
								fontSize: ".8rem",
								opacity: 0.8,
							}}
						>
							Summary of my work experience
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
							Getting your first job wasn&apos;t easy, but with perseverance and
							determination, anything is possible.
						</Text>
					</motion.div>
				</Box>
			</Box>
			<div
				style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
			>
				<motion.div variants={itemAnimation}>
					<Button
						variant="light"
						// rightSection={<ArrowRightIcon width="1rem" />}
						color={colors.grey}
						mt={"1rem"}
						onClick={(e) => {
							e.stopPropagation();
							const container = document.querySelector(".home_section");
							container?.scrollTo({ top: 0, behavior: "smooth" });
							setTimeout(() => {
								setCurrentContent("job-experience");
							}, 300);
						}}
					>
						See all my work experience
					</Button>
				</motion.div>
			</div>
		</div>

		<Text
			mt={"1rem"}
			style={{
				fontSize: ".9rem",
				opacity: 0.8,
			}}
		>
			After a period of self-taught training, I began my professional journey
			solving real-world technical challenges in collaborative development
			environments. In these three years, I&apos;ve worked on modern web
			applications, designing and building frontends in <b>React</b> and
			backends with <b>Node.js</b>. I&apos;ve used best practices, design
			principles, and tools such as <b>Next.js</b>, <b>TypeScript</b>,{" "}
			<b>Tailwind</b>, <b>Zustand</b>, <b>Express.js</b>, and others.
			<br />
			<br />
			I&apos;ve led and participated in projects where improving front-end
			architecture, reducing technical debt, and optimizing the user experience
			were key. From implementing real-time workflows to designing reusable
			components and maintaining a consistent UI, my work has contributed to
			improved performance, scaling functionality, and facilitating cross-team
			collaboration.
			<br />
			<br />
			My way of adding value goes beyond code: I&apos;m involved in technical
			decisions, I practice pair programming, and I promote a development
			culture focused on quality and continuous improvement.
		</Text>
	</div>
);
