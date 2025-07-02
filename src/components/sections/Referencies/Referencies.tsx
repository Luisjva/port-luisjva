"use client";

import { Avatar, Box, Flex, Grid, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { personalReferencesList } from "../../../constants/personalReferencesList";
import { colors } from "../../../config";
import {
	container,
	itemAnimation,
} from "../../../helpers/motionAnimationContainer";

const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 3,
		},
	},
};

const ReferenceItem: React.FC<{
	item: (typeof personalReferencesList)[0];
	open: boolean;
	childrenPosition?: number;
}> = ({ item, open, childrenPosition = 0 }) => (
	<motion.div
		variants={{
			hidden: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
				transition: {
					delayChildren: 0.25,
					staggerChildren: 0.25,
					duration: 0.75,
					delay: childrenPosition * 0.25,
				},
			},
		}}
		initial="hidden"
		animate="visible"
		style={{
			background: open ? colors.grey + "11" : "",
			borderRadius: "1rem",
			padding: "1rem",
			transition: "1s",
		}}
	>
		<Flex gap={"sm"} align={"center"}>
			<motion.div variants={itemAnimation}>
				<Avatar src={item.img} alt="it's me" size={"lg"} />
			</motion.div>
			<Box>
				<motion.div variants={itemAnimation}>
					<Text style={{ fontWeight: 600, fontSize: "1.15rem" }}>
						{item.name}
					</Text>
				</motion.div>
				<motion.div variants={itemAnimation}>
					<Text style={{ color: "#fff7", fontSize: ".95rem" }}>
						{item.jobPosition}
					</Text>
				</motion.div>
			</Box>
		</Flex>
		<motion.div variants={itemAnimation}>
			<Text mt={"1rem"} opacity={0.8}>
				{item.content}
			</Text>
		</motion.div>
	</motion.div>
);

export const Referencies: React.FC<{ open: boolean }> = ({ open }) => {
	const [delayOpen, setDelayOpen] = useState(open);

	useEffect(() => {
		if (open) {
			setDelayOpen(open);
		} else {
			setDelayOpen(open);
		}
	}, [open, setDelayOpen]);

	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
			className={`experience ${open && "open"}`}
		>
			<motion.div variants={itemAnimation}>
				<Text
					style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: ".5rem" }}
				>
					Personal References
				</Text>
			</motion.div>
			<div className="experience__content">
				<Grid>
					<Grid.Col span={12}>
						<motion.div variants={itemAnimation}>
							<ReferenceItem item={personalReferencesList[0]} open={open} />
						</motion.div>
					</Grid.Col>
					{delayOpen && (
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Grid>
								{personalReferencesList
									.filter((item, index) => index !== 0 && index % 2)
									.map((item, index) => (
										<Grid.Col key={item.name} span={12}>
											<motion.div variants={itemAnimation}>
												<ReferenceItem
													item={item}
													open={open}
													childrenPosition={!(index % 2) ? index : index + 1}
												/>
											</motion.div>
										</Grid.Col>
									))}
							</Grid>
						</Grid.Col>
					)}
					{delayOpen && (
						<Grid.Col span={{ base: 12, xs: 6 }}>
							<Grid>
								{personalReferencesList
									.filter((item, index) => index !== 0 && !(index % 2))
									.map((item, index) => (
										<Grid.Col key={item.name} span={12}>
											<motion.div variants={itemAnimation}>
												<ReferenceItem
													item={item}
													open={open}
													childrenPosition={index % 2 ? index : index + 1}
												/>
											</motion.div>
										</Grid.Col>
									))}
							</Grid>
						</Grid.Col>
					)}
				</Grid>
			</div>
		</motion.div>
	);
};
