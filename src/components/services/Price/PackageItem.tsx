import Image from "next/image";
import { PackageProps } from "./Packages";
import styles from "../../../styles/services/price.module.css";
import { Button } from "@mantine/core";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const PackageItem = ({
	title,
	description,
	price,
	// features,
	icon,
}: PackageProps) => {
	return (
		<div key={title} className={styles.packagesItem}>
			<GlowingEffect
				blur={5}
				borderWidth={4}
				spread={80}
				glow={true}
				disabled={false}
				proximity={65}
				inactiveZone={0.01}
				variant="white"
			/>
			<div className={styles.packagesItem_image}>
				<Image src={icon} alt={title} width={175} height={175} />
			</div>
			<div>
				<h3>{title}</h3>
				<p className={styles.packagesItem_price}>
					<span>Since</span> ${price}
				</p>
				<p>{description}</p>
			</div>
			<div className={styles.packagesItem_buttons}>
				<Button
					w={"100%"}
					style={{ padding: ".5rem", height: "2rem" }}
					className={`cta-btn secondary ${styles.packagesItem_button_movil}`}
				>
					See more
				</Button>
				<Button
					w={"100%"}
					style={{ padding: ".5rem", height: "2rem" }}
					className="cta-btn primary"
				>
					Choose plan
				</Button>
			</div>
		</div>
	);
};
