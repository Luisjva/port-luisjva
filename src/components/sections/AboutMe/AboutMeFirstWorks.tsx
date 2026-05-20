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
							Nolatech & Epale — three years that shaped how I ship
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
							I joined as a Junior Frontend, got promoted twice, and ended up
							leading a team of three.
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
			I joined <b>Nolatech</b> in August 2021 as a <b>Junior Frontend</b>,
			learning the craft inside a consultancy that ships both client work and
			its own products. By February 2023 I had grown into a{" "}
			<b>Mid Full Stack</b> role, and in March 2024 I was promoted to{" "}
			<b>Tech Lead</b> — three and a half years that shaped how I think about
			software today.
			<br />
			<br />
			My main project was <b>Epale</b>, a social messaging app available on the
			App Store and on web for the general consumer. I led the development of
			the web version with <b>React</b>, <b>Socket.io</b> and <b>Node.js</b>:
			P2P and group chats, audio/video/image sharing, live polls, push
			notifications and adaptive media optimization based on the user&apos;s
			bandwidth. I worked side by side with the Product Owner and PM to define
			and prioritize features for both the product and its internal management
			dashboard.
			<br />
			<br />
			As Tech Lead I owned the technical direction for a team of three
			developers. Within the first two months I lifted{" "}
			<b>tickets closed per sprint by 20%</b> and visibly reduced QA-reported
			issues by combining pair programming, unblocking sessions and actionable
			documentation. I also pushed performance work across client products —{" "}
			<b>+50% in load and runtime</b> via memoization, lazy loading, code
			splitting and smarter caching — and standardized our practices through
			reusable component libraries and consistent code reviews.
		</Text>
	</div>
);
