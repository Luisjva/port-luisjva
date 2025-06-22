import { Box, Text } from "@mantine/core";
import { WorkExperience } from "../../../constants/workExperience";
import "./timeline.css";
import { motion } from "framer-motion";
import { container, itemAnimation } from "@/helpers/motionAnimationContainer";
import dayjs from "dayjs";
import { skillsList } from "@/constants/skillsList";

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
					className={`timeline ${
						index === workExperience.length - 1 ? "timeline-last" : ""
					}`}
				>
					<div className="timeline-icon">
						<motion.div variants={itemAnimation}>
							<experience.icon color="#fff" style={{ fontSize: "14px" }} />
						</motion.div>
					</div>
					<motion.div variants={itemAnimation}>
						<h3 className="timeline-title">{experience.jobPosition}</h3>
					</motion.div>
					<div className="timeline-info">
						<motion.div variants={itemAnimation} className="timeline-subtitle">
							{experience.enterpriseName}
						</motion.div>
						<motion.div
							variants={itemAnimation}
							style={{ display: "flex", gap: ".25rem", flexWrap: "wrap" }}
						>
							<Text className="timeline-item timeline-item-time">
								{dayjs(experience.durationTime.init).format("MMMM YYYY")} -{" "}
								{experience.durationTime.since
									? dayjs(experience.durationTime.since).format("YYYY")
									: "Present"}
							</Text>
							<Text className="timeline-item timeline-item-location">
								{experience.location}
							</Text>
						</motion.div>
						{!open && (
							<motion.div variants={itemAnimation}>
								<Text size="xs" c="dimmed" mt="0.25rem">
									Outstanding skills
								</Text>
							</motion.div>
						)}
						<motion.div
							variants={itemAnimation}
							style={{
								display: "flex",
								gap: ".25rem",
								flexWrap: "wrap",
								marginTop: open ? "0.75rem" : "",
							}}
						>
							{experience.technologies
								.filter((technology) => (open ? true : technology.featured))
								.map((technology) => {
									const skill = skillsList.find((skill) =>
										skill.name
											.toLowerCase()
											.includes(technology.name.toLowerCase())
									);
									return (
										<Text
											key={technology.name}
											className="timeline-item timeline-item-location"
											style={{
												borderLeft: `2px solid${skill?.color || "#333"}`,
												background: `${skill?.color || "#333333"}22`,
											}}
										>
											{skill?.name || technology.name}
										</Text>
									);
								})}
						</motion.div>
					</div>
					<div className="timeline-content">
						{open && (
							<motion.div variants={itemAnimation}>
								<Box mt="xs">{experience.jobDescription}</Box>
							</motion.div>
						)}
					</div>
				</div>
			))}
		</motion.div>
	);
};

export default Timeline;
