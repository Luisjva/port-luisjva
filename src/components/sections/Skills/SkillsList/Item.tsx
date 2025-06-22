import { Skill } from "@/constants/skillsList";
import Image from "next/image";

export const Item = ({ skill }: { skill: Skill }) => {
	return (
		<div className="skill-list__item">
			<Image
				src={skill.icon}
				alt={skill.name}
				width={50}
				height={50}
				objectFit="contain"
			/>
			<h3>{skill.name}</h3>
		</div>
	);
};
