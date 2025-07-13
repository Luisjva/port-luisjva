import "../../styles/services/callToAction.css";
import { GlowingEffect } from "../ui/glowing-effect";

export default function CallToAction() {
	return (
		<section className="cta-section">
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
			<div className="cta-container">
				<h2 className="cta-title">¿Listo para transformar tu negocio local?</h2>
				<p className="cta-subtitle">
					Solicita una auditoría gratuita y descubre cómo una página web moderna
					puede ayudarte a atraer más clientes y destacar en tu comunidad.
				</p>
				<div className="cta-buttons">
					<a href="#contacto" className="cta-btn primary">
						Solicitar auditoría gratuita
					</a>
					<a href="#paquetes" className="cta-btn secondary">
						Ver paquetes disponibles
					</a>
				</div>
				<p
					className="cta-subtitle"
					style={{ marginBottom: "0", marginTop: "1rem", fontSize: ".9rem" }}
				>
					Haz que tu negocio sea visible hoy mismo.
				</p>
			</div>
		</section>
	);
}
