import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { itemAnimation } from "../../../helpers/motionAnimationContainer";

export const AboutMeUrpe = () => (
	<div className="about-me__urpe" style={{ margin: "3rem auto" }}>
		<Box style={{ maxWidth: 500 }}>
			<motion.div variants={itemAnimation}>
				<Text
					style={{
						fontSize: ".8rem",
						opacity: 0.8,
					}}
				>
					Urpe AI Lab — present
				</Text>
			</motion.div>
			<motion.div variants={itemAnimation}>
				<Text
					style={{
						fontSize: "1.4rem",
						fontWeight: 800,
					}}
					mt={".25rem"}
				>
					I lead the engineering of an AI-powered legal platform that
					collapsed a 6-month workflow into a single business week.
				</Text>
			</motion.div>
		</Box>

		<Text
			mt={"1rem"}
			style={{
				fontSize: ".9rem",
				opacity: 0.8,
			}}
		>
			At <b>Urpe AI Lab</b> I architect and ship AI-powered platforms for our
			internal immigration law firm and for external B2B clients. The flagship
			build is the firm&apos;s operational platform — serving{" "}
			<b>40+ active users</b> across leadership, operations, analysts and
			sales, with <b>20+ specialized modules</b> on <b>Next.js</b>,{" "}
			<b>TypeScript</b> and <b>Supabase</b>: case management, USCIS form
			generation, AI-driven eligibility analysis and a dedicated client portal.
			<br />
			<br />
			The business impact is the part I&apos;m proudest of: internal processing
			time dropped from <b>6 months to 1 business week</b>, and monthly
			throughput scaled from <b>~10 to ~48 cases</b>. Under the hood I
			integrate <b>OpenAI</b>, <b>Anthropic</b> and <b>Gemini</b> alongside
			Google Workspace to automate profile analysis, legal drafting and
			operational communication with visa candidates.
			<br />
			<br />
			Around that core platform I deployed conversational <b>AI agents</b> on
			WhatsApp Business, Instagram and Messenger that handle{" "}
			<b>~500 prospects/month</b>, plus a context-aware email marketing system
			that reached a <b>49% open rate over 19,700+ emails</b> — nearly double
			the industry average. The end-to-end automation runs through{" "}
			<b>n8n</b> and <b>GoHighLevel</b>, wiring multichannel messaging, CRMs
			and databases into a single operational fabric.
		</Text>
	</div>
);
