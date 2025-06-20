import * as React from "react";
import { motion, MotionValue, useMotionValue } from "framer-motion";
import { icon } from "./settings";
import { useIconTransform } from "./use-icon-transform";
import { Skill } from "@/constants/skillsList";

export function Item({
	row,
	col,
	planeX,
	planeY,
	device,
}: {
	row: number;
	col: Skill;
	planeX: MotionValue<number>;
	planeY: MotionValue<number>;
	device: { width: number; height: number };
}) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const scale = useMotionValue(1);

	// Calculate the origin x and y offsets of this icon based on
	// its column and row position
	const xOffset =
		col.index * (icon.size + icon.margin) +
		(row % 2) * ((icon.size + icon.margin) / 2);
	const yOffset = row * icon.size;

	// Transform the icon's x, y and scale based on the position of the draggable plane
	useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset, device });

	return (
		<motion.div
			style={{
				position: "absolute",
				left: xOffset,
				top: yOffset,
				x,
				y,
				scale,
				width: icon.size,
				height: icon.size,
				borderRadius: "50%",
				contain: "strict",
				// This will change the color of an icon every render. In production
				// you'd want to save this as a ref or similar. But here it makes a nice
				// visual indicator that we're doing all this without any re-renders :)
				// background: `hsla(${Math.random() * 360}, 95%, 55%, 1)`,
				background: `#fff1`,

				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img
				src={col.icon}
				alt={col.name}
				style={{
					width: "80%",
					height: "80%",
					objectFit: "contain",
				}}
			/>
		</motion.div>
	);
}
