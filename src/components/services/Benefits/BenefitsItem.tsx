import { GlowingEffect } from "@/components/ui/glowing-effect";
import styles from "../../../styles/services/benefits.module.css";
import { Benefit } from ".";

export const BenefitsItem = ({ icon, title, description }: Benefit) => {
	return (
		<div className={styles.benefitsContainer}>
			<GlowingEffect
				blur={5}
				borderWidth={2}
				spread={80}
				glow={true}
				disabled={false}
				proximity={65}
				inactiveZone={0.01}
				variant="white"
			/>
			<div>{icon}</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};
