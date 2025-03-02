import { motion } from "framer-motion";
import {
	container,
	itemAnimation,
} from "../../../helpers/motionAnimationContainer";
import { colors } from "../../../config";
import { Box, Text } from "@mantine/core";

import "./AboutMe.css";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 2.2,
		},
	},
};

export const AboutMeHeader = ({ open }: { open: boolean }) => (
	<motion.div
		variants={containerWithDelay}
		initial="hidden"
		animate="visible"
		className={`about-me__header ${open && "open"}`}
	>
		<motion.div
			variants={itemAnimation}
			className={`about-me__header__image ${
				open && "about-me__header__image--open"
			}`}
		></motion.div>
		<Box className={"about-me__header__container"}>
			{!open && (
				<>
					<motion.div
						variants={itemAnimation}
						className="about-me__header__name"
						style={{
							fontWeight: 600,
							fontSize: "1.65rem",
							lineHeight: "1.65rem",
							marginTop: ".2rem",
						}}
					>
						Luis Villegas
					</motion.div>
					<motion.div
						variants={itemAnimation}
						className="about-me__header__name"
						style={{
							color: open ? "#000c" : "#fff7",
							fontSize: ".95rem",
							lineHeight: ".95rem",
						}}
					>
						Full stack programmer
					</motion.div>
				</>
			)}
			<motion.div variants={itemAnimation}>
				<Text
					style={{
						color: open ? colors.primary : "#fff",
						fontWeight: 600,
						transition: "color .6s",
					}}
					className="about-me__header__title"
				>
					Frontend Developer with 3 years of experience in React
				</Text>
			</motion.div>
			<motion.div variants={itemAnimation}>
				<Text
					color={open ? "#000c" : "#fff"}
					mt={".5rem"}
					className="about-me__header__content"
				>
					My focus is on combining functionality and design to deliver
					exceptional user experiences that drive efficiency and customer
					satisfaction.
				</Text>
			</motion.div>
			{/* {open && (
					<Box mt={"1rem"}>
						<Group justify="start" gap="xs">
							<Button radius={"md"} color={colors.primary} w={193}>
								Experiencia laboral
							</Button>
							<Button
								variant="transparent"
								radius={"md"}
								color={colors.blue.dark}
								w={193}
							>
								Ver referencias personales
							</Button>
						</Group>
					</Box>
				)} */}
		</Box>
	</motion.div>
);
