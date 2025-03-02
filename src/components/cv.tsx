import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { container, itemAnimation } from "../helpers/motionAnimationContainer";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 3.4,
		},
	},
};

export const Cv: React.FC<{
	open: boolean;
}> = ({ open }) => {
	const [delayOpen, setDelayOpen] = useState(open);

	useEffect(() => {
		setTimeout(() => {
			setDelayOpen(open);
		}, 500);
	}, [open]);

	return (
		<div className={`home__cv ${open && "open"}`}>
			<motion.div
				variants={containerWithDelay}
				initial="hidden"
				animate="visible"
				className="home__cv"
				style={{
					position: "relative",
				}}
			>
				<motion.div variants={itemAnimation} style={{ height: "100%" }}>
					{delayOpen ? (
						<div style={{ height: "85vh" }}>
							<embed
								src="pdf.pdf"
								type="application/pdf"
								style={{ width: "100%", height: "100%" }}
							/>
						</div>
					) : (
						<>
							<motion.div variants={itemAnimation}>
								<img
									src="/cv.jpeg"
									width="100%"
									height="100%"
									style={{
										objectFit: "cover",
										objectPosition: "top",
									}}
								/>
								<motion.div
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
										top: 0,
										left: 0,
										background: "#1d213399",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										fontSize: "2rem",
										zIndex: 200,
										// color: colors.primary,
									}}
									variants={itemAnimation}
								>
									<motion.div variants={itemAnimation}>
										<Text
											style={{
												fontWeight: 600,
												fontSize: "3rem",
												marginBottom: "2rem",
											}}
										>
											CV
										</Text>
									</motion.div>
								</motion.div>
							</motion.div>
						</>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
};
