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
		color: "#E34C21",
	},
	{
		name: "CSS",
		icon: "/skills-images/CSS3.png",
		index: 1,
		color: "#1572B6",
	},
	{
		name: "Sass",
		icon: "/skills-images/Sass.png",
		index: 2,
		color: "#CC6699",
	},
	{
		name: "JavaScript",
		icon: "/skills-images/JavaScript.png",
		index: 3,
		color: "#F7DF1E",
	},
	{
		name: "TypeScript",
		icon: "/skills-images/TypeScript.png",
		index: 4,
		color: "#3178C6",
	},
	{
		name: "React JS",
		icon: "/skills-images/React.png",
		index: 5,
		color: "#61DAFB",
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
		color: "#6C43AC",
	},
	{
		name: "Vue",
		icon: "/skills-images/Vue.png",
		index: 8,
		color: "#3FB984",
	},
	{
		name: "Tailwind CSS",
		icon: "/skills-images/Tailwind.png",
		index: 9,
		color: "#36BFF8",
	},
	{
		name: "Node JS",
		icon: "/skills-images/Node.png",
		index: 10,
		color: "#49883C",
	},
	{
		name: "Express JS",
		icon: "/skills-images/Express.png",
		index: 11,
	},
	{
		name: "MySQL",
		icon: "/skills-images/MySQL.png",
		index: 12,
		color: "#204F54",
	},
	{
		name: "MongoDB",
		icon: "/skills-images/MongoDB.png",
		index: 13,
		color: "#6AA342",
	},
	{
		name: "Git",
		icon: "/skills-images/Git.png",
		index: 14,
		color: "#F1502F",
	},
	{
		name: "GitHub",
		icon: "/skills-images/GitHub.svg",
		index: 15,
	},
	{
		name: "Socket.io",
		icon: "/skills-images/Socket-io.svg",
		index: 16,
	},
	{
		name: "Mui",
		icon: "/skills-images/Mui.png",
		index: 17,
		color: "#0884C9",
	},
	{
		name: "Mantine",
		icon: "/skills-images/Mantine.png",
		index: 18,
		color: "#339AF0",
	},
];
