import { Box, Text } from "@mantine/core";
import { WorkExperience } from "../../../constants/workExperience";
import "./timeline.css";
import { motion } from "framer-motion";
import { container, itemAnimation } from "@/helpers/motionAnimationContainer";

interface TimelineProps {
	workExperience: WorkExperience[];
	open: boolean;
}

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 3,
		},
	},
};

const Timeline: React.FC<TimelineProps> = ({ workExperience, open }) => {
	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
			className="timeline-container"
		>
			{workExperience.map((experience, index) => (
				<div
					key={experience.enterpriseName}
					className={`timeline-item ${
						index === workExperience.length - 1 ? "timeline-item-last" : ""
					}`}
				>
					<div className="timeline-icon">
						<motion.div variants={itemAnimation}>
							<experience.icon color="#fff" style={{ fontSize: "14px" }} />
						</motion.div>
					</div>
					<motion.div variants={itemAnimation}>
						<h3 className="timeline-title">{experience.enterpriseName}</h3>
					</motion.div>
					<div className="timeline-content">
						<motion.div variants={itemAnimation}>
							<Text c="dimmed" size="sm">
								{experience.jobPosition} {experience.durationTime}
							</Text>
						</motion.div>
						<motion.div variants={itemAnimation}>
							{open ? (
								<Box mt="xs">{experience.jobDescription}</Box>
							) : (
								<Text c="#fff" size="sm">
									{experience.jobDescriptionShort.substring(0, 60)}
									{experience.jobDescriptionShort.length > 50 ? "..." : ""}
								</Text>
							)}
						</motion.div>
					</div>
				</div>
			))}
		</motion.div>
	);
};

export default Timeline;
