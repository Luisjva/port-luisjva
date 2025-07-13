"use client";

import { BenefitsItem } from "./BenefitsItem";
import styles from "../../../styles/services/benefits.module.css";

import { Carousel } from "@mantine/carousel";

export interface Benefit {
	icon: string;
	title: string;
	description: string;
}

const benefits: Benefit[] = [
	{
		icon: "⚡",
		title: "Entrega rápida",
		description:
			"Tu sitio web listo en pocos días, sin sacrificar calidad ni funcionalidad.",
	},
	{
		icon: "📱",
		title: "Diseño responsive",
		description:
			"Tu página se verá perfecta en celulares, tablets y computadoras.",
	},
	{
		icon: "🎯",
		title: "Enfoque en conversión",
		description:
			"Cada sección está pensada para atraer y convertir visitantes en clientes.",
	},
	{
		icon: "🧠",
		title: "Desarrollo inteligente",
		description:
			"Usamos herramientas modernas como Lovable y v0 para acelerar sin perder estilo.",
	},
	{
		icon: "💬",
		title: "Comunicación directa",
		description:
			"Te acompañamos en cada paso, desde la idea hasta la entrega final.",
	},
	{
		icon: "🏪",
		title: "Pensado para negocios locales",
		description:
			"Diseños adaptados a lo que tu comunidad necesita ver y entender.",
	},
];

export default function Benefits() {
	return (
		<section className={styles.benefits}>
			<div>
				<h2>¿Por qué elegirnos para crear tu página web?</h2>
				<p style={{ marginBottom: "2rem" }}>
					No solo diseñamos sitios web. Creamos experiencias digitales que
					conectan con tus clientes y hacen crecer tu negocio.
				</p>
				<div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-[1rem]">
					{benefits.map((b) => (
						<BenefitsItem key={b.title} {...b} />
					))}
				</div>
				<div className="grid grid-cols-1 sm:hidden">
					<Carousel
						slideSize="85%"
						emblaOptions={{
							loop: true,
							dragFree: false,
							align: "center",
						}}
					>
						{benefits.map((b) => (
							<Carousel.Slide key={b.title} style={{ padding: ".5rem" }}>
								<BenefitsItem {...b} />
							</Carousel.Slide>
						))}
					</Carousel>
				</div>
			</div>
		</section>
	);
}
