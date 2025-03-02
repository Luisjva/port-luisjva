import { AboutMeFirstWorks } from "./AboutMeFirstWorks";
import { AboutMeHeader } from "./AboutMeHeader";
import { AboutMeMyBeginnings } from "./AboutMeMeginnings";

export const AboutMe = ({
	open,
	setCurrentContent,
}: {
	open: boolean;
	setCurrentContent: (key: string | null) => void;
}) => {
	return (
		<div className={`about-me ${open && "open"}`}>
			<AboutMeHeader open={open} />
			{open && (
				<div className="about-me__first-works">
					<AboutMeMyBeginnings />
					<AboutMeFirstWorks setCurrentContent={setCurrentContent} />
				</div>
			)}
		</div>
	);
};
