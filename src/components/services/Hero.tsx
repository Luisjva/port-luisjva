import styles from "../../styles/services/hero.module.css";
import { GlowingEffect } from "../ui/glowing-effect";

export const Hero = () => {
	return (
		<div className={styles.hero}>
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
			<div className={styles.heroContainer}>
				<GlowingEffect
					blur={3}
					borderWidth={3}
					spread={80}
					glow={true}
					disabled={false}
					proximity={100}
					inactiveZone={0.01}
					variant="white"
				/>
				<h1>Make your business stand out online</h1>
				<p>
					Transform your local business into a visible and trustworthy brand
					with a professional, fast-paced website designed to convert visitors
					into customers from the first click.
				</p>
				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<a href="#contact" className="cta-btn primary">
						Contact us
					</a>
					<a href="#packages" className="cta-btn secondary">
						View packages
					</a>
				</div>
			</div>
		</div>
	);
};
