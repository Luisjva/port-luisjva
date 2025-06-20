// export const skillsList = [
// 	"HTML",
// 	"CSS",
// 	"Sass",
// 	"JavaScript",
// 	"TypeScript",
// 	"React JS",
// 	"Next JS",
// 	"Redux",
// 	"Vue",
// 	"Tailwind",
// 	"Node JS",
// 	"Express JS",
// 	"Git",
// ];

export type Skill = {
	name: string;
	icon: string;
	index: number;
};

//* The icon must be in public/skills-images
//* The index has to be incremental

export const skillsList = [
	{
		name: "HTML",
		icon: "/skills-images/HTML.png",
		index: 0,
	},
	{
		name: "CSS",
		icon: "/skills-images/CSS3.png",
		index: 1,
	},
	{
		name: "Sass",
		icon: "/skills-images/Sass.png",
		index: 2,
	},
	{
		name: "JavaScript",
		icon: "/skills-images/JavaScript.png",
		index: 3,
	},
	{
		name: "TypeScript",
		icon: "/skills-images/TypeScript.png",
		index: 4,
	},
	{
		name: "React JS",
		icon: "/skills-images/React.png",
		index: 5,
	},
	{
		name: "Next JS",
		icon: "/skills-images/Next.png",
		index: 6,
	},
	{
		name: "Redux",
		icon: "/skills-images/Redux.png",
		index: 7,
	},
	{
		name: "Vue",
		icon: "/skills-images/Vue.png",
		index: 8,
	},
	{
		name: "Tailwind",
		icon: "/skills-images/Tailwind.png",
		index: 9,
	},
	{
		name: "Node JS",
		icon: "/skills-images/Node.png",
		index: 10,
	},
	{
		name: "Express JS",
		icon: "/skills-images/Express.png",
		index: 11,
	},
	{
		name: "Git",
		icon: "/skills-images/Git.png",
		index: 12,
	},
	{
		name: "GitHub",
		icon: "/skills-images/GitHub.svg",
		index: 13,
	},
];
