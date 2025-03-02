import { Button, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./projects.css";
import { projectList, ProjectProps } from "../../../constants";
import { ProjectsImgList } from "./ProjectsImgList";
import {
	container,
	itemAnimation,
} from "../../../helpers/motionAnimationContainer";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 3.5,
		},
	},
};

export const Projects: React.FC<{ open: boolean }> = ({ open }) => {
	const [projectActive, setProjectActive] = useState(projectList[0]);

	const changeProjectActiveId = (newId: ProjectProps) => {
		const container = document.querySelector(".projects__content");
		container?.scroll({ top: 0 });
		setProjectActive(newId);
	};

	const redirect = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		url: string | null
	) => {
		event.stopPropagation();
		if (url) {
			window.open(url, "_blank");
		}
	};

	return (
		<motion.div
			className={`projects__container ${open && "open"}`}
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={itemAnimation}>
				<Text style={{ fontWeight: 600, fontSize: "1.2rem" }}>Projects</Text>
			</motion.div>
			<div className="projects__container">
				<div className="projects__content">
					<div className="projects__info">
						<ProjectsImgList changeProjectActiveId={changeProjectActiveId} />
						<motion.div variants={itemAnimation}>
							<h3>
								{projectActive?.inProgress && <i>Project in progress:</i>}{" "}
								{projectActive.name}
							</h3>
						</motion.div>
						<motion.div variants={itemAnimation}>
							<p className="projects__content__technologies">
								{projectActive.technologies.map((value) => (
									<span key={value}>{value}</span>
								))}
							</p>
						</motion.div>
						<motion.div variants={itemAnimation}>
							<div>{projectActive.description()}</div>
						</motion.div>
					</div>
					<div className="projects__content__actions">
						<motion.div variants={itemAnimation}>
							<Button
								color="#fff5"
								radius={"md"}
								onClick={(e) => redirect(e, projectActive.code)}
								disabled={projectActive?.inProgress}
							>
								View code
							</Button>
						</motion.div>
						{projectActive.seeProject && (
							<motion.div variants={itemAnimation}>
								<Button
									color="#fff5"
									radius={"md"}
									onClick={(e) => redirect(e, projectActive.seeProject)}
									disabled={projectActive?.inProgress}
								>
									View project
								</Button>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
