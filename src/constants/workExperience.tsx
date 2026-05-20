import { List } from "@mantine/core";
import { ForwardRefExoticComponent, SVGProps } from "react";
import { FaBolt, FaBriefcase, FaRobot } from "react-icons/fa6";
import { IconType } from "react-icons";

export const workExperience: WorkExperience[] = [
	{
		jobPosition: "Full Stack Developer & AI Automation Specialist",
		enterpriseName: "Urpe",
		durationTime: {
			init: "2025-07-01",
		},
		location: "Remote",
		technologies: [
			{ name: "TypeScript", featured: true },
			{ name: "React", featured: true },
			{ name: "Next", featured: true },
			{ name: "Node", featured: true },
			{ name: "Supabase", featured: true },
			{ name: "PostgreSQL", featured: true },
			{ name: "OpenAI", featured: true },
			{ name: "Anthropic", featured: true },
			{ name: "Gemini" },
			{ name: "n8n", featured: true },
			{ name: "GoHighLevel" },
			{ name: "Tailwind" },
			{ name: "Mantine" },
		],
		icon: FaRobot,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>
						Architected and built the operational platform for an immigration
						law firm
					</b>
					, serving 40+ active users across leadership, operations, analysts and
					sales with 20+ specialized modules. Internal processing time dropped
					from <b>6 months to 1 business week</b>, scaling monthly throughput
					from <b>~10 to ~48 cases</b> and repositioning the firm as a more
					structured option than its competition.
				</List.Item>
				<List.Item>
					<b>Designed the technical architecture</b> on Next.js, TypeScript and
					Supabase, integrating <b>OpenAI, Anthropic and Gemini</b> alongside
					Google Workspace to automate eligibility analysis, legal drafting and
					operational communication with visa candidates.
				</List.Item>
				<List.Item>
					<b>Deployed conversational AI agents</b> on WhatsApp Business,
					Instagram and Messenger that handle <b>~500 prospects/month</b>,
					automating lead capture, first-touch and qualified handoff to the
					sales team.
				</List.Item>
				<List.Item>
					<b>Built a context-aware email marketing system</b> that uses each
					client–AI conversation to generate tailored follow-ups. Over a base of
					~2,700 monthly prospects and <b>19,700+ emails sent</b>, it reached a{" "}
					<b>49% open rate</b> — nearly double the industry average.
				</List.Item>
				<List.Item>
					<b>Delivered custom dashboards for external B2B clients</b>: AI agent
					configuration panels, team performance dashboards, and an AI-assisted
					landing page generator.
				</List.Item>
				<List.Item>
					<b>Orchestrated end-to-end automation flows</b> in n8n and
					GoHighLevel, wiring multichannel messaging, CRMs and databases into a
					single operational fabric for both internal ops and external clients.
				</List.Item>
			</List>
		),
	},
	{
		jobPosition: "Junior FE → Mid Full Stack → Tech Lead",
		enterpriseName: "Nolatech",
		durationTime: {
			init: "2021-08-01",
			since: "2025-03-31",
		},
		location: "Remote",
		technologies: [
			{ name: "HTML" },
			{ name: "CSS" },
			{ name: "JavaScript" },
			{ name: "TypeScript", featured: true },
			{ name: "React", featured: true },
			{ name: "Next", featured: true },
			{ name: "Redux" },
			{ name: "Mui" },
			{ name: "Mantine" },
			{ name: "Socket", featured: true },
			{ name: "Tailwind" },
			{ name: "Git" },
			{ name: "Node", featured: true },
			{ name: "Express", featured: true },
			{ name: "MySQL" },
			{ name: "MongoDB", featured: true },
		],
		icon: FaBolt,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Promoted twice</b> during my tenure for sustained contribution to
					client projects and internal product: Junior Frontend → Mid Full Stack
					(Feb 2023) → Tech Lead (Mar 2024).
				</List.Item>
				<List.Item>
					<b>Tech-led the front-end of Epale</b>, a social messaging app
					available on the App Store and web. Built the web version with React,
					Socket.io and Node.js: P2P and group chats, audio/video/image sharing,
					live polls, push notifications, local persistence and adaptive media
					optimization based on the user&apos;s bandwidth.
				</List.Item>
				<List.Item>
					As Tech Lead, <b>led a team of 3 developers</b>. In the first two
					months, <b>tickets closed per sprint went up by 20%</b> and
					QA-reported issues dropped noticeably through pair programming,
					unblocking sessions and actionable documentation.
				</List.Item>
				<List.Item>
					<b>Boosted performance of client apps by 50%</b> via memoization, lazy
					loading, code splitting, query optimization, caching and strategic
					localStorage usage — reaching high Lighthouse scores and improving
					initial load experience.
				</List.Item>
				<List.Item>
					<b>Lifted landing-page engagement by 40%</b> (retention and
					time-on-page measured with Google Analytics) through high-impact
					redesigns and UX improvements.
				</List.Item>
				<List.Item>
					<b>Standardized team practices</b> with reusable component libraries,
					leading code reviews and promoting pair programming — accelerating
					onboarding for new developers.
				</List.Item>
			</List>
		),
	},
	{
		jobPosition: "Full Stack Developer (Freelance)",
		enterpriseName: "Freelance Projects",
		durationTime: {
			init: "2020-12-01",
		},
		location: "Remote",
		technologies: [
			{ name: "TypeScript", featured: true },
			{ name: "Next", featured: true },
			{ name: "React", featured: true },
			{ name: "Node", featured: true },
			{ name: "Supabase", featured: true },
			{ name: "PostgreSQL" },
			{ name: "MySQL" },
			{ name: "OpenAI", featured: true },
			{ name: "n8n", featured: true },
		],
		icon: FaBriefcase,
		jobDescription: (
			<List spacing="md" center>
				<List.Item>
					<b>Botizate</b> (Nov 2025 – Apr 2026, part-time): built a marketing
					and customer service automation system with WhatsApp and email flows,
					including conversational agents with <b>RAG memory</b>, automated lead
					capture and nurturing, scheduled reminders and a campaign metrics
					dashboard. Handled an average of{" "}
					<b>3,000 monthly clients with a 25% booking rate</b>, scaling a
					business previously 100% dependent on human staff.
				</List.Item>
				<List.Item>
					<b>Ultrabodegón</b>: full operational management system built with
					Next.js and MySQL — public landing, admin dashboard, inventory control
					and order/delivery tracking.
				</List.Item>
				<List.Item>
					<b>Custom platforms for organizations</b>: project management platform
					for a non-profit foundation, and an institutional billing system for
					the <i>Colegio de Odontólogos del Estado Bolívar</i> (Venezuela).
				</List.Item>
			</List>
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
