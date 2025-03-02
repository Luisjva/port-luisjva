import { ActionIcon } from "@mantine/core";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

export interface HomeContentProps {
	id: string;
	setCurrentContent: (key: string | null) => void;
	currentContent: string | null;
	index: number;
	Element: React.ComponentType<{
		open?: boolean;
		setCurrentContent?: (key: string | null) => void;
	}>;
	notModal?: boolean;
	animationWordInit: string | null;
	elementInitialPosition: {
		y: string;
		x: string;
	};
	animationWordPosition?: "left" | "right" | "center";
	hasNotBackground?: boolean;
	canOpen?: boolean;
	topOpenPosition: number;
}

export const HomeContent = ({
	id,
	setCurrentContent,
	currentContent,
	index,
	notModal = false,
	Element,
	animationWordInit,
	elementInitialPosition,
	animationWordPosition = "left",
	hasNotBackground = false,
	canOpen = true,
	topOpenPosition = 0,
}: HomeContentProps) => {
	const contenedorRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (contenedorRef.current && currentContent !== id) {
			contenedorRef.current.scrollTo({
				top: 0,
				behavior: "smooth", // Puedes usar 'auto' o 'smooth'
			});
		}
	}, [currentContent]);

	if (notModal) {
		return (
			<div className={`home_section--not-modal home_${id}`}>
				<Element />
			</div>
		);
	}

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0.25, 0.5, 1, 1, 1, 0] }}
				transition={{ duration: 2, delay: index * 0.3 }}
				className={`home_section_word_init home_${id}`}
			>
				<h1
					style={{
						width: "100%",
						padding: "1vh",
						textAlign: animationWordPosition,
					}}
				>
					{animationWordInit}
				</h1>
			</motion.div>
			<motion.div
				initial={{
					y: elementInitialPosition.y,
					x: elementInitialPosition.x,
					opacity: 0,
				}}
				animate={{ y: 0, x: 0, opacity: [0, 0, 0, 0, 1] }}
				transition={{
					duration: 0.4,
					delay: index * 0.25 + (animationWordInit ? 1.2 : 0),
				}}
				className={`home_section_container home_${id} ${
					currentContent === id ? "open" : ""
				}`}
				style={{
					top: currentContent === id ? topOpenPosition : "",
				}}
			>
				<div
					className={`home_section ${
						hasNotBackground ? "home_section--has-not-background" : ""
					}`}
					onClick={() => {
						if (canOpen) {
							setCurrentContent(id);
						}
					}}
					ref={contenedorRef}
				>
					<div
						style={{
							position: "sticky",
							top: "1vh",
							left: "1vh",
							zIndex: 1000,
							// backgroundColor: "red",
							display: "flex",
							justifyContent: "flex-end",
							marginBottom: currentContent === id ? "7vh" : "0",
						}}
					>
						{currentContent === id && (
							<motion.div
								variants={{
									init: {
										height: 0,
									},
									animate: {
										height: 15,
										transition: {
											duration: 0.5,
										},
									},
								}}
								initial="init"
								animate="animate"
							>
								<ActionIcon
									variant="light"
									color="white"
									aria-label="Close"
									onClick={(e) => {
										e.stopPropagation();
										setCurrentContent(null);
									}}
									style={{
										position: "absolute",
										top: "1vh",
										right: "-5%",
									}}
								>
									<IoClose style={{ width: "80%", height: "80%" }} />
								</ActionIcon>
							</motion.div>
						)}
					</div>
					<Element
						open={currentContent === id}
						setCurrentContent={setCurrentContent}
					/>
				</div>
			</motion.div>
		</>
	);
};
