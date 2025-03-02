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
						First work experiences
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
						Finding a job wasn&apos;t an easy task, but with perseverance and
						determination, everything is possible
					</Text>
				</motion.div>

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
						See all work experience
					</Button>
				</motion.div>
			</Box>
		</Box>
	</div>
);
