import { PackageProps, Packages } from "./Packages";
import styles from "../../../styles/services/price.module.css";

const packages: PackageProps[] = [
	{
		icon: "/services/plan-basic.png",
		title: "Web Express",
		price: 180,
		description: "Ideal para negocios que solo necesitan presencia básica.",
		features: [
			"Landing Page simple",
			"Botón de contacto directo",
			"Mapa de ubicación",
			"Entrega en 2–3 días",
			"Diseño responsive",
		],
	},
	{
		icon: "/services/plan-basic.svg",
		title: "Web Esencial",
		description:
			"Perfecto para negocios que quieren una web profesional y completa.",
		price: 350,
		features: [
			"Landing Page + 2 secciones (Quiénes Somos, Servicios)",
			"Formulario de contacto",
			"Integración con redes sociales",
			"SEO básico",
			"Entrega en 5 días",
		],
	},
	{
		icon: "/services/plan-basic.svg",
		title: "Web Impacto Visual",
		description: "Para negocios que quieren destacar y convertir más.",
		price: 650,
		features: [
			"Todo lo anterior",
			"Animaciones suaves",
			"Galería de imágenes",
			"Testimonios visuales",
			"Diseño personalizado",
			"SEO avanzado",
			"Chat en vivo / WhatsApp",
			"Botón: Agendar llamada gratuita",
		],
	},
];

export const Price = () => {
	return (
		<div className={styles.price}>
			<h2>Flexible plans for every type of business</h2>
			<p className="text-[#b0b8c9]">
				Choose the package that best suits your needs. All include responsive
				design, basic optimization, and personalized support.
			</p>
			<Packages packages={packages} />
		</div>
	);
};
