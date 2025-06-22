import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
	container,
	itemAnimation,
} from "../../../helpers/motionAnimationContainer";
import { workExperience } from "../../../constants";

import "./experience.css";
import Timeline from "./TimeLine";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 2.75,
		},
	},
};

export const Experience: React.FC<{ open: boolean }> = ({ open }) => {
	const [openDelay, setOpenDelay] = useState(open);

	useEffect(() => {
		if (open) {
			setTimeout(() => {
				setOpenDelay(open);
			}, 200);
		} else {
			setTimeout(() => {
				setOpenDelay(open);
			}, 300);
		}
	}, [open, setOpenDelay]);

	return (
		<motion.div
			className={`experience ${open && "open"}`}
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={itemAnimation}>
				<Text style={{ fontWeight: 600, fontSize: "1.5rem" }}>
					Work Experience
				</Text>
			</motion.div>
			<motion.div variants={itemAnimation}>
				<Timeline open={openDelay} workExperience={workExperience} />
			</motion.div>
		</motion.div>
	);
};
