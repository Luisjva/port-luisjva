import { Avatar, Box, Flex, Grid, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";
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
}> = ({ item, open }) => (
	<div
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
	</div>
);

export const Referencies: React.FC<{ open: boolean }> = ({ open }) => {
	return (
		<motion.div
			variants={containerWithDelay}
			initial="hidden"
			animate="visible"
			className={`experience ${open && "open"}`}
		>
			<motion.div variants={itemAnimation}>
				<Text style={{ fontWeight: 600, fontSize: "1.2rem" }}>
					Personal References
				</Text>
			</motion.div>
			<div className="experience__content">
				<Grid>
					<Grid.Col span={12}>
						<ReferenceItem item={personalReferencesList[0]} open={open} />
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Grid>
							{personalReferencesList
								.filter((item, index) => index !== 0 && index % 2)
								.map((item) => (
									<Grid.Col key={item.name} span={12}>
										<ReferenceItem item={item} open={open} />
									</Grid.Col>
								))}
						</Grid>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6 }}>
						<Grid>
							{personalReferencesList
								.filter((item, index) => index !== 0 && !(index % 2))
								.map((item) => (
									<Grid.Col key={item.name} span={12}>
										<ReferenceItem item={item} open={open} />
									</Grid.Col>
								))}
						</Grid>
					</Grid.Col>
				</Grid>
			</div>
		</motion.div>
	);
};
