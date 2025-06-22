import { List } from "@mantine/core";
import { ForwardRefExoticComponent, SVGProps } from "react";
import { FaBolt } from "react-icons/fa6";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BsFillBuildingFill } from "react-icons/bs";
import { IconType } from "react-icons";

export const workExperience: WorkExperience[] = [
	{
		jobPosition: "Full Stack Developer",
		enterpriseName: "Nolatech",
		durationTime: {
			init: "01-01-2023",
		},
		location: "Remote",
		technologies: [
			{
				name: "HTML",
			},
			{
				name: "CSS",
			},
			{
				name: "JavaScript",
			},
			{
				name: "TypeScript",
				featured: true,
			},
			{
				name: "React",
				featured: true,
			},
			{
				name: "Next",
				featured: true,
			},
			{
				name: "Redux",
			},
			{
				name: "Mui",
			},
			{
				name: "Mantine",
			},
			{
				name: "Socket",
			},
			{
				name: "Tailwind",
			},
			{
				name: "Git",
			},
			{
				name: "Node",
				featured: true,
			},
			{
				name: "Express",
				featured: true,
			},
			{
				name: "MySQL",
			},
			{
				name: "MongoDB",
				featured: true,
			},
		],
		icon: FaBolt,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Developed various Administrative Panels (HUB/CMS)</b> with
					on-demand features for multiple clients, aimed at managing high-impact
					information, built with React.js and Next.js, using tools such as
					Redux, Mui, Mantine, Socket.io, among others. The implementation of
					these panels increased client productivity by 30% by simplifying
					workflows and automating repetitive tasks.
				</List.Item>
				<List.Item>
					<b>Successfully optimized by 50%</b> the performance of 3 existing
					company projects through the modularization of existing components and
					addition of new components.
				</List.Item>
				<List.Item>
					<b>Designed and developed high-impact landing pages</b> with
					interactive animations for application products and services,
					achieving a 40% increase in user conversion rate. The carefully
					implemented animations enhance the appeal of client services,
					increasing dwell time by 25%.
				</List.Item>
				<List.Item>
					<b>
						Developed a library to streamline the creation of administrative
						panels for applications
					</b>
					, which significantly improved development speed in the company for
					this specific aspect.
				</List.Item>
				<List.Item>
					<b>Developed web versions of existing company applications</b>,
					expanding their reach and improving client interaction, primarily
					messaging web applications.
				</List.Item>
			</List>
		),
	},
	{
		enterpriseName: "Freelancer",
		durationTime: {
			init: "July 2022",
			since: "December 2022",
		},
		technologies: [
			{
				name: "React",
				featured: true,
			},
			{
				name: "Next",
				featured: true,
			},
			{
				name: "Node",
				featured: true,
			},
			{
				name: "MongoDB",
				featured: true,
			},
			{
				name: "MySQL",
				featured: true,
			},
		],
		icon: BsFillMegaphoneFill,
		location: "Remote",
		jobPosition: "Fullstack Developer",
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Developed and optimized projects of various kinds</b> taking on
					support roles to correct and improve existing functionalities, as well
					as resolve bugs, reducing client product loading times by up to 15%.
				</List.Item>
				<List.Item>
					<b>Initiated and led projects from scratch</b>, prioritizing quality
					and efficiency at each stage of development. Used technologies such as
					React, Node.js, and MongoDB to create robust web applications.
				</List.Item>
				<List.Item>
					<b>Maintained efficient communication with clients</b> to ensure their
					satisfaction with the product.
				</List.Item>
			</List>
		),
	},
	{
		enterpriseName: "Ultrabodegon",
		durationTime: {
			init: "January 2022",
			since: "July 2022",
		},
		technologies: [
			{
				name: "React",
				featured: true,
			},
			{
				name: "Next",
				featured: true,
			},
			{
				name: "Node",
				featured: true,
			},
			{
				name: "MongoDB",
				featured: true,
			},
		],
		location: "Remote",
		jobPosition: "Fullstack Developer",
		icon: BsFillBuildingFill,
		jobDescription: (
			<>
				<b>
					Developed a comprehensive solution for a small local establishment
					using Next.js and MySQL, which included
				</b>
				:
				<List spacing="md" center mt={"1rem"}>
					<List.Item>
						<b>Inventory management</b>: Implementation of an efficient system
						to manage product stock.
					</List.Item>
					<List.Item>
						<b>Product visualization</b>: Creation of a user-friendly interface
						to display the product list to users.
					</List.Item>
					<List.Item>
						<b>Purchase flow</b>: Design of an intuitive and fluid purchase
						process.
					</List.Item>
					<List.Item>
						<b>Purchase statistics</b>: Generation of detailed reports on user
						purchases.
					</List.Item>
					<List.Item>
						<b>Dynamic and responsive design</b>: Ensuring optimal user
						experience on web and mobile devices.
					</List.Item>
				</List>
			</>
		),
	},
];

export type WorkExperience = {
	jobPosition: string;
	enterpriseName: string;
	durationTime: {
		init: string;
		since?: string;
	};
	location: "Remote" | "On-site";
	technologies: { name: string; featured?: boolean }[];
	jobDescription: React.ReactNode;
	icon:
		| ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>
		| IconType;
};
