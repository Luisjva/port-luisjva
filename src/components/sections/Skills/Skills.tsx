import { container, itemAnimation } from "@/helpers/motionAnimationContainer";
import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import "./skill.css";
import { AppleWatchDock } from "@/components/AppleWatchDock";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 3.5,
			staggerChildren: 0.1,
			duration: 0.25,
		},
	},
};

export const Skills = () => {
	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
			className="skill"
		>
			<motion.div variants={itemAnimation}>
				<Text
					style={{ fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }}
				>
					Habilidades técnicas
				</Text>
			</motion.div>
			{/* <Box className="skill-children">
				{skillsList.map((item) => (
					<motion.div variants={itemAnimation} key={item}>
						<Badge
							variant="outline"
							color="white"
							size="lg"
							style={{
								borderColor: "transparent",
								backgroundColor: colors.primary + 99,
							}}
						>
							{item}
						</Badge>
					</motion.div>
				))}
			</Box> */}
			<AppleWatchDock />
		</motion.div>
	);
};
