import styles from "../../../styles/services/price.module.css";
import { PackageItem } from "./PackageItem";

interface PackagesProps {
	packages: PackageProps[];
}

export interface PackageProps {
	icon: string;
	title: string;
	price: number;
	description: React.ReactNode;
	features: string[];
}

export const Packages = ({ packages }: PackagesProps) => {
	return (
		<div>
			<div className={styles.packages}>
				<div className={styles.packagesItems}>
					{packages.map((item: PackageProps) => (
						<PackageItem key={item.title} {...item} />
					))}
				</div>
				<div className={styles.packagesItems_data}>
					<div></div>
				</div>
				<div className={styles.packagesItems_features}>
					<div className={styles.packagesItems}>
						{packages.map((item: PackageProps) => (
							<ul key={item.title}>
								{item.features.map((feature) => {
									return <li key={feature}>{feature}</li>;
								})}
							</ul>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
