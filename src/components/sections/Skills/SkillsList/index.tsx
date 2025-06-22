import { skillsList } from "@/constants/skillsList";
import { Item } from "./Item";

export const SkillsList = () => {
	return (
		<div className="skill-list">
			{skillsList.map((skill) => (
				<Item key={skill.name} skill={skill} />
			))}
		</div>
	);
};
