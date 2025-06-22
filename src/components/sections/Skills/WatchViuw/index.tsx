import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Item } from "./Item";
import { Skill, skillsList } from "@/constants/skillsList";

// Download the Framer Beta: https://www.framer.com/beta/
// Framer Beta API documentation: https://www.framer.com/api/

// Fill a grid of numbers to represent each app icon

// Función para mezclar un array
const shuffleArray = (arr: Skill[]) => {
	const copy = arr.map((item) => ({ ...item })); // Clon profundo de los objetos
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy.map((item, index) => ({ ...item, index }));
};

// Generar 20 subarrays aleatorios
const grid = [
	skillsList,
	...Array.from({ length: 19 }, () => shuffleArray(skillsList)),
];

export const AppleWatchDock = () => {
	const [device, setDevice] = useState<{
		width: number;
		height: number;
	} | null>(null);
	// We manually create x/y motion values for the draggable plane as it allows us to pass these to
	// icon children, which can then listen to when they change and respond.
	// -220 is an arbitrary position that centers an initial icon - this could be calculated
	const x = useMotionValue(-225);
	const y = useMotionValue(-225);

	useEffect(() => {
		const getDeviceSize = () => {
			const container = document.querySelector(".device-container");
			if (container) {
				setDevice({
					width: container.clientWidth,
					height: container.clientHeight,
				});
			}
		};
		setTimeout(() => {
			getDeviceSize();
		}, 100);
		// window.addEventListener("resize", getDeviceSize);
		// return () => {
		// 	window.removeEventListener("resize", getDeviceSize);
		// };
	}, []);

	return (
		<div className="device-container">
			{device && (
				<div className="device" style={device}>
					<motion.div
						drag
						// These constraints could be calculated dynamically based on icon.size and grid length
						dragConstraints={{ left: -650, right: 50, top: -600, bottom: 50 }}
						// dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
						style={{
							// Likewise these draggable plane dimensions could be calculated, but 1000x1000 is arbitrary and big

							width: 1100,
							height: 1100,
							x,
							y,
							background: "transparent",
						}}
						variants={{
							from: {
								opacity: 0,
							},
							to: {
								opacity: 1,
							},
						}}
						initial="from"
						animate="to"
						transition={{
							duration: 0.5,
						}}
					>
						{grid.map((rows, rowIndex) =>
							rows.map((col: Skill) => (
								<Item
									key={col.index}
									row={rowIndex}
									col={col}
									planeX={x}
									planeY={y}
									device={device}
								/>
							))
						)}
					</motion.div>
				</div>
			)}
		</div>
	);
};
