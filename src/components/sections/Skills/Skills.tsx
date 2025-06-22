import { AppleWatchDock } from "@/components/sections/Skills/WatchViuw";
import { container, itemAnimation } from "@/helpers/motionAnimationContainer";
import { Switch, Text, Tooltip } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { PiCirclesThreeLight } from "react-icons/pi";
import "./skill.css";
import { SkillsList } from "./SkillsList";

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
	const [checked, setChecked] = useState(false);
	const [openDelay, setOpenDelay] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOpenDelay(true);
		}, 3500);
	}, []);

	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
			className="skill"
		>
			<motion.div variants={itemAnimation}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Text
						style={{ fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }}
					>
						Skill
					</Text>
					<Tooltip
						label={checked ? "Ver en círculos" : "Ver ordenado en una lista"}
						refProp="rootRef"
					>
						<Switch
							size="md"
							color="dark.4"
							onLabel={<PiCirclesThreeLight size={18} color="#fff" />}
							offLabel={<CiCircleList size={16} color="#000" />}
							checked={checked}
							onChange={(e) => setChecked(e.target.checked)}
						/>
					</Tooltip>
				</div>
			</motion.div>
			{openDelay && <>{checked ? <SkillsList /> : <AppleWatchDock />}</>}
		</motion.div>
	);
};
