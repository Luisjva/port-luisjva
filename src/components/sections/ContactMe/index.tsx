import { contactMeList } from "@/constants/contactMeList";
import { container, itemAnimation } from "@/helpers/motionAnimationContainer";
import { ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import "./contact.css";

import "@mantine/tiptap/styles.css";
import { EmailModal } from "./EmailModal";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 2.7,
			staggerChildren: 0.15,
			duration: 0.25,
		},
	},
};

export const Contact = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
			className="contact__container"
		>
			{contactMeList.map((item, index) => {
				if (!index) {
					return (
						<motion.div key={item.name} variants={itemAnimation}>
							<ActionIcon
								variant="filled"
								color="#2f355199"
								style={{ width: "100%", height: "100%" }}
								radius={"1rem"}
								onClick={open}
								aria-label={item.name}
							>
								{typeof item.icon === "string" ? (
									<Image
										src={item.icon}
										alt={item.name}
										width={48}
										height={48}
										style={{ width: "3rem", height: "3rem" }}
										priority
									/>
								) : (
									<item.icon style={{ width: "50%", height: "50%" }} />
								)}
							</ActionIcon>
						</motion.div>
					);
				}
				return (
					<motion.div key={item.name} variants={itemAnimation}>
						<ActionIcon
							variant="filled"
							color="#2f355199"
							style={{ width: "100%", height: "100%" }}
							radius={"1rem"}
							onClick={() => window.open(item.url)}
							aria-label={item.name}
						>
							{typeof item.icon === "string" ? (
								<Image
									src={item.icon}
									alt={item.name}
									width={48}
									height={48}
									style={{ width: "3rem", height: "3rem" }}
									priority
								/>
							) : (
								<item.icon style={{ width: "50%", height: "50%" }} />
							)}
						</ActionIcon>
					</motion.div>
				);
			})}
			<EmailModal opened={opened} close={close} />
		</motion.div>
	);
};
