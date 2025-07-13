import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
	const testimonials = [
		{
			quote:
				"Luis me entregó una página moderna y funcional en solo unos días. Ahora mis clientes pueden agendar desde el sitio. ¡Excelente trabajo!",
			name: "Carlos M.",
			stars: "⭐️⭐️⭐️⭐️⭐️",
			designation: "Barbería El Corte",
			src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote:
				"La web que me hizo Luis elevó la imagen de mi negocio. Recibo más pedidos desde que la lanzamos.",
			name: "Sofía R.",
			stars: "⭐️⭐️⭐️⭐️⭐️",
			designation: "Café Aroma Local",
			src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			quote:
				"No tenía página web y Luis me ayudó desde cero. Rápido, profesional y muy atento. Lo recomiendo totalmente.",
			name: "Javier T.",
			stars: "⭐️⭐️⭐️⭐️⭐️",
			designation: "Taller JT Motors",
			src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<div>
			<h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
				Lo que dicen nuestros clientes
			</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "0 2rem 3rem 2rem",
				}}
			>
				<AnimatedTestimonials testimonials={testimonials} />
			</div>
		</div>
	);
}
