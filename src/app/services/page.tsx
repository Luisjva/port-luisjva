import Benefits from "@/components/services/Benefits";
import CallToAction from "@/components/services/CallToAction";
import Footer from "@/components/services/Footer";
import { Hero } from "@/components/services/Hero";
import { Price } from "@/components/services/Price";
import { Testimonials } from "@/components/services/Testimonials";

export default function Services() {
	return (
		<>
			<Hero />
			<Benefits />
			<Price />
			<Testimonials />
			<CallToAction />
			<Footer />
		</>
	);
}
