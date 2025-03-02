import { container, itemAnimation } from "@/helpers/motionAnimationContainer";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { projectList, ProjectProps } from "../../../constants";
import Image from "next/image";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 3.5,
			staggerChildren: 0.75,
		},
	},
};

export const ProjectsImgList: React.FC<{
	changeProjectActiveId: (newIndex: ProjectProps) => void;
}> = ({ changeProjectActiveId }) => {
	const [projectsListSort, setProjectList] =
		useState<ProjectProps[]>(projectList);

	const handleClickImg = (projectActive: ProjectProps) => {
		const projectIndex = projectList.findIndex(
			(item) => item.id === projectActive.id
		);
		const part1 = projectList.slice(projectIndex);
		const part2 = projectList.slice(0, projectIndex);

		const list = part1.concat(part2);

		setProjectList(() => {
			return projectList.map((item: ProjectProps) => {
				item.position = list.findIndex((project) => item.id === project.id);

				return item;
			});
		});
		changeProjectActiveId(projectActive);
	};

	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
		>
			{projectsListSort.map((item) => (
				<motion.div variants={itemAnimation} key={item.id}>
					{item?.inProgress ? (
						<div
							className={`projects__image p${item.position} projects__image__skeleton`}
							onClick={() => handleClickImg(item)}
						>
							This project is in progress
						</div>
					) : (
						<Image
							key={item.id}
							onClick={() => handleClickImg(item)}
							src={item.img}
							alt={`imagen del proyecto ${item.name}`}
							className={`projects__image p${item.position}`}
							width={500}
							height={300}
							priority
						/>
					)}
				</motion.div>
			))}
		</motion.div>
	);
};
