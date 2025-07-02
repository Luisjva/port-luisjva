import {
	Badge,
	Button,
	Card,
	Group,
	Text,
	useMantineTheme,
	Center,
	Loader,
} from "@mantine/core";
import { motion } from "framer-motion"; // <-- ¡Aquí está!
import { useState } from "react";
import {
	container,
	itemAnimation,
} from "../../../helpers/motionAnimationContainer";

import "./cv.css";
import { TbDownload } from "react-icons/tb";

// Variante para el contenedor principal, ajustando el delayChildren
const containerWithDelay = {
	...container,
	visible: {
		...container.visible,
		transition: {
			...container.visible.transition,
			delayChildren: 0.8,
		},
	},
};

export const Cv: React.FC<{
	open: boolean;
}> = () => {
	const [isDownloading, setIsDownloading] = useState(false);
	const [downloadComplete, setDownloadComplete] = useState(false);
	const theme = useMantineTheme();

	const handleDownloadCV = () => {
		if (isDownloading || downloadComplete) return;

		setIsDownloading(true);
		const cvPath = "/Cv_Luis_Villega_ En.pdf";

		setTimeout(() => {
			const link = document.createElement("a");
			link.href = cvPath;
			link.download = "Luis_Villegas_CV.pdf";
			link.click();

			setIsDownloading(false);
			setDownloadComplete(true);

			setTimeout(() => setDownloadComplete(false), 2500);
		}, 1800);
	};

	return (
		<div className={`home__cv`} onClick={handleDownloadCV}>
			<Text fw={800} style={{ fontSize: "1.6rem", textAlign: "center" }}>
				Want to know more?{" "}
			</Text>

			<Text style={{ color: "#fffb", fontSize: "1.1rem", textAlign: "center" }}>
				Click to download my CV and discover how I can contribute to your team.
			</Text>

			<Center>
				{isDownloading ? (
					<Loader size={50} color="#fff" />
				) : (
					<TbDownload size={50} />
				)}
			</Center>
		</div>
	);
};
